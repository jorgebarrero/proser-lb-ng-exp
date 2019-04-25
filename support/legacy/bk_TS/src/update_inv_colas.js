/****
 *
 * IMPORTACION DE DATOS DE INVENTARIO DE AGENTES
 * Se leen tres fuentes de datos, cdr, audit y realtime
 * Se ca lculan los indicadores para cada set de datos filtrados
 *
 */


//* Locals

const COLAS = require('./update_inv_colas/col_process');
const fechas = require('./public/fecha_config');



//* Clear terminal
console.log('\033c');//clear screen


function mainLoop( ) {


  let segundos = 600;
  let tiempo = segundos * 1000;

  let fecha_inicio = fechas.fecha_inicio;
  let fecha_final = fechas.fecha_final;

  console.log('-------------------------------------------------------');
  console.log('Importación de Colas '+ segundos );
  console.log('PERIODO', fecha_inicio, fecha_final);
  COLAS.importarCOLAS( fecha_inicio, fecha_final );

  setInterval((tiempo) => {

  }, tiempo );
}

//* Correr la aplicacion
mainLoop();
/*
* Main function
* Requiere, fecha de inicio, fecha final e intervalo de refrescamiento
* Ejecuta el actualizador_cdr_diario
*/
