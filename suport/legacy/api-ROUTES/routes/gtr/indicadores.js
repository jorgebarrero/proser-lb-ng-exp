/*
* INDICADORES
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
router.get('/cdr_entrantes/:myQuery?', async function(req, res, next) {

  // Preparation
	let buscar = req.params.myQuery;

			if (typeof buscar === "undefined") {
					buscar = ' ';
			} else {
				buscar = req.params.myQuery.replace("%20", " ").replace('\"', '');
			}


  let querySQL = `
    SELECT

      SUM(llamadas_recibidas),
      SUM(llamadas_abandonadas),
      SUM(llamadas_cortas),
      SUM(llamadas_antes_de_20),
      sum(tiempo_operacion),
      sum(tiempo_espera),

      SUM(llamadas_antes_de_20)/SUM(llamadas_recibidas) as nivel_de_servicio,
      SUM(llamadas_atendidas)/SUM(llamadas_recibidas) as nivel_de_atencion,
      SUM(llamadas_abandonadas)/SUM(llamadas_recibidas) as nivel_de_abandono,

      INT(SUM(tiempo_de_operacion)/SUM(llamadas_atendidas)) as tmo,
      INT(SUM(tiempo_espera_en_cola)/SUM(llamadas_atendidas))as asa,

      id_global

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
