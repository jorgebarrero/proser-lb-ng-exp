import * as poolOrigin from '../../../connectors/pool_cc_reports';
import * as pool from '../../../connectors/pool';
import * as agentFunctions from './import_agent_functions';
import{ removeRowDataPacket } from '../../helpers/mysql-helper.js';

const moment = require(`moment`);


// Read maximum id in original data
function readAgentMaxId() {
  return new Promise((resolve, reject) => {
    let querySQL = `SELECT max(id_inv_agentes) as maxId FROM inv_agentes`;
    resolve(poolOrigin.poolCCreports.query(querySQL));
    reject(`Error`);
  });
}

// Read maximum id in imported data
function readAgentNextId() {
  return new Promise((resolve, reject) => {
    let querySQL = `SELECT (max(inv_agent_id) + 1) as maxId FROM InvAgent`;
    resolve(pool.poolDat.query(querySQL));
    reject(`Error`);
  });
}

// Read actual cdr records
function readAgent(maxId) {
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
    id_inv_agentes,

    nombre_agentes,
    nombre_reportes_agentes,
    tipo_agentes,
    numero_agentes,
    doc_ident_agentes,
    doc_complementario_agentes,
    id_inv_supervisores,
    nombre_supervisores,
    id_inv_horarios,
    nombre_horarios,
    estatus_inv_agentes







    FROM ( SELECT * FROM inv_agentes WHERE id_inv_agentes >= ${startId} ORDER BY id_inv_agentes) as main ORDER BY id_inv_agentes LIMIT ${process.env.CDR_BATCH_LIMIT}
    `;
    // console.log('querySQL', querySQL);
    resolve(poolOrigin.poolCCreports.query(querySQL));
    reject(`Error`);
  });

}

// write procesed records
function writeAgent(data) {
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
  let maxCdrId = await readAgentMaxId();
  let maxCdrIdNum = removeRowDataPacket(maxCdrId)[0].maxId;
  console.log(`maxCdrIdNum`, maxCdrIdNum);
  // maximunm written record
  let maxCdrMainId = await readAgentNextId();
  let maxCdrMainIdnum = removeRowDataPacket(maxCdrMainId)[0].maxId;
  console.log(`maxCdrMainIdnum`, maxCdrMainIdnum);

  return { maxCdrIdNum,  maxCdrMainIdnum } ;
}

// Runing actual program
async function importAgent( ) {
  //* Clear terminal
  console.clear();

  console.log(`/*************/ Updating IMPORT_AGENTS /*************/ `);

  // Maximum number to read
  let maxCdrId = await readAgentMaxId();
  let maxCdrIdNum = removeRowDataPacket(maxCdrId)[0].maxId;
  console.log(`maxCdrIdNum`, maxCdrIdNum);
  // maximunm written record
  let maxCdrMainId = await readAgentNextId();
  let maxCdrMainIdnum = removeRowDataPacket(maxCdrMainId)[0].maxId;
  console.log(`maxCdrMainIdnum`, maxCdrMainIdnum);

  // Validate if pending records to update
  if(maxCdrMainIdnum <= maxCdrIdNum  ) {
    let result = await readAgent(maxCdrMainIdnum);

    let extendedResult = result
      .map( x => {
        // date

        x.inv_agent_id = x.id_inv_agentes;
        x.inv_agent_status = x.estatus_inv_agentes;
        x.inv_agent_name	= x.nombre_agentes;
        x.inv_agent_shortname = x.nombre_reportes_agentes;
        x.inv_agent_type	= x.tipo_agentes;
        x.inv_agent_extension	= x.numero_agentes;
        x.inv_agent_legal_id	= x.doc_ident_agentes;
        x.inv_agent_internal_id	= x.doc_complementario_agentes;
        x.inv_agent_supervisor_id	= x.id_inv_supervisores;
        x.inv_agent_supervisor_name	= x.nombre_supervisores;
        x.inv_agent_schedule_id	= x.id_inv_horarios;
        x.inv_agent_schedule_name = x.nombre_horarios;




        return x;
      })
      .map( y => {
        delete y.id_inv_agentes;

        delete y.nombre_agentes;
        delete y.nombre_reportes_agentes;
        delete y.tipo_agentes;
        delete y.numero_agentes;
        delete y.doc_ident_agentes;
        delete y.doc_complementario_agentes;
        delete y.id_inv_supervisores;
        delete y.nombre_supervisores;
        delete y.id_inv_horarios;
        delete y.nombre_horarios;
        delete y.estatus_inv_agentes;

        return y;
      });

    // console.log('result', result);

    let written = await writeAgent(result);
  } else {
    console.log(`No hay registros nuevos por actualizar`);
  }
}


module.exports = {
  importAgent
};
