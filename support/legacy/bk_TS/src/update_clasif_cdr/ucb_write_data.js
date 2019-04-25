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
function escribirCdrBase(
  cdr_diario,
  cdr,
  queuelog,
  agentsClasif,
  queuesClasif,
  fecha_min,
  fecha_max
) {
  console.log('cdr_diario: \n', cdr_diario);

  // CREAR VARIABLES DEL OBJETO DEL PARAMETRO
  const fecha_inicio = cdr_diario.fecha_inicio;
  const fecha_final = cdr_diario.fecha_final;
  const fecha_consola = cdr_diario.fecha_consola;

  const cdr_table = cdr_diario.cdr_table;
  const opciones = cdr_diario.opciones;

  console.log(
    'Variables \n',
    fecha_inicio,
    fecha_final,
    fecha_consola,
    cdr_table,
    opciones
  );

  return new Promise(function(resolve, reject) {
    let result = cdr;
    let registros = [];
    let record;
    let recordData;
    let recordFields;

    let temp = fecha_inicio.substring(0, 10);
    let time_string = temp.replace(/-/g, '');
    let prefijo_id = time_string * 10000 + 1;

    console.log('CDR', result.length);
    // console.log('AGENTES', agentsClasif[0]);
    console.log('procesando............');

    for (var i = 0; i < result.length; i++) {
      console.log('registro', result[i].id);

      //* VARIABLE
      let ___CDR___ = 1; // 1;
      let calldate = result[i].calldate;
      let calltime = fechas.time_text(calldate);
      let clid = result[i].clid;
      let src = result[i].src;
      let dst = result[i].dst;
      let dcontext = result[i].dcontext;
      let channel = result[i].channel;
      let dstchannel = result[i].dstchannel;
      let lastapp = result[i].lastapp;
      let lastdata = result[i].lastdata;
      let duration = result[i].duration;
      let billsec = result[i].billsec;
      let disposition = result[i].disposition;
      let amaflags = result[i].amaflags;
      let accountcode = result[i].accountcode;
      let uniqueid = result[i].uniqueid;
      let userfield = result[i].userfield;
      let recordingfile = result[i].recordingfile;
      let cnum = result[i].cnum;
      let cnam = result[i].cnam;
      let outbound_cnum = result[i].outbound_cnum;
      let outbound_cnam = result[i].outbound_cnam;
      let dst_cnam = result[i].dst_cnam;
      let did = result[i].did;
      let id = result[i].id;
      let id_cdr = result[i].id;

      let ___DATA___ = 1;
      let id_global = 1;
      let id_dat_llamadas = 1;
      let id_secuencia_registros = 1;
      let caso = 1;
      let subcaso = 1;

      let __CLASIFICACION_FECHA__ = 1;
      let fecha = fechas.date_text(calldate);
      let hora = fun.hora(calldate);
      let date_text = fechas.date_text(calldate);
      let day_week_number = fechas.week_day_number(calldate);
      let segundo_del_dia = fechas.hora_a_segundos(calltime);

      let ___CALCULOS_INTERMEDIOS___ = 1;
      let largo_src = fun.largo_src(src);
      let largo_dst = fun.largo_dst(dst);
      let int_ext = fun.int_ext(src, dst);
      let sal_ent = fun.sal_ent(src, dst, int_ext, lastapp);
      let sal_ent_vacia = fun.sal_ent_vacia(sal_ent, src);
      let saliente_entrante = fun.saliente_entrante(sal_ent_vacia, lastapp);
      let productiva = fun.productiva(sal_ent, dst, src, id);
      let llamada_produccion = fun.llamada_produccion(
        sal_ent_vacia,
        productiva
      );
      let ext_ent_larga = fun.ext_ent_larga(sal_ent, dstchannel);
      let ext_ent = fun.ext_ent(ext_ent_larga, dstchannel);
      let ext_sal = fun.ext_sal(sal_ent, src);

      let __COLA_EXTENSION__ = 1; // 1;
      let llamada_cola = fun.llamada_cola(
        lastapp,
        saliente_entrante,
        llamada_produccion,
        dst
      );
      let llamada_extension = fun.llamada_extension(
        ext_ent,
        ext_sal,
        dstchannel
      );
      let numero_telefonico = fun.numero_telefonico(sal_ent_vacia, dst, src);

      let __CLASIF_CDR__ = 1;
      let __COLAS__ = 1;

      let numero_colas = llamada_cola;
      let id_inv_colas = fun.id_inv_colas(llamada_cola, queuesClasif);
      let nombre_colas = fun.nombre_colas(llamada_cola, queuesClasif);
      let tipo_colas = fun.tipo_colas(llamada_cola, queuesClasif);

      let __CLIENTES__ = 1;
      let id_inv_clientes = fun.id_inv_clientes(llamada_cola, queuesClasif);
      let nombre_clientes = fun.nombre_clientes(llamada_cola, queuesClasif);

      let __SERVICIOS__ = 1;
      let id_inv_servicios = fun.id_inv_servicios(llamada_cola, queuesClasif);
      let nombre_servicios = fun.nombre_servicios(llamada_cola, queuesClasif);

      let __CAMPANAS__ = 1;
      let id_inv_campanas = fun.id_inv_campanas(llamada_cola, queuesClasif);
      let nombre_campanas = fun.nombre_campanas(llamada_cola, queuesClasif);
      let tiempo_after_call = fun.tiempo_after_call(llamada_cola, queuesClasif);

      let __AGENTES__ = 1;
      let id_inv_agentes = fun.id_inv_agentes(llamada_extension, agentsClasif);
      let numero_agentes = llamada_extension;

      let nombre_agentes = fun.nombre_agentes(id_inv_agentes, agentsClasif);
      let tipo_agentes = fun.tipo_agentes(id_inv_agentes, agentsClasif);

      let doc_ident_agentes = fun.doc_ident_agentes(
        id_inv_agentes,
        agentsClasif
      );
      let doc_complementario_agentes = fun.doc_complementario_agentes(
        id_inv_agentes,
        agentsClasif
      );

      let __SUPERVISORES__ = 1;
      let id_inv_supervisores = fun.id_inv_supervisores(
        id_inv_agentes,
        agentsClasif
      );
      let nombre_supervisores = fun.nombre_supervisores(
        id_inv_agentes,
        agentsClasif
      );

      let __SUPLENTES__ = 1;
      let id_inv_suplentes = 1;
      let nombre_suplentes = 1;

      let __HORARIOS__ = 1;
      let id_inv_horarios = fun.id_inv_horarios(id_inv_agentes, agentsClasif);
      let nombre_horarios = fun.nombre_horarios(id_inv_agentes, agentsClasif);

      let __ESCALAS__ = 1;
      let id_inv_escalas = fun.id_inv_escalas(llamada_cola, queuesClasif);
      let nombre_escalas = fun.nombre_escalas(llamada_cola, queuesClasif);
      let rojo = fun.rojo(llamada_cola, queuesClasif);
      let amarillo = fun.amarillo(llamada_cola, queuesClasif);
      let verde = fun.verde(llamada_cola, queuesClasif);
      let azul = fun.azul(llamada_cola, queuesClasif);

      let __DATA_QLOG__ = 1;
      let ivroption_time = fun.queuelogClasificado(
        queuelog,
        uniqueid,
        'IVROPTION'
      );
      let enterqueue_time = fun.queuelogClasificado(
        queuelog,
        uniqueid,
        'ENTERQUEUE'
      );
      let connect_time = fun.queuelogClasificado(queuelog, uniqueid, 'CONNECT');
      let completecaller_time = fun.queuelogClasificado(
        queuelog,
        uniqueid,
        'COMPLETECALLER'
      );
      let completeagent_time = fun.queuelogClasificado(
        queuelog,
        uniqueid,
        'COMPLETEAGENT'
      );
      let abandon_time = fun.queuelogClasificado(queuelog, uniqueid, 'ABANDON');
      let complete_time = fun.complete_time(
        completecaller_time,
        completeagent_time,
        abandon_time
      );

      let __CALCULOS_TIEMPOS__ = 1;
      let tiempo_ivr_cola = fun.tiempo_ivr_cola(
        ivroption_time,
        enterqueue_time
      );
      let tiempo_cola_agente = fun.tiempo_cola_agente(
        enterqueue_time,
        connect_time
      );
      let tiempo_agente_finalizacion = fun.tiempo_agente_finalizacion(
        complete_time,
        connect_time,
        billsec
      );
      let tiempo_llamante_abandono = fun.tiempo_llamante_abandono(
        abandon_time,
        enterqueue_time,
        billsec
      );
      let tiempo_espera = tiempo_cola_agente;
      let tiempo_hold = '';
      let tiempo_de_operacion = fun.tiempo_de_operacion(
        llamada_cola,
        tiempo_agente_finalizacion,
        billsec,
        tiempo_after_call
      );
      let tiempo_conversado = tiempo_agente_finalizacion;

      let __RESULTADO_LLAMADA__ = 1;
      let resultado_llamada = fun.resultado_llamada(disposition);
      let colgado_por = fun.colgado_por(
        completecaller_time,
        completeagent_time
      );
      let colgado_agente = fun.colgado_agente(colgado_por);
      let result_qlog = 1;
      let result_qlog_time = 1;
      let resultado = 1;

      let __CLASIFICACION_LLAMADA__ = 1;
      let llamada_clasificacion = fun.llamada_clasificacion(
        sal_ent_vacia,
        tipo_colas,
        llamada_cola,
        llamada_produccion
      );
      let llamada_productiva = fun.llamada_productiva(llamada_produccion);
      let llamada_operativa = fun.llamada_operativa(llamada_produccion);
      let llamada_interna = fun.llamada_interna(llamada_clasificacion);
      let llamada_entrante = fun.llamada_entrante(llamada_clasificacion);
      let llamada_entrante_automatica = fun.llamada_entrante_automatica(
        llamada_clasificacion
      );
      let llamada_saliente_manual = fun.llamada_saliente_manual(
        llamada_clasificacion
      );

      let __LLAMADAS_RECIBIDAS__ = 1;
      let llamadas_recibidas = fun.llamadas_recibidas(llamada_clasificacion);
      let llamadas_atendidas = fun.llamadas_atendidas(
        disposition,
        abandon_time,
        llamadas_recibidas
      );
      let llamadas_abandonadas = fun.llamadas_abandonadas(
        disposition,
        llamada_entrante,
        abandon_time,
        tiempo_llamante_abandono,
        llamadas_recibidas
      );
      let llamadas_cortas = fun.llamadas_cortas(
        llamadas_atendidas,
        tiempo_agente_finalizacion,
        llamadas_recibidas
      );
      let llamadas_antes_de_20 = fun.llamadas_antes_de_20(
        llamadas_atendidas,
        tiempo_cola_agente,
        llamadas_recibidas
      );

      let __LLAMADAS_REALIZADAS__ = 1;
      let resultado_llamada_saliente = '';
      let llamadas_realizadas = fun.llamadas_realizadas(llamada_clasificacion);
      let llamadas_fallidas = fun.llamadas_fallidas(
        disposition,
        lastapp,
        llamadas_realizadas
      );
      let llamadas_contestadas = fun.llamadas_contestadas(
        disposition,
        llamadas_realizadas
      );
      let llamadas_efectivas = fun.llamadas_efectivas(
        resultado_llamada_saliente,
        llamadas_contestadas
      );
      let llamadas_colgadas = fun.llamadas_colgadas(
        lastapp,
        llamadas_realizadas
      );

      let __LLAMADAS_MARCADOR__ = 1;
      let marcador_bbdd = 1;
      let marcador_recorridas = 1;
      let marcador_faltantes = 1;
      let marcador_vuelta = 1;

      let __REGISTRO__ = 1;
      let chk_utilizado = 1;
      let estatus = 1;
      let usuario = 'SYSTEM';
      let createdAt = fechas.unixDate(new Date());
      let updatedAt = fechas.unixDate(new Date());

      record = {
        ___CDR___,
        calldate,
        clid,
        src,
        dst,
        dcontext,
        channel,
        dstchannel,
        lastapp,
        lastdata,
        duration,
        billsec,
        disposition,
        amaflags,
        accountcode,
        uniqueid,
        userfield,
        recordingfile,
        cnum,
        cnam,
        outbound_cnum,
        outbound_cnam,
        dst_cnam,
        did,
        id,
        id_cdr,

        ___DATA___,
        id_global,
        id_dat_llamadas,
        id_secuencia_registros,
        caso,
        subcaso,

        __CLASIFICACION_FECHA__,
        fecha,
        hora,
        date_text,
        day_week_number,
        segundo_del_dia,

        ___CALCULOS_INTERMEDIOS___,

        largo_src,
        largo_dst,
        int_ext,
        sal_ent,
        sal_ent_vacia,
        saliente_entrante,
        productiva,
        llamada_produccion,
        ext_ent_larga,
        ext_ent,
        ext_sal,

        __COLA_EXTENSION__,
        llamada_cola,
        llamada_extension,
        numero_telefonico,

        __CLASIF_CDR__,
        __COLAS__,
        id_inv_colas,
        numero_colas,
        nombre_colas,
        tipo_colas,

        __CLIENTES__,
        id_inv_clientes,
        nombre_clientes,

        __SERVICIOS__,
        id_inv_servicios,
        nombre_servicios,

        __CAMPANAS__,
        id_inv_campanas,
        nombre_campanas,
        tiempo_after_call,

        __AGENTES__,
        id_inv_agentes,
        numero_agentes,
        nombre_agentes,
        tipo_agentes,

        doc_ident_agentes,
        doc_complementario_agentes,

        __SUPERVISORES__,
        id_inv_supervisores,
        nombre_supervisores,

        __SUPLENTES__,
        id_inv_suplentes,
        nombre_suplentes,

        __HORARIOS__,
        id_inv_horarios,
        nombre_horarios,

        __ESCALAS__,
        id_inv_escalas,
        nombre_escalas,
        rojo,
        amarillo,
        verde,
        azul,

        __DATA_QLOG__,
        ivroption_time,
        enterqueue_time,
        connect_time,
        completecaller_time,
        completeagent_time,
        abandon_time,
        complete_time,

        __CALCULOS_TIEMPOS__,
        tiempo_ivr_cola,
        tiempo_cola_agente,
        tiempo_agente_finalizacion,
        tiempo_llamante_abandono,
        tiempo_espera,
        tiempo_hold,
        tiempo_de_operacion,
        tiempo_conversado,

        __RESULTADO_LLAMADA__,
        resultado_llamada,
        colgado_por,
        colgado_agente,
        result_qlog,
        result_qlog_time,
        resultado,

        __CLASIFICACION_LLAMADA__,
        llamada_clasificacion,
        llamada_productiva,
        llamada_operativa,
        llamada_interna,
        llamada_entrante,
        llamada_entrante_automatica,
        llamada_saliente_manual,

        __LLAMADAS_RECIBIDAS__,
        llamadas_recibidas,
        llamadas_abandonadas,
        llamadas_atendidas,
        llamadas_cortas,
        llamadas_antes_de_20,

        __LLAMADAS_REALIZADAS__,
        llamadas_realizadas,
        llamadas_fallidas,
        llamadas_contestadas,
        llamadas_efectivas,
        llamadas_colgadas,
        resultado_llamada_saliente,

        __LLAMADAS_MARCADOR__,
        marcador_bbdd,
        marcador_recorridas,
        marcador_faltantes,
        marcador_vuelta,

        __REGISTRO__,
        chk_utilizado,
        estatus,
        usuario: 'SYSTEM',
        createdAt: fechas.unixDate(new Date()),
        updatedAt: fechas.unixDate(new Date())
      };

      recordData = Object.values(record);
      recordFields = Object.keys(record);
      registros.push(recordData);
    }

    // LISTA DE CAMPOS PARA INSERTAR
    let campos = JSON.stringify(recordFields)
      .replace(/\"/g, ' ')
      .replace('[', '')
      .replace(']', '');

    // console.log(JSON.stringify(campos));
    // console.log(JSON.stringify(registros));

    console.log('registros', recordFields.length);
    console.log('registros_id', recordFields[0]);

    /*
    if (
      opciones === 'diario' &&
      (fecha_min < new Date(fecha_inicio) || fecha_max > new Date(fecha_final))
    ) {
      
      pool_DAT.query(` TRUNCATE TABLE ${cdr_table}`, function(
        err,
        result,
        fields
      ) {
        console.log('--------- BORRANDO DATA ANTERIOR -------------');

        console.log(`Eliminada la data en ${cdr_table}`);

        if (err) {
          console.log(err);
        }
      });
    }

   */

    if (opciones === 'diario') {
      pool_DAT.query(
        `INSERT INTO ${cdr_table} (${campos}) values ?`,
        [registros],
        function(err, result, fields) {
          console.log('--------- INSERTANDO DATA NUEVA -------------');
          console.log(result);
          resolve(salir(err, cdr_table));
          return;
        }
      );

      pool_DAT.query(
        `INSERT INTO a_clasif_cdr_hist (${campos}) values ?`,
        [registros],
        function(err, result, fields) {
          console.log('--------- INSERTANDO DATA NUEVA -------------');
          console.log(result);
          resolve(salir(err, cdr_table));
          return;
        }
      );
    }

    if (opciones === 'historico') {
      pool_DAT.query(
        ` DELETE FROM ${cdr_table} WHERE date_text = '${fecha_consola}'`,
        function(err, result, fields) {
          console.log('--------- BORRANDO DATA ANTERIOR -------------');
          console.log(`Eliminada la data en ${cdr_table}`);

          pool_DAT.query(
            `INSERT INTO ${cdr_table} (${campos}) values ?`,
            [registros],
            function(err, result, fields) {
              console.log('--------- INSERTANDO DATA NUEVA -------------');
              resolve(salir(err, cdr_table));
              return;
            }
          );

          if (err) {
            console.log(err);
          }
        }
      );

      console.log('TERMINADO');
    }

    console.log(time_string);
  }).catch(err => {
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
  escribirCdrBase
};
