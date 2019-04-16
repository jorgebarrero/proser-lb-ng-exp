/*
*
* LECTURA DE LAS BASES DE DATOS Y TABLAS PARA CLASIFICAR AUDIT
*
* Se lee cual el es ultimo registro del cdr
* El ultimo registro del cdr clasificado
* colas, agentes y queue log
* los parametros de consulta estan en una variable en formato SQL
*/

// Compartidos
// const conn = require('../conectores/conexiones');
// const con_CDR = conn.con_CDR;
// const con_DAT = conn.con_DAT;
// const con_QUE = conn.con_QUE;


const pool = require('../conectores/pool');
const pool_DAT  = pool.pool_DAT;
const pool_CDR = pool.pool_CDR;
const pool_QUE = pool.pool_QUE;
const pool_CALL = pool.pool_CALL;



// const update_cd_base = require('../update_clasif_cdr');
// const cdr_table = update_cd_base.cdr_table;
// const fecha_inicio = update_cd_base.fecha_inicio;
// const fecha_final = update_cd_base.fecha_final;




// LEER ULTIMO REGISTRO GRABADO
const readAudit  = function( fecha_inicio, fecha_final ) {

  return new Promise(function(resolve, reject) {

    console.log('readAudit: ',  'inicio', fecha_inicio, 'final', fecha_final);

      let querySQL =`
      SELECT *

      FROM
      audit

      WHERE
      datetime_init >= '${fecha_inicio}'

      and

      datetime_init < '${fecha_final}'


      `;


    resolve( pool_CALL.query(querySQL) );

    reject ('Error');

  });
};




// LEER CLASIFICACION DE AGENTES

// WHERE
// fecha_planificada >= '${fecha_inicio}'
// AND
// fecha_planificada < '${fecha_final}'


const readAgentsClasif  = function( agentes_table, fecha_inicio, fecha_final ) {

  return new Promise(function(resolve, reject) {


      let querySQL = `

      SELECT
      *
      FROM 
      
      ${agentes_table}

      WHERE
      fecha_planificada >= '${fecha_inicio}'
      AND
      fecha_planificada < '${fecha_final}'


      `;

    resolve( pool_DAT.query(querySQL) );

    reject ('Error');

  });
};


// LEER ULTIMO REGISTRO GRABADO
const readAuxiliares  = function(  ) {

  return new Promise(function(resolve, reject) {

    // console.log('readLastCdrRecorded: ', cdr_table, fecha_inicio, fecha_final);

      let querySQL =`
      SELECT * FROM 
      
      inv_auxiliares

      `;


    resolve( pool_DAT.query(querySQL) );

    reject ('Error');

  });
};




// LEER REALTIME
const readRealTime  = function(url){

  url =
  '/var/www/html/preports/mw_TR/public/data/realtime.json';

  return new Promise(function(resolve, reject){

    fs.readFile( url, 'utf8', function (err, data) {
      if (err) console.log(err);

      resolve( JSON.parse(data));

    });

  })
}

// LEER CDR

/*




  

      */

//     DATE_FORMAT(calldate , '%Y-%m-%d %H-%i-%s') as calldate,
const readCdrClasif  = function( cdr_table, fecha_inicio, fecha_final ) {

  return new Promise(function(resolve, reject) {

      let querySQL =`
      SELECT
      *

      FROM
      
      ${cdr_table}

      WHERE
      calldate >= '${fecha_inicio}'
      AND
      calldate < '${fecha_final}'

      ORDER BY
      id

      `;

    resolve( pool_DAT.query(querySQL) );

    reject ('Error');

  });
};



/******************************* */





  module.exports = {
    readAudit,
    readAgentsClasif,
    readAuxiliares,
    readRealTime,
    readCdrClasif,
  }