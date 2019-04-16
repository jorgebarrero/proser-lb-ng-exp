// Conectores
const pool = require('../conectores/pool');
const poolDat = pool.poolDat;
const poolDat_M = pool.poolDat_M;
const poolCdr = pool.poolCdr;
const poolQue = pool.poolQue;
const poolCall = pool.poolCall;

// Funciones
const fun = require('./ucc_functions.js');
const fechas = require('./../funciones/fechas_utilitarios');

// Escribir si hay data nueva
function writeColasClasif(colasInventory, fecha_inicio, colas_diario) {

  // CREAR VARIABLES DEL OBJETO DEL PARAMETRO
  const colas_table = 'b_clasif_colas';
  const colas_table_hist = 'b_clasif_colas_hist';
  const opciones = colas_diario.opciones;



  return new Promise(function (resolve, reject) {



    let result = colasInventory;
    let registros = [];
    let record;
    let recordData;
    let recordFields;



    let temp = fecha_inicio.substring(0, 10);
    let time_string = temp.replace(/-/g, '');
    let prefijo_id = (time_string * 10000) + 1;

    // console.log(result[0]);

    for (var i = 0; i < result.length; i++) {

      record = {

        id_global: 1,
        __CLASIF_COLAS__: 2,
        id_inv_clasif_colas: prefijo_id + i,
        id_lista_colas: time_string,

        __FECHAS__: 2,
        fecha: fechas.date_text(fecha_inicio),
        fecha_planificada: fecha_inicio,
        date_text: fechas.date_text(fecha_inicio),
        week_day_number: fechas.week_day_number(fecha_inicio),
        week_day_name: fechas.week_day_name(fecha_inicio),
        segundos_inicio: 0,

        __COLAS__: 2,
        colas_cdr: result[i].colas_cdr,
        id_inv_colas: result[i].id_inv_colas,
        numero_colas: result[i].numero_colas,
        nombre_colas: result[i].nombre_reportes_colas,

        __CLIENTES__: 1,
        clientes_cdr: result[i].clientes_cdr,
        id_inv_clientes: result[i].id_inv_clientes,
        nombre_clientes: result[i].nombre_clientes,

        __SERVICIOS__: 1,
        servicios_cdr: result[i].servicios_cdr,
        id_inv_servicios: result[i].id_inv_servicios,
        nombre_servicios: result[i].nombre_servicios,

        __CAMPANAS__: 1,
        campanas_cdr: result[i].campanas_cdr,
        id_inv_campanas: result[i].id_inv_campanas,
        nombre_campanas: result[i].nombre_campanas,

        __ESCALAS__: 1,
        escalas_cdr: result[i].escalas_cdr,
        id_inv_escalas: result[i].id_inv_escalas,
        nombre_escalas: result[i].nombre_escalas,
        rojo: result[i].rojo,
        amarillo: result[i].amarillo,
        verde: result[i].verde,
        azul: result[i].azul,

        __REGISTRO__: 2,
        chk_utilizado: 1,
        estatus: result[i].estatus_inv_colas,
        usuario: 'SYSTEM',
        createdAt: fechas.unixDate(new Date()),
        updatedAt: fechas.unixDate(new Date()),

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


    // console.log(JSON.stringify(campos));
    // console.log(JSON.stringify(registros));


    /******************************************************************* */
    if (opciones === 'diario') {

      poolDat_M.query(`
      TRUNCATE TABLE ${colas_table};
      INSERT INTO ${colas_table} (${campos}) values ?`,
      [registros],
      function (err, result, fields) {
        console.log(`--------- INSERTANDO DATA NUEVA ${colas_table} -------------`);

        return;
      });

      poolDat_M.query(`
      DELETE FROM ${colas_table_hist} WHERE id_lista_colas = ${time_string};
      INSERT INTO ${colas_table_hist} (${campos}) values ?`,
      [registros],
      function (err, result, fields) {
        console.log(`--------- INSERTANDO DATA NUEVA ${colas_table_hist} -------------`);
        resolve(salir(err, colas_table_hist, 'final'));
        return;
      });

    }

    console.log(time_string);

    /******************************************************************* */
    // if (opciones === 'historico') {

    //     poolDat_M.query(`
    //     DELETE FROM ${colas_table_hist} WHERE id_lista_colas = ${time_string};
    //     INSERT INTO ${colas_table_hist} (${campos}) values ?`,
    //     [registros],
    //     function (err, result, fields) {
    //       console.log(`--------- INSERTANDO DATA NUEVA ${opciones} -------------`);
    //       resolve(salir(err, colas_table_hist, 'final'));
    //       return
    //     });
    // }

  });

  /******************************************************************* */

  function salir(err, tabla, final) {
    console.log('*** TODO ACTUALIZADO ***');
    if (final) {
      process.exit(0);
    }
    if (err) {
      // console.log('\033c'); //clear screen
      console.log('FIN x error', err);
      console.log(err);
      process.exit(-1);
    }

    if (opciones === 'historico') {
      process.exit(0);
    }

    process.exit(0);
  }


}

/*********************************************** */
module.exports = {
  writeColasClasif,
};
