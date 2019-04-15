import * as poolOrigin from '../../../connectors/pool_cc_reports';
import * as pool from '../../../connectors/pool';
import * as agentFunctions from './update_agent_functions';
import{ removeRowDataPacket } from '../../helpers/mysql-helper.js';

const moment = require(`moment`);


// Read maximum id in original data
function readMaxId() {
  return new Promise((resolve, reject) => {
    let querySQL = `SELECT max(id) as maxId FROM agent`;
    resolve(pool.poolCall.query(querySQL));
    reject(`Error`);
  });
}

// Read maximum id in imported data
function readNextId() {
  return new Promise((resolve, reject) => {
    let querySQL = `SELECT (max(inv_agent_id) + 1) as maxId FROM InvAgent`;
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

    type,
    number,
    name,
    password,
    estatus,
    eccp_password

    FROM agent WHERE estatus <> 'I' ORDER BY id
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
    let cdr_table = `InvAgent`;
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
      `inv_agent_status = VALUE(inv_agent_status)`,
      `inv_agent_name = VALUE(inv_agent_name)`,
      `inv_agent_type = VALUE(inv_agent_type)`,
      `inv_agent_extension = VALUE(inv_agent_extension)`,
      `inv_agent_password = VALUE(inv_agent_password)`,
      `inv_agent_eccp_password = VALUE(inv_agent_eccp_password)`,
    ];


    let querySQL = `INSERT INTO ${cdr_table} (${myfields}) values ?
    ON DUPLICATE KEY UPDATE ${updateFields}

    `;

    // console.log('WRITE querySQL', querySQL);


    // Record in database
    resolve(
      pool.poolDat.query(querySQL,[myRecords],
        function(err, result, fields) {
          console.log(`--------- INSERTANDO DATA NUEVA AGENT-------------`);

          if (err){
            console.log(`Error en tabla InvAgent`, err);
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
async function updateAgent( ) {
  //* Clear terminal
  console.clear();
  console.log(`*`);
  console.log(`/*************/ Updating IMPORT_AGENTS /*************/ `);

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


    let extendedResult = result
      .map( x => {
        // date

        x.inv_agent_id = x.id;

        x.inv_agent_status = x.estatus;

        x.inv_agent_name = x.name;
        x.inv_agent_shortname =x.name;
        x.inv_agent_type = x.type;
        x.inv_agent_extension = x.number;

        x.inv_agent_password = x.password;
        x.inv_agent_eccp_password = x.eccp_password;





        return x;
      })
      .map( y => {
        delete y.id;

        delete y.type;
        delete y.number;
        delete y.name;
        delete y.password;
        delete y.estatus;
        delete y.eccp_password;


        return y;
      });

    // console.log('result', result);

    let written = await writeDestiny(result);
  } else {
    console.log(`No hay registros nuevos por actualizar`);
  }
}


module.exports = {
  updateAgent
};
