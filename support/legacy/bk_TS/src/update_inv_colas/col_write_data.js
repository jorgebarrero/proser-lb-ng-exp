

// Conectores
const pool = require('../conectores/pool');
const pool_DAT = pool.pool_DAT;
const pool_DAT_M = pool.pool_DAT_M;
const pool_CDR = pool.pool_CDR;
const pool_QUE = pool.pool_QUE;
const pool_CALL = pool.pool_CALL;

// Funciones
const fun = require('./col_functions.js');
const fechas = require('./../funciones/fechas_utilitarios');


// Escribir si hay data nueva
const guardarCOLAS  = function( colas_asterisk, colas_callcenter, colas_reports ) {

  // CREAR VARIABLES DEL OBJETO DEL PARAMETRO
  const colas_table = 'inv_colas';
  // const colas_table_hist = 'b_clasif_colas_hist';
  const opciones = 'diario';



  return new Promise(function (resolve, reject) {

    // Con la tabla de peticiones se crea un arreglo
    let result = colas_callcenter;
    // let stored_fun = colas_productividad_reports;
    let cantidad_colas = result.length;

    let registros = [];
    let record;
    let recordData;
    let recordFields;


    // Se evalua para cada peticion
    for (var i = 0; i < cantidad_colas; i++) {


      // Extraer las peticiones del registro para usarlo como valor del filtro
      let __COLAS__ =   1;
      let id_inv_colas =   result[i].id;
      let numero_colas =   result[i].queue;
      let nombre_colas =   fun.nombre_colas(numero_colas, colas_asterisk);
      let nombre_reportes_colas =    fun.nombre_colas(numero_colas, colas_asterisk);

      let __CLIENTES__ =   1;
      let __CAMPANAS__ =   1;
      let __SERVICIOS__ =   1;
      let __ESCALAS__ =   1;

      let __REGISTRO__ =   1;
      let chk_utilizado =    1;
      let estatus_inv_colas =   result[i].estatus;
      let usuario =    'SYSTEM';
      let createdAt =   fun.createdAt();
      let updatedAt =   fun.updatedAt();


      record = {

        __COLAS__,
        id_inv_colas,
        numero_colas,
        nombre_colas,
        nombre_reportes_colas,

        __CLIENTES__,
        __CAMPANAS__,
        __SERVICIOS__,
        __ESCALAS__,

        __REGISTRO__,
        chk_utilizado,
        estatus_inv_colas,
        usuario,
        createdAt,
        updatedAt,

      };


      recordData = Object.values(record);
      recordFields = Object.keys(record);
      registros.push(recordData);

    }


    // LISTA DE CAMPOS PARA INSERTAR
    let campos = JSON.stringify(recordFields)
      .replace(/\"/g, ' ')
      .replace('[', '')
      .replace(']', '');




    pool_DAT_M.query(`

      INSERT INTO ${colas_table} (${campos}) values ?
      
      ON DUPLICATE KEY UPDATE

      __COLAS__  = '2',
      __CLIENTES__  = '2',
      __CAMPANAS__  = '2',
      __SERVICIOS__  = '2',
      __ESCALAS__ = '2',
      __REGISTRO__  = '2',


      numero_colas  = VALUES(numero_colas),
      nombre_colas   = VALUES(nombre_colas),
      estatus_inv_colas  = VALUES(estatus_inv_colas),

      chk_utilizado  = VALUES(chk_utilizado),
      usuario  = VALUES(usuario),
      createdAt  = VALUES(createdAt),
      updatedAt  = VALUES(updatedAt)

      ;
      
    `,
    [registros],
    function (err, result, fields) {
      console.log('--------- INSERTANDO DATA NUEVA -------------');
      resolve(salir(err, colas_table, 'fin'));
      console.log('Actualizadas las campanas en el inventario');
      process.exit(0);
      return;
    })
      .catch( err => {
        console.log('Error en promesa ', err);
        process.exit(-1);
      });
  
    function salir(err, tabla, final) {
      console.log(`Insertada exitosamente la data en ${tabla}`);
      if (final ){
        process.exit(0);
      }
      if (err) {
        console.log('\033c'); //clear screen
        console.log('FIN x error',  err);
        console.log(err);
        process.exit(-1);
      }
  
      if (opciones === 'historico') {
        process.exit(0);
      }
    }
  

  });


};


module.exports = {
  guardarCOLAS
};
