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
const conn = require('./../conectores/conexiones');
const con_DAT = conn.con_DAT;
const fetch = require("node-fetch");
const fs = require('fs');


// Leer el real time
// @TODO: conexion para leer el php



const readAGENT_clasif  = function( agentDelDia  ) {

  return new Promise(function(resolve, reject) {

    con_DAT.connect(function (err) {
      con_DAT.query(agentDelDia ,
        function (err, result, fields) {
          if (err) reject(err);
          else {
           // console.log('Leido');
            resolve(JSON.parse(JSON.stringify(result)))};
        });
      });
  });
};


const readCDR_clasif  = function( cdrDelDia  ) {

  return new Promise(function(resolve, reject) {

    con_DAT.connect(function (err) {
      con_DAT.query(cdrDelDia ,
        function (err, result, fields) {
          if (err) reject(err);
          else {
           // console.log('Leido');
            resolve(JSON.parse(JSON.stringify(result)))};
        });
      });
  });
};

const readAUDIT_clasif  = function( auditDelDia  ) {

  return new Promise(function(resolve, reject) {

    con_DAT.connect(function (err) {
      con_DAT.query(auditDelDia ,
        function (err, result, fields) {
          if (err) reject(err);
          else {
           // console.log('Leido');
            resolve(JSON.parse(JSON.stringify(result)))};
        });
      });
  });
};



const readPETICIONES  = function( queryPETICIONES  ) {

  return new Promise(function(resolve, reject) {

    con_DAT.connect(function (err) {
      con_DAT.query(queryPETICIONES ,
        function (err, result, fields) {
          if (err) reject(err);
          else {
           // console.log('Leido');
            resolve(JSON.parse(JSON.stringify(result)))};
        });
      });
  });
};


// @ TODO:
// const readRealTime  = function(url){
//   return new Promise(function(resolve, reject){

//   fetch(url)
//   .then(response => {
//     response.json()
//     .then(json => {
//     // console.log(json);
//     resolve(json);
//     });
//   })
//   .catch(error => {
//     console.log(error);
//   });;

//   })

// };


const readRealTime  = function(url){
  return new Promise(function(resolve, reject){

    fs.readFile( url, 'utf8', function (err, data) {
      if (err) console.log(err);

      resolve( JSON.parse(data));

    });

  })

};




module.exports = {
  readAGENT_clasif,
  readCDR_clasif,
  readAUDIT_clasif,
  readRealTime,
  readPETICIONES,
}