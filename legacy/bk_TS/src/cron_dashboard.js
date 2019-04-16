const dotenv = require('dotenv/config');
const express = require('express');
const cron  = require('node-cron');
const fs  = require('fs');
const shell = require('shelljs');



let timestap = new Date()
console.log('---- DASHBOARD -----.', timestap);

shell.exec('node /var/www/html/preports/bk_JS/bash/getJSON.sh --interpreter=perl'); 
shell.exec('node /var/www/html/preports/bk_JS/bash/getJSON2.sh --interpreter=perl'); 

shell.exec('node /var/www/html/preports/bk_JS/update_cdr.js '); 
shell.exec('node /var/www/html/preports/bk_JS/update_audit.js '); 
shell.exec('node /var/www/html/preports/bk_JS/update_realtime.js '); 
shell.exec('node /var/www/html/preports/bk_JS/update_agentes.js '); 

shell.exec('node /var/www/html/preports/bk_JS/update_indicadores.js'); 



// dashboard preports
cron.schedule('*/2 * * * *', function() {

let timestap = new Date()
console.log('---- DASHBOARD -----.', timestap);

shell.exec('node /var/www/html/preports/bk_JS/bash/getJSON.sh --interpreter=perl'); 
shell.exec('node /var/www/html/preports/bk_JS/bash/getJSON2.sh --interpreter=perl'); 

shell.exec('node /var/www/html/preports/bk_JS/update_cdr.js '); 
shell.exec('node /var/www/html/preports/bk_JS/update_audit.js '); 
shell.exec('node /var/www/html/preports/bk_JS/update_realtime.js '); 
shell.exec('node /var/www/html/preports/bk_JS/update_agentes.js '); 

shell.exec('node /var/www/html/preports/bk_JS/update_indicadores.js'); 

});



