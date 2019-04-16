/*
*
* REALTIME
*
*/

// Dependecias

const fs = require('fs');


// Calculos de columnas de llamadas
const funciones_realtime = require('./../funciones/funciones_realtime');

// Lectura de bases de datos
const readDB = require('./readDb_realtime');
const readRealTime = readDB.readRealTime;



/*********************************************************************************
* REALTIME
*/

function actualizarREALTIME(

)
  {

      // LEER EL ARCHIVO DE TEXTO DEL PHP
  const url =
  '/var/www/html/proser/bk_TS/src/public/realtime/realtime.json';


  // MESSAGES
  console.log('REALTIME ******** ');
  console.log('***********************************************************************');


  function updateREAL( realtime_colas, realtime_agentes ) {

  fs.writeFile('/var/www/html/proser/bk_TS/src/public/realtime/agentes.json', realtime_agentes, function (err) {
    if (err)
        return console.log(err);
    console.log('agentes.json listo');
  });

  fs.writeFile('/var/www/html/preports/mw_REAL/public/data/agentes.json', realtime_agentes, function (err) {
    if (err)
        return console.log(err);
    console.log('agentes.json listo');
  });

  fs.writeFile('/var/www/html/proser/bk_TS/src/public/realtime/colas.json', realtime_colas, function (err) {
    if (err)
        return console.log(err);
    console.log('colas.json listo');
  });

  fs.writeFile('/var/www/html/preports/mw_REAL/public/data/colas.json', realtime_colas, function (err) {
    if (err)
        return console.log(err);
    console.log('colas.json listo');
  });

  return 'listo';
}


  Promise.all([
    readRealTime(url),
    ])
    .then(function (res) {

      if(res) {

          let realtime = res[0];

          let realtime_colas = JSON.stringify(funciones_realtime.crearColasRealtime(realtime)) ;
          //console.log(realtime_colas);
          let realtime_agentes = JSON.stringify(funciones_realtime.crearAgentesRealtime(realtime)) ;
          // console.log(realtime_agentes);

          updateREAL( realtime_colas, realtime_agentes );
          console.log('Actualizados los JSON' );
        }
    }
  )
    .catch(error => {
      console.log(error);
    });

  }




module.exports = {
  actualizarREALTIME
}