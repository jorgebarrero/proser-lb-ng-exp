const dotenv = require('dotenv/config');
const cron = require('node-cron');
const fs = require('fs');
const shell = require('shelljs');

const moment = require('moment');

function yesterday_text() {
  let today = new Date();
  let yesterday = new Date(today.setDate(today.getDate() - 1));

  return moment(yesterday).format('YYYY-MM-DD');
}

let last_date = yesterday_text();

function main() {
  shell.exec(
    `node /var/www/html/proser/bk_TS/src/update_clasif_cdr_hist ${last_date}`
  );

  setTimeout(audit, 30 * 1000);

  function audit() {
    return shell.exec(
      `node /var/www/html/proser/bk_TS/src/update_clasif_audit_hist ${last_date}`
    );
  }
}
// Execution

//* Clear terminal
console.log('\033c'); //clear screen
console.log('DATA HISTORICA', yesterday_text);
main();

cron.schedule('* */15 * * * *', function() {
  //* Clear terminal
  console.log('\033c'); //clear screen
  console.log('DATA HISTORICA', yesterday_text);
  main();
});
