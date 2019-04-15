import * as poolOrigin from '../../../connectors/pool_cc_reports';
import * as pool from '../../../connectors/pool';
import * as agentFunctions from './import_agent_functions';
import{ removeRowDataPacket } from '../../helpers/mysql-helper.js';

const moment = require(`moment`);


// Read maximum id in original data
function readMaxId() {
  return new Promise((resolve, reject) => {
    let querySQL = `SELECT max(id_inv_horarios) as maxId FROM inv_horarios`;
    resolve(poolOrigin.poolCCreports.query(querySQL));
    reject(`Error`);
  });
}

// Read maximum id in imported data
function readNextId() {
  return new Promise((resolve, reject) => {
    let querySQL = `SELECT (max(inv_schedule_id) + 1) as maxId FROM InvSchedule`;
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
    id_inv_horarios,

    estatus_inv_horarios,
    tipo_horarios,
    nombre_horarios,

    comentario_horarios,

    lunes_desde,
    lunes_hasta,
    martes_desde,
    martes_hasta,
    miercoles_desde,
    miercoles_hasta,
    jueves_desde,
    jueves_hasta,
    viernes_desde,
    viernes_hasta,
    sabado_desde,
    sabado_hasta,
    domingo_desde,
    domingo_hasta

    FROM ( SELECT * FROM inv_horarios WHERE id_inv_horarios >= ${startId} ORDER BY id_inv_horarios) as main ORDER BY id_inv_horarios LIMIT ${process.env.CDR_BATCH_LIMIT}
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
    let cdr_table = `InvSchedule`;
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
            console.log(`Error en tabla InvSchedule`, err);
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
async function importSchedule( ) {
  //* Clear terminal
  console.clear();

  console.log(`/*************/ Updating IMPORT_SCHEDULE /*************/ `);

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

        x.inv_schedule_id = x.id_inv_horarios;

        x.inv_schedule_type = x.tipo_horarios;
        x.inv_schedule_name = x.nombre_horarios;
        x.inv_schedule_shortname = x.nombre_horarios;
        x.inv_schedule_description = x.comentario_horarios;
        x.inv_schedule_status = x.estatus_inv_horarios;

        // cal
        x.inv_schedule_days = JSON.stringify({
          mon: { start: x.lunes_desde, end: x.lunes_hasta },
          tue: { start: x.martes_desde, end: x.martes_hasta },
          wed: { start: x.miercoles_desde, end: x.miercoles_hasta },
          thu: { start: x.jueves_desde, end: x.jueves_hasta },
          fri: { start: x.viernes_desde, end: x.viernes_hasta },
          sat: { start: x.sabado_desde, end: x.sabado_hasta },
          sun: { start: x.domingo_desde, end: x.domingo_hasta },
        });

        return x;
      })
      .map( y => {
        delete y.id_inv_horarios;

        delete y.estatus_inv_horarios;
        delete y.tipo_horarios;
        delete y.nombre_horarios;

        delete y.comentario_horarios;


        delete y.lunes_desde;
        delete y.lunes_hasta;
        delete y.martes_desde;
        delete y.martes_hasta;
        delete y.miercoles_desde;
        delete y.miercoles_hasta;
        delete y.jueves_desde;
        delete y.jueves_hasta;
        delete y.viernes_desde;
        delete y.viernes_hasta;
        delete y.sabado_desde;
        delete y.sabado_hasta;
        delete y.domingo_desde;
        delete y.domingo_hasta;

        return y;
      });

    // console.log('result', result);

    let written = await writeDestiny(result);
  } else {
    console.log(`No hay registros nuevos por actualizar`);
  }
}


module.exports = {
  importSchedule
};
