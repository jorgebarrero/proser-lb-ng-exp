/*
* ACTUALIZADOR AUTOMATICO DE LA FECHA PARA AUDIT Y CDR
*
* Este archivo lee un JSON con fechas duras en la config
* Si se esta ejecutando en el servidor pone la fecha del dia y la de mañana
* si se ejecuta en local, toma como referencia la fecha escrita en el config.json
* que esta en esta misma carpeta
*/


// Dependencias
const os = require('os');
const moment = require('moment');

// Conexiones

const host = os.hostname();
let conn = '';

if (host === 'localhost.localdomain') {
  conn = 'servidor';
  console.log(conn.con_CDR);
} else {
  conn = 'local';
}


/***************
 *
 * ACTIVAR SOLO PARA PRUEBAS EN EL SERVIDOR
 *

 *  */
//conn = 'local';
/****
  *
  */

// locales
const config = require('./config');

let inicio = config.fechas.fecha_inicio;
let final = config.fechas.fecha_final;

var dateTime = new Date('2015-06-17 14:24:36');
dateTime = moment(dateTime).format('YYYY-MM-DD HH:mm:ss');


if (conn != 'servidor'){
  config.fechas.fecha_inicio;
} else {
  inicio = new Date();
  inicio.setHours(0);
  inicio.setMinutes(0);
  inicio.setSeconds(0);
  inicio.setMilliseconds(0);

  inicio = moment(inicio).format('YYYY-MM-DD HH:mm:ss');
}

if (conn != 'servidor'){
  config.fechas.fecha_final;
} else {
  final = new Date();
  final.setDate(final.getDate() + 1);
  final.setHours(0);
  final.setMinutes(0);
  final.setSeconds(0);
  final.setMilliseconds(0);
  final = moment(final).format('YYYY-MM-DD HH:mm:ss');
}


let fecha_inicio = inicio;
let fecha_final = final;

console.log('fecha_inicio -> ', fecha_inicio , 'fecha_final -> ', fecha_final);

module.exports = {
  fecha_inicio,
  fecha_final,
};
