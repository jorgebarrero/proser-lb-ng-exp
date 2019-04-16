/*
*
* CLASIFICACION DEL CDR
* Funcion que clasifica cada llamada del CDR y crea una tabla nueva clasificada
*
*/

const fecha = require('../funciones/fechas_utilitarios');

// Calculos de columnas de llamadas
const ucb_functions = require('./uac_functions');
// const ucb_model= require('./ucb_model');
const ucb_read_data =require('./uac_read_data');
const ucb_write_data = require('./uac_write_data');
/*
*
* Función principal
*
*/

function actualizarAgentesClasif ( agentes_diario ) {


  // CREAR VARIABLES DEL OBJETO DEL PARAMETRO
  const fecha_inicio = agentes_diario.fecha_inicio;
  const agentes_table = 'inv_agentes';
  const opciones = agentes_diario.opciones;


  // Leer ultimo registro grabado
  ucb_read_data.readAgentInventory( agentes_table )
    .then ( res => {
      // console.log('Ejecutando readLastCdrRecorded');
      let agentInventory = JSON.parse(JSON.stringify(res));
      console.log('******* AGENTES CLASIF ***********');
      console.log('Agentes: ', agentInventory.length);
      console.log('********************************');

      if (agentInventory.length < 1) {
        console.log('No hay data de agentes');
        process.exit(0);
      } else {
        console.log('EN PROCESO......');
        ucb_write_data.writeAgentesClasif( agentInventory, fecha_inicio, opciones);
      }

    })
    .catch(function(err){
      console.log(err);
    });

}



// Exportar para uso

module.exports = {
  actualizarAgentesClasif
}

