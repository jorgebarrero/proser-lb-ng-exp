import * as poolOrigin from 'src/connectors/pool_cc_reports';
import * as pool from 'src/connectors/pool';
import * as breakFunctions from './update_break_functions';
import{ removeRowDataPacket } from '../../helpers/mysql-helper.js';

const moment = require(`moment`);


// Read maximum id in original data
function readMaxId() {
  return new Promise((resolve, reject) => {
    let querySQL = `SELECT max(id) as maxId FROM break`;
    resolve(pool.poolCall.query(querySQL));
    reject(`Error`);
  });

}

// Read maximum id in imported data
function readNextId() {
  return new Promise((resolve, reject) => {
    let querySQL = `SELECT (max(inv_break_id) + 1) as maxId FROM inv_break`;
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

    name,
    description,
    status,
    tipo

    FROM break ORDER BY id
    `;

    // console.log('querySQL', querySQL);
    resolve(pool.poolCall.query(querySQL));
    reject(`Error`);
  });

}

// write procesed records
function writeDestiny(data) {
  // if(data[0]=== !null || data[0]=== !undefined){
  // console.log('data to write', data);

  return new Promise((resolve, reject) => {
    // Dfine custom variables
    let cdr_table = `inv_break`;
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
      `inv_break_name = VALUE(inv_break_name)`,
      `inv_break_description = VALUE(inv_break_description)`,
      `inv_break_type = VALUE(inv_break_type)`
    ];


    let querySQL = `INSERT INTO ${cdr_table} (${myfields}) values ?
    ON DUPLICATE KEY UPDATE ${updateFields}

    `;

    // console.log('WRITE querySQL', querySQL);


    // Record in database
    resolve(
      pool.poolDat.query(querySQL,[myRecords],
        function(err, result, fields) {
          console.log(`--------- INSERTANDO DATA NUEVA -------------`);

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

//  }
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
async function updateBreak( ) {
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

  // Validate if pending records to update
  let val = true;
  if(val) {
    let result = await readOrigin(maxCdrMainIdnum);

    // console.log('result', result);


    let extendedResult = result
      .map( x => {
        // date

        x.inv_break_id = x.id;

        x.inv_break_status = x.status;
        x.inv_break_name = x.name;
        // x.inv_break_shortname  = x.name;
        x.inv_break_description = x.description;
        x.inv_break_type = x.tipo;

        return x;
      })
      .map( y => {
        delete y.id;

        delete y.name;
        delete y.description;
        delete y.status;
        delete y.tipo;



        return y;
      });

    // console.log('result', result);

    let written = await writeDestiny(result);
  } else {
    console.log(`No hay registros nuevos por actualizar`);
  }
}


module.exports = {
  updateBreak
};
