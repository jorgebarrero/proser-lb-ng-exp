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

const guardarAGENTES  = function( agent, inventario_agentes, inventario_agentes_supervisores ) {

  let opciones = '';


  // Crear una promesa que borra todos los registros de la tabla dat_indicadores y la sustituye con calculos nuevos
  return new Promise(function (resolve, reject) {

    let stored_agent = inventario_agentes_supervisores;
    // Con la tabla de peticiones se crea un arreglo
    let result = agent;

    let cantidad_audit = result.length;

    console.log('Longitud inventario', cantidad_audit);

    // Se crea un arreglo que se insertará en la tabla con los nuevos calculos
    let registros = [];

    // Se evalua para cada peticion
    // Se evalua para cada peticion
    for (var i = 0; i < cantidad_audit; i++) {

      console.log('registro', i, result[i].id, '---------------------------------------------');

      // Extraer las peticiones del registro para usarlo como valor del filtro
      let id_inv_agentes = result[i].id;
      let numero_agentes = result[i].number;



      // Calcular los indicadores para cada registro usando solo la data filtrada que aplica
      registros.push([

        __AGENTES__ = 2,
        id_inv_agentes = result[i].id,

        numero_agentes = result[i].number,
        nombre_agentes = result[i].name,
        tipo_agentes = result[i].type,


        nombre_reportes_agentes =  fun.nombre_reportes_agentes(id_inv_agentes, nombre_agentes, stored_agent),
        
        
        doc_ident_agentes = fun.doc_ident_agentes(id_inv_agentes, stored_agent),
        doc_complementario_agentes = fun.doc_complementario_agentes(id_inv_agentes, stored_agent),


        __SUPERVISORES__ = 1,
        id_inv_supervisores =  fun.id_inv_supervisores(id_inv_agentes, stored_agent),
        codigo_supervisores =  fun.codigo_supervisores(id_inv_agentes, stored_agent),
        nombre_supervisores =  fun.nombre_supervisores(id_inv_agentes, stored_agent),
        doc_ident_supervisores = fun.doc_ident_supervisores(id_inv_agentes, stored_agent),
        doc_complementario_supervisores =   fun.doc_complementario_supervisores(id_inv_agentes, stored_agent),
        igual_supervisores =  fun.igual_supervisores(id_inv_agentes, stored_agent),

        __COLAS__ = 1,
        colas_agentes =   fun.colas_agentes(id_inv_agentes, stored_agent),

        __HORARIOS__ = 1,

        id_inv_horarios =  fun.id_inv_horarios(id_inv_agentes, stored_agent),
        horario =   fun.horario(id_inv_agentes, stored_agent),
        nombre_horarios =   fun.nombre_horarios(id_inv_agentes, stored_agent),


        __REGISTRO__ = 1,
        chk_utilizado =  1,
        estatus_inv_agentes =  result[i].estatus,
        usuario =  'SYSTEM',
        createdAt = fechas.unixDate(new Date()),
        updatedAt = fechas.unixDate(new Date()),



      ]);
    }

    //@ TODO validar que la fecha minima borre los archivos que no corresponden





    let sqlQuery = `

__AGENTES__,
id_inv_agentes,
numero_agentes,
nombre_agentes,
tipo_agentes,
nombre_reportes_agentes,
doc_ident_agentes,
doc_complementario_agentes,

__SUPERVISORES__,
id_inv_supervisores,
codigo_supervisores,
nombre_supervisores,
doc_ident_supervisores,
doc_complementario_supervisores,
igual_supervisores,

__COLAS__,
colas_agentes,

__HORARIOS__,
id_inv_horarios,
horario,
nombre_horarios,

__REGISTRO__,
chk_utilizado,
estatus_inv_agentes,
usuario,
createdAt,
updatedAt

`;


    pool_DAT_M.query(`
  TRUNCATE TABLE inv_agentes;
  INSERT INTO inv_agentes (${sqlQuery}) values ?`, [registros], function (err, result, fields) {

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
