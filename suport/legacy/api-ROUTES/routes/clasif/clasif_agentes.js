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
    clasif_agentes
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


	let querySQL = `SELECT * FROM clasif_agentes WHERE id_global > 0 AND id_inv_agentes = ${id}`;

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


  let querySQL = `INSERT INTO clasif_agentes SET ?`;
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

  let querySQL = `UPDATE clasif_agentes SET ? WHERE id_inv_agentes = ` + req.params.id;
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

  let querySQL = `DELETE FROM clasif_agentes WHERE id_inv_agentes = ` + req.params.id;
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
      count( DISTINCT id_inv_agentes) as count,

      TIMESTAMP(now()) as timestamp,
      TIME(now())as time,
      TIME_TO_SEC( TIME(now()) ) as seconds,
      TIME_TO_SEC( TIME(now()) ) / 60 as minutes,
      TIME_TO_SEC( TIME(now()) ) / 60 / 60 as hours

    FROM
    clasif_agentes
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



/*****************************************************************
 * COUNT ITEMS WITH FIELDS
 */
router.get('/count_field/:myFields/:myQuery?', async function(req, res, next) {

  // fileds, query


  // Preparation
  let campos = req.params.myFields;
	let buscar = req.params.myQuery;

			if (typeof buscar === "undefined") {
					buscar = ' ';
			} else {
				buscar = req.params.myQuery.replace("%20", " ").replace('\"', '');
			}


  let querySQL = `
    SELECT
      count(DISTINCT ${campos}) as count,

      TIMESTAMP(now()) as timestamp,
      TIME(now())as time,
      TIME_TO_SEC( TIME(now()) ) as seconds,
      TIME_TO_SEC( TIME(now()) ) / 60 as minutes,
      TIME_TO_SEC( TIME(now()) ) / 60 / 60 as hours

    FROM
    clasif_agentes
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


/*****************************************************************
 * ALL ITEMS WITH INDICATORS (LEFT JOIN)
 */
router.get('/indicators/:myQuery?', async function(req, res, next) {

  // Preparation
	let buscar = req.params.myQuery;

			if (typeof buscar === "undefined") {
					buscar = ' ';
			} else {
				buscar = req.params.myQuery.replace("%20", " ").replace('\"', '');
			}


  let querySQL = `
  SELECT

  clasif.id_inv_agentes,
  clasif.nombre_agentes,
  clasif.numero_agentes,
  clasif.doc_ident_agentes,
  clasif.nombre_reportes_agentes,
  clasif.id_inv_supervisores,
  clasif.nombre_supervisores,

  clasif.nombre_horarios,
  clasif.horarios_dia_desde,
  clasif.horarios_dia_hasta,


  dat.segundos_entrada,
  dat.segundos_salida,

  dat.llamadas_recibidas,
  dat.llamadas_atendidas,
  dat.llamadas_cortas,
  dat.llamadas_antes_de_20,



  dat.llamadas_realizadas,
  dat.llamadas_fallidas,
  dat.llamadas_contestadas,
  dat.llamadas_efectivas,
  dat.llamadas_colgadas,

  dat.llamadas_internas,

  dat.colgado_agente,

  dat.tiempo_login,
  dat.tiempo_auxiliares,
  dat.tiempo_conversado,

  dat.tmo_entrante,
  dat.tmo_saliente,
  dat.asa_entrante,

  dat.estado_agentes,
  dat.id_inv_auxiliares,
  dat.nombre_auxiliares,

  dat.productividad,
  dat.porcentaje_utilizacion,

  dat.hora_actual,
  dat.segundos_hora_actual,

  dat.php_agentes,
  dat.disponible,
  dat.ocupado,
  dat.auxiliar,
  dat.estado_actual,
  dat.clasificacion_estado


  FROM clasif_agentes as clasif
  LEFT JOIN dat_agent_clasif as dat ON clasif.id_inv_agentes = dat.id_inv_agentes

  WHERE
  clasif.id_global > 0
    ${buscar}

  GROUP BY
  clasif.id_inv_agentes

  ORDER BY
  clasif.nombre_reportes_agentes
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


/*****************************************************************
 * ALL SUPERVISORS WITH INDICATORS (LEFT JOIN)
 */
router.get('/indicators_supervisors/:myQuery?', async function(req, res, next) {

  // Preparation
	let buscar = req.params.myQuery;

			if (typeof buscar === "undefined") {
					buscar = ' ';
			} else {
				buscar = req.params.myQuery.replace("%20", " ").replace('\"', '');
			}


  let querySQL = `
  SELECT

  clasif.id_inv_supervisores,
  clasif.nombre_supervisores,

  count(DISTINCT clasif.id_inv_agentes) AS cantidad_agentes,


  SUM(dat.llamadas_recibidas)  AS llamadas_recibidas,
  SUM(dat.llamadas_atendidas) AS llamadas_atendidas,
  SUM(dat.llamadas_cortas) AS 	llamadas_cortas,
  SUM(dat.llamadas_antes_de_20) AS 	llamadas_antes_de_20,

  SUM(dat.llamadas_realizadas)  AS llamadas_realizadas,
  SUM(dat.llamadas_fallidas)  AS llamadas_fallidas,
  SUM(dat.llamadas_contestadas)  AS llamadas_contestadas,
  SUM(dat.llamadas_efectivas)  AS llamadas_efectivas,
  SUM(dat.llamadas_colgadas)  AS llamadas_colgadas,

  SUM(dat.llamadas_internas)  AS llamadas_internas,

  SUM(dat.colgado_agente)  AS colgado_agente,


  SUM(dat.tiempo_login)  AS tiempo_login,
  SUM(dat.tiempo_auxiliares)  AS tiempo_auxiliares,
  SUM(dat.tiempo_conversado)  AS tiempo_conversado,
  SUM(dat.tiempo_disponible)  AS tiempo_disponible,

  SUM(dat.tiempo_de_operacion_ent) / SUM(dat.llamadas_atendidas)  AS tmo_entrante,
  SUM(dat.tiempo_de_operacion_sal) / SUM(dat.llamadas_contestadas)  AS tmo_saliente,

  1 AS productividad,
  1 AS porcentaje_utilizacion


  FROM clasif_agentes as clasif
  LEFT JOIN dat_agent_clasif as dat ON clasif.id_inv_agentes = dat.id_inv_agentes

  WHERE
  clasif.id_global > 0
  ${buscar}

  GROUP BY
  clasif.id_inv_supervisores

  ORDER BY
  clasif.nombre_supervisores

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



/*****************************************************************
 * ALL AGENT STATES
 */
router.get('/indicators_state/:myQuery?', async function(req, res, next) {

  // Preparation
	let buscar = req.params.myQuery;

			if (typeof buscar === "undefined") {
					buscar = ' ';
			} else {
				buscar = req.params.myQuery.replace("%20", " ").replace('\"', '');
			}


  let querySQL = `
  SELECT
  clasificacion_estado,
  COUNT(clasificacion_estado) AS agentes_estado

  FROM dat_agent_clasif as clasif

  WHERE
  clasif.id_global > 0
  ${buscar}

  GROUP BY
    clasif.clasificacion_estado

  ORDER BY
    clasif.nombre_supervisores

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



/*****************************************************************
 * ALL SUPERVISORS WITH INDICATORS (LEFT JOIN)
 */
router.get('/supervisor_cdr_audit/:myQuery?', async function(req, res, next) {

  // Preparation
	let buscar = req.params.myQuery;

			if (typeof buscar === "undefined") {
					buscar = ' ';
			} else {
				buscar = req.params.myQuery.replace("%20", " ").replace('\"', '');
			}


  let querySQL = `
  SELECT

  clasif.id_inv_supervisores,
  clasif.nombre_supervisores,

  count(DISTINCT clasif.id_inv_agentes) AS cantidad_agentes,

  SUM(cdr.llamadas_recibidas)  AS llamadas_recibidas,
  SUM(cdr.llamadas_atendidas) AS llamadas_atendidas,
  SUM(cdr.llamadas_cortas) AS 	llamadas_cortas,
  SUM(cdr.llamadas_antes_de_20) AS 	llamadas_antes_de_20,

  SUM(cdr.llamadas_realizadas)  AS llamadas_realizadas,
  SUM(cdr.llamadas_fallidas)  AS llamadas_fallidas,
  SUM(cdr.llamadas_contestadas)  AS llamadas_contestadas,
  SUM(cdr.llamadas_efectivas)  AS llamadas_efectivas,
  SUM(cdr.llamadas_colgadas)  AS llamadas_colgadas,

  SUM(cdr.llamada_interna)  AS llamadas_internas,

  SUM(cdr.colgado_agente)  AS colgado_agente,


  SUM(audit.tiempo_conectado)  AS tiempo_login,
  SUM(audit.tiempo_auxiliares)  AS tiempo_auxiliares,
  SUM(audit.tiempo_asignado)  AS tiempo_asignado,
  SUM(cdr.tiempo_conversado)  AS tiempo_conversado,
  SUM(audit.tiempo_conectado) -  SUM(cdr.tiempo_conversado) -   SUM(audit.tiempo_auxiliares) AS tiempo_disponible,

  SUM(cdr.tiempo_conversado_ent) / SUM(cdr.llamadas_atendidas)  AS tmo_entrante,
  SUM(cdr.tiempo_conversado_sal) / SUM(cdr.llamadas_contestadas)  AS tmo_saliente,

  1 AS productividad,
  1 AS porcentaje_utilizacion


  FROM clasif_agentes as clasif

  LEFT JOIN dat_cdr_clasif as cdr ON clasif.id_inv_supervisores = cdr.id_inv_supervisores

  LEFT JOIN dat_audit_clasif as audit ON clasif.id_inv_supervisores = audit.id_inv_supervisores

  WHERE
  clasif.id_global > 0
  ${buscar}

  GROUP BY
  clasif.id_inv_supervisores

  ORDER BY
  clasif.nombre_supervisores
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
