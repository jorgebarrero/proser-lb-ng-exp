/*
* PM2
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

  /******************** START  */
  router.post('/start/', async function(req, res, next) {

    let values = req.body;
    let path = values.path;
    let file = values.file;

            try {

              if (values.key === keys.key) {
                  cmd.get(
                    `pm2 start ${path}/${file}`,
                    function(err, data, stderr){
                      // let text = JSON.stringify(values) + data
                      res.send(data);
                        console.log('The result of the process is...\n', data);
                    }
                );
              } else {
                res.send('No coincide la clave', );
              }
            }
            catch(err) {
              console.log('Server error', err );
              console.log(querySQL);
              res.status(500).send('Server error', err);
            // throw new Error(err)
            }
  });



  /******************** STOP  */
  router.post('/stop/', async function(req, res, next) {

    let values = req.body;
    let path = values.path;
    let file = values.file;

            try {

              if (values.key === keys.key) {
                  cmd.get(
                    `pm2 stop ${path}/${file}`,
                    function(err, data, stderr){
                      // let text = JSON.stringify(values) + data
                      res.send(data);
                        console.log('The result of the process is...\n', data);
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


  router.post('/show/', async function(req, res, next) {

    let values = req.body;
    let path = values.path;
    let file = values.file;

            try {

              if (values.key === keys.key) {
                  cmd.get(
                    `pm2 show ${path}/${file}`,
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


    /******************** STOP  */
    router.post('/status/', async function(req, res, next) {

        let values = req.body;
        let path = values.path;
        let file = values.file;

                try {

                  if (values.key === keys.key) {
                      cmd.get(
                        `pm2 status`,
                        function(err, data, stderr){
                          // let text = JSON.stringify(values) + data
                          res.send(data);
                            console.log(`The result of the process is... \r`);
                            console.log(stderr);
                        }
                    );
                  } else {
                    res.send('No coincide la clave', );
                  }
                }
                catch(err) {
                  console.log('Server error');
                  console.log(querySQL);
                  res.status(500).send('Server error', err);
                // throw new Error(err)
                }
      });



module.exports = router
