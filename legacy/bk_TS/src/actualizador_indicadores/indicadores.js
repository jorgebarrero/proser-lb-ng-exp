/*****
 *
 * CALCULOS DE INDICADORES
 *
 * Se recibe una petición del frontend que se almacena en un registro
 * de la tabla de indicadores y se actualizan los indicadores cada 20 segundos
 *
 */

 // Dependencias
const mysql = require('mysql');
const _ = require('lodash');
const fs = require('fs');
// const fetch = require("node-fetch");

// Calculos de columnas de llamadas
const indicadores = require('./funciones_indicadores');
const funciones_realtime = require('./../funciones/funciones_realtime');
const filtros = require('./../filtros/filtros_indicadores');

// Compartidos
const fecha = require('../utilitarios/fechas_utilitarios');
const conn = require('../conectores/conexiones');
const con_DAT = conn.con_DAT;

// Lectura de bases de datos
const readDB = require('./readDB');
const readCDR_clasif = readDB.readCDR_clasif;
const readAUDIT_clasif = readDB.readAUDIT_clasif;
const readPETICIONES = readDB.readPETICIONES;
const readRealTime = readDB.readRealTime;
const readAGENT_clasif = readDB.readAGENT_clasif;


function calcularINDICADORES ( fecha_inicio, fecha_final ) {

console.log('Calculando indicadores....');

/************************************************************************************************************
 * CONSTRUIR LOS QUERIES
 */
// @crear queries con datos basicos

const agentDelDia =
`SELECT * FROM dat_agent_clasif`;


const cdrDelDia =
`SELECT * FROM dat_cdr_clasif`;

const auditDelDia =
`SELECT * FROM dat_audit_clasif`;


// agregada la condicion para evitar calculos duplicados
const peticiones =
`SELECT DISTINCT clave_peticiones, sesion_peticiones, valor_peticiones, clasificacion_llamada, titulos, fecha_peticiones, usuario FROM dat_peticiones WHERE estatus_peticiones = 'A' `;

// @TODO: probar con fs
const url =
'/var/www/html/preports/mw_TR/public/data/realtime.json';
// 'http://10.30.4.55:3100/data/realtime.json';

// const url =
// fs.readFile('/var/www/html/preports/mw_TR/public/data/realtime.json', 'utf8', function (err, data) {

//   if (err) console.log(err);
//   obj = JSON.parse(data);

//   console.log('URL', url);
// });



/*************************************************************************************************************
 * INSERTAR EL RESULTADO
 */


const updateINDICADORES  = function( peticiones, cdr, audit, realtime_colas, realtime_agentes, agent ) {
  // Crear una promesa que borra todos los registros de la tabla dat_indicadores y la sustituye con calculos nuevos
  return new Promise(function (resolve, reject) {
    // Se conecta a la base de datos
    con_DAT.connect(function (err) {

      // Con la tabla de peticiones se crea un arreglo
      let result = peticiones;
      let cantidad_peticiones = peticiones.length;

     // console.log('Longitud Peticiones', cantidad_peticiones);

      // Se crea un arreglo que se insertará en la tabla con los nuevos calculos
      let registros = [];

      // Se evalua para cada peticion
      for (var i = 0; i < cantidad_peticiones; i++) {

        // console.log('registro', i, 'USUARIO', result[i].usuario, '---------------------------------------------');

        // Extraer las peticiones del registro para usarlo como valor del filtro
        let string_valor_peticiones = result[i].valor_peticiones;
        let valor_peticiones = JSON.parse(string_valor_peticiones);

        // aplicar el filtro al cdr
        let cdr_filtrado = filtros.FILTRO_cdr_filtrado(cdr, valor_peticiones);
        // Crear arreglos con las colas y agentes que aplican segun cdr filtrado
        let colas_involucradas = filtros.FILTRO_colas_involucradas(cdr_filtrado);
        let agentes_involucrados = filtros.FILTRO_agentes_involucrados(cdr_filtrado);

        // Filtrar el audit segun agentes filtrados
        let audit_filtrado = filtros.FILTRO_audit_filtrado(audit, agentes_involucrados);
        let agent_filtrado = filtros.FILTRO_agent_filtrado(agent, agentes_involucrados);

        // Filtrar el realtime segun colas y agentes que aplican
        let realtime_colas_filtrado = filtros.FILTRO_realtime_colas_filtrado(realtime_colas, colas_involucradas);
        let realtime_agentes_filtrado = filtros.FILTRO_realtime_agentes_filtrado(realtime_agentes, agentes_involucrados);

        let cdr_filtrado_colas_involucradas = filtros.FILTRO_cdr_filtrado_colas_involucradas(cdr,colas_involucradas)

        //console.log(realtime_agentes_filtrado);

        // Mostrar en consola la diferencia entre data total y data filtrada
        // console.log('cdr', cdr.length, 'cdr_filtrado', cdr_filtrado.length);
        // console.log('colas_que_aplican', colas_que_aplican.length);
        // console.log('agentes_que_aplican', agentes_que_aplican.length);

        // console.log('audit', audit.length, 'audit_filtrado', audit_filtrado.length);

        // Calcular los indicadores para cada registro usando solo la data filtrada que aplica
        registros.push([

          clave_peticiones =  result[i].clave_peticiones,
          valor_peticiones =  result[i].valor_peticiones,
          fecha_peticiones =  result[i].fecha_peticiones,
          llamadas_recibidas =  indicadores.IND_llamadas_recibidas(cdr_filtrado),
          llamadas_abandonadas =  indicadores.IND_llamadas_abandonadas(cdr_filtrado),
          llamadas_atendidas =  indicadores.IND_llamadas_atendidas(cdr_filtrado),
          llamadas_cortas =  indicadores.IND_llamadas_cortas(cdr_filtrado),
          llamadas_en_cola =  indicadores.IND_llamadas_en_cola(realtime_colas_filtrado),
          llamadas_antes_de_20 = indicadores.IND_llamadas_antes_de_20(cdr_filtrado),
          tiempo_de_operacion = indicadores.IND_tiempo_de_operacion(cdr_filtrado),
          tiempo_cola_agente =  indicadores.IND_tiempo_cola_agente(cdr_filtrado),
          nivel_de_servicio = indicadores.IND_nivel_de_servicio(llamadas_antes_de_20, llamadas_recibidas),
          nivel_de_atencion =  indicadores.IND_nivel_de_atencion(llamadas_atendidas, llamadas_recibidas),
          nivel_de_abandono =  indicadores.IND_nivel_de_abandono(llamadas_abandonadas, llamadas_recibidas),
          tmo_entrantes =  indicadores.IND_tmo_entrantes(tiempo_de_operacion, llamadas_atendidas),
          asa =  indicadores.IND_asa(tiempo_cola_agente, llamadas_atendidas),

          agentes_conectados_ahora = indicadores.IND_agentes_conectados_ahora(agent_filtrado),
          agentes_conectados_en_el_dia =  indicadores.IND_agentes_conectados_en_el_dia (agent_filtrado),


          agentes_ocupados =   indicadores.IND_agentes_ocupados(agent_filtrado),
          agentes_auxiliares_no_productivos =  indicadores.IND_agentes_auxiliares_no_productivos(agent_filtrado),
          agentes_auxiliares_productivos = indicadores.IND_agentes_auxiliares_productivos(agent_filtrado),
          agentes_disponibles = indicadores.IND_agentes_disponibles(agent_filtrado) ,

          lista_agentes_conectados_ahora = indicadores.IND_lista_agentes_conectados_ahora(agent_filtrado),
          lista_agentes_conectados_en_el_dia =  indicadores.IND_lista_agentes_conectados_en_el_dia(agent_filtrado),

          lista_auxiliares_ahora = indicadores.IND_lista_auxiliares_no_productivos(agent_filtrado),

          lista_auxiliares_productivos = indicadores.IND_lista_auxiliares_productivos(agent_filtrado),
          lista_auxiliares_no_productivos =  indicadores.IND_lista_auxiliares_no_productivos(agent_filtrado),


          llamadas_realizadas =  indicadores.IND_llamadas_realizadas(cdr_filtrado),
          llamadas_fallidas =  indicadores.IND_llamadas_fallidas(cdr_filtrado),
          llamadas_contestadas =  indicadores.IND_llamadas_contestadas(cdr_filtrado),
          llamadas_efectivas = indicadores.IND_llamadas_efectivas(cdr_filtrado),
          llamadas_colgadas =  indicadores.IND_llamadas_colgadas(cdr_filtrado),


          contactabilidad = indicadores.IND_contactabilidad(llamadas_contestadas, llamadas_realizadas),
          efectividad =  indicadores.IND_efectividad(llamadas_efectivas, llamadas_contestadas),
          tmo_manuales = indicadores.IND_tmo_manuales(tiempo_de_operacion, llamadas_contestadas),


          marcador_bbdd =  1, // indicadores.IND_marcador_bbdd(cdr),
          marcador_recorridas =  1, // indicadores.IND_marcador_recorridas(cdr),
          marcador_faltantes =  1, // indicadores.IND_marcador_faltantes(cdr),
          marcador_vuelta =  1, // indicadores.IND_marcador_vuelta(cdr),
          tmo_automaticas =  1, // indicadores.IND_tmo_automaticas(cdr),
          tiempo_espera =  1, // indicadores.IND_tiempo_espera(cdr),
          tiempo_hold =  1, // indicadores.IND_tiempo_hold(cdr),
          tiempo_de_total =  1, // indicadores.IND_tiempo_de_total(cdr),
          tiempo_login =  1, // indicadores.IND_tiempo_login(cdr),
          tiempo_auxiliar =  1, // indicadores.IND_tiempo_auxiliar(cdr),
          tiempo_conversado =  1, // indicadores.IND_tiempo_conversado(cdr),
          tiempo_disponible =  1, // indicadores.IND_tiempo_disponible(cdr),
          utilizacion =  1, // indicadores.IND_utilizacion(cdr),



          // AGREGAR
          // tiempo_after_call
          // cantidad_not_ready
          // tiempo_not_ready
          // llamadas_on_hold
          // llamadas_internas
          // tiempo_llamadas_internas
          // tiempo_atencion (tiempo_operacion - tiempo_hold)
          // nivel_servicio_80_20
          // max_agentes_conectados
          // min_agentes_conectados
          // prom_agentes_conectados
          // max_agentes_disponibles
          // min_agentes_disponibles
          // prom_agentes_disponibles
          // tiempo_ocupacion
          // porc_ocupacion
          // intentos_fallidos (marcador)


          // AUXILIARES audit
          // nombre_auxilaires
          // tipo_auxiliares
          // tiempo_auxiliares
          // tiempo_login
          // porc_auxiliares

          // CONEXIONES audit
          // inicio_conexion
          // fin_conexion
          // duracion

          // LLAMADAS cdr
          // duracion
          // asa
          // resultado
          //

          chk_utilizado =  1,
          estatus_dat_llamadas =  'A',
          usuario =  result[i].usuario,
          createdAt = indicadores.IND_createdAt(),
          updatedAt = indicadores.IND_updatedAt(),


        ]);


        if( clave_peticiones === 'Entrante' && (llamadas_abandonadas + llamadas_atendidas) !== llamadas_recibidas ) {
          con_DAT.query("TRUNCATE TABLE `dat_cdr_clasif`", function (err, result, fields) {
            console.log('Eliminada la tabla...');
            if (err) {console.log(err)}
          });
        }

      }




//@ TODO validar que la fecha minima borre los archivos que no corresponden

      con_DAT.query("TRUNCATE TABLE `dat_indicadores`", function (err, result, fields) {
        console.log('Eliminada la tabla...');
        if (err) {console.log(err)}
      });

      lista_agentes_conectados_ahora =1,
      lista_agentes_conectados_en_el_dia = 1,

/*
      (clave_peticiones,valor_peticiones,fecha_peticiones,llamadas_recibidas,llamadas_abandonadas,llamadas_atendidas,llamadas_cortas,llamadas_en_cola,llamadas_antes_de_20,tiempo_de_operacion,tiempo_cola_agente,nivel_de_servicio,nivel_de_atencion,nivel_de_abandono,tmo_entrantes,asa, agentes_conectados_ahora, agentes_conectados_en_el_dia, agentes_ocupados, agentes_auxiliares_no_productivos, agentes_auxiliares_productivos, agentes_disponibles, lista_agentes_conectados_ahora, lista_agentes_conectados_en_el_dia, lista_auxiliares_ahora, lista_auxiliares_productivos,lista_auxiliares_no_productivos,llamadas_realizadas,llamadas_fallidas,llamadas_contestadas,llamadas_efectivas,llamadas_colgadas,  contactabilidad,efectividad,tmo_manuales, marcador_bbdd,marcador_recorridas,marcador_faltantes,marcador_vuelta,tmo_automaticas,tiempo_espera,tiempo_hold,tiempo_de_total,tiempo_login,tiempo_auxiliar,tiempo_conversado,tiempo_disponible,utilizacion,chk_utilizado,estatus_indicadores,usuario,createdAt,updatedAt)
*/
      con_DAT.query("INSERT INTO dat_indicadores (clave_peticiones,valor_peticiones,fecha_peticiones,llamadas_recibidas,llamadas_abandonadas,llamadas_atendidas,llamadas_cortas,llamadas_en_cola,llamadas_antes_de_20,tiempo_de_operacion,tiempo_cola_agente,nivel_de_servicio,nivel_de_atencion,nivel_de_abandono,tmo_entrantes,asa, agentes_conectados_ahora, agentes_conectados_en_el_dia, agentes_ocupados, agentes_auxiliares_no_productivos, agentes_auxiliares_productivos, agentes_disponibles, lista_agentes_conectados_ahora, lista_agentes_conectados_en_el_dia, lista_auxiliares_ahora, lista_auxiliares_productivos,lista_auxiliares_no_productivos,llamadas_realizadas,llamadas_fallidas,llamadas_contestadas,llamadas_efectivas,llamadas_colgadas,  contactabilidad,efectividad,tmo_manuales, marcador_bbdd,marcador_recorridas,marcador_faltantes,marcador_vuelta,tmo_automaticas,tiempo_espera,tiempo_hold,tiempo_de_total,tiempo_login,tiempo_auxiliar,tiempo_conversado,tiempo_disponible,utilizacion,chk_utilizado,estatus_indicadores,usuario,createdAt,updatedAt) values ?", [registros], function (err, result, fields) {

        if (err) {console.log(err)}
        resolve();
        console.log('Actualizados los indicadores');
      });

    });
  });
}





/*************************************************************************************************************
 * EJECUTAR LAS PROMESAS
 */
/*
readCDR_clasif(cdrDelDia).then(function (res) {
  console.log('cdr', res.length);

  readAUDIT_clasif(auditDelDia).then(function (res) {
    console.log('audit', res.length);

    readPETICIONES(peticiones).then(function (res) {
      console.log('peticiones', res.length);
    });
  });
});

*/



Promise.all([
  readPETICIONES(peticiones),
  readCDR_clasif(cdrDelDia),
  readAUDIT_clasif(auditDelDia),
  readRealTime(url),
  readAGENT_clasif(agentDelDia),
  ])
  .then(function (res) {

    let peticiones = res[0];
    let cdr = res[1];
    let audit = res[2];
    let realtime = res[3];
    let agent = res[4];

    let realtime_colas = funciones_realtime.crearColasRealtime(realtime)
    let realtime_agentes = funciones_realtime.crearAgentesRealtime(realtime);

    // console.log('Peticiones', peticiones);

    console.log('peticiones', peticiones.length);
    console.log('cdr', cdr.length);
    console.log('audit', audit.length);
    console.log('realtime', realtime.length);
    console.log('agent', agent.length);

    // console.log('REALTIME', realtime[0]);
    // console.log('realtime_colas', realtime_colas);
    // console.log('realtime_agentes', realtime_agentes);



    //@TODO: validar que hay datos
    if( true ){
      updateINDICADORES( peticiones, cdr, audit, realtime_colas, realtime_agentes, agent )
      .then(function(indicadoresResult){

        // console.log('cdr', cdr);
        // console.log('audit',audit);
        // console.log('peticiones', peticiones);

        console.log(fecha.standardDate(parseInt((new Date().getTime() / 1000).toFixed(0))));
      });
    }

})
.catch(error => {
  console.log(error);
});;


}

// Exportar para uso

module.exports = {
  calcularINDICADORES
}
