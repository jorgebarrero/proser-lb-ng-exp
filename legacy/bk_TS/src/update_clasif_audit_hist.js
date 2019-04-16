/*
 * Ingreso principal al sistema de actualizacion CDR clasif
 *const CDRCLASIF = require('./src/actualizador_main_variables/cdrclasif_diario');
 *
 */


//* Locals
const UCB = require('./update_clasif_audit/aud_process');
const fechas = require('./public/fecha_config');
const f = require('./funciones/fechas_utilitarios');
const moment = require('moment');

//* Clear terminal
console.log('\033c'); //clear screen

let fecha_consola;

if (process.argv[2]) {
  fecha_consola = moment(process.argv[2] + ' 00:00:00');
} else {
  fecha_consola = moment(f.date_text(new Date()) + ' 00:00:00');
}

let today     = moment(fecha_consola).format('YYYY-MM-DD HH:mm:ss');

let tomorrow  = moment(process.argv[2]).add(1,'days').format('YYYY-MM-DD HH:mm:ss');

let yesterday = moment(process.argv[2]).add(-1, 'days').format('YYYY-MM-DD HH:mm:ss');



const main_variables = {
  fecha_consola: process.argv[2],
  fecha_inicio: today,
  fecha_final: tomorrow,
  audit_table : 'a_clasif_audit_hist',
  cdr_table : 'a_clasif_cdr_hist',
  agentes_table: 'b_clasif_agentes_hist',
  opciones: 'historico',
};


/*
 * Main function
 * Requiere, fecha de inicio, fecha final e intervalo de refrescamiento
 * Ejecuta el actualizador_main_variables
 */

function mainLoop() {

  // Intervalo de tiempo de actualización
  const segundos = 25;
  const tiempo = segundos * 1000;


  console.log('-------------------------------------------------------');
  console.log('Intervalo de AUDIT ' + segundos);
  console.log('PERIODO', main_variables.fecha_inicio, main_variables.fecha_final);

  UCB.actualizarCdrBase(main_variables);

  // setInterval((tiempo) => {
  //   console.log('-------------------------------------------------------');
  //   console.log('Intervalo de AUDIT ' + segundos);
  //   console.log('PERIODO', main_variables.fecha_inicio, main_variables.fecha_final);

  //   UCB.actualizarCdrBase(main_variables);

  // }, tiempo)

}

module.exports = {
  main_variables
};

//* Correr la aplicacion
mainLoop();
