/*****
 *
 * CALCULOS DE INDICADORES
 *
 * Se recibe una petición del frontend que se almacena en un registro
 * de la tabla de indicadores y se actualizan los indicadores cada 20 segundos
 *
 */

// Dependencias
//  const mysql = require('mysql');
//  const _ = require('lodash');
//  const fetch = require("node-fetch");

// Calculos de columnas de llamadas
const agentes = require('./aia_functions');
const uia_read_data = require('./aia_read_data');
const uia_write_data = require('./aia_write_data');

// Compartidos
const fecha = require('../funciones/fechas_utilitarios');
//  const conn = require('../conectores/conexiones');
//  const con_DAT = conn.con_DAT;

// Conectores
const pool = require('../conectores/pool');
const pool_DAT = pool.pool_DAT;
const pool_CDR = pool.pool_CDR;
const pool_QUE = pool.pool_QUE;
const pool_CALL = pool.pool_CALL;

// Lectura de bases de datos
const readDB = require('./aia_read_data');
const readAGENT = readDB.readAGENT;
const readAGENTES = readDB.readAGENTES;


function importarAGENTES ( fecha_inicio, fecha_final ) {

  console.log('Calculando indicadores....');

  Promise.all([
    uia_read_data.readAGENT(),
    uia_read_data.readAGENTES(),

  ])
    .then(function (res) {

      let agent = res[0];
      let inventario_agentes = res[1];




      console.log('agent', agent.length);
      console.log('inventario_agentes', inventario_agentes.length);



      //@TODO: validar que hay datos
      if( agent ){
        uia_write_data.guardarAGENTES( agent, inventario_agentes)
          .then(function(indicadoresResult){

          });
      }

    })
    .catch(error => {
      console.log(error);
    });


}


// Exportar para uso

module.exports = {
  importarAGENTES
};
