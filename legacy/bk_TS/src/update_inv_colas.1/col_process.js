/*****
 *
 * CALCULOS DE INDICADORES
 *
 * Se recibe una petición del frontend que se almacena en un registro
 * de la tabla de indicadores y se actualizan los indicadores cada 20 segundos
 *
 */
 // Dependencias

//  const fun = require('./col_functions');
const col_read_data = require('./col_read_data');
const col_write_data = require('./col_write_data');

// Conectores
const pool = require('../conectores/pool');
const pool_DAT = pool.pool_DAT;
const pool_CDR = pool.pool_CDR;
const pool_QUE = pool.pool_QUE;
const pool_CALL = pool.pool_CALL;




 function importarCOLAS ( fecha_inicio, fecha_final ) {

 // console.log('Calculando indicadores....');

 /************************************************************************************************************
  * CONSTRUIR LOS QUERIES
  */

 // @crear queries con datos basicos
//  const colas_asterisk =
//  `SELECT * FROM queues_config`;

//  const colas_callcenter =
//  `SELECT * FROM queue_call_entry`;

//  const colas_reports =
//  `SELECT * FROM inv_colas`;

//  const colas_productividad_reports =
//  `SELECT * FROM inv_colas_productividad`;





 /*************************************************************************************************************
  * EJECUTAR LAS PROMESAS
  */
 /*

 */


 Promise.all([

  col_read_data.readCOLAS_asterisk(),
  col_read_data.readCOLAS_callcenter(),
  col_read_data.readCOLAS_reports(),
  col_read_data.readCOLASPRODUCTIVIDAD_reports(),

   ])
   .then(function (res) {

     let colas_asterisk = res[0];
     let colas_callcenter = res[1];
     let colas_reports = res[2];
     let colas_productividad_reports = res[3];


     console.log('colas_asterisk', colas_asterisk.length);
     console.log('colas_callcenter', colas_callcenter.length);
     console.log('colas_reports', colas_reports.length);
     console.log('colas_productividad_reports', colas_productividad_reports.length);


     //@TODO: validar que hay datos
     if( true ){
      col_write_data.guardarCOLAS( colas_asterisk, colas_callcenter, colas_reports, colas_productividad_reports )
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
   importarCOLAS
 };
