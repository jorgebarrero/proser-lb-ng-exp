import * as pool from 'src/connectors/pool';
import { removeRowDataPacket } from '../../helpers/mysql-helper.js';
import * as qlogFunctions from './update_cdr_qlog_functions';
const moment = require('moment');

// Read maximum id in original data
function readCdrMaxId() {
  return new Promise((resolve, reject) => {
    let querySQL = `SELECT max(id) as maxId FROM cdr`;
    resolve(pool.poolCdr.query(querySQL));
    reject('Error');
  });
};

// Read maximum id in imported data
function readCdrQlogNextId() {
  return new Promise((resolve, reject) => {
    let querySQL = `SELECT (max(cdr_qlog_id) + 1) as maxId FROM cdr_qlog`;
    resolve(pool.poolDat.query(querySQL));
    reject('Error');
  });
};

// Read actual cdr records
function readCdr(maxId) {
  console.log('maxId', maxId);
  let startId = 1;
  if(!maxId || maxId === null){
    startId = 1;
  } else {
    startId = maxId;
  }
  console.log('startId', startId);
  return new Promise((resolve, reject) => {

    let querySQL = `
    SELECT id as cdr_qlog_id, uniqueid as cdr_qlog_uniqueid FROM cdr WHERE id >= ${startId} LIMIT ${process.env.CDR_BATCH_LIMIT}
    `;
    console.log('querySQL', querySQL);
    resolve(pool.poolCdr.query(querySQL));
    reject('Error');
  });
};


// Read actual cdr records
function readCdrMinMaxDates(maxId) {
  console.log('maxId', maxId);
  let startId = 1;
  if(!maxId || maxId === null){
    startId = 1;
  } else {
    startId = maxId;
  }


  let endId = parseInt(process.env.CDR_BATCH_LIMIT) + parseInt(startId)

  console.log('startId', startId, 'endId', endId);

  return new Promise((resolve, reject) => {
    let querySQL = `
    SELECT min(calldate) as min_calldate, max(calldate) as max_calldate FROM cdr WHERE id >= ${startId} and id < ${endId}
    `;
    console.log('querySQL min & max dates', querySQL);
    resolve(pool.poolCdr.query(querySQL));
    reject('Error');
  });
};

// LEER QUELOG
const readQueLog = function(start_date, end_date) {
  return new Promise(function(resolve, reject) {
    console.log('readQueLog: ', start_date, end_date);

    let querySQL = `
      SELECT * FROM queuelog WHERE time >= '${start_date}' AND time < '${end_date}'
      `;

      console.log('querySQL quelog', querySQL);

    resolve(pool.poolQue.query(querySQL));

    reject('Error');
  });
};


// write procesed records
function writeCdrQlog(data) {
  return new Promise((resolve, reject) => {
    // Define custom variables
    let cdr_table = 'cdr_qlog';
    let myfields = Object.keys(data[0]);

    let myRecords = (data)
    .map( x => {
      return Object.values(x);
    });

    let updateFieldsArray = myfields
    .map( (x, index) => {
      let coma = ',';
      let end = myfields.length + 1;
      if (end = index){
        coma = '';
      } else {
        coma = ',';
      }
      return `${x} = VALUE(${x})` + coma
    })

    let updateFields = updateFieldsArray[1]

    // console.log('updateFields', updateFields);

    let querySQL = `INSERT INTO ${cdr_table} (${myfields}) values ?
    ON DUPLICATE KEY UPDATE ${updateFields}

    `;

    // console.log('Records to insert', myRecords);


    // Record in database
    resolve(
      pool.poolDat.query(querySQL,[myRecords],
        function(err, result, fields) {
          console.log('--------- INSERTANDO DATA NUEVA -------------');

          if (err){
            console.log('Error en tabla cdr_qlog', err);
          } else {
            console.log('Todo ha sido actualizado');
            // process.exit();
          }
          return;
        }
      ));

    reject('Error');
  });

};


/* ************** RUN PROGRAM ************** */
// Check for maximum values to define where to start
async function checkMaxIdValues() {

  // Maximum number to read
  let maxCdrId = await readCdrMaxId();
  let maxCdrIdNum = removeRowDataPacket(maxCdrId)[0].maxId;
  console.log('maxCdrIdNum', maxCdrIdNum);
  // maximunm written record
  let maxCdrMainId = await readCdrQlogNextId();
  let maxCdrMainIdnum = removeRowDataPacket(maxCdrMainId)[0].maxId;
  console.log('maxCdrMainIdnum', maxCdrMainIdnum);

  return { maxCdrIdNum,  maxCdrMainIdnum } ;
}

