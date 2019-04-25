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
// const conn = require('../conectores/conexiones');
// const con_CDR = conn.con_CDR;
// const con_DAT = conn.con_DAT;
// const con_QUE = conn.con_QUE;

const pool = require('../conectores/pool');
const pool_DAT = pool.pool_DAT;
const pool_CDR = pool.pool_CDR;
const pool_QUE = pool.pool_QUE;
const pool_CALL = pool.pool_CALL;

// const update_cd_base = require('../update_clasif_cdr');
// const cdr_table = update_cd_base.cdr_table;
// const fecha_inicio = update_cd_base.fecha_inicio;
// const fecha_final = update_cd_base.fecha_final;

// LEER ULTIMO REGISTRO GRABADO
const readLastCdrRecorded = function(cdr_table, fecha_inicio, fecha_final) {
  return new Promise(function(resolve, reject) {
    // console.log('readLastCdrRecorded: ', cdr_table, fecha_inicio, fecha_final);

    let querySQL = `
      SELECT
      min(calldate) as FECHA_MIN,
      max(calldate) as FECHA_MAX,
      min(id) as MIN_ID,
      max(id) as MAX_ID,
      count(id) as COUNT_ID

      FROM
      ${cdr_table}

      WHERE
      calldate >= '${fecha_inicio}'
      AND
      calldate < '${fecha_final}'

      ORDER BY
      id
      DESC LIMIT 1

      `;

    resolve(pool_DAT.query(querySQL));

    reject('Error');
  });
};

// LEER ULTIMO REGISTRO PRODUCIDO
const readLastCdrProduced = function(cdr_table, fecha_inicio, fecha_final) {
  return new Promise(function(resolve, reject) {
    // console.log('readLastCdrProduced: ', cdr_table, fecha_inicio, fecha_final);

    let querySQL = `
      SELECT

      DATE_FORMAT(min(calldate) , '%Y-%m-%d %H-%i-%s') as FECHA_MIN,
      DATE_FORMAT(max(calldate) , '%Y-%m-%d %H-%i-%s') FECHA_MAX,
      min(id) as MIN_ID,
      max(id) as MAX_ID,
      count(id) as COUNT_ID

      FROM
      cdr

      WHERE
      calldate >= '${fecha_inicio}'
      AND
      calldate < '${fecha_final}'

      ORDER BY
      id
      DESC LIMIT 1
      `;

    resolve(pool_CDR.query(querySQL));

    reject('Error');
  });
};

// LEER CLASIFICACION DE AGENTES
const readAgentsClasif = function(agentes_table, fecha_inicio, fecha_final) {
  return new Promise(function(resolve, reject) {
    let querySQL = `

      SELECT
      *
      FROM ${agentes_table}

      WHERE
      fecha_planificada >= '${fecha_inicio}'
      AND
      fecha_planificada < '${fecha_final}'

      `;

    resolve(pool_DAT.query(querySQL));

    reject('Error');
  });
};

// LEER CLASIFICACION DE COLAS
const readQueuesClasif = function(colas_table, fecha_inicio, fecha_final) {
  return new Promise(function(resolve, reject) {
    // console.log('readQueuesClasif: ', colas_table, fecha_inicio, fecha_final);

    let querySQL = `

      SELECT
      *
      FROM ${colas_table}

      WHERE
      fecha_planificada >= '${fecha_inicio}'
      AND
      fecha_planificada < '${fecha_final}'


      `;

    resolve(pool_DAT.query(querySQL));

    reject('Error');
  });
};

// LEER QUELOG
const readQueLog = function(fecha_inicio, fecha_final) {
  return new Promise(function(resolve, reject) {
    // console.log('readQueLog: ', fecha_inicio, fecha_final);

    let querySQL = `

      SELECT
      *
      FROM
      queuelog

      WHERE
      time >= '${fecha_inicio}'
      AND
      time < '${fecha_final}'
      `;

    resolve(pool_QUE.query(querySQL));

    reject('Error');
  });
};

// LEER CDR

//     DATE_FORMAT(calldate , '%Y-%m-%d %H-%i-%s') as calldate,
const readCdr = function(id, fecha_inicio, fecha_final) {
  return new Promise(function(resolve, reject) {
    if (id === null) {
      id = 0;
    } else {
      console.log('A PARTIR DEL NUMERO', id);
    }

    let querySQL = `
      SELECT


      DATE_FORMAT(calldate , '%Y-%m-%d %H:%i:%s') as calldate,
      DATE_FORMAT(calldate , '%H:%i:%s') as calltime,
      clid,
      src,
      dst,
      dcontext,
      channel,
      dstchannel,
      lastapp,
      lastdata,
      duration,
      billsec,
      disposition,
      amaflags,
      accountcode,
      uniqueid,
      userfield,
      recordingfile,
      cnum,
      cnam,
      outbound_cnum,
      outbound_cnam,
      dst_cnam,
      did,
      id


      FROM
      cdr

      WHERE
      calldate >= '${fecha_inicio}'
      AND
      calldate < '${fecha_final}'
      AND
      id > ${id}

      ORDER BY
      id

      `;

    resolve(pool_CDR.query(querySQL));

    reject('Error');
  });
};

module.exports = {
  readLastCdrRecorded,
  readLastCdrProduced,
  readAgentsClasif,
  readQueuesClasif,
  readQueLog,
  readCdr
};
