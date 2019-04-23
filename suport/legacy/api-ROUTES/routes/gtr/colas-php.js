/*
* OLAS PHP
*
*/

// DEPENDENCIES
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

// CONNECTION
const myPool = require('./../../connections/pool');

const poolDat = myPool.poolDat;
const poolCdr = myPool.poolCdr;
const poolQue = myPool.poolQue;
const poolCall = myPool.poolCall;

router.use(bodyParser.json());

/*****************************************************************
 * ALL ITEMS
 */
router.get('/all/:myQuery?', async function(req, res, next) {

  // Preparation
	let buscar = req.params.myQuery;

			if (typeof buscar === "undefined") {
					buscar = ' ';
			} else {
				buscar = req.params.myQuery.replace("%20", " ").replace('\"', '');
			}


      // https://10.30.4.50/asterisk_show_queue.php

  let querySQL = `
    SELECT
      *
    FROM
    dat_cdr_clasif
    WHERE
    id_global > 0
    ${buscar}
    `;

        // Data base access
        try {
          var result = await poolDat.query(querySQL);
          res.send(JSON.stringify(result));
          // console.log(querySQL);

        }
        catch(err) {
          console.log('Server error');
          console.log(querySQL);
          res.status(500).send('Server error');
        // throw new Error(err)
        }
});


module.exports = router
