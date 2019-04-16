const dotenv = require('dotenv/config');
const express = require('express');
const cron  = require('node-cron');
const fs  = require('fs');
const shell = require('shelljs');


let timestap = new Date()
console.log('---- EXPRESS -----.', timestap);

// express 1.7 legacy preports
    shell.exec('pm2 start /var/www/html/preports/mw_HIST/bin/wwwHIST --interpreter=perl');
    shell.exec('pm2 start /var/www/html/preports/mw_REAL/bin/wwwREAL --interpreter=perl');
    shell.exec('pm2 start /var/www/html/preports/mw_TR/bin/wwwTR --interpreter=perl ');

// express 1.8 proser
    shell.exec('pm2 start /var/www/html/proser/api_HIST/bin/apiHIST --interpreter=perl'); // revisar
    shell.exec('pm2 start /var/www/html/proser/api_ROUTES/bin/start --interpreter=perl');


cron.schedule('*/15 * * * *', function() {

let timestap = new Date()
console.log('---- EXPRESS -----.', timestap);

// express 1.7 legacy preports
    shell.exec('pm2 start /var/www/html/preports/mw_HIST/bin/wwwHIST --interpreter=perl');
    shell.exec('pm2 start /var/www/html/preports/mw_REAL/bin/wwwREAL --interpreter=perl');
    shell.exec('pm2 start /var/www/html/preports/mw_TR/bin/wwwTR --interpreter=perl ');

// express 1.8 proser
    shell.exec('pm2 start /var/www/html/proser/api_HIST/bin/apiHIST --interpreter=perl'); // revisar
    shell.exec('pm2 start /var/www/html/proser/api_ROUTES/bin/start --interpreter=perl');
});


