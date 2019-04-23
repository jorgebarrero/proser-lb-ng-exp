/*****
 *
 * CALCULOS DE INDICADORES
 *
 * Se recibe una petición del frontend que se almacena en un registro
 * de la tabla de indicadores y se actualizan los indicadores cada 20 segundos
 *
 */

// Dependencias

//  const fun = require('./cam_functions');
const cam_read_data = require('./cam_read_data');
const cam_write_data = require('./cam_write_data');

// Conectores
const pool = require('../conectores/pool');
const pool_DAT = pool.pool_DAT;
const pool_CDR = pool.pool_CDR;
const pool_QUE = pool.pool_QUE;
const pool_CALL = pool.pool_CALL;

//  // Lectura de bases de datos
//  const readDB = require('./cam_read_data');

//  const readCAMPAIGN_callcenter = readDB.readCAMPAIGN_callcenter;
//  const readCOLAS_reports = readDB.readCOLAS_reports;
//  const readCAMPANAS_reports = readDB.readCAMPANAS_reports;



function importarCAMPANAS ( fecha_inicio, fecha_final ) {

  console.log('Calculando indicadores....');

  /************************************************************************************************************
  * CONSTRUIR LOS QUERIES
  */

  // @crear queries con datos basicos

  //  const campaign_callcenter =
  //  `SELECT * FROM campaign_entry`;

  //  const colas_reports =
  //  `SELECT * FROM inv_colas`;

  //  const campanas_reports =
  //  `SELECT * FROM inv_campanas`;



  /*************************************************************************************************************
  * EJECUTAR LAS PROMESAS
  */
  /*

 */


  Promise.all([
    cam_read_data.readCAMPAIGN_callcenter(),
    cam_read_data.readCOLAS_reports(),
    // cam_read_data.readCAMPANAS_reports(),


  ])
    .then(function (res) {

      let campaign_callcenter = res[0];
      let colas_reports = res[1];
      // let campanas_reports = res[2];


      console.log('campaign_callcenter', campaign_callcenter.length);
      console.log('colas_reports', colas_reports.length);
      // console.log('campanas_reports', campanas_reports.length);


      //@TODO: validar que hay datos
      if( campaign_callcenter ){
        cam_write_data.guardarCAMPANAS( campaign_callcenter, colas_reports /*, campanas_reports */)
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
  importarCAMPANAS
};
