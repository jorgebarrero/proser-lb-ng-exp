//* Conectores
const pool = require('../conectores/pool');
const poolDat = pool.poolDat;
const poolDat_M = pool.poolDat_M;
const poolCdr = pool.poolCdr;
const poolQue = pool.poolQue;
const poolCall = pool.poolCall;

//* Funciones
const fun = require('./aar_functions.js');
const fechas = require('./../funciones/fechas_utilitarios');
const fs = require('fs');

//* Dependencies
const moment = require('moment');

// Escribir si hay data nueva
// main_variables, audit, cdr, agentsClasif, auxiliares_aux, fecha_inicio, fecha_final
//main_variables, audit, cdr, agentsClasif, auxiliares_aux, fecha_min, fecha_max
function escribirAuditBase(main_variables, audit, cdr, agentsClasif, auxiliares, fecha_min, fecha_max, realtime_agentes) {

  // CREAR VARIABLES DEL OBJETO DEL PARAMETRO
  const fecha_inicio = main_variables.fecha_inicio;
  const fecha_final = main_variables.fecha_final;
  const fecha_consola = main_variables.fecha_consola;

  const cdr_table = main_variables.cdr_table;
  const personas_table = main_variables.personas_table;
  const opciones = main_variables.opciones;


  console.log('Variables \n', fecha_inicio, fecha_final, fecha_consola, personas_table, cdr_table, opciones);


return new Promise(function (resolve, reject) {




    let result = audit;
    let myaudit = audit;
    let main = agentsClasif;
    let auxiliares_aux = auxiliares;
    let cdr_aux = cdr;

    let registros = [];
    let record;
    let recordData;
    let recordFields;

    let temp = fecha_inicio.substring(0, 10);
    // let time_string = temp.replace(/-/g, '');
    // let prefijo_id = (time_string * 10000) + 1;

console.log('AGENTES-AUXILIAR', main.length);
console.log('CDR-AUXILIAR', cdr_aux.length);
console.log('AUDIT-AUXILIAR', audit.length);
// console.log('AGENTES', agentsClasif[0]);
// console.log(auxiliares_aux);

    for (var i = 0; i < main.length; i++) {

      // console.log('auxiliares_aux for i: \n',  auxiliares_aux);

      //* VARIABLE
      __PERSONAS__ = 1;

      datetime_init = moment(fecha_inicio).format('YYYY-MM-DD HH:mm:ss') ;


      __CLASIF_AGENTES__ = 1;
      id_inv_agentes = main[i].id_inv_agentes;
      id_personas = main[i].id_inv_agentes;
      nombre_agentes = main[i].nombre_agentes;
      numero_agentes = main[i].numero_agentes;
      tipo_agentes = main[i].tipo_agentes;
      doc_ident_agentes = main[i].doc_ident_agentes;
      doc_complementario_agentes = main[i].doc_complementario_agentes;

      __CLASIF_SUPERVISORES__ = 1;
      id_inv_supervisores = main[i].id_inv_supervisores;
      nombre_supervisores = main[i].nombre_supervisores;

      __CLASIF_SUPLENTES__ = 1;
      id_inv_suplentes = main[i].id_inv_suplentes;
      nombre_suplentes = main[i].nombre_suplentes;

      __HORARIOS__  = 1;
      id_inv_horarios = main[i].id_inv_horarios;
      nombre_horarios = main[i].nombre_horarios;
      horarios_inicio = main[i].horarios_inicio;
      horarios_final = main[i].horarios_final;
      segundos_horario_inicio = main[i].segundos_horario_inicio;
      segundos_horario_final =  main[i].segundos_horario_final;

      __CLASIF_FECHAS__  = 1;
      fecha = fechas.date_text(datetime_init);
      date_text = fechas.date_text(datetime_init);
      day_week_number = fechas.week_day_number(datetime_init);
     
      ___REALTIME___  = 1;
      estado_realtime = fun.estado_realtime(numero_agentes, realtime_agentes);



      fecha_actual = moment().format('YYYY-MM-DD');
      hora_actual = new moment().format("HH:mm:ss");
      segundos_hora_actual = fechas.hora_a_segundos(hora_actual);
      // duracion = segundos_final > 0? fechas.hora_a_segundos(duration): segundos_hora_actual - segundos_inicio;

      __CONEXIONES__ = 1;
      conexiones = fun.conexiones(id_inv_agentes, audit);
      tiempo_conexiones = fun.tiempo_conexiones(id_inv_agentes, audit);
      resumen_conexiones = fun.resumen_conexiones(id_inv_agentes, myaudit);
      estado_conexiones_actual = fun.estado_conexiones_actual(id_inv_agentes, myaudit);
      id_conexiones_actual = fun.id_conexiones_actual(id_inv_agentes, myaudit);
      nombre_conexiones_actual = fun.nombre_conexiones_actual(id_inv_agentes, myaudit);
      tiempo_conexiones_actual = fun.tiempo_conexiones_actual(id_inv_agentes, myaudit);

      __AUXILIARES__ = 1;
      id_auxiliares = fun.auxiliares(id_inv_agentes, audit);
      nombre_auxiliares = fun.nombre_auxiliares(id_inv_agentes, audit);
      tiempo_auxiliares = fun.tiempo_auxiliares(id_inv_agentes, audit);
      resumen_auxiliares = fun.resumen_auxiliares(id_inv_agentes, audit);
      estado_auxiliares_actual = fun.estado_auxiliares_actual(id_inv_agentes, audit);
      id_auxiliares_actual = fun.id_auxiliares_actual(id_inv_agentes, myaudit);
      nombre_auxiliares_actual = fun.nombre_auxiliares_actual(id_inv_agentes, myaudit);
      tiempo_auxiliares_actual = fun.tiempo_auxiliares_actual(id_inv_agentes, myaudit);

      __ASIGNACIONES__  = 1;
      id_asignaciones = fun.asignaciones(id_inv_agentes, audit);
      nombre_asignaciones = fun.nombre_asignaciones(id_inv_agentes, audit);
      tiempo_asignaciones = fun.tiempo_asignaciones(id_inv_agentes, audit);
      resumen_asignaciones = fun.resumen_asignaciones(id_inv_agentes, audit);
      estado_asignaciones_actual = fun.estado_asignaciones_actual(id_inv_agentes, audit);
      id_asignaciones_actual = fun.id_asignaciones_actual(id_inv_agentes, myaudit);
      nombre_asignaciones_actual = fun.nombre_asignaciones_actual(id_inv_agentes, myaudit);
      tiempo_asignaciones_actual = fun.tiempo_asignaciones_actual(id_inv_agentes, myaudit);


      __CONTEOS__ = 1;
      aparece_cola = fun.aparece_cola(estado_realtime);

      aparece_logueado = fun.aparece_logueado(conexiones, aparece_cola);

      aparece_conectado = fun.aparece_conectado(estado_conexiones_actual);
      aparece_auxiliar = fun.aparece_auxiliar(estado_auxiliares_actual);
      aparece_asignado = fun.aparece_asignado(estado_asignaciones_actual);

      aparece_ocupado = fun.aparece_ocupado(aparece_conectado, estado_realtime);
      aparece_disponible = fun.aparece_disponible(aparece_conectado, aparece_auxiliar, aparece_asignado, estado_realtime); 
      aparece_no_disponible = fun.aparece_no_disponible(aparece_conectado, estado_realtime);

      CLASIF_COLAS__  = 1;
      colas_cdr = fun.colas_cdr(id_inv_agentes, cdr_aux);
      id_inv_colas = fun.id_inv_colas(id_inv_agentes, cdr_aux);
      numero_colas = fun.numero_colas(id_inv_agentes, cdr_aux);

      __CLASIF_CLIENTES__ = 1;
      clientes_cdr = fun.clientes_cdr(id_inv_agentes, cdr_aux);
      id_inv_clientes = fun.id_inv_clientes(id_inv_agentes, cdr_aux);

      __CLASIF_SERVICIOS__ = 1;
      servicios_cdr = fun.servicios_cdr(id_inv_agentes, cdr_aux);
      id_inv_servicios = fun.id_inv_servicios(id_inv_agentes, cdr_aux);

      __CLASIF_CAMPANAS__ = 1;
      campanas_cdr = fun.campanas_cdr(id_inv_agentes, cdr_aux);
      id_inv_campanas = fun.id_inv_campanas(id_inv_agentes, cdr_aux);

      estado_actual = 
      fun.estado_actual(estado_realtime, estado_conexiones_actual, estado_auxiliares_actual, estado_asignaciones_actual,tiempo_conexiones);


      __LLAMADAS_CDR__ = 1;
      llamadas_entrantes = fun.llamadas_entrantes ( id_inv_agentes, cdr_aux );
      llamadas_automaticas = fun.llamadas_automaticas ( id_inv_agentes, cdr_aux );
      llamadas_salientes = fun.llamadas_salientes ( id_inv_agentes, cdr_aux );
      llamadas_internas = fun.llamadas_internas ( id_inv_agentes, cdr_aux );

/**************************************************************** */
      record = {

        __PERSONAS__: 1,
        datetime_init,

        __CLASIF_AGENTES__: 1,
        id_inv_agentes,
        id_personas,
        nombre_agentes,
        numero_agentes,
        tipo_agentes,

        __CLASIF_SUPERVISORES__: 1,
        id_inv_supervisores,
        nombre_supervisores,

        __CLASIF_SUPLENTES__: 1,
        id_inv_suplentes,
        nombre_suplentes,

        __HORARIOS__: 1,
        id_inv_horarios,
        nombre_horarios,
        horarios_inicio,
        horarios_final,
        segundos_horario_inicio,
        segundos_horario_final,
        // diferencia_ini_fin,

        __CLASIF_FECHAS__: 1,
        fecha,
        date_text,
        day_week_number,

        ___REALTIME___: 1,
        estado_realtime,

        estado_actual,
        fecha_actual,
        hora_actual,
        segundos_hora_actual,
        // duracion,
        // segundos_inicio,

         __CONEXIONES__: 1,
        conexiones,
        tiempo_conexiones,
        resumen_conexiones,
        estado_conexiones_actual,
        id_conexiones_actual,
        nombre_conexiones_actual,
        tiempo_conexiones_actual,

        __AUXILIARES__: 1,
        id_auxiliares,
        nombre_auxiliares,
        tiempo_auxiliares,
        resumen_auxiliares,
        estado_auxiliares_actual,
        id_auxiliares_actual,
        nombre_auxiliares_actual,
        tiempo_auxiliares_actual,

        __ASIGNACIONES__: 1,
        id_asignaciones,
        nombre_asignaciones,
        tiempo_asignaciones,
        resumen_asignaciones,
        estado_asignaciones_actual,
        id_asignaciones_actual,
        nombre_asignaciones_actual,
        tiempo_asignaciones_actual,


        __CONTEOS__,
        aparece_cola,

        aparece_logueado,

        aparece_conectado,
        aparece_auxiliar,
        aparece_asignado,

        aparece_ocupado,
        aparece_disponible,
        aparece_no_disponible,


        __CLASIF_COLAS__: 1,
        colas_cdr,
        id_inv_colas,
        numero_colas,

        __CLASIF_CLIENTES__: 1,
        clientes_cdr,
        id_inv_clientes,

        __CLASIF_SERVICIOS__: 1,
        servicios_cdr,
        id_inv_servicios,

        __CLASIF_CAMPANAS__: 1,
        campanas_cdr,
        id_inv_campanas,


        __LLAMADAS_CDR__,
        llamadas_entrantes,
        llamadas_automaticas,
        llamadas_salientes,
        llamadas_internas,


        __REGISTRO__:  1,
        chk_utilizado:  1,
        estatus:  1,
        usuario: 'SYSTEM',
        createdAt: fechas.unixDate(new Date()),
        updatedAt: fechas.unixDate(new Date()),
      }


      recordData = Object.values(record);
      recordFields = Object.keys(record);
      registros.push(recordData);

      }


    // LISTA DE CAMPOS PARA INSERTAR
    let campos;
    if (recordFields) {
      campos = JSON.stringify(recordFields)
      .replace(/\"/g, ' ')
      .replace('[', '')
      .replace(']', '')
    }

    // console.log(JSON.stringify(campos));
    // console.log(JSON.stringify(registros));



    if (opciones === 'diario' && campos)  {
      // poolDat_M.query(` TRUNCATE TABLE ${personas_table}`, function (err, result, fields) {
      //   console.log(`--------- BORRANDO DATA ANTERIOR -------------`);
      //   console.log(`Eliminada la data en ${personas_table}`);
      //   if (err) {
      //     console.log(err)
      //   }
      // });

      poolDat_M.query(`
      TRUNCATE TABLE ${personas_table};
      INSERT INTO ${personas_table} (${campos}) values ?`,
      [registros],
      function (err, result, fields) {
        console.log(`--------- INSERTANDO DATA NUEVA -------------`);
        resolve(salir(err, personas_table,));
        return
      });

    }

    if (opciones === 'historico' && campos )  {


      // poolDat_M.query(` DELETE FROM ${personas_table} WHERE date_text = '${fecha_consola}'`, function (err, result, fields) {
      //   console.log(`--------- BORRANDO DATA ANTERIOR HISTORICA------------- ${fecha_consola}`);
      //   console.log(`Eliminada la data en ${personas_table}`);
      //   if (err) {
      //     console.log(err)
      //   }
      // });

      poolDat_M.query(`
      DELETE FROM ${personas_table} WHERE date_text = '${fecha_consola}';
      INSERT INTO ${personas_table} (${campos}) values ?`,
      [registros],
      function (err, result, fields) {
        console.log(`--------- INSERTANDO DATA NUEVA HISTORICA-------------`);
        resolve(salir(err, personas_table,'historico'));
        return
      });

      console.log('TERMINADO');

    }

    // console.log(time_string);


})
.catch( err => {
  console.log('Error en promesa ', err);
  process.exit();
});


function salir(err, tabla, final) {
  console.log(`Insertada exitosamente la data en ${tabla}`);
  if (final) {
    process.exit();
  }
  if (err) {
    // console.log('\033c'); //clear screen
    console.log('FIN x error', err);
    console.log(err);
  }


  if (opciones === 'historico') {
    process.exit();
  }
}


}

/*********************************************** */
module.exports = {
  escribirAuditBase,
}