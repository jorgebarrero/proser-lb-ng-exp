import * as pool from '../../../connectors/pool';
import{ removeRowDataPacket } from '../../helpers/mysql-helper.js';
// import * as moment from 'moment/src/moment';
const moment = require(`moment`);


import * as datesFunctions from './update_cdr_dates_functions';
import * as typeFunctions from './update_cdr_type_functions';
import * as qlogFunctions from './update_cdr_qlog_functions';
import * as callFunctions from './update_cdr_call_functions';

// Read maximum id in original data
function readOriginMaxId() {
  return new Promise((resolve, reject) => {
    let baseField = `id`;
    let baseTable = `cdr`;
    let querySQL = `SELECT max(${baseField}) as maxId FROM ${baseTable}`;
    resolve(pool.poolCdr.query(querySQL));
    reject(`Error`);
  });
}

// Read maximum id in imported data
function readDestinyMainNextId() {
  return new Promise((resolve, reject) => {
    let querySQL = `SELECT (max(id) + 1) as maxId FROM MainCdr`;
    resolve(pool.poolDat.query(querySQL));
    reject(`Error`);
  });
}


// Read actual cdr records
function readCdrMinMaxDates(maxId) {
  console.log(`maxId`, maxId);
  let startId = 1;
  if(!maxId || maxId === null){
    startId = 1;
  } else {
    startId = maxId;
  }


  let endId = parseInt(process.env.CDR_BATCH_LIMIT_SLOW) + parseInt(startId);

  console.log(`startId`, startId, `endId`, endId);

  return new Promise((resolve, reject) => {
    let querySQL = `
    SELECT min(calldate) as min_calldate, max(calldate) as max_calldate FROM cdr WHERE id >= ${startId} and id < ${endId}
    `;
    console.log(`querySQL min & max dates`, querySQL);
    resolve(pool.poolCdr.query(querySQL));
    reject(`Error`);
  });
}

// LEER QUELOG
const readQueLog = function(start_date, end_date) {
  return new Promise(function(resolve, reject) {
    console.log(`readQueLog: `, start_date, end_date);

    let querySQL = `
      SELECT * FROM queuelog WHERE time >= '${start_date}' AND time < '${end_date}'
      `;

    console.log(`querySQL quelog`, querySQL);

    resolve(pool.poolQue.query(querySQL));

    reject(`Error`);
  });
};

// Read actual cdr records
function readOrigin(maxId) {
  console.log(`maxId`, maxId);
  let startId = 1;
  if(!maxId || maxId === null){
    startId = 1;
  } else {
    startId = maxId;
  }
  console.log(`startId`, startId);
  return new Promise((resolve, reject) => {
    let querySQL = `
    SELECT * FROM cdr WHERE id >= ${startId} LIMIT ${process.env.CDR_BATCH_LIMIT_SLOW}
    `;
    console.log(`querySQL`, querySQL);
    resolve(pool.poolCdr.query(querySQL));
    reject(`Error`);
  });

}

// write procesed records
function writeDestiny(data) {
  // if(data[0]=== !null || data[0]=== !undefined){

  return new Promise((resolve, reject) => {
    // Dfine custom variables
    let cdr_table = `MainCdr`;
    let myfields = Object.keys(data[0]);

    // console.log('MYFIELDS', myfields);


    let myRecords = (data)
      .map( x => {
        return Object.values(x);
      });

    let updateFieldsArray = myfields
      .map( (x, index) => {
        return `${x} = VALUE(${x})`;
      });


    let updateFields = updateFieldsArray;

    // console.log('updateFields', updateFields);


    // ON DUPLICATE KEY UPDATE ${updateFields}

    // updateFields = [
    //   'inv_agent_status = VALUE(inv_agent_status)',
    //   'inv_agent_name = VALUE(inv_agent_name)',
    //   'inv_agent_type = VALUE(inv_agent_type)',
    //   'inv_agent_extension = VALUE(inv_agent_extension)',
    //   'inv_agent_password = VALUE(inv_agent_password)',
    //   'inv_agent_eccp_password = VALUE(inv_agent_eccp_password)',
    // ];

    let querySQL = `INSERT INTO ${cdr_table} (${myfields}) values ?
    ON DUPLICATE KEY UPDATE ${updateFields}
    `;

    // let querySQL = querySQL2
    // .replace(/\'/g, '"');

    // let querySQL = `SELECT COUNT(*) FROM inv_agent `;
    // console.log('querySQL write', querySQL);


    // Record in database
    resolve(
      pool.poolDat.query(querySQL,[myRecords],
        function(err, result, fields) {
          console.log(`--------- INSERTANDO DATA NUEVA -------------`);

          if (err){
            console.log(`Error en tabla cdr`, err);
          } else {
            console.log(`Todo ha sido actualizado`);
            // process.exit();
          }
          return;
        }
      ));

    reject(`Error`);
  });

//  }
}


