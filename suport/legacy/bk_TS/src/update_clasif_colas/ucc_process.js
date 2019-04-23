/*
*
* CLASIFICACION DEL CDR
* Funcion que clasifica cada llamada del CDR y crea una tabla nueva clasificada
*
*/

const fecha = require('./../funciones/fechas_utilitarios');

// Calculos de columnas de llamadas
const ucb_functions = require('./ucc_functions');
// const ucb_model= require('./ucb_model');
const ucb_read_data =require('./ucc_read_data');
const ucb_write_data = require('./ucc_write_data');
/*
*
* Función principal
*
*/

function actualizarColasClasif ( colas_diario ) {


  // CREAR VARIABLES DEL OBJETO DEL PARAMETRO
  const fecha_inicio = colas_diario.fecha_inicio;
  const colas_table = 'inv_colas';
  const opciones = colas_diario.opciones;


  // Leer ultimo registro grabado
  ucb_read_data.readColasInventory( colas_table )
    .then ( res => {
    // console.log('Ejecutando readLastCdrRecorded');
      let colasInventory = JSON.parse(JSON.stringify(res));

      console.log('******* COLAS CLASIF HIST ***********');
      console.log('Colas: ', colasInventory.length);
      console.log('Opciones: ', colas_diario);
      console.log('********************************');



      if (colasInventory.length < 1) {
        console.log('No hay data de colas');
        process.exit(0);
      } else {
        ucb_write_data.writeColasClasif( colasInventory, fecha_inicio, colas_diario);
      }



    })
    .catch(function(err){
      console.log(err);
    });

}



// Exportar para uso

module.exports = {
  actualizarColasClasif
};
