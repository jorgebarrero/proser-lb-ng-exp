import * as pool from '../../../connectors/pool';
import { removeRowDataPacket } from '../../helpers/mysql-helper.js';
import * as typeFunctions from './update_cdr_type_functions';

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
    let querySQL = `SELECT (max(cdr_type_id) + 1) as maxId FROM cdr_type`;
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
    SELECT *, id as cdr_type_id, LENGTH(src) as cdr_type_length_src, LENGTH(dst) as  cdr_type_length_dst FROM ( SELECT * FROM cdr WHERE id >= ${startId} ORDER BY id) as main ORDER BY cdr_type_id LIMIT ${process.env.CDR_BATCH_LIMIT}
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
    let cdr_table = 'cdr_type';
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
            console.log('Error en tabla cdr_type', err);
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
async function updateAsyncCdrType( ) {
  //* Clear terminal
  console.clear();

  console.log('/*************/ Updating CDR_TYPE /*************/ ');

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
    // date
    // x.cdr_type_length_src = typeFunctions.cdr_type_length_src();
    // x.cdr_type_length_dst = typeFunctions.cdr_type_length_src();
    x.cdr_type_int_ext = typeFunctions.cdr_type_int_ext(
      x.src, x.dst);
    x.cdr_type_out_ent = typeFunctions.cdr_type_out_ent(
      x.src, x.dst, x.cdr_type_int_ext, x.lastapp);
    x.cdr_type_in_out_empty = typeFunctions.cdr_type_in_out_empty(
      x.cdr_type_out_ent, x.src);
    x.cdr_type_in_out = typeFunctions.cdr_type_in_out(
      x.cdr_type_in_out_empty, x.lastapp);

    x.cdr_type_prod = typeFunctions.cdr_type_prod(
      x.cdr_type_in_out, x.dst, x.src);
    x.cdr_type_prod_call = typeFunctions.cdr_type_prod_call(
      x.cdr_type_in_out_empty, x.cdr_type_prod );

    x.cdr_type_ext_in_long = typeFunctions.cdr_type_ext_in_long(
      x.cdr_type_in_out, x.dstchannel );


    x.cdr_type_ext_in = typeFunctions.cdr_type_ext_in(
      x.cdr_type_ext_in_long);
    x.cdr_type_ext_out = typeFunctions.cdr_type_ext_out(
      x.cdr_type_in_out, x.src);

    x.cdr_type_queue = typeFunctions.cdr_type_queue(
      x.lastapp, x.cdr_type_in_out, x.cdr_type_prod, x.dst);
    x.cdr_type_extension = typeFunctions.cdr_type_extension(
      x.cdr_type_ext_in, x.cdr_type_ext_out );

    x.cdr_type_tel_number = typeFunctions.cdr_type_tel_number(
      x.cdr_type_in_out_empty, x.dst, x.src);


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
  updateAsyncCdrType
}
