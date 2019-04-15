import * as pool from '../../../connectors/pool';
import { removeRowDataPacket } from '../../helpers/mysql-helper.js';
import * as callFunctions from './update_cdr_call_functions';

// Read maximum id in original data
function readCdrMaxId() {
  return new Promise((resolve, reject) => {
    let querySQL = `SELECT max(id) as maxId FROM cdr`;
    resolve(pool.poolCdr.query(querySQL));
    reject('Error');
  });
};

// Read maximum id in imported data
function readCdrTypeNextId() {
  return new Promise((resolve, reject) => {
    let querySQL = `SELECT (max(cdr_call_id) + 1) as maxId FROM cdr_call`;
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
    // let querySQL = `
    let querySQL = `
    SELECT
    calldate, clid, src, dst, dcontext, channel, dstchannel, lastapp, lastdata, duration, billsec, disposition, amaflags, accountcode, uniqueid, userfield, recordingfile, cnum, cnam, outbound_cnum, outbound_cnam, dst_cnam, did, id


    FROM ( SELECT * FROM cdr WHERE id >= ${startId} ORDER BY id ) as main ORDER BY id LIMIT ${process.env.CDR_BATCH_LIMIT}
    `;

    console.log('querySQL', querySQL);
    resolve(pool.poolCdr.query(querySQL));
    reject('Error');
  });

};

// write procesed records
function writeCdrType(data) {
  return new Promise((resolve, reject) => {
    // Define custom variables
    let cdr_table = 'cdr_call';
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
            console.log('Error en tabla cdr_call', err);
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
  let maxCdrMainId = await readCdrTypeNextId();
  let maxCdrMainIdnum = removeRowDataPacket(maxCdrMainId)[0].maxId;
  console.log('maxCdrMainIdnum', maxCdrMainIdnum);

  return { maxCdrIdNum,  maxCdrMainIdnum } ;
}

// Runing actual program
async function updateAsyncCdrCall( ) {
  //* Clear terminal
  console.clear();

  console.log('/*************/ Updating CDR_CALL /*************/ ');

  // Maximum number to read
  let maxCdrId = await readCdrMaxId();
  let maxCdrIdNum = removeRowDataPacket(maxCdrId)[0].maxId;
  console.log('maxCdrIdNum', maxCdrIdNum);
  // maximunm written record
  let maxCdrMainId = await readCdrTypeNextId();
  let maxCdrMainIdnum = removeRowDataPacket(maxCdrMainId)[0].maxId;
  console.log('maxCdrMainIdnum', maxCdrMainIdnum);

    // Validate if pending records to update
    if(maxCdrMainIdnum <= maxCdrIdNum  ) {
  let result = await readCdr(maxCdrMainIdnum);

  let extendedResult = result
  .map( x => {

    x.cdr_call_id = x.id;
    // x.__CLASIFICATION__
    x.cdr_call_phone_number = 1;
    x.cdr_call_extension = 1;
    x.cdr_call_queue = 1;
    x.cdr_cal_date_text = 1;
    x.cdr_cal_hca_agent_id = 1;
    x.cdr_cal_hca_queue_id = 1;

   // x.__CLASIFICATION__
    x.cdr_call_type = 1;
    // x.__RECEIVED__
    x.cdr_call_received = 1;
    x.cdr_call_abandoned = 1;
    x.cdr_call_atended = 1;
    x.cdr_call_short = 1;
    x.cdr_call_before_time = 1;
    // x.__MADE__
    x.cdr_call_made = 1;
    x.cdr_call_fail = 1;
    x.cdr_call_answered = 1;
    x.cdr_call_efective = 1;
    x.cdr_call_hungout = 1;
    // x.__AUTOMATIC__
    x.cdr_call_auto_bbdd = 1;
    x.cdr_call_auto_run = 1;
    x.cdr_call_auto_left = 1;
    x.cdr_call_auto_turn = 1;
    // x.__RESULTS__
    x.cdr_call_result_inbound = 1;
    x.cdr_call_result_outbound = 1;
    x.cdr_call_result_auto = 1;
    x.cdr_call_comments = 1;



    return x
  })
  .map( y => {

    delete y.calldate;
    delete y.clid;
    delete y.src;
    delete y.dst;
    delete y.dcontext;
    delete y.channel;
    delete y.dstchannel;
    delete y.lastapp;
    delete y.lastdata;
    delete y.duration;
    delete y.billsec;
    delete y.disposition;
    delete y.amaflags;
    delete y.accountcode;
    delete y.uniqueid;
    delete y.userfield;
    delete y.recordingfile;
    delete y.cnum;
    delete y.cnam;
    delete y.outbound_cnum;
    delete y.outbound_cnam;
    delete y.dst_cnam;
    delete y.did;
    delete y.id;


    return y
  })
  // console.log('extendedResutl', extendedResult);
  let cleanResult = removeRowDataPacket(result)
  // console.log('result', cleanResult);
  let written = await writeCdrType(extendedResult);
} else {
  console.log('No hay registros nuevos por actualizar');
}
}


module.exports = {
  updateAsyncCdrCall
}
