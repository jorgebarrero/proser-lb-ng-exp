/*****
 *
 * CALCULOS DE INDICADORES
 *
 * Se recibe una petición del frontend que se almacena en un registro
 * de la tabla de indicadores y se actualizan los indicadores cada 20 segundos
 *
 */

// Calculos de columnas de llamadas
//  const auxiliares = require('./aux_functions');
const aux_read_data = require('./aux_read_data');
const aux_write_data = require('./aux_write_data');

// Conectores
const pool = require('../conectores/pool');
const pool_DAT = pool.pool_DAT;
const pool_CDR = pool.pool_CDR;
const pool_QUE = pool.pool_QUE;
const pool_CALL = pool.pool_CALL;

// Lectura de bases de datos
const readDB = require('./aux_read_data');
const readBREAK = readDB.readBREAK;
const readAUXILIARES = readDB.readAUXILIARES;
// const readAUXILIARES_PRODUCTIVIDAD = readDB.readAUXILIARES_PRODUCTIVIDAD;


function importarAUXILIARES ( fecha_inicio, fecha_final ) {

  console.log('Calculando indicadores....');


  /*************************************************************************************************************
  * EJECUTAR LAS PROMESAS
  */

  Promise.all([
    aux_read_data.readBREAK(),
    aux_read_data.readAUXILIARES(),
    // aux_read_data.readAUXILIARES_PRODUCTIVIDAD(),
  ])
    .then(function (res) {

      let myBreak = res[0];
      let inventario_auxiliares = res[1];
      // let inventario_auxiliares_productividad = res[2];



      console.log('myBreak', myBreak.length);
      console.log('inventario_auxiliares', inventario_auxiliares.length);
      // console.log('inventario_auxiliares_productividad', inventario_auxiliares_productividad.length);

      if( myBreak ){
        aux_write_data.guardarAUXILIARES( myBreak, inventario_auxiliares /*, inventario_auxiliares_productividad*/ )
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
  importarAUXILIARES
};
