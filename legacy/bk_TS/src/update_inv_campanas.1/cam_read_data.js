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
// const con_DAT = conn.con_DAT; // DATA
// const con_CALL = conn.con_CALL; // CALCENTER
// const con_QUE = conn.con_QUE; // ASTERISK
// const fetch = require("node-fetch");

// Conectores
const pool = require('../conectores/pool');
const pool_DAT = pool.pool_DAT;
const pool_CDR = pool.pool_CDR;
const pool_QUE = pool.pool_QUE;
const pool_CALL = pool.pool_CALL;


// LEER INVENTARIO AUXILIARES
const readCAMPAIGN_callcenter  = function( breakCallcenter ) {

  return new Promise(function(resolve, reject) {


      let querySQL =`
      SELECT * FROM campaign_entry

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

// LEER INVENTARIO AUXILIARES
const readCAMPANAS_reports  = function( breakCallcenter ) {

  return new Promise(function(resolve, reject) {


      let querySQL =`
      SELECT * FROM inv_campanas_productividad

      `;


    resolve( pool_DAT.query(querySQL) );

    reject ('Error');

  });
};


/******************************************************************* */
// Leer la tabla Agent de CallCenter

// const readCAMPAIGN_callcenter_OLD  = function( campaign_callcenter  ) {

//   return new Promise(function(resolve, reject) {

//     con_CALL.connect(function (err) {
//       con_CALL.query(campaign_callcenter,
//         function (err, result, fields) {
//           if (err) reject(err);
//           else {
//            // console.log('Leido');
//             resolve(JSON.parse(JSON.stringify(result)))};
//         });
//       });
//   });
// };



// const readCOLAS_reports_OLD  = function( colas_reports  ) {

//   return new Promise(function(resolve, reject) {

//     con_DAT.connect(function (err) {
//       con_DAT.query(colas_reports,
//         function (err, result, fields) {
//           if (err) reject(err);
//           else {
//            // console.log('Leido');
//             resolve(JSON.parse(JSON.stringify(result)))};
//         });
//       });
//   });
// };

// const readCAMPANAS_reports_OLD  = function( campanas_reports  ) {

//   return new Promise(function(resolve, reject) {

//     con_DAT.connect(function (err) {
//       con_DAT.query(campanas_reports,
//         function (err, result, fields) {
//           if (err) reject(err);
//           else {
//            // console.log('Leido');
//             resolve(JSON.parse(JSON.stringify(result)))};
//         });
//       });
//   });
// };


module.exports = {
  readCAMPAIGN_callcenter,
  readCOLAS_reports,
  readCAMPANAS_reports,

}