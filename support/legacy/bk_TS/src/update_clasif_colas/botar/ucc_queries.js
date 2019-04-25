// Queries SQL

// Dependencias
const update_cdr_base = require('./../../update_cdr_base.js');

  // fecha de la actualizacion (hoy por defecto)
  const fecha_inicio = update_cdr_base.fecha_inicio;
  const fecha_final = update_cdr_base.fecha_final;

  // Variables de lectura para data
  const cdr_table = update_cdr_base.cdr_table;
  const colas_table = update_cdr_base.colas_table;
  const agentes_table = update_cdr_base.agentes_table;
  const opciones = update_cdr_base.opciones;

  // LECTURA DEL ULTIMO NUMERO PROCESADO
  const lastCdrQuery =  `
  SELECT
  min(calldate) as FECHA_MIN,
  max(calldate) as FECHA_MAX,
  min(id) as MIN_ID,
  max(id) as MAX_ID,
  count(id) as COUNT_ID

  FROM ${cdr_table}

  WHERE
  calldate >= '${fecha_inicio}'
  AND
  calldate < '${fecha_final}'

  ORDER BY
  id
  DESC LIMIT 1
  `;

    // LECTURA DE REGISTRO QUE SE AGREGARAN
  const ultimoCdr = `
  SELECT min(id) as MIN_ID,
  max(id) as MAX_ID,
  count(id) as COUNT_ID

  FROM cdr
  WHERE

  calldate >= '${fecha_inicio}'
  AND
  calldate < '${fecha_final}'
  ORDER BY
  id
  DESC LIMIT 1
  `;

      // LECTURA DE COLAS CLASIFICADAS
  const colasQuery = `
  SELECT
  *

  FROM ${colas_table}

  WHERE
  desde >= '${fecha_inicio}'
  AND
  desde < '${fecha_final}' `;

  // LECTURA DE AGENTES CLASIFICADOS
  const agentesQuery = `
  SELECT
  *

  FROM
  ${agentes_table}

  WHERE desde >= '${fecha_inicio}'
  AND
  desde < '${fecha_final}' `;

  const clasifcdrQuery = "";

  // LECTURA DEL QUELOG
  const queueQuery =   `
  SELECT
  *
  *
  FROM
  queuelog

  WHERE
  time >= '${fecha_inicio}'
  AND
  time < '${fecha_final}'
  `;


  module.exports = {
    lastCdrQuery,
    ultimoCdr,
    colasQuery,
    agentesQuery,
    clasifcdrQuery,
    queueQuery,
  }