// Runing actual program
async function updateAsyncCdrQlog( ) {
  //* Clear terminal
  console.clear();

  console.log('/*************/ Updating CDR_DATES /*************/ ');

  // Maximum number to read
  let maxCdrId = await readCdrMaxId();
  let maxCdrIdNum = removeRowDataPacket(maxCdrId)[0].maxId;
  console.log('maxCdrIdNum', maxCdrIdNum);
  // maximunm written record
  let maxCdrMainId = await readCdrQlogNextId();
  let maxCdrMainIdnum = removeRowDataPacket(maxCdrMainId)[0].maxId;
  console.log('maxCdrMainIdnum', maxCdrMainIdnum);


  let minAndMax = await readCdrMinMaxDates(maxCdrMainIdnum);
  let start = moment(minAndMax[0].min_calldate).format('YYYY-MM-DD');
  let end = moment(minAndMax[0].max_calldate).format('YYYY-MM-DD');



  console.log('minAndMax', minAndMax);
  console.log('start',  start);
  console.log('end',  end);

  let queuelog = await readQueLog(start, end);
  console.log('*****************************************');

  console.log('queuelog LENGTH', queuelog.length);

    // Validate if pending records to update
if(maxCdrMainIdnum <= maxCdrIdNum  ) {
  let result = await readCdr(maxCdrMainIdnum);
  // read qlog

  console.log('result', result.length);

  let extendedResult = result
  .map( x => {

    x.cdr_qlog_ivroption_time = (qlogFunctions.cdr_qlog_field_time(queuelog, x.cdr_qlog_uniqueid, 'IVROPTION'));
    x.cdr_qlog_enterqueue_time = qlogFunctions.cdr_qlog_field_time(queuelog, x.cdr_qlog_uniqueid, 'ENTERQUEUE');
    x.cdr_qlog_connect_time = qlogFunctions.cdr_qlog_field_time(queuelog, x.cdr_qlog_uniqueid, 'CONNECT');
    x.cdr_qlog_completecaller_time = qlogFunctions.cdr_qlog_field_time(queuelog, x.cdr_qlog_uniqueid, 'COMPLETECALLER');
    x.cdr_qlog_completeagent_time = qlogFunctions.cdr_qlog_field_time(queuelog, x.cdr_qlog_uniqueid, 'COMPLETEAGENT');
    x.cdr_qlog_abandon_time = qlogFunctions.cdr_qlog_field_time(queuelog, x.cdr_qlog_uniqueid, 'ABANDON');
    // Complete
    x.cdr_qlog_complete_time = qlogFunctions.cdr_qlog_complete_time(x.cdr_qlog_completecaller_time, x.cdr_qlog_completeagent_time, x.cdr_qlog_abandon_time);
    // x.__DURATION_TIME___
    x.cdr_qlog_secs_at_ivr = qlogFunctions.cdr_qlog_secs_diff(x.cdr_qlog_enterqueue_time, x.cdr_qlog_ivroption_time);
    x.cdr_qlog_secs_at_queue = qlogFunctions.cdr_qlog_secs_diff(x.cdr_qlog_connect_time, x.cdr_qlog_enterqueue_time);
    x.cdr_qlog_secs_at_end = qlogFunctions.cdr_qlog_secs_diff(x.cdr_qlog_complete_time, x.cdr_qlog_enterqueue_time);
    x.cdr_qlog_secs_at_abandon = qlogFunctions.cdr_qlog_secs_diff(x.cdr_qlog_abandon_time, x.cdr_qlog_enterqueue_time);

    x.cdr_qlog_secs_at_wait = qlogFunctions.cdr_qlog_secs_diff(x.cdr_qlog_connect_time, x.cdr_qlog_enterqueue_time);
    x.cdr_qlog_secs_at_hold = qlogFunctions.cdr_qlog_secs_at_hold();

    x.cdr_qlog_secs_at_operation = qlogFunctions.cdr_qlog_secs_diff(x.cdr_qlog_complete_time, x.cdr_qlog_ivroption_time);
    x.cdr_qlog_secs_at_talk = qlogFunctions.cdr_qlog_secs_diff(x.cdr_qlog_complete_time, x.cdr_qlog_connect_time);
    // x.__QLOG_RESULT__
    x.cdr_qlog_result_hung_by = qlogFunctions.cdr_qlog_result_hung_by(x.cdr_qlog_completecaller_time,  x.cdr_qlog_completeagent_time);
    x.cdr_qlog_result_hung_agent = qlogFunctions.cdr_qlog_result_hung_agent( x.cdr_qlog_completeagent_time);

    return x
  })

  // console.log('extendedResutl', extendedResult);


  let cleanResult = removeRowDataPacket(result)
  // console.log('result', cleanResult);
  let written = await writeCdrQlog(extendedResult);
} else {
  console.log('No hay registros nuevos por actualizar');
}
}


module.exports = {
  updateAsyncCdrQlog
}
