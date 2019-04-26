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



function identifiedNull() {
  return new Promise((resolve, reject) => {
    let query = `SELECT * FROM MainAudit WHERE datetime_end is null ORDER BY audit_id limit 1`;
    console.log(`query`, query);
    resolve(pool.poolDat.query(query));
    reject(`Error`);
  });
}

// Read actual cdr records
async function readOrigin() {
  let audit_main_null = 1;

  let temp2 = await identifiedNull();
  let temp = temp2[0];

  console.log(`temp`, temp);

  if(temp === `[]` || temp === undefined ) {
    audit_main_null = 1;
  }else{
    audit_main_null = temp.audit_id;
  }

  console.log(`Respuesta 1er query`, audit_main_null);


  return new Promise((resolve, reject) => {
    let querySQL = `
    SELECT * FROM audit WHERE id >= ${audit_main_null} LIMIT ${process.env.CDR_BATCH_LIMIT}
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
async function updateMainAuditEmpty( ) {
  //* Clear terminal
  console.clear();
  console.log(`/*************/ Updating AUDIT_MAIN_EMPTY /*************/ `);

  // Maximum number to read -- exec
  // let maxOriginId = await readOriginMaxId();
  // let maxOriginIdNum = removeRowDataPacket(maxOriginId)[0].maxId;
  // console.log('maxOriginIdNum', maxOriginIdNum);
  // // maximunm written record
  // let maxDestinyId = await readDestinyMainNextId();
  // let maxDestinyIdnum = removeRowDataPacket(maxDestinyId)[0].maxId;
  // console.log('maxDestinyIdnum', maxDestinyIdnum);


  // console.log('queuelog', queuelog.length, queuelog[0]);

  // Validate if pending records to update -- exec
  let val = true;
  if(val) {
    let result = await readOrigin();

    let extendedResult = result
      .map( function(x) {

        x.audit_id = x.id;
        x.id_break = x.id_break? x.id_break: 0;
        x.audit_secs_duration = moment.duration(x.duration).asSeconds();
        x.audit_status = x.duration? `I`: `A`;

        x.audit_hca_agent_id = moment(x.datetime_init).format('YYYY-MM-DD')  + 'agt'+ x.id_agent;
        x.audit_date = x.datetime_init; // moment(x.datetime_init).format('YYYY-MM-DD');

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
  updateMainAuditEmpty
};
