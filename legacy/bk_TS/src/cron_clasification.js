const dotenv = require('dotenv/config');
const express = require('express');
const cron  = require('node-cron');
const fs  = require('fs');
const shell = require('shelljs');


let timestap = new Date()
console.log('---- CLASIFICACTION -----.', timestap);

// clasificacion preports
    shell.exec('node /var/www/html/preports/bk_JS/update_colas_clasif.js'); 
    shell.exec('node /var/www/html/preports/bk_JS/update_agentes_clasif.js');

// clasificacion proser
    shell.exec('node  /var/www/html/proser/bk_TS/src/update_clasif_colas.js');
    shell.exec('node  /var/www/html/proser/bk_TS/src/update_clasif_agentes.js');


cron.schedule('1 * * * *', function() {
let timestap = new Date()
console.log('---- CLASIFICACTION -----.', timestap);

// clasificacion preports
    shell.exec('node /var/www/html/preports/bk_JS/update_colas_clasif.js'); 
    shell.exec('node /var/www/html/preports/bk_JS/update_agentes_clasif.js');

// clasificacion proser
    shell.exec('node  /var/www/html/proser/bk_TS/src/update_clasif_colas.js');
    shell.exec('node  /var/www/html/proser/bk_TS/src/update_clasif_agentes.js');
});


