/*
*
* LECTURA DE LAS BASES DE DATOS Y TABLAS PARA CLASIFICAR LLAMADAS
*
* Se lee cual el es ultimo registro del cdr
* El ultimo registro del cdr clasificado
* colas, colas y queue log
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

// const update_colas_clasif = require('../update_clasif_colas');
// const cdr_table = update_colas_clasif.cdr_table;
// const fecha_inicio = update_colas_clasif.fecha_inicio;
// const fecha_final = update_colas_clasif.fecha_final;



// LEER INVENTARIO COLAS
const readColasInventory  = function( colas_table ) {

  return new Promise(function(resolve, reject) {

    // console.log('readLastCdrRecorded: ', cdr_table, fecha_inicio, fecha_final);

    let querySQL =`
      SELECT
      *

      FROM
      inv_colas

      WHERE
      estatus_inv_colas = 'A'

      `;


    resolve( poolDat.query(querySQL) );

    reject ('Error');

  });
};

/************************************************************************ */



module.exports = {

  readColasInventory,

};