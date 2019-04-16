/*
*
* LECTURA DE LAS BASES DE DATOS Y TABLAS PARA CLASIFICAR LLAMADAS
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
const poolDat  = pool.poolDat;
const poolCdr = pool.poolCdr;
const poolQue = pool.poolQue;
const poolCall = pool.poolCall;

// const update_agentes_clasif = require('../update_clasif_agentes');
// const cdr_table = update_agentes_clasif.cdr_table;
// const fecha_inicio = update_agentes_clasif.fecha_inicio;
// const fecha_final = update_agentes_clasif.fecha_final;



// LEER INVENTARIO AGENTES
const readAgentInventory  = function( agentes_table ) {

  return new Promise(function(resolve, reject) {

    // console.log('readLastCdrRecorded: ', cdr_table, fecha_inicio, fecha_final);

      let querySQL =`
      SELECT
      *

      FROM
      inv_agentes

      WHERE
      estatus_inv_agentes = 'A'

      `;


    resolve( poolDat.query(querySQL) );

    reject ('Error');

  });
};

/************************************************************************ */



  module.exports = {

    readAgentInventory,

  }