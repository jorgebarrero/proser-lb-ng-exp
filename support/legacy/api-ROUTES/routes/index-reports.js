/*
* HISTORIC REPORTS
*
*/

// Dependencias
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());


/*

Reporte Operativo Detallado
reporte_operativo_detallado

Reporte Detallado Auxiliares
reporte_detallado_auxiliares

Reporte de Servicio Historico
reporte_de_servicio_historico

Reporte de Servicio Diario
reporte_de_servicio_diario

Reporte de Productividad
reporte_de_productividad

Reporte de Conexión y Desconexión
reporte_de_conexion_y_desconexion

Detalle de llamadas
detalle_de_llamadas

Reporte Detallado Saliente
reporte_detallado_saliente

*/

// REPORT
router.get('/lista/:busqueda?', function(req, res, next) {

	let buscar = req.params.busqueda;

			if (typeof buscar === "undefined") {
					buscar = ' ';
			} else {
				buscar = req.params.busqueda.replace("%20", " ").replace('\"', '');
			}


	let querySQL = `SELECT * FROM dat_agent_clasif WHERE id_global > 0 ${buscar}`;

	res.locals.connDAT.query( querySQL, function (error, results, fields) {

		if(error){
			res.send(JSON.stringify({"status": 500, "error": error, "response": null}));
			//If there is error, we send the error in the error section with 500 status
			// Si hay error, enviamos el error en la seccion de errores con status 500
		} else {
			//res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
			res.send(JSON.stringify(Object.values(results)));
			//If there is no error, all is good and response is 200OK.
			// Si todo esta OK, enviamos codigo 200
		}
	});
});



module.exports = router;