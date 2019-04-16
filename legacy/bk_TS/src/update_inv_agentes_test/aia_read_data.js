/*
*
* LECTURA DE LAS BASES DE DATOS Y TABLAS PARA IMPORTAR AGENTES
*
* Se lee cual el es ultimo registro del cdr
* El ultimo registro del cdr clasificado
* colas, agentes y queue log
* los parametros de consulta estan en una variable en formato SQL
*/

// Compartidos
// const conn = require('./../conectores/conexiones');
// const con_DAT = conn.con_DAT;
// const con_CALL = conn.con_CALL;
// const fetch = require("node-fetch");


// Conectores
const pool = require('../conectores/pool');
const poolDat = pool.poolDat;
const poolCdr = pool.poolCdr;
const poolQue = pool.poolQue;
const poolCall = pool.poolCall;



// LEER INVENTARIO AGENTES
const readAGENT  = function( agentes_table ) {

  return new Promise(function(resolve, reject) {

    // console.log('readLastCdrRecorded: ', cdr_table, fecha_inicio, fecha_final);

    let querySQL =`
      SELECT * FROM agent

      `;


    resolve( poolCall.query(querySQL) );

    reject ('Error');

  });
};


// LEER INVENTARIO AGENTES
const readAGENTES  = function( agentes_table ) {

  return new Promise(function(resolve, reject) {

    // console.log('readLastCdrRecorded: ', cdr_table, fecha_inicio, fecha_final);

    let querySQL =`
      SELECT * FROM inv_agentes

      `;


    resolve( poolDat.query(querySQL) );

    reject ('Error');

  });
};



// LEER INVENTARIO AGENTES
const readAGENTES_SUPERVISORES  = function( agentes_table ) {

  return new Promise(function(resolve, reject) {
    // console.log('readLastCdrRecorded: ', cdr_table, fecha_inicio, fecha_final);
    let querySQL =`
      SELECT * FROM inv_agentes_supervisores

      `;
    resolve( poolDat.query(querySQL) );
    reject ('Error');

  });
};


module.exports = {
  readAGENT,
  readAGENTES,
  readAGENTES_SUPERVISORES,
};