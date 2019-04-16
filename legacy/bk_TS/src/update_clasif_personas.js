/*
 * Ingreso principal al sistema de actualizacion CDR clasif
 *const CDRCLASIF = require('./src/actualizador_main_variables/cdrclasif_diario');
 *
 */


//* Locals
const UCB = require('./update_clasif_personas/aar_process');
const fechas = require('./public/fecha_config');

//* Clear terminal
console.log('\033c'); //clear screen

// Variables de lectura para data
const main_variables = {
  fecha_inicio: fechas.fecha_inicio,
  fecha_final: fechas.fecha_final,
  personas_table : 'a_clasif_personas',
  cdr_table : 'a_clasif_cdr',
  colas_table: 'b_clasif_colas',
  agentes_table: 'b_clasif_agentes',
  audit_table: 'a_clasif_audit',
  opciones: 'diario',
}

// const main_variables = {
//   fecha_consola: '2018-08-01',
//   fecha_inicio: '2018-08-01 00:00:00',
//   fecha_final: '2018-08-02 00:00:00',
//   personas_table : 'a_clasif_personas_hist',
//   cdr_table : 'a_clasif_cdr_hist',
//   agentes_table: 'b_clasif_agentes_hist',
//   opciones: 'diario',
// }


/*
 * Main function
 * Requiere, fecha de inicio, fecha final e intervalo de refrescamiento
 * Ejecuta el actualizador_main_variables
 */

function mainLoop() {

  console.log('-------------------------------------------------------');
  // Intervalo de tiempo de actualización
  const segundos = 25;
  const tiempo = segundos * 1000;


  UCB.actualizarCdrBase(main_variables);

  setInterval((tiempo) => {
    console.log('-------------------------------------------------------');
    console.log('Intervalo de PERSONAS ' + segundos);
    console.log('PERIODO', main_variables.fecha_inicio, main_variables.fecha_final);

    UCB.actualizarCdrBase(main_variables);

  }, tiempo)

}

module.exports = {
  main_variables
}

//* Correr la aplicacion
mainLoop();
