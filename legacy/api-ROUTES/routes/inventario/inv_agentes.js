/*
* AGENTES
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
    inv_agentes
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

/********************************************
 * ITEM BY ID
 */
router.get('/one/:id', async function(req, res, next) {

	let id = req.params.id;

			// if (typeof buscar === "undefined") {
			// 		buscar = ' ';
			// } else {
			// 	buscar = req.params.myQuery.replace("%20", " ").replace('\"', '');
			// }


	let querySQL = `SELECT * FROM inv_agentes WHERE id_global > 0 AND id_inv_agentes = ${id}`;

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


  let querySQL = `INSERT INTO inv_agentes SET ?`;
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

  let querySQL = `UPDATE inv_agentes SET ? WHERE id_inv_agentes = ` + req.params.id;
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

  let querySQL = `DELETE FROM inv_agentes WHERE id_inv_agentes = ` + req.params.id;
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

/****************************************************************************
 *  SECTION TO MERGE QUERIES WITH LOCAL DATA
  id_global
  id_inv_agentes
  tipo_agentes
  numero_agentes
  nombre_agentes
  nombre_reportes_agentes
  doc_ident_agentes
  doc_complementario_agentes
  id_inv_supervisores
  codigo_supervisores
  nombre_supervisores
  doc_ident_supervisores
  doc_complementario_supervisores
  igual_supervisores
  colas_agentes
  horario
  nombre_horarios
  record
  chk_utilizado
  estatus_inv_agentes
  usuario
  createdAt
  updatedAt
 */





/*****************************************************************
 * ALL ITEMS
 */
router.get('/all_merge/:myQuery?', async function(req, res, next) {

  // Preparation
	let buscar = req.params.myQuery;

			if (typeof buscar === "undefined") {
					buscar = ' ';
			} else {
				buscar = req.params.myQuery.replace("%20", " ").replace('\"', '');
			}


  let querySQL = `
  SELECT

  inv_agentes.id_global,
  inv_agentes.id_inv_agentes,
  inv_agentes.tipo_agentes,
  inv_agentes.numero_agentes,
  inv_agentes.nombre_agentes,
  inv_agentes.nombre_reportes_agentes,
  inv_agentes.doc_ident_agentes,
  inv_agentes.doc_complementario_agentes,


  inv_agentes_supervisores.id_inv_supervisores,
  inv_agentes_supervisores.codigo_supervisores,
  inv_agentes_supervisores.nombre_supervisores,
  inv_agentes_supervisores.doc_ident_supervisores,
  inv_agentes_supervisores.doc_complementario_supervisores,
  inv_agentes_supervisores.igual_supervisores,
  inv_agentes_supervisores.colas_agentes,
  inv_agentes_supervisores.id_inv_horarios,
  inv_agentes_supervisores.horario,
  inv_agentes_supervisores.nombre_horarios,

  inv_agentes.chk_utilizado,
  inv_agentes.estatus_inv_agentes,
  inv_agentes.usuario,
  inv_agentes.createdAt,
  inv_agentes.updatedAt


  FROM
  inv_agentes

  LEFT JOIN inv_agentes_supervisores  ON inv_agentes.id_inv_agentes = inv_agentes_supervisores.id_inv_agentes

  WHERE

  inv_agentes.id_global > 0


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

/********************************************
 * ITEM BY ID
 */
router.get('/one_merge/:id', async function(req, res, next) {

	let id = req.params.id;

			// if (typeof buscar === "undefined") {
			// 		buscar = ' ';
			// } else {
			// 	buscar = req.params.myQuery.replace("%20", " ").replace('\"', '');
			// }


	let querySQL = `SELECT * FROM inv_agentes WHERE id_global > 0 AND id_inv_agentes = ${id}`;

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
      count(id_inv_agentes) as count,

      TIMESTAMP(now()) as timestamp,
      TIME(now())as time,
      TIME_TO_SEC( TIME(now()) ) as seconds,
      TIME_TO_SEC( TIME(now()) ) / 60 as minutes,
      TIME_TO_SEC( TIME(now()) ) / 60 / 60 as hours

    FROM
    inv_agentes
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
