// Conectores
const pool = require('../conectores/pool');
const pool_DAT = pool.pool_DAT;
const pool_DAT_M = pool.pool_DAT_M;
const pool_CDR = pool.pool_CDR;
const pool_QUE = pool.pool_QUE;
const pool_CALL = pool.pool_CALL;

// Funciones
const fun = require('./aia_functions.js');
const fechas = require('./../funciones/fechas_utilitarios');



/*************************************************************************************************************
  * INSERTAR EL RESULTADO
  */

const guardarAGENTES  = function( agent, inventario_agentes) {

  let opciones = '';


  // Crear una promesa que borra todos los registros de la tabla dat_indicadores y la sustituye con calculos nuevos
  return new Promise(function (resolve, reject) {

    // let stored_agent = inventario_agentes_supervisores;
    // Con la tabla de peticiones se crea un arreglo
    let result = agent;

    let cantidad_audit = result.length;

    console.log('Longitud inventario', cantidad_audit);

    // Se crea un arreglo que se insertará en la tabla con los nuevos calculos
    let registros = [];

    // Se evalua para cada peticion
    for (var i = 0; i < cantidad_audit; i++) {


      // Extraer las peticiones del registro para usarlo como valor del filtro

      let __AGENTES__ = 1;
      let id_inv_agentes = result[i].id;

      let numero_agentes = result[i].number;
      let nombre_agentes = result[i].name;
      let nombre_reportes_agentes = result[i].name;
      let tipo_agentes = result[i].type;

      let __SUPERVISORES__ = 1;


      let __COLAS__ = 1;


      let __HORARIOS__ = 1;



      let __REGISTRO__ = 1;
      let chk_utilizado =  1;
      let estatus_inv_agentes =  result[i].estatus;
      let usuario =  'SYSTEM';
      let createdAt = fechas.unixDate(new Date());
      let updatedAt = fechas.unixDate(new Date());


      // Calcular los indicadores para cada registro usando solo la data filtrada que aplica
      registros.push([

        __AGENTES__,
        __SUPERVISORES__,
        __COLAS__,
        __HORARIOS__,
        __REGISTRO__,

        id_inv_agentes,
        numero_agentes,
        nombre_agentes,
        nombre_reportes_agentes,
        tipo_agentes,
        estatus_inv_agentes,

        chk_utilizado,
        usuario,
        createdAt,
        updatedAt

      ]);
    }

    //@ TODO validar que la fecha minima borre los archivos que no corresponden


    let sqlQuery = `

        __AGENTES__,
        __SUPERVISORES__,
        __COLAS__,
        __HORARIOS__,
        __REGISTRO__,

        id_inv_agentes,
        numero_agentes,
        nombre_agentes,
        nombre_reportes_agentes,
        tipo_agentes,
        estatus_inv_agentes,

        chk_utilizado,
        usuario,
        createdAt,
        updatedAt

    `;


    pool_DAT_M.query(`

  INSERT INTO inv_agentes (${sqlQuery}) values ?
  ON DUPLICATE KEY UPDATE

    __AGENTES__  = '2',
    __SUPERVISORES__  = '2',
    __COLAS__  = '2',
    __HORARIOS__  = '2',
    __REGISTRO__  = '2',

    numero_agentes  = VALUES(numero_agentes),
    nombre_agentes = VALUES(nombre_agentes),
    tipo_agentes  = VALUES(tipo_agentes),
    estatus_inv_agentes  = VALUES(estatus_inv_agentes),

    chk_utilizado  = VALUES(chk_utilizado),
    usuario  = VALUES(usuario),
    createdAt  = VALUES(createdAt),
    updatedAt  = VALUES(updatedAt)

    ;
  
  
  `, [registros], function (err, result, fields) {

      if (err) {
        console.log(err);
      }
      resolve(salir(err));
      console.log('Actualizados los agentes en el inventario');
      process.exit(0);
      return;

    })
      .catch( err => {
        console.log('Error en promesa ', err);
        process.exit(-1);
      });


  });

  function salir(err) {
    console.log('FIN funcion');
    if (err) {
      console.log('\033c'); //clear screen
      console.log('FIN x error',  err);
      console.log(err);
      process.exit(-1);
    } else {
      process.exit(0);
    }
    if (opciones === '') {
      process.exit(0);
    }
  }

};

module.exports = {
  guardarAGENTES
};
