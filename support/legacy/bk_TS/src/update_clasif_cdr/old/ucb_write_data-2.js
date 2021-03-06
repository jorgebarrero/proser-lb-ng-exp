// Conectores
const pool = require('../conectores/pool');
const pool_DAT = pool.pool_DAT;
const pool_CDR = pool.pool_CDR;
const pool_QUE = pool.pool_QUE;
const pool_CALL = pool.pool_CALL;

// Funciones
const fun = require('./ucb_functions.js');
const fechas = require('./../funciones/fechas_utilitarios');

// Escribir si hay data nueva
function escribirCdrBase(cdr_diario, cdr, queLog, agentsClasif, queuesClasif, fecha_min, fecha_max) {

  // CREAR VARIABLES DEL OBJETO DEL PARAMETRO
  const fecha_inicio = cdr_diario.fecha_inicio;
  const fecha_final = cdr_diario.fecha_final;

  const cdr_table = cdr_diario.cdr_table;
  const opciones = cdr_diario.opciones;




return new Promise(function (resolve, reject) {



    let result = cdr;
    let registros = [];
    let record;
    let recordData;
    let recordFields;

    let temp = fecha_inicio.substring(0, 10);
    let time_string = temp.replace(/-/g, '');
    let prefijo_id = (time_string * 10000) + 1;


    for (var i = 0; i < result.length; i++) {

      record = {
        // ___CDR___:  1,
        calldate:  result[i].calldate,
        clid:  result[i].clid,
        src:  result[i].src,
        dst:  result[i].dst,
        dcontext:  result[i].dcontext,
        channel:  result[i].channel,
        dstchannel:  result[i].dstchannel,
        lastapp:  result[i].lastapp,
        lastdata:  result[i].lastdata,
        duration:  result[i].duration,
        billsec:  result[i].billsec,
        disposition:  result[i].disposition,
        amaflags:  result[i].amaflags,
        accountcode:  result[i].accountcode,
        uniqueid:  result[i].uniqueid,
        userfield:  result[i].userfield,
        recordingfile:  result[i].recordingfile,
        cnum:  result[i].cnum,
        cnam:  result[i].cnam,
        outbound_cnum:  result[i].outbound_cnum,
        outbound_cnam:  result[i].outbound_cnam,
        dst_cnam:  result[i].dst_cnam,
        did:  result[i].did,
        id:  result[i].id,

        // ___DATA___:  1,
        // id_global:  1,
        // id_dat_llamadas:  1,
        // id_secuencia_registros:  1,

        // __CLASIFICACION_FECHA__:  1,
        // date_text:  1,
        // day_week_number:  1,
        // segundo_del_dia:  1,

        // ___CALCULOS_INTERMEDIOS___:  1,
        // largo_src:  fun.largo_src(src),
        // largo_dst:  fun.largo_dst(dst),
        // int_ext:  fun.int_ext(src, dst),
        // sal_ent:  fun.sal_ent(src, dst, int_ext, lastapp ),
        // sal_ent_vacia:  fun.sal_ent_vacia( sal_ent, src ),
        // saliente_entrante:  fun.saliente_entrante( sal_ent_vacia, lastapp ),
        // productiva:  fun.productiva( sal_ent, dst, src ),
        // llamada_produccion:  fun.llamada_produccion( sal_ent_vacia, productiva ),
        // ext_ent_larga:  fun.ext_ent_larga( sal_ent, dstchannel ),
        // ext_ent:  fun.ext_ent( ext_ent_larga, dstchannel ),
        // ext_sal:  fun.ext_sal( sal_ent, src ),

        // __COLA_EXTENSION__:  1,
        // llamada_cola:  fun.llamada_cola( lastapp, saliente_entrante, llamada_produccion, dst ),
        // llamada_extension:  fun.llamada_extension( ext_ent, ext_sal, dstchannel ),
        // numero_telefonico:  fun.numero_telefonico( sal_ent_vacia, dst, src ),

        // __CLASIF_CDR__:  1,
        // __COLAS__:  1,
        // id_inv_colas:  1,
        // nombre_colas:  1,
        // tipo_colas:  1,
        // __CLIENTES__:  1,
        // id_inv_clientes:  1,
        // nombre_clientes:  1,
        // __SERVICIOS__:  1,
        // id_inv_servicios:  1,
        // nombre_servicios:  1,
        // __CAMPANAS__:  1,
        // id_inv_campanas:  1,
        // nombre_campanas:  1,
        // tiempo_after_call:  1,
        // __AGENTES__:  1,
        // id_inv_agentes:  1,
        // nombre_agentes:  1,
        // __SUPERVISORES__:  1,
        // id_inv_supervisores:  1,
        // nombre_supervisores:  1,
        // __SUPLENTES__:  1,
        // id_inv_suplentes:  1,
        // nombre_suplentes:  1,
        // __HORARIOS__:  1,
        // id_inv_horarios:  1,
        // nombre_horarios:  1,
        // __ESCALAS__:  1,
        // id_inv_escalas:  1,
        // nombre_escalas:  1,
        // rojo:  1,
        // amarillo:  1,
        // verde:  1,
        // azul:  1,

        // __CLASIF_CDR__:  1,
        // colas_cdr:  fun.colas_cdr( llamada_cola, queuesClasif ),
        // id_inv_colas:  fun.id_inv_colas( llamada_cola, queuesClasif ),
        // tipo_colas:  fun.tipo_colas( llamada_cola, queuesClasif ),
        // clientes_cdr:  fun.clientes_cdr( llamada_cola, queuesClasif ),
        // id_inv_clientes:  fun.id_inv_clientes( llamada_cola, queuesClasif ),
        // servicios_cdr:  fun.servicios_cdr( llamada_cola, queuesClasif ),
        // id_inv_servicios:  fun.id_inv_servicios( llamada_cola, queuesClasif ),
        // campanas_cdr:  fun.campanas_cdr( llamada_cola, queuesClasif ),
        // id_inv_campanas:  fun.id_inv_campanas( llamada_cola, queuesClasif ),

        // agentes_cdr:  1,
        // id_inv_agentes:  1,
        // supervisores_cdr:  1,
        // id_inv_supervisores:  1,
        // suplentes_cdr:  1,
        // id_inv_supervisores_suplente:  1,

        // horario_cdr:  1,
        // id_inv_horarios:  1,

        // __DATA_QLOG__:  1,
        // ivroption_time:  1,
        // enterqueue_time:  1,
        // connect_time:  1,
        // completecaller_time:  1,
        // completeagent_time:  1,
        // abandon_time:  1,
        // complete_time:  1,

        // __CALCULOS_TIEMPOS__:  1,
        // tiempo_ivr_cola:  1,
        // tiempo_cola_agente:  1,
        // tiempo_agente_finalizacion:  1,
        // tiempo_llamante_abandono:  1,
        // tiempo_espera:  1,
        // tiempo_hold:  1,
        // tiempo_de_operacion:  1,
        // tiempo_conversado:  1,

        // __RESULTADO_LLAMADA__:  1,
        // colgado_por:  1,
        // colgado_agente:  1,
        // result_qlog:  1,
        // result_qlog_time:  1,
        // resultado:  1,

        // __CLASIFICACION_LLAMADA__:  1,
        // llamada_clasificacion:   fun.llamada_clasificacion( sal_ent_vacia, tipo_colas, llamada_cola, llamada_produccion ),
        // llamada_productiva:   fun.llamada_productiva( llamada_produccion ),
        // llamada_operativa:   fun.llamada_operativa( llamada_produccion ),
        // llamada_interna:   fun.llamada_interna( llamada_clasificacion ),
        // llamada_entrante:   fun.llamada_entrante( llamada_clasificacion ),
        // llamada_entrante_automatica:   fun.llamada_entrante_automatica(llamada_clasificacion),
        // llamada_saliente_manual:   fun.llamada_saliente_manual(llamada_clasificacion),

        // __LLAMADAS_RECIBIDAS__:  1,
        // llamadas_recibidas:  1,
        // llamadas_abandonadas:  1,
        // llamadas_atendidas:  1,
        // llamadas_cortas:  1,
        // llamadas_antes_de_20:  1,

        // __LLAMADAS_REALIZADAS__:  1,
        // llamadas_realizadas:  1,
        // llamadas_fallidas:  1,
        // llamadas_contestadas:  1,
        // llamadas_efectivas:  1,
        // llamadas_colgadas:  1,
        // resultado_llamada_saliente:  1,

        // __LLAMADAS_MARCADOR__:  1,
        // marcador_bbdd:  1,
        // marcador_recorridas:  1,
        // marcador_faltantes:  1,
        // marcador_vuelta:  1,

        // __REGISTRO__:  1,
        // chk_utilizado:  1,
        // estatus:  1,
        // usuario:  1,
        // createdAt:  1,
        // updatedAt:  1,
      }


      recordData = Object.values(record);
      recordFields = Object.keys(record);
      registros.push(recordData);

      }


    // LISTA DE CAMPOS PARA INSERTAR
    let campos = JSON.stringify(recordFields)
      .replace(/\"/g, ' ')
      .replace('[', '')
      .replace(']', '')


    // console.log(JSON.stringify(campos));
    // console.log(JSON.stringify(registros));



    if (opciones === 'diario') {
      pool_DAT.query(` TRUNCATE TABLE ${cdr_table}`, function (err, result, fields) {
        console.log(`--------- BORRANDO DATA ANTERIOR -------------`);
        console.log(`Eliminada la data en ${cdr_table}`);
        if (err) {
          console.log(err)
        }
      });

    }

    console.log(time_string);


    pool_DAT.query(`INSERT INTO ${cdr_table} (${campos}) values ?`,
      [registros],
      function (err, result, fields) {
        console.log(`--------- INSERTANDO DATA NUEVA -------------`);
        resolve(salir(err, cdr_table,));
        return
      });

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
  escribirCdrBase,
}