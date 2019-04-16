/*
*
* FUNCIONES DE CALCULO PARA CADA COLUMNA DEL CDR CLASIFICADO
* Cada función corresponde a un campo (columna) del apartado CAL
* de la tabla de clasificacion del CDR
*
* Al inicio de cada tabla está la formula original de una hoja de calculo
* a manera de ejemplo
*
*/

const moment = require('moment');

/********************************************************************** */

function date_text(calldate) {

  let resultado = '';

  calldate = moment(calldate).format('YYYY-MM-DD')

  resultado = calldate;

  return resultado;
}



function supervisores_cdr(agente) {

  let resultado = '';

if ( agente ) {
  let temp = {
    "id_inv_supervisores": agente.id_inv_supervisores,
    "codigo_supervisores": agente.codigo_supervisores,
    "nombre_supervisores": agente.nombre_supervisores,
    "doc_ident_supervisores": agente.doc_ident_supervisores,
    "doc_complementario_supervisores": agente.doc_complementario_supervisores,
    "igual_supervisores": agente.igual_supervisores
  };

  resultado = JSON.stringify(temp);
}

  return resultado;
}



/*********************************************************************** */


// Exportar para uso
module.exports = {
  date_text,
  supervisores_cdr,
}