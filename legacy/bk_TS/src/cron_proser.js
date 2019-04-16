const dotenv = require('dotenv/config');
const express = require('express');
const cron  = require('node-cron');
const fs  = require('fs');
const shell = require('shelljs');


console.log('Tareas programadas Proser.');


// pm2 reboot
cron.schedule('*/15 * * * *', function() {
    function kill() {
        console.log("kill pm2.....");
        shell.exec('pm2 kill');
    }

    function resurrect() {
        console.log("resurrect pm2.....");
        shell.exec('pm2 resurrect');
    }

kill();

setTimeout(resurrect, 10 *1000);
});

// init
    shell.exec('pm2 start /var/www/html/preports/mw_HIST/bin/wwwHIST --interpreter=perl');
    shell.exec('pm2 start /var/www/html/preports/mw_REAL/bin/wwwREAL --interpreter=perl');
    shell.exec('pm2 start /var/www/html/preports/mw_TR/bin/wwwTR --interpreter=perl ');
    shell.exec('pm2 start /var/www/html/preports/bk_JS/bash/getJSON.sh --interpreter=perl'); 
    shell.exec('pm2 start /var/www/html/preports/bk_JS/bash/getJSON2.sh --interpreter=perl'); 
    shell.exec('pm2 start /var/www/html/proser/api_ROUTES/bin/start --interpreter=perl');


// express 1.7 legacy preports

cron.schedule('*/15 * * * *', function() {
    shell.exec('pm2 start /var/www/html/preports/mw_HIST/bin/wwwHIST --interpreter=perl');
    shell.exec('pm2 start /var/www/html/preports/mw_REAL/bin/wwwREAL --interpreter=perl');
    shell.exec('pm2 start /var/www/html/preports/mw_TR/bin/wwwTR --interpreter=perl ');
});

// clasificacion preports
cron.schedule('*/30 * * * *', function() {
    shell.exec('node /var/www/html/preports/bk_JS/update_colas_clasif.js'); 
    shell.exec('node /var/www/html/preports/bk_JS/update_agentes_clasif.js');
});

// dashboard preports
cron.schedule('*/2 * * * *', function() {
shell.exec('pm2 start /var/www/html/preports/bk_JS/bash/getJSON.sh --interpreter=perl'); 
shell.exec('pm2 start /var/www/html/preports/bk_JS/bash/getJSON2.sh --interpreter=perl'); 

shell.exec('pm2 start /var/www/html/preports/bk_JS/update_cdr.js '); 
shell.exec('pm2 start /var/www/html/preports/bk_JS/update_audit.js '); 
shell.exec('pm2 start /var/www/html/preports/bk_JS/update_realtime.js '); 
shell.exec('pm2 start /var/www/html/preports/bk_JS/update_agentes.js '); 

shell.exec('pm2 start /var/www/html/preports/bk_JS/update_indicadores.js'); 
});

// express 1.8 proser

cron.schedule('*/15 * * * *', function() {
    shell.exec('pm2 start /var/www/html/proser/api_HIST/bin/apiHIST --interpreter=perl'); // revisar
    shell.exec('pm2 start /var/www/html/proser/api_ROUTES/bin/start --interpreter=perl');
});

// clasificacion proser
cron.schedule('*/30 * * * *', function() {
    shell.exec('node  /var/www/html/proser/bk_TS/src/update_clasif_colas.js');
    shell.exec('node  /var/www/html/proser/bk_TS/src/update_clasif_agentes.js');
});


// inventarios proser
cron.schedule('*/1 * * * *', function() {

shell.exec('node /var/www/html/proser/bk_TS/src/update_inv_agentes.js');
shell.exec('node /var/www/html/proser/bk_TS/src/update_inv_colas.js ');
shell.exec('node /var/www/html/proser/bk_TS/src/update_inv_campanas.js ');
shell.exec('node /var/www/html/proser/bk_TS/src/update_inv_auxiliares.js');

});



// shell.exec('pm2 save');


//setTimeout(process.exit(), 600 *1000, 'funky');
