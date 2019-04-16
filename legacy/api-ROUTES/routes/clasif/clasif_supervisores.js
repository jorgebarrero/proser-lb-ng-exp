/*
* SUPERVISORES
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


  let querySQL = `
    SELECT
      *
    FROM
    clasif_supervisores
    WHERE
    id_global > 0
    ${buscar}
    `;

        // Data base access
        try {
          var result = await poolDat.query(querySQL);
          res.send(JSON.stringify(result));
          // console.log('middleware', querySQL);

        }
        catch(err) {
          console.log('Server error');
          // console.log(querySQL);
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


  let querySQL = `SELECT * FROM clasif_supervisores WHERE id_global > 0 AND id_inv_supervisores =${id}`;


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


  let querySQL = `INSERT INTO clasif_supervisores SET ?`;
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

  let querySQL = `UPDATE clasif_supervisores SET ? WHERE id_inv_supervisores = ` + req.params.id;
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
 * DELETE ITEM
 */
router.delete('/delete/:id', async function(req, res, next) {

  let values = req.body;
  console.log('ELIMINAR ****************************');

  let querySQL = `DELETE FROM clasif_supervisores WHERE id_inv_supervisores = ` + req.params.id;
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


module.exports = router
