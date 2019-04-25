

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
 const guardarCOLAS  = function( colas_asterisk, colas_callcenter, colas_reports, colas_productividad_reports ) {

  // CREAR VARIABLES DEL OBJETO DEL PARAMETRO
  const colas_table = 'inv_colas';
  // const colas_table_hist = 'b_clasif_colas_hist';
  opciones = 'diario';



  return new Promise(function (resolve, reject) {

      // Con la tabla de peticiones se crea un arreglo
      let result = colas_callcenter;
      let stored_fun = colas_productividad_reports;
      let cantidad_colas = result.length;

      let registros = [];
      let record;
      let recordData;
      let recordFields;

      let temp = fecha_inicio.substring(0, 10);
      let time_string = temp.replace(/-/g, '');
      let prefijo_id = (time_string * 10000) + 1;

      // Se evalua para cada peticion
      for (var i = 0; i < cantidad_colas; i++) {


        // Extraer las peticiones del registro para usarlo como valor del filtro
        let id_inv_colas = result[i].id;
        let numero_colas = result[i].queue;
        let nombre_colas;
        let nombre_reportes_colas;
        let tipo_colas;

        let uso_produccion;
        let escalas;

        let id_inv_clientes;
        let codigo_clientes;
        let nombre_clientes;

        let id_inv_campanas;
        let codigo_campanas;
        let nombre_campanas;

        let tiempo_after_call;

        let id_inv_servicios;
        let codigo_servicios;
        let nombre_servicios;

        let chk_utilizado;
        let estatus_inv_colas;
        let usuario;
        let createdAt;
        let updatedAt;



        record = {

          __COLAS__:  2,
          id_inv_colas:  result[i].id,
          numero_colas:  result[i].queue,
          nombre_colas:  fun.nombre_colas(numero_colas, colas_asterisk),
          nombre_reportes_colas:  fun.nombre_reportes_colas(id_inv_colas, colas_productividad_reports, nombre_colas),
          tipo_colas:  fun.tipo_colas(id_inv_colas, colas_productividad_reports, 0),
          uso_produccion:  fun.uso_produccion(id_inv_colas, colas_productividad_reports, 0),

          __CLIENTES__:  1,
          id_inv_clientes:   fun.id_inv_clientes(id_inv_colas, colas_productividad_reports, nombre_colas),
          codigo_clientes:   fun.codigo_clientes(id_inv_colas, colas_productividad_reports, nombre_colas),
          nombre_clientes:   fun.nombre_clientes(id_inv_colas, colas_productividad_reports, nombre_colas),

          __CAMPANAS__:  1,
          id_inv_campanas:   fun.id_inv_campanas(id_inv_colas, colas_productividad_reports, nombre_colas),
          codigo_campanas:   fun.codigo_campanas(id_inv_colas, colas_productividad_reports, nombre_colas),
          nombre_campanas:   fun.nombre_campanas(id_inv_colas, colas_productividad_reports, nombre_colas),
          tiempo_after_call:   fun.tiempo_after_call(id_inv_colas, colas_productividad_reports, nombre_colas),

          __SERVICIOS__:  1,
          id_inv_servicios:   fun.id_inv_servicios(id_inv_colas, colas_productividad_reports, nombre_colas),
          codigo_servicios:   fun.codigo_servicios(id_inv_colas, colas_productividad_reports, nombre_colas),
          nombre_servicios:   fun.nombre_servicios(id_inv_colas, colas_productividad_reports, nombre_colas),

          __ESCALAS__:  1,
          id_inv_escalas:   fun.id_inv_escalas(id_inv_colas, colas_productividad_reports, nombre_colas),
          nombre_escalas:   fun.nombre_escalas(id_inv_colas, colas_productividad_reports, nombre_colas),
          rojo:   fun.rojo(id_inv_colas, colas_productividad_reports, nombre_colas),
          amarillo:   fun.amarillo(id_inv_colas, colas_productividad_reports, nombre_colas),
          verde:   fun.verde(id_inv_colas, colas_productividad_reports, nombre_colas),
          azul:   fun.azul(id_inv_colas, colas_productividad_reports, nombre_colas),


          __REGISTRO__:  1,
          chk_utilizado:   1,
          estatus_inv_colas:  result[i].estatus,
          usuario:   'SYSTEM',
          createdAt:  fun.createdAt(),
          updatedAt:  fun.updatedAt(),

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




  pool_DAT_M.query(`
  TRUNCATE TABLE ${colas_table};
  INSERT INTO ${colas_table} (${campos}) values ?`,
    [registros],
    function (err, result, fields) {
      console.log(`--------- INSERTANDO DATA NUEVA -------------`);
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
}