/* ************** RUN PROGRAM ************** */
// Check for maximum values to define where to start
async function checkMaxIdValues() {

  // Maximum number to read
  let maxOriginId = await readOriginMaxId();
  let maxOriginIdNum = removeRowDataPacket(maxOriginId)[0].maxId;
  console.log(`maxOriginIdNum`, maxOriginIdNum);
  // maximunm written record
  let maxDestinyId = await readDestinyMainNextId();
  let maxDestinyIdnum = removeRowDataPacket(maxDestinyId)[0].maxId;
  console.log(`maxDestinyIdnum`, maxDestinyIdnum);

  return { maxOriginIdNum,  maxDestinyIdnum } ;
}

/******************* Runing actual program -- exec*/
async function updateMainCdr( ) {
  //* Clear terminal
  console.clear();
  console.log(`/*************/ Updating CDR_MAIN ABC /*************/ `);

  // Maximum number to read -- exec
  let maxOriginId = await readOriginMaxId();
  let maxOriginIdNum = removeRowDataPacket(maxOriginId)[0].maxId;
  console.log(`maxOriginIdNum`, maxOriginIdNum);
  // maximunm written record
  let maxDestinyId = await readDestinyMainNextId();
  let maxDestinyIdnum = removeRowDataPacket(maxDestinyId)[0].maxId;
  console.log(`maxDestinyIdnum`, maxDestinyIdnum);

  let minAndMax = await readCdrMinMaxDates(maxDestinyIdnum);
  let start = moment(minAndMax[0].min_calldate).format(`YYYY-MM-DD`);
  let end = moment(minAndMax[0].max_calldate).format(`YYYY-MM-DD`);

  console.log(`minAndMax`, minAndMax);
  console.log(`start`,  start);
  console.log(`end`,  end);

  let queuelog = await readQueLog(start, end);

  // console.log('queuelog', queuelog.length, queuelog[0]);

  // Validate if pending records to update -- exec
  if(maxDestinyIdnum <= maxOriginIdNum  ) {
    let result = await readOrigin(maxDestinyIdnum);

    let extendedResult = result
      .map( function(x) {

        // console.log('queuelog[0]', this.queuelog);


        x.cdr_main_callcenter_name = process.env.CDR_CALLCENTER_NAME;

        // DATES
        x.cdr_dates_calldate = datesFunctions.cdr_dates_aaaa_mm_dd(x.calldate);
        x.cdr_dates_aaaa = datesFunctions.cdr_dates_aaaa(x.calldate);
        x.cdr_dates_aaaa_mm = datesFunctions.cdr_dates_aaaa_mm(x.calldate);
        x.cdr_dates_aaaa_mm_dd = datesFunctions.cdr_dates_aaaa_mm_dd(x.calldate);
        x.cdr_dates_week = datesFunctions.cdr_dates_week(x.calldate);
        x.cdr_dates_week_day = datesFunctions.cdr_dates_week_day(x.calldate);
        x.cdr_dates_week_day_name = datesFunctions.cdr_dates_week_day_name(x.calldate);
        x.cdr_dates_month = datesFunctions.cdr_dates_month(x.calldate);
        x.cdr_dates_month_name = datesFunctions.cdr_dates_month_name(x.calldate);
        // time
        x.cdr_dates_time = datesFunctions.cdr_dates_time(x.calldate);
        x.cdr_dates_minutes = datesFunctions.cdr_dates_minutes(x.calldate);
        x.cdr_dates_seconds = datesFunctions.cdr_dates_seconds(x.calldate);


        // TYPE
        x.cdr_type_int_ext = typeFunctions.cdr_type_int_ext(x.src, x.dst);
        x.cdr_type_out_ent = typeFunctions.cdr_type_out_ent(x.src, x.dst, x.cdr_type_int_ext, x.lastapp);
        x.cdr_type_in_out_empty = typeFunctions.cdr_type_in_out_empty(x.cdr_type_out_ent, x.src);
        x.cdr_type_in_out = typeFunctions.cdr_type_in_out(x.cdr_type_in_out_empty, x.lastapp);
        x.cdr_type_prod = typeFunctions.cdr_type_prod(x.cdr_type_in_out, x.dst, x.src);
        x.cdr_type_prod_call = typeFunctions.cdr_type_prod_call(x.cdr_type_in_out_empty, x.cdr_type_prod );
        x.cdr_type_ext_in_long = typeFunctions.cdr_type_ext_in_long(x.cdr_type_in_out, x.dstchannel );
        x.cdr_type_ext_in = typeFunctions.cdr_type_ext_in(x.cdr_type_ext_in_long);
        x.cdr_type_ext_out = typeFunctions.cdr_type_ext_out(x.cdr_type_in_out, x.src);
        x.cdr_type_queue = typeFunctions.cdr_type_queue(x.lastapp, x.cdr_type_in_out, x.cdr_type_prod, x.dst);
        x.cdr_type_extension = typeFunctions.cdr_type_extension(x.cdr_type_ext_in, x.cdr_type_ext_out );
        x.cdr_type_tel_number = typeFunctions.cdr_type_tel_number(x.cdr_type_in_out_empty, x.dst, x.src);
        x.cdr_type_hca_agent_id = typeFunctions.cdr_type_hca_agent_id(x.calldate, x.cdr_type_extension);
        x.cdr_type_hca_queue_id = typeFunctions.cdr_type_hca_queue_id(x.calldate, x.cdr_type_queue);


        // QLOG
        x.cdr_qlog_uniqueid = x.uniqueid;
        x.cdr_qlog_ivroption_time = qlogFunctions.cdr_qlog_field_time(queuelog, x.uniqueid, `IVROPTION`);
        x.cdr_qlog_enterqueue_time = qlogFunctions.cdr_qlog_field_time(queuelog, x.cdr_qlog_uniqueid, `ENTERQUEUE`);
        x.cdr_qlog_connect_time = qlogFunctions.cdr_qlog_field_time(queuelog, x.cdr_qlog_uniqueid, `CONNECT`);
        x.cdr_qlog_completecaller_time = qlogFunctions.cdr_qlog_field_time(queuelog, x.cdr_qlog_uniqueid, `COMPLETECALLER`);
        x.cdr_qlog_completeagent_time = qlogFunctions.cdr_qlog_field_time(queuelog, x.cdr_qlog_uniqueid, `COMPLETEAGENT`);
        x.cdr_qlog_abandon_time = qlogFunctions.cdr_qlog_field_time(queuelog, x.cdr_qlog_uniqueid, `ABANDON`);
        // Complete
        x.cdr_qlog_complete_time = qlogFunctions.cdr_qlog_complete_time(x.cdr_qlog_completecaller_time, x.cdr_qlog_completeagent_time, x.cdr_qlog_abandon_time);
        // x.__DURATION_TIME___
        x.cdr_qlog_secs_at_ivr = qlogFunctions.cdr_qlog_secs_diff(x.cdr_qlog_enterqueue_time, x.cdr_qlog_ivroption_time);
        x.cdr_qlog_secs_at_queue = qlogFunctions.cdr_qlog_secs_diff(x.cdr_qlog_connect_time, x.cdr_qlog_enterqueue_time);
        x.cdr_qlog_secs_with_agent = qlogFunctions.cdr_qlog_secs_diff(x.cdr_qlog_complete_time, x.cdr_qlog_enterqueue_time);
        x.cdr_qlog_secs_at_abandon = qlogFunctions.cdr_qlog_secs_diff(x.cdr_qlog_abandon_time, x.cdr_qlog_enterqueue_time);

        x.cdr_qlog_secs_at_wait = qlogFunctions.cdr_qlog_secs_diff(x.cdr_qlog_connect_time, x.cdr_qlog_enterqueue_time);
        x.cdr_qlog_secs_at_hold = qlogFunctions.cdr_qlog_secs_at_hold();

        x.cdr_qlog_secs_at_operation = qlogFunctions.cdr_qlog_secs_diff(x.cdr_qlog_complete_time, x.cdr_qlog_ivroption_time);
        // x.__QLOG_RESULT__
        x.cdr_qlog_result_hung_by = qlogFunctions.cdr_qlog_result_hung_by(x.cdr_qlog_completecaller_time,  x.cdr_qlog_completeagent_time);
        x.cdr_qlog_result_hung_agent = qlogFunctions.cdr_qlog_result_hung_agent( x.cdr_qlog_completeagent_time);


        // x.__CLASIFICATION__
        x.cdr_call_type = x.cdr_type_prod_call;

        x.cdr_call_class = callFunctions.cdr_call_class( x.src, x.dst, x.lastapp, x.cdr_type_queue);

        x.cdr_call_production = null;
        x.cdr_call_transfer = null;

        x.cdr_call_internal = callFunctions.cdr_call_internal(x.cdr_call_class);
        x.cdr_call_in = callFunctions.cdr_call_in(x.cdr_call_class);
        x.cdr_call_out = callFunctions.cdr_call_out(x.cdr_call_class);
        x.cdr_call_in_auto = callFunctions.cdr_call_in_auto(x.cdr_call_class);
        // x.__RECEIVED__
        x.cdr_call_received = callFunctions.cdr_call_received(x.cdr_call_class);
        x.cdr_call_atended = callFunctions.cdr_call_atended(x.cdr_call_class, x.disposition, x.cdr_qlog_secs_at_abandon);
        x.cdr_call_abandoned = callFunctions.cdr_call_abandoned(x.cdr_call_class,x.cdr_qlog_secs_at_abandon);


        x.cdr_call_short = callFunctions.cdr_call_short(x.cdr_call_atended, x.cdr_qlog_secs_with_agent);
        x.cdr_call_before_time = callFunctions.cdr_call_before_time(x.cdr_call_atended, x.cdr_qlog_secs_at_wait);
        // x.__MADE__
        x.cdr_call_made = callFunctions.cdr_call_made(x.cdr_call_class);
        x.cdr_call_fail = callFunctions.cdr_call_fail(x.cdr_call_made, x.disposition, x.lastapp);
        x.cdr_call_answered = callFunctions.cdr_call_answered(x.cdr_call_made, x.disposition);
        x.cdr_call_hungout = callFunctions.cdr_call_hungout(x.cdr_call_made, x.lastapp);

        // x.__AUTOMATIC__
        x.cdr_call_auto_bbdd = callFunctions.cdr_call_auto_bbdd();
        x.cdr_call_auto_run = callFunctions.cdr_call_auto_run();
        x.cdr_call_auto_left = callFunctions.cdr_call_auto_left();
        x.cdr_call_auto_turn = callFunctions.cdr_call_auto_turn();
        // x.__RESULTS__
        x.cdr_call_result_inbound = callFunctions.cdr_call_result_inbound();
        x.cdr_call_result_outbound = callFunctions.cdr_call_result_outbound();
        x.cdr_call_result_auto = callFunctions.cdr_call_result_auto();

        x.cdr_call_efective = callFunctions.cdr_call_efective(x.cdr_call_made, x.cdr_call_result_inbound);

        return x;
      }, queuelog)
      .map( y => {

        // TYPE
        delete y.cdr_type_int_ext;
        delete y.cdr_type_out_ent;
        delete y.cdr_type_in_out_empty;
        delete y.cdr_type_in_out;
        delete y.cdr_type_prod;
        delete y.cdr_type_prod_call;
        delete y.cdr_type_ext_in_long;
        delete y.cdr_type_ext_in;
        delete y.cdr_type_ext_out;



        return y;
      });
    // console.log('extendedResutl', extendedResult);
    let cleanResult = removeRowDataPacket(result);
    // console.log('result', cleanResult);
    let written = await writeDestiny(extendedResult);
  } else {
    console.log(`No hay registros nuevos por actualizar`);
  }
}


module.exports = {
  updateMainCdr
};
