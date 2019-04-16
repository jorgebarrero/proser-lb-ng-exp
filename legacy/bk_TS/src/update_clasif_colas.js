/*
 * Ingreso principal al sistema de actualizacion CDR clasif
 *const CDRCLASIF = require('./src/actualizador_colas_diario/cdrclasif_diario');
 *
 */


//* Locals
const process = require('./update_clasif_colas/ucc_process');
const fechas = require('./public/fecha_config');

//* Clear terminal
console.log('\033c'); //clear screen


// Variables de lectura para data
const colas_diario = {
  fecha_inicio: fechas.fecha_inicio,
  // fecha_final: fechas.fecha_final,
  // cdr_table : 'a_clasif_cdr',
  // colas_table: 'b_clasif_colas',
  colas_table: 'b_clasif_colas',
  opciones: 'diario',
}
/*
 * Main function
 * Requiere, fecha de inicio, fecha final e intervalo de refrescamiento
 * Ejecuta el actualizador_colas_diario
 */

function mainLoop() {

  // Intervalo de tiempo de actualización
  const segundos = 600;
  const tiempo = segundos * 1000;

  console.log('-------------------------------------------------------');
  console.log('Intervalo de COLAS CLASIF ' + segundos);
  console.log('PERIODO', colas_diario.fecha_inicio );
  process.actualizarColasClasif(colas_diario);

  // setInterval((tiempo) => {
  //   console.log('-------------------------------------------------------');
  //   console.log('Intervalo de COLAS CLASIF ' + segundos);
  //   console.log('PERIODO', colas_diario.fecha_inicio );

  //   process.actualizarColasClasif(colas_diario, colas_diario.fecha_inicio);

  // }, tiempo)

}

module.exports = {
  colas_diario
}

//* Correr la aplicacion
mainLoop();
