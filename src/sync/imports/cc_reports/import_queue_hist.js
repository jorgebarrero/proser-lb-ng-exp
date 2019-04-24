import * as poolOrigin from '../../../connectors/pool_cc_reports';
import * as pool from '../../../connectors/pool';
import * as queueFunctions from './import_queue_hist_functions';
import{ removeRowDataPacket } from '../../helpers/mysql-helper.js';

const moment = require(`moment`);


// Read maximum id in original data
function readQueueHisttMaxId() {
  return new Promise((resolve, reject) => {
    let querySQL = `SELECT max(id_inv_clasif_colas) as maxId FROM b_clasif_colas_hist`;
    resolve(poolOrigin.poolCCreports.query(querySQL));
    reject(`Error`);
  });
}

// Read maximum id in imported data
function readAgentHcaNextId() {
  return new Promise((resolve, reject) => {
    let querySQL = `SELECT (max(hca_queue_id) + 1) as maxId FROM HcaQueue`;
    resolve(pool.poolDat.query(querySQL));
    reject(`Error`);
  });
}

// Read actual cdr records
function readQueueHistt(maxId) {
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
    id_inv_clasif_colas,
    fecha_planificada,
    id_inv_colas,
    numero_colas,
    nombre_colas,
    id_inv_clientes,
    nombre_clientes,

    id_inv_escalas,
    nombre_escalas,
    rojo,
    amarillo,
    verde,
    azul


    FROM ( SELECT * FROM b_clasif_colas_hist WHERE id_inv_clasif_colas >= ${startId} ORDER BY id_inv_clasif_colas) as main ORDER BY id_inv_clasif_colas LIMIT ${process.env.CDR_BATCH_LIMIT}
    `;
    // console.log('querySQL', querySQL);
    resolve(poolOrigin.poolCCreports.query(querySQL));
    reject(`Error`);
  });

}

// write procesed records
function writeQueueHca(data) {
  // if(data[0]=== !null || data[0]=== !undefined){
  // console.log('data to write', data);

  return new Promise((resolve, reject) => {
    // Dfine custom variables
    let cdr_table = `HcaQueue`;
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
            console.log(`Error en tabla HcaQueue`, err);
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
  let maxCdrId = await readQueueHisttMaxId();
  let maxCdrIdNum = removeRowDataPacket(maxCdrId)[0].maxId;
  console.log(`maxCdrIdNum`, maxCdrIdNum);
  // maximunm written record
  let maxCdrMainId = await readAgentHcaNextId();
  let maxCdrMainIdnum = removeRowDataPacket(maxCdrMainId)[0].maxId;
  console.log(`maxCdrMainIdnum`, maxCdrMainIdnum);

  return { maxCdrIdNum,  maxCdrMainIdnum } ;
}

// Runing actual program
async function importHcaQueue( ) {
  //* Clear terminal
  console.clear();

  console.log(`/*************/ Updating IMPORT_QUEUES /*************/ `);

  // Maximum number to read
  let maxCdrId = await readQueueHisttMaxId();
  let maxCdrIdNum = removeRowDataPacket(maxCdrId)[0].maxId;
  console.log(`maxCdrIdNum`, maxCdrIdNum);
  // maximunm written record
  let maxCdrMainId = await readAgentHcaNextId();
  let maxCdrMainIdnum = removeRowDataPacket(maxCdrMainId)[0].maxId;
  console.log(`maxCdrMainIdnum`, maxCdrMainIdnum);

  // Validate if pending records to update
  if(maxCdrMainIdnum <= maxCdrIdNum  ) {
    let result = await readQueueHistt(maxCdrMainIdnum);

    let extendedResult = result
      .map( x => {
        // date

        x.hca_queue_id = x.id_inv_clasif_colas;

        x.hca_queue_date = x.fecha_planificada;
        x.hca_queue_queue_id = x.id_inv_colas;
        x.hcs_queue_queue_number = x.numero_colas;
        x.hca_queue_queue_name = x.nombre_colas;
        x.hca_queue_client_id = x.id_inv_clientes;
        x.hca_queue_client_name = x.nombre_clientes;
        x.hca_queue_service_id = x.id_inv_servicios;
        x.hca_queue_service_name = x.nombre_servicios;

        x.hca_queue_scale_id = x.id_inv_escalas;
        x.hca_queue_scale_name =  x.nombre_escalas;
        x.hca_queue_scale_red =  x.rojo;
        x.hca_queue_scale_yellow =  x.amarillo;
        x.hca_queue_scale_green =  x.verde;
        x.hca_queue_scale_blue = x.azul;

        // Calculated
        x.hca_queue_start = `00:00:00`;
        x.hca_queue_date_text = moment(x.fecha_planificada, `YYYY-MM-DD`).format(`YYYY-MM-DD`);
        x.hca_queue_text_key = queueFunctions.hca_queue_text_key(x.hca_queue_date_text, x.hcs_queue_queue_number);

        return x;
      })
      .map( y => {
        delete y.id_inv_clasif_colas;
        delete y.fecha_planificada;
        delete y.id_inv_colas;
        delete y.numero_colas;
        delete y.nombre_colas;
        delete y.id_inv_clientes;
        delete y.nombre_clientes;

        delete y.id_inv_escalas;
        delete y.nombre_escalas;
        delete y.rojo;
        delete y.amarillo;
        delete y.verde;
        delete y.azul;

        return y;
      });

    // console.log('result', result);

    let written = await writeQueueHca(result);
  } else {
    console.log(`No hay registros nuevos por actualizar`);
  }
}


module.exports = {
  importHcaQueue
};
