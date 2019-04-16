/**********************
 * USERS
 */

// Dependencias
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/', function(req, res, next) {
	res.locals.connection.query('SELECT * from dat_cdr_clasif', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});
/*
router.get('/', function(req, res, next) {
	res.locals.connection.query('SELECT * from users', function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
	});
});
*/
module.exports = router;





