/*
 * Ingreso principal al sistema de actualizacion CDR clasif
 *const CDRCLASIF = require('./src/actualizador_agentes_diario/cdrclasif_diario');
 *
 */


//* Locals
const UCB = require('./update_clasif_agentes/uac_process');
const fechas = require('./public/fecha_config');

//* Clear terminal
console.log('\033c'); //clear screen


// fecha opcional por terminal
const fecha_consola =  `${process.argv[2]} 00:00:00`;

// Variables de lectura para data
const agentes_diario = {
  fecha_inicio: seleccionarFecha(fechas.fecha_inicio, fecha_consola),
  // fecha_final: fechas.fecha_final,
  // cdr_table : 'a_clasif_cdr',
  // colas_table: 'b_clasif_colas',
  agentes_table: 'b_clasif_agentes',
  opciones: 'diario',
};

function seleccionarFecha( fecha_inicio, fecha_consola) {
  let resultado = fecha_inicio;

  if(fecha_consola) {
    resultado = fecha_consola;
  }

  return resultado;
}

/*
 * Main function
 * Requiere, fecha de inicio, fecha final e intervalo de refrescamiento
 * Ejecuta el actualizador_agentes_diario
 */

function mainLoop() {

  // console.log('-------------------------------------------------------');
  // Intervalo de tiempo de actualización
  const segundos = 600;
  const tiempo = segundos * 1000;



  console.log('-------------------------------------------------------');
  console.log('Intervalo de AGENTES CLASIF ' + segundos);
  console.log('PERIODO', agentes_diario.fecha_inicio );
  console.log('fecha_consola', fecha_consola);
  


  UCB.actualizarAgentesClasif(agentes_diario);

  // setInterval((tiempo) => {
  //   console.log('-------------------------------------------------------');
  //   console.log('Intervalo de AGENTES CLASIF ' + segundos);
  //   console.log('PERIODO', agentes_diario.fecha_inicio );

  //   UCB.actualizarAgentesClasif(agentes_diario, agentes_diario.fecha_inicio);

  // }, tiempo)

}

module.exports = {
  agentes_diario,
  mainLoop
};

//* Correr la aplicacion
mainLoop();
