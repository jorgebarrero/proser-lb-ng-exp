import * as pool from '../../../connectors/pool';
import{ removeRowDataPacket } from '../../helpers/mysql-helper.js';
// import * as moment from 'moment/src/moment';
const moment = require(`moment`);


import * as auditFunctions from './update_audit_functions';


// Read maximum id in original data
function readOriginMaxId() {
  return new Promise((resolve, reject) => {
    let baseField = `id`;
    let baseTable = `audit`;
    let querySQL = `SELECT max(${baseField}) as maxId FROM ${baseTable}`;
    resolve(pool.poolCall.query(querySQL));
    reject(`Error`);
  });
}

// Read maximum id in imported data
function readDestinyMainNextId() {
  return new Promise((resolve, reject) => {
    let querySQL = `SELECT (max(audit_id) + 1) as maxId FROM MainAudit`;
    resolve(pool.poolDat.query(querySQL));
    reject(`Error`);
  });
}



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
    SELECT * FROM audit WHERE id >= ${startId} LIMIT ${process.env.CDR_BATCH_LIMIT}
    `;
    console.log(`querySQL`, querySQL);
    resolve(pool.poolCall.query(querySQL));
    reject(`Error`);
  });

}

// write procesed records
function writeDestiny(data) {
  // if(data[0]=== !null || data[0]=== !undefined){

  return new Promise((resolve, reject) => {
    // Dfine custom variables
    let cdr_table = `MainAudit`;
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


    updateFields = [
      `datetime_end = VALUE(datetime_end)`,
    ];

    let querySQL = `INSERT INTO ${cdr_table} (${myfields}) values ?
    ON DUPLICATE KEY UPDATE ${updateFields}
    `;

    console.log(`myfields`, myfields[0]);
    console.log(`updateFields`, updateFields);



    // Record in database
    resolve(
      pool.poolDat.query(querySQL,[myRecords],
        function(err, result, fields) {
          console.log(`--------- INSERTANDO DATA AUDIT -------------`);

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
  // maximunm written recordclea
  let maxDestinyId = await readDestinyMainNextId();
  let maxDestinyIdnum = removeRowDataPacket(maxDestinyId)[0].maxId;
  console.log(`maxDestinyIdnum`, maxDestinyIdnum);

  return { maxOriginIdNum,  maxDestinyIdnum } ;
}

/******************* Runing actual program -- exec*/
async function updateMainAudit( ) {
  //* Clear terminal
  console.clear();
  console.log(`/*************/ Updating AUDIT_MAIN /*************/ `);

  // Maximum number to read -- exec
  let maxOriginId = await readOriginMaxId();
  let maxOriginIdNum = removeRowDataPacket(maxOriginId)[0].maxId;
  console.log(`maxOriginIdNum`, maxOriginIdNum);
  // maximunm written record
  let maxDestinyId = await readDestinyMainNextId();
  let maxDestinyIdnum = removeRowDataPacket(maxDestinyId)[0].maxId;
  console.log(`maxDestinyIdnum`, maxDestinyIdnum);


  // console.log('queuelog', queuelog.length, queuelog[0]);

  // Validate if pending records to update -- exec
  if(maxDestinyIdnum <= maxOriginIdNum  ) {
    let result = await readOrigin(maxDestinyIdnum);

    let extendedResult = result
      .map( function(x) {

        x.audit_id = x.id;
        x.id_break = x.id_break? x.id_break: 0;
        x.audit_secs_duration = moment.duration(x.duration).asSeconds();
        x.audit_status = x.duration? `I`: `A`;

        return x;
      })
      .map( y => {
        // TYPE
        delete y.id;
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
  updateMainAudit
};
