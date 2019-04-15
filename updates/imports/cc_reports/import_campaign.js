import * as poolOrigin from '../../../connectors/pool_cc_reports';
import * as pool from '../../../connectors/pool';
import * as agentFunctions from './import_agent_functions';
import{ removeRowDataPacket } from '../../helpers/mysql-helper.js';

const moment = require(`moment`);


// Read maximum id in original data
function readMaxId() {
  return new Promise((resolve, reject) => {
    let querySQL = `SELECT max(id_inv_campanas) as maxId FROM inv_campanas`;
    resolve(poolOrigin.poolCCreports.query(querySQL));
    reject(`Error`);
  });
}

// Read maximum id in imported data
function readNextId() {
  return new Promise((resolve, reject) => {
    let querySQL = `SELECT (max(inv_campaign_id) + 1) as maxId FROM InvCampaign`;
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
    id_inv_campanas,

    nombre_campanas,
    nombre_reportes_campanas,

    id_inv_colas,
    nombre_reportes_colas,
    numero_colas,
    tiempo_after_call,

    fecha_inicio,
    fecha_final,

    hora_inicio,
    hora_final,


    estatus_inv_campanas

    FROM ( SELECT * FROM inv_campanas WHERE id_inv_campanas >= ${startId} ORDER BY id_inv_campanas) as main ORDER BY id_inv_campanas LIMIT ${process.env.CDR_BATCH_LIMIT}
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
    let cdr_table = `InvCampaign`;
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
            console.log(`Error en tabla InvCampaign`, err);
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
async function importCampaign( ) {
  //* Clear terminal
  console.clear();

  console.log(`/*************/ Updating IMPORT_CAMPAGIN /*************/ `);

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

        x.inv_campaign_id = x.id_inv_campanas;
        x.inv_campaign_status = x.estatus_inv_campanas;

        x.inv_campaign_name = x.nombre_campanas;
        x.inv_campaign_shortname = x.nombre_reportes_campanas;
        x.inv_campaign_description = 1;

        x.inv_campaign_queue_id = x.id_inv_colas;
        x.inv_campaign_queue_name = x.nombre_reportes_colas;
        x.inv_campaign_queue_number = x.numero_colas;
        x.inv_campaign_aftercall_time = x.tiempo_after_call;


        x.inv_campaign_start_date_text = x.fecha_inicio;
        x.inv_campaign_end_date_text = x.fecha_final;
        x.inv_campaign_start_time_text = x.hora_inicio;
        x.inv_campaign_end_time_text = x.hora_final;

        // calc
        x.inv_campaign_start = x.inv_campaign_start_date_text + ` `+ x.inv_campaign_start_time_text;
        x.inv_campaign_end = x.inv_campaign_start_date_text + ` ` + x.inv_campaign_end_time_text ;

        return x;
      })
      .map( y => {
        delete y.id_inv_campanas;

        delete y.nombre_campanas;
        delete y.nombre_reportes_campanas;
        delete y.id_inv_colas;
        delete y.nombre_reportes_colas;
        delete y.numero_colas;
        delete y.tiempo_after_call;
        delete y.fecha_inicio;
        delete y.fecha_final;
        delete y.hora_inicio;
        delete y.hora_final;
        delete y.estatus_inv_campanas;

        return y;
      });

    // console.log('result', result);

    let written = await writeDestiny(result);
  } else {
    console.log(`No hay registros nuevos por actualizar`);
  }
}


module.exports = {
  importCampaign
};
