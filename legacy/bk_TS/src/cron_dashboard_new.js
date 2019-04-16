const dotenv = require('dotenv/config');
const express = require('express');
const cron  = require('node-cron');
const fs  = require('fs');
const shell = require('shelljs');



let timestap = new Date()
console.log('---- DASHBOARD -----.', timestap);


shell.exec('pm2 start /var/www/html/proser/bk_TS/src/update_clasif_agentes.js '); 
shell.exec('pm2 start /var/www/html/proser/bk_TS/src/update_clasif_audit.js '); 
shell.exec('pm2 start /var/www/html/proser/bk_TS/src/update_clasif_cdr.js '); 


// dashboard preports
cron.schedule('*/2 * * * *', function() {

let timestap = new Date()
console.log('---- DASHBOARD -----.', timestap);

shell.exec('node /var/www/html/proser/bk_TS/src/update_clasif_agentes.js '); 
shell.exec('node /var/www/html/proser/bk_TS/src/update_clasif_audit.js '); 
shell.exec('node /var/www/html/proser/bk_TS/src/update_clasif_cdr.js '); 


});



