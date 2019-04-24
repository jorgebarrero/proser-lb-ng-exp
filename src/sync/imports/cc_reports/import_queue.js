import * as poolOrigin from 'src/connectors/pool_cc_reports';
import * as pool from 'src/connectors/pool';
import * as agentFunctions from './import_agent_functions';
import{ removeRowDataPacket } from '../../helpers/mysql-helper.js';

const moment = require(`moment`);


// Read maximum id in original data
function readMaxId() {
  return new Promise((resolve, reject) => {
    let querySQL = `SELECT max(id_inv_colas) as maxId FROM inv_colas`;
    resolve(poolOrigin.poolCCreports.query(querySQL));
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
    id_inv_colas,

    estatus_inv_colas,
    nombre_colas,
    nombre_reportes_colas,
    numero_colas,
    tipo_colas,
    uso_produccion

    FROM ( SELECT * FROM inv_colas WHERE id_inv_colas >= ${startId} ORDER BY id_inv_colas) as main ORDER BY id_inv_colas LIMIT ${process.env.CDR_BATCH_LIMIT}
    `;
    // console.log('querySQL', querySQL);
    resolve(poolOrigin.poolCCreports.query(querySQL));
    reject(`Error`);
  });

}

// write procesed records
function writeDestiny(data) {
  // if(data[0]=== !null || data[0]=== !undefined){
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
            console.log(`Error en tabla InvQueue`, err);
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
async function importQueue( ) {
  //* Clear terminal
  console.clear();

  console.log(`/*************/ Updating IMPORT_QUEUE /*************/ `);

  // Maximum number to read
  let maxCdrId = await readMaxId();
  let maxCdrIdNum = removeRowDataPacket(maxCdrId)[0].maxId;
  console.log(`maxCdrIdNum`, maxCdrIdNum);
  // maximunm written record
  let maxCdrMainId = await readNextId();
  let maxCdrMainIdnum = removeRowDataPacket(maxCdrMainId)[0].maxId;
  console.log(`maxCdrMainIdnum`, maxCdrMainIdnum);

  // Validate if pending records to update
  if(maxCdrMainIdnum <= maxCdrIdNum  ) {
    let result = await readOrigin(maxCdrMainIdnum);

    let extendedResult = result
      .map( x => {
        // date

        x.inv_queue_id = x.id_inv_colas;

        x.inv_queue_status = x.estatus_inv_colas;
        x.inv_queue_name = x.nombre_colas;
        x.inv_queue_shortname = x.nombre_reportes_colas;
        x.inv_queue_number = x.numero_colas;
        x.inv_queue_type = x.tipo_colas;
        x.inv_queue_use = x.uso_produccion;

        return x;
      })
      .map( y => {
        delete y.id_inv_colas;

        delete y.estatus_inv_colas;
        delete y.nombre_colas;
        delete y.nombre_reportes_colas;
        delete y.numero_colas;
        delete y.tipo_colas;
        delete y.uso_produccion;

        return y;
      });

    // console.log('result', result);

    let written = await writeDestiny(result);
  } else {
    console.log(`No hay registros nuevos por actualizar`);
  }
}


module.exports = {
  importQueue
};
