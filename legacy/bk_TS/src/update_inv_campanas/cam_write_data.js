

// Conectores
const pool = require('../conectores/pool');
const pool_DAT = pool.pool_DAT;
const pool_DAT_M = pool.pool_DAT_M;
const pool_CDR = pool.pool_CDR;
const pool_QUE = pool.pool_QUE;
const pool_CALL = pool.pool_CALL;

// Funciones
const fun = require('./cam_functions.js');
const fechas = require('./../funciones/fechas_utilitarios');

/*************************************************************************************************************
  * INSERTAR EL RESULTADO
  */

const guardarCAMPANAS  = function( campaign_callcenter, colas_reports /*, campanas_reports */ ) {

  // Crear una promesa que borra todos los registros de la tabla dat_indicadores y la sustituye con calculos nuevos
  return new Promise(function (resolve, reject) {


    // Con la tabla de peticiones se crea un arreglo
    let result = campaign_callcenter;
    let cantidad_colas = result.length;

    console.log('Longitud inventario', cantidad_colas);

    // Se crea un arreglo que se insertará en la tabla con los nuevos calculos
    let registros = [];

    // Se evalua para cada peticion
    for (var i = 0; i < cantidad_colas; i++) {

      //console.log('registro', i, '---------------------------------------------');

      // Extraer las peticiones del registro para usarlo como valor del filtro

      let __CAMAPANAS__ = 2;
      let id_inv_campanas =  result[i].id;
      // let codigo_campanas =  fun.codigo_campanas(id_inv_campanas, campanas_reports);
      let nombre_campanas =  result[i].name;
      let nombre_reportes_campanas =  result[i].name;

      let __COLAS__ = 1;
      let id_inv_colas = result[i].id_queue_call_entry;
      let numero_colas = fun.numero_colas(id_inv_colas, colas_reports);
      let nombre_reportes_colas =  fun.nombre_reportes_colas(id_inv_colas, colas_reports);
      // let tiempo_after_call =  fun.tiempo_after_call(id_inv_campanas, campanas_reports);

      let __FECHAS__ = 1;
      let fecha_inicio = fechas.date_text(result[i].datetime_init); // .slice(0,10),
      let fecha_final = fechas.date_text(result[i].datetime_end); //.slice(0,10),
      let hora_inicio = result[i].daytime_init;
      let hora_final = result[i].daytime_end;
      let segundos_inicio = fechas.hora_a_segundos(hora_inicio);
      let segundos_final = fechas.hora_a_segundos(hora_final);

      let __REGISTRO__ = 1;
      let chk_utilizado =  1;
      let estatus_inv_campanas = result[i].estatus;
      let usuario =  'SYSTEM';
      let createdAt = fechas.unixDate(new Date());
      let updatedAt = fechas.unixDate(new Date());


      // Calcular los indicadores para cada registro usando solo la data filtrada que aplica
      registros.push([

        __CAMAPANAS__,
        id_inv_campanas,
        // codigo_campanas,
        nombre_campanas,
        nombre_reportes_campanas,

        __COLAS__,
        id_inv_colas,
        numero_colas,
        nombre_reportes_colas,
        // tiempo_after_call,

        __FECHAS__,
        fecha_inicio,
        fecha_final,
        hora_inicio,
        hora_final,
        segundos_inicio,
        segundos_final,

        __REGISTRO__,
        chk_utilizado,
        estatus_inv_campanas,
        usuario,
        createdAt,
        updatedAt

      ]);
    }

    //@ TODO validar que la fecha minima borre los archivos que no corresponden



    let sqlQuery = `

     __CAMAPANAS__,
     id_inv_campanas,

     nombre_campanas,
     nombre_reportes_campanas,

     __COLAS__,
     id_inv_colas,
     numero_colas,
     nombre_reportes_colas,


     __FECHAS__,
     fecha_inicio,
     fecha_final,
     hora_inicio,
     hora_final,
     segundos_inicio,
     segundos_final,

     __REGISTRO__,
     chk_utilizado,
     estatus_inv_campanas,
     usuario,
     createdAt,
     updatedAt

     `;


    pool_DAT_M.query(`

      INSERT INTO inv_campanas (${sqlQuery}) values ?
      
      ON DUPLICATE KEY UPDATE

      __CAMAPANAS__  = '2',
      __COLAS__  = '2',
      __FECHAS__  = '2',
      __REGISTRO__  = '2',


      nombre_campanas   = VALUES(nombre_campanas),
      id_inv_colas   = VALUES(id_inv_colas),
      numero_colas   = VALUES(numero_colas),
      nombre_reportes_colas   = VALUES(nombre_reportes_colas),


      fecha_inicio   = VALUES(fecha_inicio),
      fecha_final   = VALUES(fecha_final),
      hora_inicio   = VALUES(hora_inicio),
      hora_final   = VALUES(hora_final),
      segundos_inicio   = VALUES(segundos_inicio),
      segundos_final   = VALUES(segundos_final),


      estatus_inv_campanas  = VALUES(estatus_inv_campanas),
      chk_utilizado  = VALUES(chk_utilizado),
      usuario  = VALUES(usuario),
      createdAt  = VALUES(createdAt),
      updatedAt  = VALUES(updatedAt)

  ;
  
  `, [registros], function (err, result, fields) {
      if (err) {
        console.log(err);
      }
      resolve(salir(err));
      console.log('Actualizadas las campanas en el inventario');
      process.exit(0);
      return;
    })
      .catch( err => {
        console.log('Error en promesa ', err);
        process.exit(-1);
      });




    function salir(err) {
      console.log('FIN funcion');
      if (err) {
        console.log('\033c'); //clear screen
        console.log('FIN x error',  err);
        console.log(err);
        process.exit(-1);
      }
      // if (opciones === '') {
      //   process.exit(0);
      // }
    }


  });
};

module.exports = {
  guardarCAMPANAS
};


/*

__CAMAPANAS__,
     id_inv_campanas,
     codigo_campanas,
     nombre_campanas,
     nombre_reportes_campanas,

     __COLAS__,
     id_inv_colas,
     numero_colas,
     nombre_reportes_colas,
     tiempo_after_call,

     __FECHAS__,
     fecha_inicio,
     fecha_final,
     hora_inicio,
     hora_final,
     segundos_inicio,
     segundos_final,

     __REGISTRO__,
     chk_utilizado,
     estatus_inv_campanas,
     usuario,
     createdAt,
     updatedAt

*/