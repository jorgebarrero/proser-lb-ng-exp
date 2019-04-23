import * as poolOrigin from '../../../connectors/pool_cc_reports';
import * as pool from '../../../connectors/pool';
import * as agentFunctions from './import_agent_hist_functions';
import{ removeRowDataPacket } from '../../helpers/mysql-helper.js';

const moment = require(`moment`);


// Read maximum id in original data
function readBreakMaxId() {
  return new Promise((resolve, reject) => {
    let querySQL = `SELECT max(id_inv_auxiliares) as maxId FROM inv_auxiliares`;
    resolve(poolOrigin.poolCCreports.query(querySQL));
    reject(`Error`);
  });
}


// Read maximum id in imported data
function readBreakNextId() {
  return new Promise((resolve, reject) => {
    let querySQL = `SELECT (max(inv_break_id) + 1) as maxId FROM InvBreak`;
    resolve(pool.poolDat.query(querySQL));
    reject(`Error`);
  });
}

// Read actual cdr records
function readBreak(maxId) {
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
    id_inv_auxiliares,

    estatus_inv_auxiliares,
    nombre_auxiliares,
    nombre_reportes_auxiliares,
    descripcion_auxiliares,
    tipo_auxiliares,
    productividad








    FROM ( SELECT * FROM inv_auxiliares WHERE id_inv_auxiliares >= ${startId} ORDER BY id_inv_auxiliares) as main ORDER BY id_inv_auxiliares LIMIT ${process.env.CDR_BATCH_LIMIT}
    `;
    // console.log('querySQL', querySQL);
    resolve(poolOrigin.poolCCreports.query(querySQL));
    reject(`Error`);
  });

}

// write procesed records
function writeBreak(data) {
  // if(data[0]=== !null || data[0]=== !undefined){
  // console.log('data to write', data);

  return new Promise((resolve, reject) => {
    // Dfine custom variables
    let cdr_table = `InvBreak`;
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
            console.log(`Error en tabla InvBreak`, err);
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
  let maxCdrId = await readBreakMaxId();
  let maxCdrIdNum = removeRowDataPacket(maxCdrId)[0].maxId;
  console.log(`maxCdrIdNum`, maxCdrIdNum);
  // maximunm written record
  let maxCdrMainId = await readBreakNextId();
  let maxCdrMainIdnum = removeRowDataPacket(maxCdrMainId)[0].maxId;
  console.log(`maxCdrMainIdnum`, maxCdrMainIdnum);

  return { maxCdrIdNum,  maxCdrMainIdnum } ;
}

// Runing actual program
async function importBreak( ) {
  //* Clear terminal
  console.clear();

  console.log(`/*************/ Import IMPORT_BREAK /*************/ `);

  // Maximum number to read
  let maxCdrId = await readBreakMaxId();
  let maxCdrIdNum = removeRowDataPacket(maxCdrId)[0].maxId;
  console.log(`maxCdrIdNum`, maxCdrIdNum);
  // maximunm written record
  let maxCdrMainId = await readBreakNextId();
  let maxCdrMainIdnum = removeRowDataPacket(maxCdrMainId)[0].maxId;
  console.log(`maxCdrMainIdnum`, maxCdrMainIdnum);

  // Validate if pending records to update
  if(maxCdrMainIdnum <= maxCdrIdNum  ) {
    let result = await readBreak(maxCdrMainIdnum);

    let extendedResult = result
      .map( x => {
        // date

        x.inv_break_id = x.id_inv_auxiliares;

        x.inv_break_status = x.estatus_inv_auxiliares;
        x.inv_break_name	= x.nombre_auxiliares;
        x.inv_break_shortname = x.nombre_reportes_auxiliares;
        x.inv_break_description	= x.descripcion_auxiliares;
        x.inv_break_type	= x.tipo_auxiliares;
        x.inv_break_productivity	= x.productividad;


        return x;
      })
      .map( y => {
        delete y.id_inv_auxiliares;

        delete y.estatus_inv_auxiliares;
        delete y.nombre_auxiliares;
        delete y.nombre_reportes_auxiliares;
        delete y.descripcion_auxiliares;
        delete y.tipo_auxiliares;
        delete y.productividad;

        return y;
      });

    // console.log('result', result);

    let written = await writeBreak(result);
  } else {
    console.log(`No hay registros nuevos por actualizar`);
  }
}


module.exports = {
  importBreak
};
