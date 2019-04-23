/*
*
* CLASIFICACION DEL CDR
* Funcion que clasifica cada llamada del CDR y crea una tabla nueva clasificada
SELECT date_text, day_week_number, count(date_text) as resgistros, sum(llamadas_recibidas) as recibidas, sum(llamadas_realizadas) as realizadas FROM `a_clasif_cdr_hist` WHERE 1 GROUP by date_text

DELETE FROM `a_clasif_cdr_hist` WHERE date_text = '2018-08-25'
*/

const fecha = require('../funciones/fechas_utilitarios');

// Calculos de columnas de llamadas
const aud_functions = require('./aud_functions');
// const aud_model= require('./aud_model');
const aud_read_data =require('./aud_read_data');
const aud_write_data = require('./aud_write_data');
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

  const audit_table = main_variables.audit_table;

  const agentes_table = main_variables.agentes_table;
  const colas_table = main_variables.colas_table;
  const cdr_table =  main_variables.cdr_table;

  const opciones = main_variables.opciones;

  Promise.all([

    aud_read_data.readCdrClasif ( cdr_table, fecha_inicio, fecha_final ),
    aud_read_data.readAgentsClasif ( agentes_table, fecha_inicio, fecha_final ),
    aud_read_data.readAuxiliares (  ),

    aud_read_data.readAudit ( fecha_inicio, fecha_final ),

  ]).then (function (res) {

      console.log('promise all');

      let cdr = JSON.parse(JSON.stringify(res[0]));
      let agentsClasif = JSON.parse(JSON.stringify(res[1]));
      let auxiliares = JSON.parse(JSON.stringify(res[2]));

      let audit = JSON.parse(JSON.stringify(res[3]));

      console.log('******* COLAS CLASIF ***********');
      console.log('Agentes', agentsClasif.length);
      console.log('Auxiliares', auxiliares.length);
      console.log('Cdr', cdr.length);
      console.log('Audit', audit.length);
      console.log('********************************');


      if( agentsClasif.length > 0 && auxiliares.length > 0 && cdr.length > 0 && audit.length > 0) {

      aud_write_data.escribirAuditBase( main_variables, audit, cdr, agentsClasif, auxiliares, fecha_inicio, fecha_final);

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
