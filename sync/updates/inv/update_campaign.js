import * as poolOrigin from '../../../connectors/pool_cc_reports';
import * as pool from '../../../connectors/pool';
import * as campaignFunctions from './update_campaign_functions';
import{ removeRowDataPacket } from '../../helpers/mysql-helper.js';

const moment = require(`moment`);


// Read maximum id in original data
function readMaxId() {
  return new Promise((resolve, reject) => {
    let querySQL = `SELECT max(id) as maxId FROM campaign`;
    resolve(pool.poolCall.query(querySQL));
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
function readQueue() {

  return new Promise((resolve, reject) => {
    let querySQL = `
    SELECT * from InvQueue
    `;
    // console.log('querySQL', querySQL);
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
    datetime_init,
    datetime_end,
    daytime_init,
    daytime_end,
    retries,
    trunk,
    context,
    queue,
    max_canales,
    num_completadas,
    promedio,
    desviacion,
    script,
    estatus,
    id_url


    FROM campaign WHERE estatus <> 'I' ORDER BY id
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

    updateFields = [
      `inv_campaign_status = VALUE(inv_campaign_status)`,
      `inv_campaign_name = VALUE(inv_campaign_name)`,

      `inv_campaign_queue_id = VALUE(inv_campaign_queue_id)`,
      `inv_campaign_queue_name = VALUE(inv_campaign_queue_name)`,
      `inv_campaign_description = VALUE(inv_campaign_description)`,
      `inv_campaign_aftercall_time = VALUE(inv_campaign_aftercall_time)`,

      `inv_campaign_start = VALUE(inv_campaign_start)`,
      `inv_campaign_end = VALUE(inv_campaign_end)`,

      `inv_campaign_start_date_text = VALUE(inv_campaign_end_date_text)`,
      `inv_campaign_end_date_text = VALUE(inv_campaign_end_date_text)`,

      `inv_campaign_start_time_text = VALUE(inv_campaign_start_time_text)`,
      `inv_campaign_end_time_text = VALUE(inv_campaign_end_time_text)`,
    ];


    let querySQL = `INSERT INTO ${cdr_table} (${myfields}) values ?
    ON DUPLICATE KEY UPDATE ${updateFields}

    `;

    // console.log('WRITE querySQL', querySQL);


    // Record in database
    resolve(
      pool.poolDat.query(querySQL,[myRecords],
        function(err, result, fields) {
          console.log(`--------- INSERTANDO DATA NUEVA CAMPAIGN-------------`);

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
async function updateCampaign( ) {
  //* Clear terminal
  console.clear();
  console.log(`*`);
  console.log(`/*************/ Updating UPDATE_CAMPAIGN/*************/ `);

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
    const result = await readOrigin(maxCdrMainIdnum);
    const thisQueue = await readQueue();
    let thisQueueClean = removeRowDataPacket(thisQueue);

    // console.log('thisQueue', thisQueueClean);

    if(!result[0]) {
      console.log('RESULT IS EMPTY');
    } else {

    let extendedResult = result
      .map( x => {
        // date

        x.inv_campaign_id = x.id;

        x.inv_campaign_status = x.estatus;

        x.inv_campaign_name = x.name;
        x.inv_campaign_shortname = x.name;

        x.inv_campaign_start_date_text = x.datetime_init;
        x.inv_campaign_end_date_text = x.datetime_end;
        x.inv_campaign_start_time_text = x.daytime_init;
        x.inv_campaign_end_time_text = x.daytime_end;

        // calc
        x.inv_campaign_start = (`${x.datetime_init} ${x.daytime_init}`);
        x.inv_campaign_end = (`${x.datetime_end} ${x.daytime_end}`);

        x.inv_campaign_queue_number = x.queue;
        x.inv_campaign_queue_id = campaignFunctions.inv_campaign_queue_id(thisQueueClean, x.queue);
        x.inv_campaign_queue_name = campaignFunctions.inv_campaign_queue_name(thisQueueClean, x.queue);
        x.inv_campaign_description = campaignFunctions.inv_campaign_description(thisQueueClean, x.queue);
        x.inv_campaign_aftercall_time = null;


        return x;
      })
      .map( y => {
        delete y.id;


        delete y.name;
        delete y.datetime_init;
        delete y.datetime_end;
        delete y.daytime_init;
        delete y.daytime_end;
        delete y.retries;
        delete y.trunk;
        delete y.context;
        delete y.queue;
        delete y.max_canales;
        delete y.num_completadas;
        delete y.promedio;
        delete y.desviacion;
        delete y.script;
        delete y.estatus;
        delete y.id_url;


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
  updateCampaign
};
