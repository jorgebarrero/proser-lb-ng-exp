const dotenv = require('dotenv/config');
const express = require('express');
const cron  = require('node-cron');
const fs  = require('fs');
const shell = require('shelljs');

let timestap = new Date()
console.log('---- INVENTORY -----.', timestap);

shell.exec('node /var/www/html/proser/bk_TS/src/update_inv_agentes.js');
shell.exec('node /var/www/html/proser/bk_TS/src/update_inv_colas.js ');
shell.exec('node /var/www/html/proser/bk_TS/src/update_inv_campanas.js ');
shell.exec('node /var/www/html/proser/bk_TS/src/update_inv_auxiliares.js');

// inventarios proser
cron.schedule('*/1 * * * *', function() {

let timestap = new Date()
console.log('---- INVENTORY -----.', timestap);

shell.exec('node /var/www/html/proser/bk_TS/src/update_inv_agentes.js');
shell.exec('node /var/www/html/proser/bk_TS/src/update_inv_colas.js ');
shell.exec('node /var/www/html/proser/bk_TS/src/update_inv_campanas.js ');
shell.exec('node /var/www/html/proser/bk_TS/src/update_inv_auxiliares.js');

});

