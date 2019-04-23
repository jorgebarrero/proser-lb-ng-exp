/****
 *
 * IMPORTACION DE DATOS DE INVENTARIO DE CAMPANAS
 *
 *
 *
 */



//* Locals

const CAMPANAS = require('./update_inv_campanas/cam_process');
const fechas = require('./public/fecha_config');


//* Clear terminal
console.log('\033c');//clear screen

function mainLoop( ) {


  let segundos = 600;
  let tiempo = segundos * 1000;

  let fecha_inicio = fechas.fecha_inicio;
  let fecha_final = fechas.fecha_final;

  console.log('-------------------------------------------------------');
  console.log('Importación de Campañas '+ segundos );
  console.log('PERIODO', fecha_inicio, fecha_final);
  CAMPANAS.importarCAMPANAS( fecha_inicio, fecha_final );

  // setInterval((tiempo) => {

  // }, tiempo );
}

//* Correr la aplicacion
mainLoop();
/*
* Main function
* Requiere, fecha de inicio, fecha final e intervalo de refrescamiento
* Ejecuta el actualizador_cdr_diario
*/
