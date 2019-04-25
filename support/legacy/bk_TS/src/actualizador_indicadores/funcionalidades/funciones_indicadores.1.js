/*
*
* FUNCIONES PARA CALCULO DE INDICADORES
*
*/

// Dependencias
var moment = require('moment');
var fechas = require('../../utilitarios/fechas_utilitarios');

/*************************************************
 * FUNCIONES
 */

function IND_id_global(src){

	let resultado = '';

	return resultado;
}

function IND_llamadas_recibidas(cdr_filtrado){

  let resultado = '';

  // inicio

  let sum = 0;

  for (let i = 0; i < cdr_filtrado.length; i++) {
    sum += cdr_filtrado[i].llamadas_recibidas;
  }

      resultado = sum;

  // fin

	return resultado;
}



/*
* Campos automaticos de registro
*/

function IND_chk_utilizado(){

  let resultado = '';
  return resultado;
}

function IND_estatus_indicadores(){

  let resultado = '';
  return resultado;
}

function IND_usuario(){

  let resultado = '';
  return resultado;
}

function IND_createdAt(){

  let resultado = '';
  //resultado = fechas.unixDate(new Date());
  return resultado;
}

function IND_updatedAt(){

  let resultado = '';
  //resultado = fechas.unixDate(new Date());
  return resultado;
}

/****************************************************
 *  EXPORTAR LAS FUNCIONES
 *
 */

module.exports = {
	IND_id_global,
};