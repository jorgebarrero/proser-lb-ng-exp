import * as poolOrigin from '../../../connectors/pool_cc_reports';
import * as pool from '../../../connectors/pool';
import * as queueFunctions from './update_queue_functions';
import{ removeRowDataPacket } from '../../helpers/mysql-helper.js';

const moment = require(`moment`);

// Read maximum id in original data
function readMaxId() {
  return new Promise((resolve, reject) => {
    let querySQL = `SELECT max(id) as maxId FROM queue_call_entry`;
    resolve(pool.poolCall.query(querySQL));
    reject(`Error`);
  });

}

// Read maximum id in imported data
function readNextId() {
  return new Promise((resolve, reject) => {
    let querySQL = `SELECT (max(inv_queue_id) + 1) as maxId FROM InvQueue`;
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
    SELECT
    id,

    queue,
    estatus

    FROM queue_call_entry WHERE estatus <> 'I' ORDER BY id
    `;

    // console.log('querySQL', querySQL);
    resolve(pool.poolCall.query(querySQL));
    reject(`Error`);
  });

}

// write procesed records
function writeDestiny(data) {
  if(data[0]=== !null || data[0]=== !undefined){
  // console.log('data to write', data);

  return new Promise((resolve, reject) => {
    // Dfine custom variables
    let cdr_table = `InvQueue`;
    let myfields = Object.keys(data[0]);
    // console.log('myfields', myfields);

    let myRecords = (data)
      .map( x => {
        return Object.values(x);
      });

    let updateFieldsArray = myfields
      .map( (x, index) => {
        let coma = `,`;
        let end = myfields.length + 1;

        if (end === index){
          coma = ``;
        } else {
          coma = `,`;
        }

        return `${x} = VALUE(${x})`; //+ coma
      });

    let updateFields = updateFieldsArray[0];

    // console.log('MY UPDATE FIELDS', updateFields);
    // console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');

    updateFields = [

      `inv_queue_status = VALUE(inv_queue_status)`,
      `inv_queue_id = VALUE(inv_queue_id)`
    ];


    let querySQL = `INSERT INTO ${cdr_table} (${myfields}) values ?
    ON DUPLICATE KEY UPDATE ${updateFields}

    `;

    // console.log('WRITE querySQL', querySQL);


    // Record in database
    resolve(
      pool.poolDat.query(querySQL,[myRecords],
        function(err, result, fields) {
          console.log(`--------- INSERTANDO DATA NUEVA QUEUE -------------`);

          if (err){
            console.log(`Error en tabla inv_agent`, err);
          } else {
            console.log(`Todo ha sido actualizado`);
            // process.exit();
          }
          return;
        }
      ));

    reject(`Error`);
  });

 }
 else {
  // console.log('DATA IS EMPTY', data);
  console.clear()
}
}


/* ************** RUN PROGRAM ************** */
// Check for maximum values to define where to start
async function checkMaxIdValues() {

  // Maximum number to read
  let maxCdrId = await readMaxId();
  let maxCdrIdNum = removeRowDataPacket(maxCdrId)[0].maxId;
  console.log(`maxCdrIdNum`, maxCdrIdNum);
  // maximunm written record
  let maxCdrMainId = await readNextId();
  let maxCdrMainIdnum = removeRowDataPacket(maxCdrMainId)[0].maxId;
  console.log(`maxCdrMainIdnum`, maxCdrMainIdnum);

  return { maxCdrIdNum,  maxCdrMainIdnum } ;
}

// Runing actual program
async function updateQueue( ) {
  //* Clear terminal
  console.clear();
  console.log(`*`);
  console.log(`/*************/ Updating UPDATE_BREAK /*************/ `);

  // Maximum number to read
  let maxCdrId = await readMaxId();
  let maxCdrIdNum = removeRowDataPacket(maxCdrId)[0].maxId;
  console.log(`maxCdrIdNum`, maxCdrIdNum);
  // maximunm written record
  let maxCdrMainId = await readNextId();
  let maxCdrMainIdnum = removeRowDataPacket(maxCdrMainId)[0].maxId;
  console.log(`maxCdrMainIdnum`, maxCdrMainIdnum);

  let val = true;
  // Validate if pending records to update
  if(val) {
    let result = await readOrigin(maxCdrMainIdnum);

    // console.log('result', result);

    if(!result[0]) {
      console.log('RESULT IS EMPTY');
    } else {

    let extendedResult = result
      .map( x => {
        // date

          x.inv_queue_number = x.queue;

        x.inv_queue_id = x.id;
        x.inv_queue_status = x.estatus;


        return x;
      })
      .map( y => {
        delete y.queue;
        delete y.estatus;
        delete y.id;

        return y;
      });

    // console.log('result', result);

    let written = await writeDestiny(result);
    }
  } else {
    console.log(`No hay registros nuevos por actualizar`);
  }
}


module.exports = {
  updateQueue
};
