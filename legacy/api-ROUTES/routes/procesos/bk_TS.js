/*
* CDR
*
*/

// DEPENDENCIES
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const util = require('util')
// const exec = require('child_process');
// const shell = require('shelljs');

var cmd=require('node-cmd');


//

// CONNECTION
const myPool = require('./../../connections/pool');

const poolDat = myPool.poolDat;
const poolCdr = myPool.poolCdr;
const poolQue = myPool.poolQue;
const poolCall = myPool.poolCall;

// KEYS

const keys = require('./../../../a_COM/config/keys/keys')


router.use(bodyParser.json());

// https://stackoverflow.com/questions/20643470/execute-a-command-line-binary-with-node-js

/*****************************************************************
 * UPDATES
 */

  /******************** update_inv_campanas  */
  router.post('/update_inv_campanas/', async function(req, res, next) {

    let values = req.body;

            try {

              if (values.key === keys.key) {
                  cmd.get(
                    'node /var/www/html/proser/bk_TS/src/update_inv_campanas.js',
                    function(err, data, stderr){
                      // let text = JSON.stringify(values) + data
                      res.send(data);
                        console.log('The result of the process is...', stderr);
                    }
                );
              } else {
                res.send('No coincide la clave', );
              }
            }
            catch(err) {
              console.log('Server error');
              console.log(querySQL);
              res.status(500).send('Server error');
            // throw new Error(err)
            }
  });

 /******************** update_agentes_clasif  */
router.post('/update_agentes_clasif/', async function(req, res, next) {

  let values = req.body;

          try {

            if (values.key === keys.key) {
                cmd.get(
                  'node /var/www/html/proser/bk_TS/src/update_agentes_clasif.js',
                  function(err, data, stderr){
                    // let text = JSON.stringify(values) + data
                    res.send(data);
                      console.log('The result of the process is...', stderr);
                  }
              );
            } else {
              res.send('No coincide la clave');
            }
          }
          catch(err) {
            console.log('Server error');
            console.log(querySQL);
            res.status(500).send('Server error');
          // throw new Error(err)
          }
});

 /******************** update_cdr_base  */
 router.post('/update_cdr_base/', async function(req, res, next) {

  let values = req.body;

          try {

            if (values.key === keys.key) {
                cmd.get(
                  'node /var/www/html/proser/bk_TS/src/update_cdr_base.js',
                  function(err, data, stderr){
                    // let text = JSON.stringify(values) + data
                    res.send(data);
                      console.log('The result of the process is...', stderr);
                  }
              );
            } else {
              res.send('No coincide la clave');
            }
          }
          catch(err) {
            console.log('Server error');
            console.log(querySQL);
            res.status(500).send('Server error');
          // throw new Error(err)
          }
});

 /******************** update_colas_clasif  */
 router.post('/update_colas_clasif/', async function(req, res, next) {

  let values = req.body;

          try {

            if (values.key === keys.key) {
                cmd.get(
                  'node /var/www/html/proser/bk_TS/src/update_colas_clasif.js',
                  function(err, data, stderr){
                    // let text = JSON.stringify(values) + data
                    res.send(data);
                      console.log('The result of the process is...', stderr);
                  }
              );
            } else {
              res.send('No coincide la clave');
            }
          }
          catch(err) {
            console.log('Server error');
            console.log(querySQL);
            res.status(500).send('Server error');
          // throw new Error(err)
          }
});

 /******************** update_inv_agentes  */
 router.post('/update_inv_agentes/', async function(req, res, next) {

  let values = req.body;

          try {

            if (values.key === keys.key) {
                cmd.get(
                  'node /var/www/html/proser/bk_TS/src/update_inv_agentes.js',
                  function(err, data, stderr){
                    // let text = JSON.stringify(values) + data
                    res.send(data);
                      console.log('The result of the process is...', stderr);
                  }
              );
            } else {
              res.send('No coincide la clave');
            }
          }
          catch(err) {
            console.log('Server error');
            console.log(querySQL);
            res.status(500).send('Server error');
          // throw new Error(err)
          }
});


 /******************** update_inv_auxiliares  */
 router.post('/update_inv_auxiliares/', async function(req, res, next) {

  let values = req.body;

          try {

            if (values.key === keys.key) {
                cmd.get(
                  'node /var/www/html/proser/bk_TS/src/update_inv_auxiliares.js',
                  function(err, data, stderr){
                    // let text = JSON.stringify(values) + data
                    res.send(data);
                      console.log('The result of the process is...', stderr);
                  }
              );
            } else {
              res.send('No coincide la clave');
            }
          }
          catch(err) {
            console.log('Server error');
            console.log(querySQL);
            res.status(500).send('Server error');
          // throw new Error(err)
          }
});



 /******************** update_inv_colas  */
 router.post('/update_inv_colas/', async function(req, res, next) {

  let values = req.body;

          try {

            if (values.key === keys.key) {
                cmd.get(
                  'node /var/www/html/proser/bk_TS/src/update_inv_colas.js',
                  function(err, data, stderr){
                    // let text = JSON.stringify(values) + data
                    res.send(data);
                      console.log('The result of the process is...', stderr);
                  }
              );
            } else {
              res.send('No coincide la clave');
            }
          }
          catch(err) {
            console.log('Server error');
            console.log(querySQL);
            res.status(500).send('Server error');
          // throw new Error(err)
          }
});






// base
router.get('/', async function(req, res, next) {

  // Preparation
	let buscar = req.params.myQuery;

			if (typeof buscar === "undefined") {
					buscar = ' ';
			} else {
				buscar = req.params.myQuery.replace("%20", " ").replace('\"', '');
			}


  let querySQL = `
    SELECT
      *
    FROM
    inv_colas
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
