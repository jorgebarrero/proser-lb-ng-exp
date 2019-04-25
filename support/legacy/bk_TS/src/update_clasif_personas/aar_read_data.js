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

const fs = require('fs');


const pool = require('../conectores/pool');
const poolDat  = pool.poolDat;
const poolCdr = pool.poolCdr;
const poolQue = pool.poolQue;
const poolCall = pool.poolCall;



// const update_cd_base = require('../update_clasif_cdr');
// const cdr_table = update_cd_base.cdr_table;
// const fecha_inicio = update_cd_base.fecha_inicio;
// const fecha_final = update_cd_base.fecha_final;




// LEER ULTIMO REGISTRO GRABADO
const readAudit  = function( audit_table, fecha_inicio, fecha_final ) {

  return new Promise(function(resolve, reject) {

    console.log('readAudit: ',  'inicio', fecha_inicio, 'final', fecha_final);

      let querySQL =`
      SELECT *

      FROM
      ${audit_table}

      WHERE
      datetime_init >= '${fecha_inicio}'

      and

      datetime_init < '${fecha_final}'


      `;


    resolve( poolDat.query(querySQL) );

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

    resolve( poolDat.query(querySQL) );

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


    resolve( poolDat.query(querySQL) );

    reject ('Error');

  });
};




// LEER REALTIME
const readRealTime  = function(url){

  url =
  '/var/www/html/proser/bk_TS/src/public/realtime/agentes.json';

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

    resolve( poolDat.query(querySQL) );

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