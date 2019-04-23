/****
 *
 * IMPORTACION DE DATOS DE INVENTARIO DE AGENTES
 * Se leen tres fuentes de datos, cdr, audit y realtime
 * Se ca lculan los indicadores para cada set de datos filtrados
 *
 */


//* Locals

const AGENTES = require('./update_inv_agentes/aia_process');
const fechas = require('./public/fecha_config');


//* Clear terminal
console.log('\033c');//clear screen

// Variables de lectura para data
const agentes_inventario = {
  fecha_inicio: fechas.fecha_inicio,
  // fecha_final: fechas.fecha_final,
  // cdr_table : 'a_clasif_cdr',
  // colas_table: 'b_clasif_colas',
  agentes_table: '',
  opciones: 'diario',
};
/*
 * Main function
 * Requiere, fecha de inicio, fecha final e intervalo de refrescamiento
 * Ejecuta el actualizador_agentes_inventario
 */


function mainLoop( ) {


  let segundos = 600;
  let tiempo = segundos * 1000;

  let fecha_inicio = fechas.fecha_inicio;
  let fecha_final = fechas.fecha_final;

  console.log('Importación de Agentes del origen '+ segundos );
  console.log('PERIODO', fecha_inicio);
  AGENTES.importarAGENTES( fecha_inicio );


  // setInterval((tiempo) => {
  //   console.log('-------------------------------------------------------');
  //   console.log('Importación de Agentes del origen '+ segundos );
  //   console.log('PERIODO', fecha_inicio);
  //   AGENTES.importarAGENTES( fecha_inicio );
  // }, tiempo )
}

module.exports = {
  agentes_inventario
};

//* Correr la aplicacion
mainLoop();
/*
* Main function
* Requiere, fecha de inicio, fecha final e intervalo de refrescamiento
* Ejecuta el actualizador_cdr_diario
*/
