// Conectores
const pool = require('../conectores/pool');
const poolDat = pool.poolDat;
const poolCdr = pool.poolCdr;
const poolQue = pool.poolQue;
const poolCall = pool.poolCall;

// Funciones
const fun = require('./ind_functions');
const fechas = require('./../funciones/fechas_utilitarios');

const ind_read_data =require('./ind_read_data')

// Escribir si hay data nueva
function escribirIndicadores(readPeticiones, cdr_diario) {

let promesas_table = cdr_diario.promesas_table;
let indicadores_table = cdr_diario.indicadores_table;
let opciones = cdr_diario.opciones;
let fecha_inicio = cdr_diario.fecha_inicio;


console.log('Variables \n', fecha_inicio, promesas_table, indicadores_table, opciones);


return new Promise(function (resolve, reject) {



    let result = readPeticiones;
    let registros = [];
    let record;
    let recordData;
    let recordFields;

    let temp = fecha_inicio.substring(0, 10);
    let time_string = temp.replace(/-/g, '');
    let prefijo_id = (time_string * 10000) + 1;



// console.log('CDR', result[0]);
// console.log('AGENTES', agentsClasif[0]);

    for (var i = 0; i < result.length; i++) {

      // console.log(result[i].sql_peticiones);

      //* VARIABLE
      let id_global = 1;

      let __INDICADORES__ = 1;
      let id_inv_indicadores = result[i].id_inv_peticiones; //result[i].clave_peticiones;
      let titulo_indicadores = result[i].titulo_peticiones;
      let sql_indicadores = result[i].sql_peticiones;
      let clasificacion_llamada = result[i].clasificacion_llamada;
      let modalidad = result[i].modalidad;
      let clave_indicadores = result[i].clave_peticiones;
      let fecha_indicadores = new Date();

      let __PETICIONES__ = 1;
      let id_inv_peticiones = result[i].id_inv_peticiones;

      let __RESULTADOS__ = 1;


      let cdr = ind_read_data.indicadoresCDR(cdr_diario,  sql_indicadores)
      .then ( res => {
        console.log(res)
        return res
      })
      .catch( err => {
        console.log('Error en promesa ', err);
        process.exit();
      });


      let audit = 1;
      let agentes = 1;
      let realtime = 1;


      let __REGISTRO__ =  1;
      let chk_utilizado =  1;
      let estatus =  1;
      let usuario = 'SYSTEM';
      let createdAt = fechas.unixDate(new Date());
      let updatedAt = fechas.unixDate(new Date());


      record = {
        id_global,
        __INDICADORES__,
        id_inv_indicadores,
        titulo_indicadores,
        sql_indicadores,
        clasificacion_llamada,
        modalidad,
        clave_indicadores,
        fecha_indicadores,

        __PETICIONES__,
        id_inv_peticiones,
        __RESULTADOS__,

        cdr,
        audit,
        agentes,
        realtime,

        __REGISTRO__,
        chk_utilizado,
        estatus,
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



console.log('CAMPOS', campos.length)


    if (opciones === 'diario' )  {
      poolDat.query(` TRUNCATE TABLE ${indicadores_table}`, function (err, result, fields) {
        console.log(`--------- BORRANDO DATA ANTERIOR -------------`);
        console.log(`Eliminada la data en ${indicadores_table}`);

        poolDat.query(`INSERT INTO ${indicadores_table} (${campos}) values ?`,
        [registros],
        function (err, result, fields) {
          console.log(`--------- INSERTANDO DATA NUEVA -------------`);
          resolve(salir(err, indicadores_table, 'final' ));
          return
        });
  
        if (err) {
          console.log(err)
        }
      });


    }


    console.log(time_string);


})
.catch( err => {
  console.log('Error en promesa ', err);
  process.exit();
});


function salir(err, tabla, final) {
  console.log(`Insertada exitosamente la data en ${tabla}`);
  if (final) {
   process.exit();
  }
  if (err) {
    // console.log('\033c'); //clear screen
    console.log('FIN x error', err);
    console.log(err);
  }


  if (opciones === 'historico') {
   process.exit();
  }
}


}

/*********************************************** */
module.exports = {
  escribirIndicadores,
}