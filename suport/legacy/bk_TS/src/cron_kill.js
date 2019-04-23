const dotenv = require('dotenv/config');
const express = require('express');
const cron = require('node-cron');
const fs = require('fs');
const shell = require('shelljs');

function kill() {
  console.log('kill delete proceses.....');

  shell.exec('pm2 delete cron_clasification');
  shell.exec('pm2 delete cron_inventory');

  shell.exec('pm2 delete getJSON');
  shell.exec('pm2 delete getJSON2');

  shell.exec('pm2 delete start');

  shell.exec('pm2 delete update_agentes');
  shell.exec('pm2 delete update_audit');
  shell.exec('pm2 delete update_cdr');
  shell.exec('pm2 delete update_clasif_agentes');
  shell.exec('pm2 delete update_clasif_audit');
  shell.exec('pm2 delete update_clasif_cdr');
  shell.exec('pm2 delete update_indicadores');
  shell.exec('pm2 delete update_realtime');

  shell.exec('pm2 delete wwwHIST');
  shell.exec('pm2 delete wwwREAL');
  shell.exec('pm2 delete wwwTR');
}

function resurrect() {
  console.log('resurrect pm2.....');
  shell.exec('pm2 resurrect');

  // UNIVERSAL
  shell.exec(
    'pm2 start /var/www/html/preports/bk_JS/bash/getJSON.sh --interpreter=perl'
  );
  shell.exec(
    'pm2 start /var/www/html/preports/bk_JS/bash/getJSON2.sh --interpreter=perl'
  );

  // PROSER
  shell.exec('pm2 start /var/www/html/proser/bk_TS/src/cron_clasification.js');
  shell.exec('pm2 start /var/www/html/proser/bk_TS/src/cron_inventory.js');

  shell.exec(
    'pm2 start /var/www/html/proser/bk_TS/src/update_clasif_agentes.js'
  );
  shell.exec('pm2 start /var/www/html/proser/bk_TS/src/update_clasif_audit.js');
  shell.exec('pm2 start /var/www/html/proser/bk_TS/src/update_clasif_cdr.js');

  shell.exec(
    'pm2 start /var/www/html/proser/bk_TS/src/cron_historic_update.js'
  );

  shell.exec('pm2 start /var/www/html/proser/api_ROUTES/bin/start');

  // PREPORTS
  shell.exec('pm2 start /var/www/html/preports/bk_JS/update_agentes.js');
  shell.exec('pm2 start /var/www/html/preports/bk_JS/update_realtime.js');
  shell.exec('pm2 start /var/www/html/preports/bk_JS/update_audit.js');
  shell.exec('pm2 start /var/www/html/preports/bk_JS/update_cdr.js');

  shell.exec('pm2 start /var/www/html/preports/bk_JS/update_indicadores.js');

  shell.exec('pm2 start /var/www/html/preports/mw_HIST/bin/wwwHIST');
  shell.exec('pm2 start /var/www/html/preports/mw_REAL/bin/wwwREAL');
  shell.exec('pm2 start /var/www/html/preports/mw_TR/bin/wwwTR');
}

function deleteLogs() {
  console.log('resurrect pm2.....');
  shell.exec('rm -rf /root/.pm2/logs/*');
}

function main() {
  //* Clear terminal
  console.log('\033c'); //clear screen
  kill();
  deleteLogs();
  setTimeout(resurrect, 10 * 1000);
}

main();

cron.schedule('* */15 * * * *', function() {
  main();
});
