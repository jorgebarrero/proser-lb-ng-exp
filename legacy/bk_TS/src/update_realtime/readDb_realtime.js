/*
*
* LECTURA DE LAS BASES DE DATOS Y TABLAS PARA CLASIFICAR LLAMADAS
*
* Se lee cual el es ultimo registro del cdr
* El ultimo registro del cdr clasificado
* colas, agentes y queue log
* los parametros de consulta estan en una variable en formato SQL
*/

// Compartidos

const fs = require('fs');


// READ REALTIME
const readRealTime  = function(url){
  return new Promise(function(resolve, reject){

    fs.readFile( url, 'utf8', function (err, data) {
      if (err) console.log(err);

      resolve( JSON.parse(data));

    });

  })
}



// Exportar para uso
module.exports = {
  readRealTime,
}
