import * as pool from '../../../connectors/pool';
import{ removeRowDataPacket } from '../../helpers/mysql-helper.js';

// Read maximum id in original data
function readCdrMaxId() {
  return new Promise((resolve, reject) => {
    let querySQL = 'SELECT max(id) as maxId FROM cdr';
    resolve(pool.poolCdr.query(querySQL));
    reject('Error');
  });
}

// Read maximum id in imported data
function readCdrMainNextId() {
  return new Promise((resolve, reject) => {
    let querySQL = 'SELECT (max(id) + 1) as maxId FROM cdr_main';
    resolve(pool.poolDat.query(querySQL));
    reject('Error');
  });
}

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
    SELECT * FROM cdr WHERE id >= ${startId} LIMIT ${process.env.CDR_BATCH_LIMIT}
    `;
    console.log('querySQL', querySQL);
    resolve(pool.poolCdr.query(querySQL));
    reject('Error');
  });

}

// write procesed records
function writeCdr(data) {
  // if(data[0]=== !null || data[0]=== !undefined){

  return new Promise((resolve, reject) => {
    // Dfine custom variables
    let cdr_table = 'cdr_main';
    let myfields = Object.keys(data[0]);

    // console.log('MYFIELDS', myfields);


    let myRecords = (data)
      .map( x => {
        return Object.values(x);
      });

    let updateFieldsArray = myfields
      .map( (x, index) => {
        return ` '${x}' = VALUE(${x})`;
      });


    // ON DUPLICATE KEY UPDATE ${updateFields}

    let querySQL = `INSERT INTO ${cdr_table} (${myfields}) values ?
    `;

    // let querySQL = querySQL2
    // .replace(/\'/g, '"');

    // let querySQL = `SELECT COUNT(*) FROM inv_agent `;
    // console.log('querySQL write', querySQL);


    // Record in database
    resolve(
      pool.poolDat.query(querySQL,[myRecords],
        function(err, result, fields) {
          console.log('--------- INSERTANDO DATA NUEVA -------------');

          if (err){
            console.log('Error en tabla cdr', err);
          } else {
            console.log('Todo ha sido actualizado');
            // process.exit();
          }
          return;
        }
      ));

    reject('Error');
  });

//  }
}


/* ************** RUN PROGRAM ************** */
// Check for maximum values to define where to start
async function checkMaxIdValues() {

  // Maximum number to read
  let maxCdrId = await readCdrMaxId();
  let maxCdrIdNum = removeRowDataPacket(maxCdrId)[0].maxId;
  console.log('maxCdrIdNum', maxCdrIdNum);
  // maximunm written record
  let maxCdrMainId = await readCdrMainNextId();
  let maxCdrMainIdnum = removeRowDataPacket(maxCdrMainId)[0].maxId;
  console.log('maxCdrMainIdnum', maxCdrMainIdnum);

  return { maxCdrIdNum,  maxCdrMainIdnum } ;
}

// Runing actual program
async function updateAsyncCdrMain( ) {
  //* Clear terminal
  console.clear();

  console.log('/*************/ Updating CDR_MAIN /*************/ ');

  // Maximum number to read
  let maxCdrId = await readCdrMaxId();
  let maxCdrIdNum = removeRowDataPacket(maxCdrId)[0].maxId;
  console.log('maxCdrIdNum', maxCdrIdNum);
  // maximunm written record
  let maxCdrMainId = await readCdrMainNextId();
  let maxCdrMainIdnum = removeRowDataPacket(maxCdrMainId)[0].maxId;
  console.log('maxCdrMainIdnum', maxCdrMainIdnum);

  // Validate if pending records to update
  if(maxCdrMainIdnum <= maxCdrIdNum  ) {
    let result = await readCdr(maxCdrMainIdnum);

    let extendedResult = result
    .map( x => {

      x.cdr_main_callcenter_name = process.env.CDR_CALLCENTER_NAME;

      return x
    })
    .map( y => {

      // delete y.cdr_main_callcenter_name;

      return y
    })
    // console.log('extendedResutl', extendedResult);
    let cleanResult = removeRowDataPacket(result)
    // console.log('result', cleanResult);
   let written = await writeCdr(extendedResult);
  } else {
    console.log('No hay registros nuevos por actualizar');
  }
}


module.exports = {
  updateAsyncCdrMain
};
