/**************** CALCULAR INDICADORES GTR ************** */

const fecha = require('../funciones/fechas_utilitarios');

// iMPORTAR
const ind_functions = require('./ind_functions');
const ind_read_data =require('./ind_read_data')
const ind_write_data = require('./ind_write_data');

/*
* Función principal
*/

function actualizarIndicadores ( cdr_diario ) {

  ind_read_data.readPeticiones(cdr_diario)
  .then ( res => {

    let readPeticiones = res
    .map( x => {
      return JSON.parse(JSON.stringify(x))
    })

    
    let cdr = ind_read_data.indicadoresCDR(cdr_diario,  sql_indicadores)
    .then ( res => {
      console.log(res)
      return res
    })


    ind_write_data.escribirIndicadores(readPeticiones, cdr_diario);

  })
  .catch( err => {
    console.log('Error en promesa ', err);
    process.exit();
  });


}


// Exportar para uso

module.exports = {
  actualizarIndicadores
}



/********************************************** */


// Promise.all([

//   ind_read_data.readPeticiones(cdr_diario),

// ]).then(function (res) {

//   console.log('promise all');

//   let readPeticiones = JSON.parse(JSON.stringify(res[0]));

//   console.log('******* PETICIONES ***********');
//   console.log('Peticiones', readPeticiones.length);
//   console.log('********************************');


//   for (i = 0; i < readPeticiones.length; i++) {

//     let sql = readPeticiones[i].sql_indicadores

//     Promise.all([

//       ind_read_data.indicadoresCDR( cdr_diario, sql),

//           ]).then(function (res) {

//             let myIndicadores = JSON.parse(JSON.stringify(res[0]));

//             console.log('********************************');
//             console.log(myIndicadores)
//             console.log('********************************');

//           }).catch(function (err) {
//             console.log(err);
//           })
//   }


//   ind_write_data.escribirIndicadores(readPeticiones, cdr_diario);

// }).catch(function (err) {
//   console.log(err);
// })

