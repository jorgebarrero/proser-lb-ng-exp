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
const pool_DAT = pool.pool_DAT;
const pool_CDR = pool.pool_CDR;
const pool_QUE = pool.pool_QUE;
const pool_CALL = pool.pool_CALL;



// LEER INVENTARIO AGENTES
const readAGENT  = function( agentes_table ) {

  return new Promise(function(resolve, reject) {

    // console.log('readLastCdrRecorded: ', cdr_table, fecha_inicio, fecha_final);

    let querySQL =`
      SELECT * FROM agent

      `;


    resolve( pool_CALL.query(querySQL) );

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


    resolve( pool_DAT.query(querySQL) );

    reject ('Error');

  });
};




module.exports = {
  readAGENT,
  readAGENTES,

};