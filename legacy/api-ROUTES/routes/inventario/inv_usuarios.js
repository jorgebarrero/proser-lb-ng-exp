/*
* USUARIOS
*
*/

// Dependencias
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

const myPool = require('./../../connections/pool');

const poolDat = myPool.poolDat;
const poolCdr = myPool.poolCdr;
const poolQue = myPool.poolQue;
const poolCall = myPool.poolCall;


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


  let querySQL = `
    SELECT
      *
    FROM
    inv_usuarios
    WHERE
    id_global > 0
    ${buscar}
    `;

        // Data base access
        try {
          var result = await poolDat.query(querySQL);
          res.send(JSON.stringify(result));
          console.log(querySQL);

        }
        catch(err) {
          console.log('Server error');
          console.log(querySQL);
          res.status(500).send('Server error');
        // throw new Error(err)
        }
});

/********************************************
 * ITEM BY ID
 */
router.get('/one/:id', async function(req, res, next) {

  let id = req.params.id;

	// let buscar = req.params.myQuery;

	// 		if (typeof buscar === "undefined") {
	// 				buscar = ' ';
	// 		} else {
	// 			buscar = req.params.myQuery.replace("%20", " ").replace('\"', '');
	// 		}


	let querySQL = `SELECT * FROM inv_usuarios WHERE id_global > 0 AND id_inv_usuarios = ${id}`;

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

/********************************************
 * INSERT ITEM
 */
router.post('/insert', async function(req, res, next) {

  let values = req.body;


  console.log('INSERTANDO ****************************');


  let querySQL = `INSERT INTO inv_usuarios SET ?`;
          // Data base access
          try {
            var result = await poolDat.query(querySQL, values);
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

/********************************************
 * UPDATE ITEM
 */
router.put('/update/:id', async function(req, res, next) {

  let values = req.body;

  console.log('EDITAR ****************************');
  console.log(values);

  let querySQL = `UPDATE inv_usuarios SET ? WHERE id_inv_usuarios = ` + req.params.id;
  // Data base access
  try {
    var result = await poolDat.query(querySQL, values);
    res.send(JSON.stringify(result));
    console.log("ID DEL REGISTRO MODIFICADO...", result.insertId);

  }
  catch(err) {
    console.log('Server error');
    console.log(querySQL);
    res.status(500).send('Server error');
  // throw new Error(err)
  }

});

/********************************************
 * ELIMINAR ITEM
 */
router.delete('/delete/:id', async function(req, res, next) {

  let values = req.body;
  console.log('ELIMINAR ****************************');

  let querySQL = `DELETE FROM inv_usuarios WHERE id = ` + req.params.id;
  // Data base access
  try {
    var result = await poolDat.query(querySQL);
    res.send(JSON.stringify(result));
    console.log("ID DEL REGISTRO ELIMINADO...", result.insertId);

  }
  catch(err) {
    console.log('Server error');
    console.log(querySQL);
    res.status(500).send('Server error');
  // throw new Error(err)
  }

});

/********************************************
 * AUTENTICATE ITEM
 */
router.post('/authenticate', async function(req, res, next) {

  	let values = req.body;
	let username  = req.body.username;
	let password  = req.body.password;


  console.log('INSERTANDO ****************************');
/*
                        id: user.id,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
*/

//  let querySQL = `SELECT id, username, firstName, lastName, 'fake-jwt-token' as token FROM inv_usuarios WHERE username ='${username}' AND password = '${password}'`;

  let querySQL = `SELECT id, username, firstName, lastName, 'fake-jwt-token' as token FROM inv_usuarios WHERE username ='${username}' AND password = '${password}'`;

          // Data base access
          try {
            var result = await poolDat.query(querySQL, values);
let user = result[0]
            res.send(JSON.stringify(user));
            console.log('user', user);

          }
          catch(err) {
            console.log('Server error');
            console.log(querySQL);
            res.status(500).send('Server error');
          // throw new Error(err)
          }

});


/*****************************************************************
 * COUNT ITEMS
 */
router.get('/count/:myQuery?', async function(req, res, next) {

  // Preparation
	let buscar = req.params.myQuery;

			if (typeof buscar === "undefined") {
					buscar = ' ';
			} else {
				buscar = req.params.myQuery.replace("%20", " ").replace('\"', '');
			}


  let querySQL = `
    SELECT
      count(id_inv_usuarios) as count,

      TIMESTAMP(now()) as timestamp,
      TIME(now())as time,
      TIME_TO_SEC( TIME(now()) ) as seconds,
      TIME_TO_SEC( TIME(now()) ) / 60 as minutes,
      TIME_TO_SEC( TIME(now()) ) / 60 / 60 as hours


    FROM
    inv_usuarios
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
