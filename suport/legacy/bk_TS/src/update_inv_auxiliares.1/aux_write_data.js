// Conectores
const pool = require('../conectores/pool');
const pool_DAT = pool.pool_DAT;
const pool_DAT_M = pool.pool_DAT_M;
const pool_CDR = pool.pool_CDR;
const pool_QUE = pool.pool_QUE;
const pool_CALL = pool.pool_CALL;

// Funciones
const fun = require('./aux_functions.js');
const fechas = require('./../funciones/fechas_utilitarios');


 /*************************************************************************************************************
  * INSERTAR EL RESULTADO
  */

 const guardarAUXILIARES  = function( myBreak, inventario_auxiliares, inventario_auxiliares_productividad ) {

  let opciones = '';

  // Crear una promesa que borra todos los registros de la tabla dat_indicadores y la sustituye con calculos nuevos
  return new Promise(function (resolve, reject) {


      // Con la tabla de peticiones se crea un arreglo
      let result = myBreak;
      let cantidad_break = result.length;

      console.log('Longitud inventario', cantidad_break);

      // Se crea un arreglo que se insertará en la tabla con los nuevos calculos
      let registros = [];

      // Se evalua para cada peticion
      for (var i = 0; i < cantidad_break; i++) {

       //  console.log('registro', i, '---------------------------------------------');

        // Extraer las peticiones del registro para usarlo como valor del filtro

        let 	__AUXILIARES__ = 2;
        let id_inv_auxiliares = result[i].id;
        let numero_auxiliares = result[i].number;

        let nombre_auxiliares = result[i].nombre_auxiliares;

        let nombre_reportes_auxiliares =  fun.nombre_reportes_auxiliares(id_inv_auxiliares, inventario_auxiliares_productividad, nombre_auxiliares);

        let descripcion_auxiliares = result[i].description;
        let tipo_auxiliares = result[i].tipo;

        let productividad = fun.productividad(id_inv_auxiliares, inventario_auxiliares_productividad);

        let 	__REGISTRO__ = 1;
        let chk_utilizado =  1;
        let estatus_inv_auxiliares =  result[i].status;
        let usuario =  'SYSTEM';
        let createdAt = fechas.unixDate(new Date());
        let updatedAt = fechas.unixDate(new Date());

        record = {

          __AUXILIARES__,
          id_inv_auxiliares,
          nombre_auxiliares: nombre_reportes_auxiliares,
 
          nombre_reportes_auxiliares,
 
          descripcion_auxiliares,
          tipo_auxiliares,
 
          productividad,
 
          __REGISTRO__,
          chk_utilizado,
          estatus_inv_auxiliares,
          usuario,
          createdAt,
          updatedAt,
        }

        recordData = Object.values(record);
        recordFields = Object.keys(record);
        registros.push(recordData);
      }

          // LISTA DE CAMPOS PARA INSERTAR
    let campos = JSON.stringify(recordFields)
    .replace(/\"/g, ' ')
    .replace('[', '')
    .replace(']', '')


//@ TODO validar que la fecha minima borre los archivos que no corresponden




      pool_DAT_M.query(`
      TRUNCATE TABLE inv_auxiliares;
      INSERT INTO inv_auxiliares (${campos}) values ?`, [registros], function (err, result, fields) {

        if (err) {
          console.log(err)
        }
        resolve(salir(err));
        console.log('Actualizados los auxiliares en el inventario');
        process.exit(0);
        return;
      });

  })
  .catch( err => {
    console.log('Error en promesa ', err);
    process.exit(-1);
  });



  function salir(err) {
    console.log('FIN funcion');
    if (err) {
      console.log('\033c'); //clear screen
      console.log('FIN x error',  err);
      console.log(err);
      process.exit(-1);
    }
    if (opciones === '') {
      process.exit(0);
    }
  }
}


module.exports = {
  guardarAUXILIARES
}
