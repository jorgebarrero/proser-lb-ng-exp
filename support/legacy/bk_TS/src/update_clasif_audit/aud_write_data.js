//* Conectores
const pool = require('../conectores/pool');
const pool_DAT = pool.pool_DAT;
// const pool_CDR = pool.pool_CDR;
// const pool_QUE = pool.pool_QUE;
// const pool_CALL = pool.pool_CALL;

//* Funciones
const fun = require('./aud_functions.js');
const fechas = require('./../funciones/fechas_utilitarios');

//* Dependencies
const moment = require('moment');

// Escribir si hay data nueva
// main_variables, audit, cdr, agentsClasif, auxiliares_aux, fecha_inicio, fecha_final
//main_variables, audit, cdr, agentsClasif, auxiliares_aux, fecha_min, fecha_max
function escribirAuditBase(main_variables, audit, cdr, agentsClasif, auxiliares, fecha_min, fecha_max ) {

  // CREAR VARIABLES DEL OBJETO DEL PARAMETRO
  const fecha_inicio = main_variables.fecha_inicio;
  const fecha_final = main_variables.fecha_final;
  const fecha_consola = main_variables.fecha_consola;

  const cdr_table = main_variables.cdr_table;
  const audit_table = main_variables.audit_table;
  const opciones = main_variables.opciones;


  console.log('Variables \n', fecha_inicio, fecha_final, fecha_consola, audit_table, cdr_table, opciones);


  return new Promise(function (resolve, reject) {




    let result = audit;
    let auxiliares_aux = auxiliares;
    let cdr_aux = cdr;

    let registros = [];
    let record;
    let recordData;
    let recordFields;

    let temp = fecha_inicio.substring(0, 10);
    let time_string = temp.replace(/-/g, '');
    // let prefijo_id = (time_string * 10000) + 1;


    // console.log('AGENTES', agentsClasif[0]);
    // console.log(auxiliares_aux);

    for (var i = 0; i < result.length; i++) {

      let time_end =
        result[i].datetime_end > 0 || result[i].datetime_end !== null ?
          moment(result[i].datetime_end).format('YYYY-MM-DD HH:mm:ss') :
          moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

      //* VARIABLE
      let __AUDIT__ = 1;
      let id = result[i].id;
      let id_agent = result[i].id_agent;
      let id_break = result[i].id_break;
      let datetime_init =
        moment(result[i].datetime_init).format('YYYY-MM-DD HH:mm:ss');
      let datetime_end =
        result[i].datetime_end > 0 || result[i].datetime_end !== null ?
          moment(result[i].datetime_end).format('YYYY-MM-DD HH:mm:ss') :
          moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
      let duration =
      fechas.secondsToTime(((new Date(datetime_end)).getTime() - (new Date(datetime_init)).getTime()) / 1000) ;

      let ext_parked = result[i].ext_parked;

      let __CLASIF_REGISTRO__ = 1;
      let id_inv_auxiliares = fun.id_inv_auxiliares(id_break, auxiliares_aux);
      let nombre_auxiliares = fun.nombre_auxiliares(id_inv_auxiliares, auxiliares_aux);
      let productividad = fun.productividad(id_inv_auxiliares, auxiliares_aux);
      let tipo_registro = fun.tipo_registro(id_inv_auxiliares, productividad);


      let __CLASIF_AGENTES__ = 1;
      let id_inv_agentes = id_agent;
      let nombre_agentes = fun.nombre_agentes(id_inv_agentes, agentsClasif);
      let numero_agentes = fun.numero_agentes(id_inv_agentes, agentsClasif);
      let doc_ident_agentes = fun.doc_ident_agentes(id_inv_agentes, agentsClasif);
      let doc_complementario_agentes = fun.doc_complementario_agentes(id_inv_agentes, agentsClasif);

      let __CLASIF_SUPERVISORES__ = 1;
      let id_inv_supervisores = fun.id_inv_supervisores(id_inv_agentes, agentsClasif);
      let nombre_supervisores = fun.nombre_supervisores(id_inv_agentes, agentsClasif);

      let __CLASIF_SUPLENTES__ = 1;
      let id_inv_suplentes = fun.id_inv_suplentes(id_inv_agentes, agentsClasif);
      let nombre_suplentes = fun.nombre_suplentes(id_inv_agentes, agentsClasif);

      let __HORARIOS__ = 1;
      let id_inv_horarios = fun.id_inv_horarios(id_inv_agentes, agentsClasif);
      let nombre_horarios = fun.nombre_horarios(id_inv_agentes, agentsClasif);
      let horarios_inicio = fun.horarios_inicio(id_inv_agentes, agentsClasif);
      let horarios_final = fun.horarios_final(id_inv_agentes, agentsClasif);
      let segundos_horario_inicio = fun.segundos_horario_inicio(id_inv_agentes, agentsClasif);
      let segundos_horario_final = fun.segundos_horario_final(id_inv_agentes, agentsClasif);

      let __CLASIF_FECHAS__ = 1;
      let fecha = fechas.date_text(datetime_init);
      let date_text = fechas.date_text(datetime_init);
      let day_week_number = fechas.week_day_number(datetime_init);
      let time_text = fechas.time_text(datetime_init);
      let hora = (datetime_init);
      
      let hora_inicio = (datetime_init);
      let hora_final = (datetime_end);



      let segundos_inicio =
      new Date(hora_inicio).getSeconds() +
      new Date(hora_inicio).getMinutes() * 60 +
      new Date(hora_inicio).getHours() * 60 * 60;
      let segundos_final =
      new Date(hora_final).getSeconds() +
      new Date(hora_final).getMinutes() * 60 +
      new Date(hora_final).getHours() * 60 * 60;


      console.log('CDR-AUXILIAR', hora_inicio, segundos_inicio, hora_final,segundos_final );

      let diferencia_ini_fin = fechas.hora_a_segundos(duration);

      let ___REALTIME___ = 1;
      let estado_realtime = 1; //fun.estado_realtime(numero_agentes, realtime_agentes);
      let estado_actual = 1; //fun.estado_actual(audit, estado_realtime);
      let fecha_actual = moment().format('YYYY-MM-DD');
      let hora_actual = new moment().format('HH:mm:ss');
      let segundos_hora_actual = fechas.hora_a_segundos(hora_actual);
      let duracion = segundos_final > 0 ? fechas.hora_a_segundos(duration) : segundos_hora_actual - segundos_inicio;

      let __CONEXIONES__ = 1;
      let conexiones = tipo_registro === 'login' ? 1 : 0;
      let tiempo_conexiones = tipo_registro === 'login' ? duracion : 0;

      let __AUXILIARES__ = 1;
      let auxiliares = tipo_registro === 'auxiliar' ? 1 : 0;
      let tiempo_auxiliares = tipo_registro === 'auxiliar' ? duracion : 0;

      let __ASIGNACIONES__ = 1;
      let asignaciones = tipo_registro === 'asignacion' ? 1 : 0;
      let tiempo_asignaciones = tipo_registro === 'asignacion' ? duracion : 0;

      let __CLASIF_COLAS__ = 1;
      let colas_cdr = fun.colas_cdr(id_inv_agentes, cdr_aux);
      let id_inv_colas = fun.id_inv_colas(id_inv_agentes, cdr_aux);
      let numero_colas = fun.numero_colas(id_inv_agentes, cdr_aux);

      let __CLASIF_CLIENTES__ = 1;
      let clientes_cdr = fun.clientes_cdr(id_inv_agentes, cdr_aux);
      let id_inv_clientes = fun.id_inv_clientes(id_inv_agentes, cdr_aux);

      let __CLASIF_SERVICIOS__ = 1;
      let servicios_cdr = fun.servicios_cdr(id_inv_agentes, cdr_aux);
      let id_inv_servicios = fun.id_inv_servicios(id_inv_agentes, cdr_aux);

      let __CLASIF_CAMPANAS__ = 1;
      let campanas_cdr = fun.campanas_cdr(id_inv_agentes, cdr_aux);
      let id_inv_campanas = fun.id_inv_campanas(id_inv_agentes, cdr_aux);

      /**************************************************************** */
      record = {
        __AUDIT__,

        id,
        id_agent,
        id_break,
        datetime_init,
        datetime_end,
        duration,
        ext_parked,

        __CLASIF_REGISTRO__,
        id_inv_auxiliares,
        nombre_auxiliares,
        productividad,
        tipo_registro,


        __CLASIF_AGENTES__,
        id_inv_agentes,
        nombre_agentes,
        numero_agentes,
        doc_ident_agentes,
        doc_complementario_agentes,

        __CLASIF_SUPERVISORES__,
        id_inv_supervisores,
        nombre_supervisores,

        __CLASIF_SUPLENTES__,
        id_inv_suplentes,
        nombre_suplentes,

        __HORARIOS__,
        id_inv_horarios,
        nombre_horarios,
        horarios_inicio,
        horarios_final,
        segundos_horario_inicio,
        segundos_horario_final,
        diferencia_ini_fin,

        __CLASIF_FECHAS__,
        fecha,
        date_text,
        day_week_number,
        time_text,
        hora,
        hora_inicio,
        hora_final,
        segundos_inicio,
        segundos_final,

        ___REALTIME___,
        estado_realtime,
        estado_actual,
        fecha_actual,
        hora_actual,
        segundos_hora_actual,
        duracion,


        __CONEXIONES__,
        conexiones,
        tiempo_conexiones,



        __AUXILIARES__,
        auxiliares,
        tiempo_auxiliares,


        __ASIGNACIONES__,
        asignaciones,
        tiempo_asignaciones,




        __CLASIF_COLAS__,
        colas_cdr,
        id_inv_colas,
        numero_colas,

        __CLASIF_CLIENTES__,
        clientes_cdr,
        id_inv_clientes,

        __CLASIF_SERVICIOS__,
        servicios_cdr,
        id_inv_servicios,

        __CLASIF_CAMPANAS__,
        campanas_cdr,
        id_inv_campanas,

        __REGISTRO__: 1,
        chk_utilizado: 1,
        estatus: 1,
        usuario: 'SYSTEM',
        createdAt: fechas.unixDate(new Date()),
        updatedAt: fechas.unixDate(new Date()),
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



    if (opciones === 'diario') {
      pool_DAT.query(` TRUNCATE TABLE ${audit_table}`, function (err, result, fields) {
        console.log('--------- BORRANDO DATA ANTERIOR -------------');
        console.log(`Eliminada la data en ${audit_table}`);

        pool_DAT.query(`
        INSERT INTO ${audit_table} (${campos}) values ?
        ON DUPLICATE KEY UPDATE

        __AUDIT__ = VALUES(__AUDIT__),


        id_agent = VALUES(id_agent),
        id_break = VALUES(id_break),
        datetime_init = VALUES(datetime_init),
        datetime_end = VALUES(datetime_end),
        duration = VALUES(duration),
        ext_parked = VALUES(ext_parked),

        __CLASIF_REGISTRO__ = VALUES(__CLASIF_REGISTRO__),
        id_inv_auxiliares = VALUES(id_inv_auxiliares),
        nombre_auxiliares = VALUES(nombre_auxiliares),
        productividad = VALUES(productividad),
        tipo_registro = VALUES(tipo_registro),


        __CLASIF_AGENTES__ = VALUES(__CLASIF_AGENTES__),
        id_inv_agentes = VALUES(id_inv_agentes),
        nombre_agentes = VALUES(nombre_agentes),
        numero_agentes = VALUES(numero_agentes),
        doc_ident_agentes = VALUES(doc_ident_agentes),
        doc_complementario_agentes = VALUES(doc_complementario_agentes),

        __CLASIF_SUPERVISORES__ = VALUES(__CLASIF_SUPERVISORES__),
        id_inv_supervisores = VALUES(id_inv_supervisores),
        nombre_supervisores = VALUES(nombre_supervisores),

        __CLASIF_SUPLENTES__ = VALUES(__CLASIF_SUPLENTES__),
        id_inv_suplentes = VALUES(id_inv_suplentes),
        nombre_suplentes = VALUES(nombre_suplentes),

        __HORARIOS__ = VALUES(__HORARIOS__),
        id_inv_horarios = VALUES(id_inv_horarios),
        nombre_horarios = VALUES(nombre_horarios),
        horarios_inicio = VALUES(horarios_inicio),
        horarios_final = VALUES(horarios_final),
        segundos_horario_inicio = VALUES(segundos_horario_inicio),
        segundos_horario_final = VALUES(segundos_horario_final),
        diferencia_ini_fin = VALUES(diferencia_ini_fin),

        __CLASIF_FECHAS__ = VALUES(__CLASIF_FECHAS__),
        fecha = VALUES(fecha),
        date_text = VALUES(date_text),
        day_week_number = VALUES(day_week_number),
        time_text = VALUES(time_text),
        hora = VALUES(hora),
        hora_inicio = VALUES(hora_inicio),
        hora_final = VALUES(hora_final),
        segundos_inicio = VALUES(segundos_inicio),
        segundos_final = VALUES(segundos_final),

        ___REALTIME___ = VALUES(___REALTIME___),
        estado_realtime = VALUES(estado_realtime),
        estado_actual = VALUES(estado_actual),
        fecha_actual = VALUES(fecha_actual),
        hora_actual = VALUES(hora_actual),
        segundos_hora_actual = VALUES(segundos_hora_actual),
        duracion = VALUES(duracion),

        __CONEXIONES__ = VALUES(__CONEXIONES__),
        conexiones = VALUES(conexiones),
        tiempo_conexiones = VALUES(tiempo_conexiones),

        __AUXILIARES__ = VALUES(__AUXILIARES__),
        auxiliares = VALUES(auxiliares),
        tiempo_auxiliares = VALUES(tiempo_auxiliares),


        __ASIGNACIONES__ = VALUES(__ASIGNACIONES__),
        asignaciones = VALUES(asignaciones),
        tiempo_asignaciones = VALUES(tiempo_asignaciones),

        __CLASIF_COLAS__ = VALUES(__CLASIF_COLAS__),
        colas_cdr = VALUES(colas_cdr),
        id_inv_colas = VALUES(id_inv_colas),
        numero_colas = VALUES(numero_colas),

        __CLASIF_CLIENTES__ = VALUES(__CLASIF_CLIENTES__),
        clientes_cdr = VALUES(clientes_cdr),
        id_inv_clientes = VALUES(id_inv_clientes),

        __CLASIF_SERVICIOS__ = VALUES(__CLASIF_SERVICIOS__),
        servicios_cdr = VALUES(servicios_cdr),
        id_inv_servicios = VALUES(id_inv_servicios),

        __CLASIF_CAMPANAS__ = VALUES(__CLASIF_CAMPANAS__),
        campanas_cdr = VALUES(campanas_cdr),
        id_inv_campanas = VALUES(id_inv_campanas),

        __REGISTRO__: 1 = VALUES(__REGISTRO__),
        chk_utilizado: 1 = VALUES(chk_utilizado),
        estatus: 1 = VALUES(estatus),
        usuario: 'SYSTEM' = VALUES(usuario),
        createdAt: fechas.unixDate(new Date()) = VALUES(createdAt),
        updatedAt: fechas.unixDate(new Date()) = VALUES(updatedAt),
        
        
        
        `,
        [registros],
        function (err, result, fields) {
          console.log('--------- INSERTANDO DATA NUEVA -------------');
          resolve(salir(err, audit_table));
          return;
        });

        if (err) {
          console.log(err);
        }
      });



    }

    if (opciones === 'historico') {


      pool_DAT.query(` DELETE FROM ${audit_table} WHERE date_text = '${fecha_consola}'`, function (err, result, fields) {
        console.log('--------- BORRANDO DATA ANTERIOR -------------');
        console.log(`Eliminada la data en ${audit_table}`);

        pool_DAT.query(`INSERT INTO ${audit_table} (${campos}) values ?`,
          [registros],
          function (err, result, fields) {
            console.log('--------- INSERTANDO DATA NUEVA -------------');
            resolve(salir(err, audit_table, 'historico'));
            return;
          });


        if (err) {
          console.log(err);
        }
      });



      console.log('TERMINADO');

    }

    console.log(time_string);


    // reject(console.log('Rechazada promesa en write_data'));

  })
    .catch(err => {
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



function hmsToSecondsOnly(str) {
  var p = str.split(':'),
    s = 0, m = 1;

  while (p.length > 0) {
    s += m * parseInt(p.pop(), 10);
    m *= 60;
  }

  return s;
}


/*********************************************** */
module.exports = {
  escribirAuditBase,
};
