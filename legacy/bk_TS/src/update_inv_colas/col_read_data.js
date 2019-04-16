/*
* LECTURA DE LAS BASES DE DATOS Y TABLAS PARA IMPORTAR COLAS
*/

// Conectores
const pool = require('../conectores/pool');
const pool_DAT = pool.pool_DAT;
const pool_CDR = pool.pool_CDR;
const pool_QUE = pool.pool_QUE;
const pool_CALL = pool.pool_CALL;


// LEER INVENTARIO AUXILIARES
const readCOLAS_asterisk  = function( breakCallcenter ) {

  return new Promise(function(resolve, reject) {


    let querySQL =`
      SELECT * FROM queues_config

      `;


    resolve( pool_QUE.query(querySQL) );

    reject ('Error');

  });
};


// LEER INVENTARIO AUXILIARES
const readCOLAS_callcenter  = function( breakCallcenter ) {

  return new Promise(function(resolve, reject) {


    let querySQL =`
      SELECT * FROM queue_call_entry

      `;


    resolve( pool_CALL.query(querySQL) );

    reject ('Error');

  });
};


// LEER INVENTARIO AUXILIARES
const readCOLAS_reports  = function( breakCallcenter ) {

  return new Promise(function(resolve, reject) {


    let querySQL =`
      SELECT * FROM inv_colas

      `;


    resolve( pool_DAT.query(querySQL) );

    reject ('Error');

  });
};



module.exports = {
  readCOLAS_asterisk,
  readCOLAS_callcenter,
  readCOLAS_reports,
};