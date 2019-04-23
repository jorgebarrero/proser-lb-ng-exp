/*
*
* CLASIFICACION DEL CDR
* Funcion que clasifica cada llamada del CDR y crea una tabla nueva clasificada
SELECT date_text, day_week_number, count(date_text) as resgistros, sum(llamadas_recibidas) as recibidas, sum(llamadas_realizadas) as realizadas FROM `a_clasif_cdr_hist` WHERE 1 GROUP by date_text

DELETE FROM `a_clasif_cdr_hist` WHERE date_text = '2018-08-25'
*/

const fecha = require('../funciones/fechas_utilitarios');

// Calculos de columnas de llamadas
const aar_functions = require('./aar_functions');
// const aar_model= require('./aar_model');
const aar_read_data =require('./aar_read_data')
const aar_write_data = require('./aar_write_data');
/*
*
* Función principal
*
*/

function actualizarCdrBase ( main_variables ) {

  console.log( 'main_variables \n ', main_variables );

  // CREAR VARIABLES DEL OBJETO DEL PARAMETRO
  const fecha_inicio = main_variables.fecha_inicio;
  const fecha_final = main_variables.fecha_final;

  const personas_table = main_variables.personas_table;

  const agentes_table = main_variables.agentes_table;
  const colas_table = main_variables.colas_table;
  const cdr_table =  main_variables.cdr_table;
  const audit_table = main_variables.audit_table;

  const opciones = main_variables.opciones;

  Promise.all([

    aar_read_data.readCdrClasif ( cdr_table, fecha_inicio, fecha_final ),
    aar_read_data.readAgentsClasif ( agentes_table, fecha_inicio, fecha_final ),
    aar_read_data.readAuxiliares (  ),
    aar_read_data.readAudit ( audit_table, fecha_inicio, fecha_final ),

    aar_read_data.readRealTime ( 'url' ),

  ]).then (function (res) {

      console.log('promise all');

      let cdr = JSON.parse(JSON.stringify(res[0]));
      let agentsClasif = JSON.parse(JSON.stringify(res[1]));
      let auxiliares = JSON.parse(JSON.stringify(res[2]));
      let audit = JSON.parse(JSON.stringify(res[3]));

      let realtime_agentes = JSON.parse(JSON.stringify(res[4]));

      console.log('******* PERSONAS CLASIF ***********');
      console.log('Agentes', agentsClasif.length, agentes_table);
      console.log('Auxiliares', auxiliares.length);
      console.log('Cdr', cdr.length, cdr_table);
      console.log('Audit', audit.length, audit_table);
      console.log('Realtime', realtime_agentes.length);
      console.log('********************************');

      // console.log('REALTIME-FILE', realtime_agentes);
      

      if( agentsClasif.length > 0 || ( auxiliares.length > 0 && cdr.length > 0 && audit.length > 0)) {

      aar_write_data.escribirAuditBase( 
        main_variables, audit, cdr, agentsClasif, auxiliares, fecha_inicio, fecha_final, realtime_agentes);

    } else {
      console.log('No hay data para la clasificación');

      if (opciones === 'historico') {
        process.exit();
      }

    }


  }).catch(function(err) {
      console.log(err);
  })

}

// Exportar para uso

module.exports = {
  actualizarCdrBase
}


