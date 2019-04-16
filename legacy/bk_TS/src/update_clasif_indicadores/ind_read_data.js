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



const readPeticiones  = function( cdr_diario ) {

  let peticiones_table = cdr_diario.peticiones_table;

  return new Promise(function(resolve, reject) {

      let querySQL =`
      SELECT
      id_inv_peticiones,
      clave_peticiones,
      titulo_peticiones,
      filtro_peticiones,
      sql_peticiones,
      clasificacion_llamada,
      modalidad,
      fecha_peticiones

      FROM
      a_temp_peticiones

      WHERE

      modalidad = 'diario'

      ORDER BY
      id_inv_peticiones

      `;


    resolve( poolDat.query(querySQL) );

    reject ('Error');

  });
};


const indicadoresCDR  = function( cdr_diario,  sql_indicadores ) {

  let cdr_table = cdr_diario.cdr_table;

  console.log('SQL', sql_indicadores);

  return new Promise(function(resolve, reject) {

      let querySQL =`
      SELECT

      'abc' as id,
      count(id) as registros

      FROM
      a_clasif_cdr

      WHERE 1


      `;


    resolve( poolDat.query(querySQL) );

    reject ('Error');

  });
};

// ${sql_indicadores}
/**************************************************************************************************** */



  module.exports = {
    readPeticiones,
    indicadoresCDR,
  }