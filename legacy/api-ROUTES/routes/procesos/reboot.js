/*
* CDR
*
*/

// DEPENDENCIES
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const util = require('util')
const exec = require('child_process').exec;
var shell = require('shelljs');

// CONNECTION
const myPool = require('./../../connections/pool');

const poolDat = myPool.poolDat;
const poolCdr = myPool.poolCdr;
const poolQue = myPool.poolQue;
const poolCall = myPool.poolCall;

router.use(bodyParser.json());

/*****************************************************************
 * REBOOT NOW
 */
router.post('/reset/', async function(req, res, next) {

  let values = req.body;


  if (values === '123456789' ) {

          try {
            shell.echo('Start mw_HIST' + values);
            shell.exec('./var/www/html/preports/bk_JS/bash/reboot.sh');
          }
          catch(err) {
            console.log('Server error');
            console.log(querySQL);
            res.status(500).send('Server error');
          // throw new Error(err)
          }

} else {

  shell.echo('Reboot');
  shell.exec('/var/www/html/preports/bk_JS/bash/preports_REBOOT.sh');
    // shell.exit(1);
}

});



module.exports = router
