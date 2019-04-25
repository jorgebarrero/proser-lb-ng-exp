// Conectores
const pool = require('../conectores/pool');
const pool_DAT = pool.pool_DAT;
const pool_DAT_M = pool.pool_DAT_M;
const pool_CDR = pool.pool_CDR;
const pool_QUE = pool.pool_QUE;
const pool_CALL = pool.pool_CALL;

// Funciones
const fun = require('./uac_functions.js');
const fechas = require('./../funciones/fechas_utilitarios');

// Escribir si hay data nueva
function writeAgentesClasif(agentInventory, fecha_inicio, opciones) {

  // CREAR VARIABLES DEL OBJETO DEL PARAMETRO
  const agent_table = 'b_clasif_agentes';
  const agent_table_hist = 'b_clasif_agentes_hist';



  return new Promise(function (resolve, reject) {


    let result = agentInventory;
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


        __CLASIF_AGENTES__: 1,
        id_inv_clasif_agentes: prefijo_id + i, //prefijo_id + i,
        id_lista_agentes: time_string,

        __FECHAS__: 1,
        fecha: fun.date_text(fecha_inicio),
        fecha_planificada: fecha_inicio,
        date_text: fun.date_text(fecha_inicio),
        week_day_number: fun.week_day_number(fecha_inicio),
        week_day_name: fun.week_day_name(fecha_inicio),
        segundos_inicio: 0,

        __AGENTES__: 1,
        agentes_cdr: (JSON.stringify(result[i])),
        id_inv_agentes: result[i].id_inv_agentes,
        tipo_agentes: result[i].tipo_agentes,
        numero_agentes: result[i].numero_agentes,
        nombre_agentes: result[i].nombre_reportes_agentes,
        doc_ident_agentes: result[i].doc_ident_agentes,
        doc_complementario_agentes: result[i].doc_complementario_agentes,

        __SUPERVISORES__: 1,
        supervisores_cdr: fun.supervisores_cdr(result[i]),
        id_inv_supervisores: result[i].id_inv_supervisores,
        nombre_supervisores: result[i].nombre_supervisores,

        __SUPLENTES__: 1,
        suplentes_cdr: null,
        id_inv_suplentes: null,
        nombre_suplentes: null,

        __HORARIOS__: 1,
        horarios_cdr: result[i].horario,
        id_inv_horarios: result[i].id_inv_horarios,
        nombre_horarios: result[i].nombre_horarios, //fun.nombre_horarios(result[i].horario),
        horarios_inicio: fun.horarios_inicio(result[i].horario, fun.week_day_number(fecha_inicio)),
        horarios_final: fun.horarios_final(result[i].horario, fun.week_day_number(fecha_inicio)),
        segundos_horario_inicio: fun.hora_a_segundos(fun.horarios_inicio(result[i].horario, fun.week_day_number(fecha_inicio))),
        segundos_horario_final: fun.hora_a_segundos(fun.horarios_final(result[i].horario, fun.week_day_number(fecha_inicio))),

        __REGISTRO__: 1,
        id_global: 1,
        chk_utilizado: 1,
        estatus: result[i].estatus_inv_agentes,
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


    /*************************************************************** */
    if (opciones === 'diario') {

      // TRUNCATE TABLE ${agent_table};
      // DELETE FROM ${agent_table} WHERE 1;

      pool_DAT_M.query(`
        TRUNCATE TABLE  ${agent_table};
        INSERT INTO ${agent_table} (${campos}) values ?`,
      [registros],
      function (err, result, fields) {
        console.log(`Insertada exitosamente la data en ${agent_table}, ${registros.length}`);
        // resolve(salir(err, agent_table_hist, 'final'));
        return;
      });

      pool_DAT_M.query(`
        DELETE FROM ${agent_table_hist} WHERE id_lista_agentes = ${time_string};
        INSERT INTO ${agent_table_hist} (${campos}) values ?`,
      [registros],
      function (err, result, fields) {
        console.log(`Insertada exitosamente la data en ${agent_table_hist},  ${registros.length}`);
        resolve(salir(err, agent_table_hist, 'final'));
        return;
      });

    }

    /*************************************************************** */
    // if (opciones === 'historico') {

    //   pool_DAT_M.query(`
    //   DELETE FROM ${agent_table_hist} WHERE id_lista_agentes = ${time_string};
    //   INSERT INTO ${agent_table_hist} (${campos}) values ?`,
    //   [registros],
    //   function (err, result, fields) {
    //     resolve(salir(err, agent_table_hist, 'final'));
    //     return
    //   });

    // }

    console.log(time_string);

  });

  /*************************************************************** */

  function salir(err, tabla, final) {
    console.log('*** TODO ACTUALIZADO ***');
    if (final) {
      process.exit();
    }
    if (err) {
      console.log('\033c'); //clear screen
      console.log('FIN x error', err);
      console.log(err);
      process.exit();
    }

    if (opciones === 'historico') {
      process.exit();
    }

    process.exit();
  }



}

/*********************************************** */
module.exports = {
  writeAgentesClasif,
};