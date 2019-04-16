/*
*
* CLASIFICACION DEL CDR
* Funcion que clasifica cada llamada del CDR y crea una tabla nueva clasificada
SELECT date_text, day_week_number, count(date_text) as resgistros, sum(llamadas_recibidas) as recibidas, sum(llamadas_realizadas) as realizadas FROM `a_clasif_cdr_hist` WHERE 1 GROUP by date_text

DELETE FROM `a_clasif_cdr_hist` WHERE date_text = '2018-08-25'
*/

const fecha = require('../funciones/fechas_utilitarios');

// Calculos de columnas de llamadas
const ucb_functions = require('./ucb_functions');
// const ucb_model= require('./ucb_model');
const ucb_read_data =require('./ucb_read_data');
const ucb_write_data = require('./ucb_write_data');
/*
*
* Función principal
*
*/

function actualizarCdrBase ( cdr_diario ) {


  // CREAR VARIABLES DEL OBJETO DEL PARAMETRO
  const fecha_inicio = cdr_diario.fecha_inicio;
  const fecha_final = cdr_diario.fecha_final;

  const cdr_table = cdr_diario.cdr_table;

  const agentes_table = cdr_diario.agentes_table;
  const colas_table = cdr_diario.colas_table;

  const opciones = cdr_diario.opciones;


  console.log('**************** TABLAS *****************');
  console.log('cdr_table', cdr_table);
  console.log('agentes_table', agentes_table);
  console.log('colas_table', colas_table);


  // Leer ultimo registro grabado
  ucb_read_data.readLastCdrRecorded( cdr_table, fecha_inicio, fecha_final )
    .then ( res => {
    // console.log('Ejecutando readLastCdrRecorded');
      let lastCdrRecorded = JSON.parse(JSON.stringify(res[0]));
      // console.log('RESULTADO', lastCdrRecorded);

      // Leer ultimo registro producido
      ucb_read_data.readLastCdrProduced( cdr_table, fecha_inicio, fecha_final )
        .then ( res => {
          // console.log('Ejecutando readLastCdrProduced');
          let lastCdrProduced = JSON.parse(JSON.stringify(res[0]));
          console.log('RESULTADO', lastCdrProduced);
          console.log('FECHAS', fecha_inicio, fecha_final);


          let ultimo_grabado = lastCdrRecorded.MAX_ID === null? 0: lastCdrRecorded.MAX_ID;
          let ultimo_producido = lastCdrProduced.MAX_ID;

          let fecha_min = lastCdrRecorded.FECHA_MIN;
          let fecha_max = lastCdrRecorded.FECHA_MAX;

          let registro_grabar = ultimo_producido - ultimo_grabado;

          console.log('ultimo_grabado: ', ultimo_grabado, 'ultimo_producido ', ultimo_producido);


          // Evaluar si hay registros nuevos
          if ( (ultimo_producido > ultimo_grabado & opciones === 'diario') || opciones === 'historico') {

            console.log(`Hay ${registro_grabar} datos nuevos `);


            Promise.all([

              ucb_read_data.readAgentsClasif ( agentes_table, fecha_inicio, fecha_final ),
              ucb_read_data.readQueuesClasif ( colas_table, fecha_inicio, fecha_final ),
              ucb_read_data.readQueLog ( fecha_inicio, fecha_final ),
              ucb_read_data.readCdr ( ultimo_grabado, fecha_inicio, fecha_final ),
            ]).then (function (res) {

              console.log('promise all');

              let agentsClasif = JSON.parse(JSON.stringify(res[0]));
              let queuesClasif = JSON.parse(JSON.stringify(res[1]));
              let queLog = JSON.parse(JSON.stringify(res[2]));
              let cdr = JSON.parse(JSON.stringify(res[3]));

              console.log('******* CDR CLASIF ***********');
              console.log('Agentes', agentsClasif.length);
              console.log('Colas', queuesClasif.length);
              console.log('Que', queLog.length);
              console.log('Cdr', cdr.length);
              console.log('********************************');

              // let temp = queuesClasif
              // .map( x => {
              //   return { colas: x.numero_colas, fecha: x.date_text }
              // })

              // console.log( temp )


              if( agentsClasif.length > 0 && queuesClasif.length > 0 && cdr.length > 0) {

                ucb_write_data.escribirCdrBase( cdr_diario, cdr, queLog, agentsClasif, queuesClasif, fecha_min, fecha_max);

              } else {
                console.log('No hay data para la clasificación');
                if (opciones === 'historico'){
                  console.log('Saliente del historico');
                  process.exit();
                }

              }


            }).catch(function(err) {
              console.log(err);
            });


          } else {
            console.log('No hay datos nuevos');
            if (opciones === 'historico'){
              console.log('Saliente del historico');
              process.exit();
            }
          }


        });

    })
    .catch(function(err){
      console.log(err);
    });

}



// Exportar para uso

module.exports = {
  actualizarCdrBase
};
