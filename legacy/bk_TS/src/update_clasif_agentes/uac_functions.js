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

var moment = require('moment');

/********************************************************************** */

function date_text(calldate) {

  let resultado = '';

  calldate = moment(calldate).format('YYYY-MM-DD');

  resultado = calldate;

  return resultado;
}

function week_day_number(date) {
  let resultado = '';

  let fecha = new Date(date);


  if (date) {
    resultado = fecha.getDay();

  }
  if (resultado === 0) {
    resultado = 7;
  }

  return resultado;
}

function week_day_name(date) {
  let resultado = '';
  let temp = '';

  let fecha = new Date(date);

  if (date) {
    temp = fecha.getDay();
  }

  if (temp === 0 || temp === 7) {
    resultado = 'domingo';
  }

  if (temp === 1) {
    resultado = 'lunes';
  }

  if (temp === 2) {
    resultado = 'martes';
  }

  if (temp === 3) {
    resultado = 'miércoles';
  }

  if (temp === 4) {
    resultado = 'jueves';
  }

  if (temp === 5) {
    resultado = 'viernes';
  }

  if (temp === 6) {
    resultado = 'sábado';
  }

  return resultado;
}


function supervisores_cdr(agente) {

  let resultado = '';

  if ( agente ) {
    let temp = {
      'id_inv_supervisores': agente.id_inv_supervisores,
      'codigo_supervisores': agente.codigo_supervisores,
      'nombre_supervisores': agente.nombre_supervisores,
      'doc_ident_supervisores': agente.doc_ident_supervisores,
      'doc_complementario_supervisores': agente.doc_complementario_supervisores,
      'igual_supervisores': agente.igual_supervisores
    };

    resultado = JSON.stringify(temp);
  }

  return resultado;
}


/*********************************************************************** */


function nombre_horarios(horarios_cdr) {



  let resultado = '';

  if( horarios_cdr !== '' || horarios_cdr.length > 0) {
    let temp = JSON.parse(horarios_cdr);
    // console.log(temp);
    // console.log('---------------------------');
    resultado = temp.nombre_horarios;
  }


  return resultado;
}


function horarios_inicio(horarios_cdr, week_day_number) {

  let resultado = '';
  let horario = '';

  if( horarios_cdr ) {
    let temp = JSON.parse(horarios_cdr);


    if ( week_day_number === 1 ) { horario = temp.lunes_desde; }
    if ( week_day_number === 2 ) { horario = temp.martes_desde; }
    if ( week_day_number === 3 ) { horario = temp.miercoles_desde; }
    if ( week_day_number === 4 ) { horario = temp.jueves_desde; }
    if ( week_day_number === 5 ) { horario = temp.viernes_desde; }
    if ( week_day_number === 6 ) { horario = temp.sabado_desde; }
    if ( week_day_number === 7 ) { horario = temp.domingo_desde; }

    // horario = temp.lunes_desde;

    resultado = horario;
  }

  return resultado;
}

function horarios_final(horarios_cdr, week_day_number) {

  let resultado = '';
  let horario = '';



  if( horarios_cdr ) {
    let temp = JSON.parse(horarios_cdr);

    if ( week_day_number === 1 ) { horario = temp.lunes_hasta; }
    if ( week_day_number === 2 ) { horario = temp.martes_hasta; }
    if ( week_day_number === 3 ) { horario = temp.miercoles_hasta; }
    if ( week_day_number === 4 ) { horario = temp.jueves_hasta; }
    if ( week_day_number === 5 ) { horario = temp.viernes_hasta; }
    if ( week_day_number === 6 ) { horario = temp.sabado_hasta; }
    if ( week_day_number === 7 ) { horario = temp.domingo_hasta; }

    resultado = horario;
  }

  return resultado;
}

/*********************************************************************** */

function hora_a_minutos (hora_convertir) {

  let resultado = '';

  if (hora_convertir) {
    let hora = hora_convertir.split(':')[0];
    let minutos = hora_convertir.split(':').pop();
    resultado = (hora * 60) + (minutos * 1);
  }

  return resultado;

}


function hora_a_segundos (hora_convertir) {

  let resultado = '';

  if (hora_convertir) {
    let hora = hora_convertir.split(':')[0];
    let minutos = hora_convertir.split(':').pop();
    resultado = ((hora * 60) + (minutos * 1)) * 60;
  }

  return resultado;

}

/*********************************************************************** */


// Exportar para uso
module.exports = {

  // id_global,
  // id_inv_clasif_agentes,
  // id_lista_agentes,
  // fecha_planificada,
  date_text,
  week_day_number,
  week_day_name,
  // segundos_inicio,

  // __CLASIF_CDR__,
  // agentes_cdr,
  // id_inv_agentes,
  // numero_agentes,
  supervisores_cdr,
  // id_inv_supervisores,
  // supervisores_suplentes_cdr,
  // id_inv_supervisores_suplentes,
  // horarios_cdr,
  // id_inv_horarios,
  nombre_horarios,
  horarios_inicio,
  horarios_final,

  // __REGISTRO__,
  // chk_utilizado,
  // estatus_clasif_agentes,
  // usuario,
  // createdAt,
  // updatedAt,

  hora_a_minutos,
  hora_a_segundos,

};