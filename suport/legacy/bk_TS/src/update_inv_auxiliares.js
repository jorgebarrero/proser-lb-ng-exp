/****
 *
 * IMPORTACION DE DATOS DE INVENTARIO DE AUXILIARES
 * Se leen tres fuentes de datos, cdr, audit y realtime
 * Se ca lculan los indicadores para cada set de datos filtrados
 *
 */


//* Locals

const AUXILIARES = require('./update_inv_auxiliares/aux_process');
const fechas = require('./public/fecha_config');


//* Clear terminal
console.log('\033c');//clear screen

// Variables de lectura para data
const auxiliares_inventario = {
  fecha_inicio: fechas.fecha_inicio,
  // fecha_final: fechas.fecha_final,
  // cdr_table : 'a_clasif_cdr',
  // colas_table: 'b_clasif_colas',
  auxiliares_table: '',
  opciones: 'diario',
}

function mainLoop( ) {


  let segundos = 600;
  let tiempo = segundos * 1000;

  let fecha_inicio = fechas.fecha_inicio;
  let fecha_final = fechas.fecha_final;

  console.log('-------------------------------------------------------');
  console.log('Importación de Agentes '+ segundos );
  console.log('PERIODO', fecha_inicio);
  AUXILIARES.importarAUXILIARES( fecha_inicio );

  // setInterval((tiempo) => {

  // }, tiempo )
}


module.exports = {
  auxiliares_inventario
}

//* Correr la aplicacion
mainLoop();
/*
* Main function
* Requiere, fecha de inicio, fecha final e intervalo de refrescamiento
* Ejecuta el actualizador_cdr_diario
*/
