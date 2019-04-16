/****
 *
 * CALCULO DE INDICADORES EN BACKEND
 * Se leen tres fuentes de datos, cdr, audit y realtime
 * Se ca lculan los indicadores para cada set de datos filtrados
 *
 */


//* Locals
//const fecha = require('./src/utilitarios/fechas_utilitarios');
const INDICADORES = require('./src/actualizador_indicadores/indicadores');
//const inicializacion = require('./src/public/config');
const fechas = require('./src/public/fecha_config');
// let inicio = new Date(inicializacion.fecha_inicio);
// let final = new Date(inicializacion.fecha_final);

//* Clear terminal
console.log('\033c');//clear screen


function mainLoop( ) {


  let segundos = 5;
  let tiempo = segundos * 1000;

  let fecha_inicio = fechas.fecha_inicio;
  let fecha_final = fechas.fecha_final;


  console.log('Intervalo de '+ segundos );
  console.log('Perioodo', fecha_inicio, ' al ', fecha_final);


  INDICADORES.calcularINDICADORES( fecha_inicio, fecha_final );

  setInterval((tiempo) => {
    console.log('-------------------------------------------------------');
    console.log('Intervalo de Calculo INDICADORES '+ segundos );
    console.log('PERIODO', fecha_inicio, fecha_final);
    INDICADORES.calcularINDICADORES( fecha_inicio, fecha_final );
  }, tiempo )

}

//* Correr la aplicacion
mainLoop();
/*
* Main function
* Requiere, fecha de inicio, fecha final e intervalo de refrescamiento
* Ejecuta el actualizador_cdr_diario
*/
