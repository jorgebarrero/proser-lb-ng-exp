const dotenv = require('dotenv/config');
const cron  = require('node-cron');
const fs  = require('fs');
const shell = require('shelljs');
const moment = require('moment');

const f = require('./funciones/fechas_utilitarios');

const update_cdr = './update_clasif_cdr_hist.js';
const update_audit = './update_clasif_audit_hist.js';


//* Conectores
const pool = require('./conectores/pool');
const poolDat = pool.poolDat;
const poolDat_M = pool.poolDat_M;
const poolCdr = pool.poolCdr;
const poolQue = pool.poolQue;
const poolCall = pool.poolCall;

//* Clear terminal
console.log('\033c'); //clear screen


let registros = [];
let yesterday = moment(process.argv[2]).add(-1, 'days').format('YYYY-MM-DD');



function initDay() {

}


poolDat_M.query(`
DELETE FROM dat_cdr_clasif ;
DELETE FROM a_clasif_cdr ;
`,
[registros],
function (err, result, fields) {

  if(err){
    console.log('Algo no está bien...');
  } else {
    console.log('--------- Eliminando data  -------------');
    console.log('yesterday', yesterday);
    
    shell.exec('node src/update_clasif_cdr_hist ' + yesterday );
    process.exit(1);
  }
});
