/*
 * Ingreso principal al sistema de actualizacion CDR clasif
 *const CDRCLASIF = require('./src/actualizador_cdr_diario/cdrclasif_diario');
 *
 */


//* Locals
const UCB = require('./update_clasif_cdr/ucb_process');
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

// if (fecha_consola) {
//   fechas.fecha_inicio = new Date(process.argv[2]);
//   fechas.fecha_final = f.nextDay(fecha_inicio, 1);

// } else {
//   fechas.fecha_inicio = fechas.fecha_inicio;
// }


let today     = moment(fecha_consola).format('YYYY-MM-DD HH:mm:ss');

let tomorrow  = moment(process.argv[2]).add(1,'days').format('YYYY-MM-DD HH:mm:ss');

let yesterday = moment(process.argv[2]).add(-1, 'days').format('YYYY-MM-DD HH:mm:ss');


// Variables de lectura para data
const cdr_diario = {
  fecha_consola: process.argv[2],
  fecha_inicio: today,
  fecha_final: tomorrow,
  cdr_table : 'a_clasif_cdr_hist',
  colas_table: 'b_clasif_colas_hist',
  agentes_table: 'b_clasif_agentes_hist',
  opciones: 'historico',
};

/*
 * Main function
 * Requiere, fecha de inicio, fecha final e intervalo de refrescamiento
 * Ejecuta el actualizador_cdr_diario
 */

function mainLoop() {

  const segundos = 5;
  const tiempo = segundos * 1000;


  // Intervalo de tiempo de actualización


  console.log('-------------------------------------------------------');
  console.log(`HISTORICO CDR - ${cdr_diario.fecha_consola}`);
  // console.log('Intervalo de CDR ' + segundos);
  // console.log('PERIODO', cdr_diario.fecha_inicio, cdr_diario.fecha_final);
  // console.log('BASE', fechas.fecha_inicio, fechas.fecha_final);

  UCB.actualizarCdrBase(cdr_diario);

  // setInterval((tiempo) => {
  //   console.log('-------------------------------------------------------');
  //   console.log('Intervalo de CDR ' + segundos);
  //   console.log('PERIODO', cdr_diario.fecha_inicio, cdr_diario.fecha_final);
  //   console.log('BASE', fechas.fecha_inicio, fechas.fecha_final);

  //   UCB.actualizarCdrBase(cdr_diario);

  // }, tiempo)

}

module.exports = {
  cdr_diario,
  mainLoop
};

//* Correr la aplicacion
mainLoop();
