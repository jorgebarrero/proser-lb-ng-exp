/*
 * Ingreso principal al sistema de actualizacion CDR clasif
 *const CDRCLASIF = require('./src/actualizador_cdr_diario/cdrclasif_diario');
 *
 */


//* Locals
const UCB = require('./update_clasif_cdr/ucb_process');
const fechas = require('./public/fecha_config');

//* Clear terminal
console.log('\033c'); //clear screen


// Variables de lectura para data
const cdr_diario = {
  fecha_inicio: fechas.fecha_inicio,
  fecha_final: fechas.fecha_final,
  cdr_table : 'a_clasif_cdr',
  colas_table: 'b_clasif_colas',
  agentes_table: 'b_clasif_agentes',
  opciones: 'diario',
};
/*
 * Main function
 * Requiere, fecha de inicio, fecha final e intervalo de refrescamiento
 * Ejecuta el actualizador_cdr_diario
 */

function mainLoop() {

  console.log('-------------------------------------------------------');
  // Intervalo de tiempo de actualización
  const segundos = 25;
  const tiempo = segundos * 1000;


  UCB.actualizarCdrBase(cdr_diario);

  setInterval((tiempo) => {
    console.log('-------------------------------------------------------');
    console.log('Intervalo de CDR ' + segundos);
    console.log('PERIODO', cdr_diario.fecha_inicio, cdr_diario.fecha_final);

    UCB.actualizarCdrBase(cdr_diario);

  }, tiempo);

}

module.exports = {
  cdr_diario
};

//* Correr la aplicacion
mainLoop();
