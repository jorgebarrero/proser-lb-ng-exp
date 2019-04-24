import * as pool from 'src/connectors/pool';
import { removeRowDataPacket } from '../../helpers/mysql-helper.js';
import * as datesFunctions from './update_cdr_dates_functions';

// Read maximum id in original data
function readCdrMaxId() {
  return new Promise((resolve, reject) => {
    let querySQL = `SELECT max(id) as maxId FROM cdr`;
    resolve(pool.poolCdr.query(querySQL));
    reject('Error');
  });
};

// Read maximum id in imported data
function readCdrDatesNextId() {
  return new Promise((resolve, reject) => {
    let querySQL = `SELECT (max(cdr_dates_id) + 1) as maxId FROM cdr_dates`;
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
    SELECT id as cdr_dates_id, calldate as cdr_dates_calldate FROM cdr WHERE id >= ${startId} LIMIT ${process.env.CDR_BATCH_LIMIT}
    `;
    console.log('querySQL', querySQL);
    resolve(pool.poolCdr.query(querySQL));
    reject('Error');
  });

};

// write procesed records
function writeCdrDates(data) {
  return new Promise((resolve, reject) => {
    // Define custom variables
    let cdr_table = 'cdr_dates';
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
            console.log('Error en tabla cdr_dates', err);
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
  let maxCdrMainId = await readCdrDatesNextId();
  let maxCdrMainIdnum = removeRowDataPacket(maxCdrMainId)[0].maxId;
  console.log('maxCdrMainIdnum', maxCdrMainIdnum);

  return { maxCdrIdNum,  maxCdrMainIdnum } ;
}

// Runing actual program
async function updateAsyncCdrDates( ) {
  //* Clear terminal
  console.clear();

  console.log('/*************/ Updating CDR_DATES /*************/ ');

  // Maximum number to read
  let maxCdrId = await readCdrMaxId();
  let maxCdrIdNum = removeRowDataPacket(maxCdrId)[0].maxId;
  console.log('maxCdrIdNum', maxCdrIdNum);
  // maximunm written record
  let maxCdrMainId = await readCdrDatesNextId();
  let maxCdrMainIdnum = removeRowDataPacket(maxCdrMainId)[0].maxId;
  console.log('maxCdrMainIdnum', maxCdrMainIdnum);

    // Validate if pending records to update
    if(maxCdrMainIdnum <= maxCdrIdNum  ) {
  let result = await readCdr(maxCdrMainIdnum);

  let extendedResult = result
  .map( x => {

    // date
    x.cdr_dates_aaaa = datesFunctions.cdr_dates_aaaa(x.cdr_dates_calldate);
    x.cdr_dates_aaaa_mm = datesFunctions.cdr_dates_aaaa_mm(x.cdr_dates_calldate);
    x.cdr_dates_aaaa_mm_dd = datesFunctions.cdr_dates_aaaa_mm_dd(x.cdr_dates_calldate);
    x.cdr_dates_week = datesFunctions.cdr_dates_week(x.cdr_dates_calldate);
    x.cdr_dates_week_day = datesFunctions.cdr_dates_week_day(x.cdr_dates_calldate);
    x.cdr_dates_week_day_name = datesFunctions.cdr_dates_week_day_name(x.cdr_dates_calldate);
    x.cdr_dates_month = datesFunctions.cdr_dates_month(x.cdr_dates_calldate);
    x.cdr_dates_month_name = datesFunctions.cdr_dates_month_name(x.cdr_dates_calldate);
    // time
    x.cdr_dates_time = datesFunctions.cdr_dates_time(x.cdr_dates_calldate);
    x.cdr_dates_minutes = datesFunctions.cdr_dates_minutes(x.cdr_dates_calldate);
    x.cdr_dates_seconds = datesFunctions.cdr_dates_seconds(x.cdr_dates_calldate);
    return x
  })

  // console.log('extendedResutl', extendedResult);


  let cleanResult = removeRowDataPacket(result)
  // console.log('result', cleanResult);
  let written = await writeCdrDates(extendedResult);
} else {
  console.log('No hay registros nuevos por actualizar');
}
}


module.exports = {
  updateAsyncCdrDates
}
