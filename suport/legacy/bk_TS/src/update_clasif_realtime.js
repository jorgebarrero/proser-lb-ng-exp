
/*
* REALTIME JSON CONVERTER
*
*/

//* Dependencies
const moment = require('moment');

//* Locals
const REALTIME = require('./update_realtime/realtime');

//* Clear terminal
console.log('\033c');//clear screen


/*
* Main function
*/


function mainLoop( ) {


  let segundos = 5;
  let tiempo = segundos * 1000;


  console.log('Intervalo de '+ segundos );
  console.log('Perioodo: ');


  REALTIME.actualizarREALTIME( );

  setInterval((tiempo) => {
    console.log('-------------------------------------------------------');
    console.log('Intervalo de REALTIME '+ segundos );
    console.log('PERIODO');
    REALTIME.actualizarREALTIME(  );
  }, tiempo )

}

//* Correr la aplicacion
mainLoop();


/******************************************************************************* */

// const fetch = require("node-fetch");

// const url =
// // 'http://10.30.4.55:3100/data/realtime.json';
// './../mw_TR/public/data/realtime.json';

// fetch(url)
//   .then(response => {

//     // console.log(response);

//     response.json().then(json => {
//      console.log(json);
//     });
//   })
//   .catch(error => {
//     console.log(error);
//   });
