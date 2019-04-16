
/*
* RECONSTRUCCION DE HISTORICOS
*
*/

// Dependencias
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());


/*
* Funciones de busqueda con parametros externos
*/



// CALCULO DE INDICADORES
router.get('/hist_cdr_clasif/:desde/:hasta?', function(req, res, next) {

  let desde = req.params.desde;
  let hasta = req.params.hasta;

  req.params.hasta === '' ? hasta = desde : hasta = hasta;

  fecha_desde = new Date(desde);
  fecha_hasta = new Date(hasta);



});



module.exports = router