/*
*
* FUNCIONES DE IMPORTACION INVENTARIO DE campanas
*/

// Dependencias
var moment = require('moment');
var fechas = require('../funciones/fechas_utilitarios');
const _ = require('lodash');





function nombre_reportes_campanas(id_inv_campanas, campanas_reports){

	let resultado = '';


	let nombre = campanas_reports
	.filter((x) => {
		return x.id_inv_campanas === id_inv_campanas ? true : false;
	})
	.map((x) => {
		return x.nombre_reportes_campanas
	})

//	console.log('nombre', dato_inicial);

	if(nombre.length > 0) {
		resultado = nombre;
	}


	return resultado;

}



function codigo_campanas(id_inv_campanas, campanas_reports){

	let resultado = '';


	let nombre = campanas_reports
	.filter((x) => {
		return x.id_inv_campanas === id_inv_campanas ? true : false;
	})
	.map((x) => {
		return x.codigo_campanas
	})

//	console.log('nombre', dato_inicial);

	if(nombre.length > 0) {
		resultado = nombre;
	}


	return resultado;

}


function tiempo_after_call(id_inv_campanas, campanas_reports){

	let resultado = '';


	let nombre = campanas_reports
	.filter((x) => {
		return x.id_inv_campanas === id_inv_campanas ? true : false;
	})
	.map((x) => {
		return x.tiempo_after_call
	})

//	console.log('nombre', dato_inicial);

	if(nombre.length > 0) {
		resultado = nombre;
	}


	return resultado;

}

///////////////////////////////////////////////////


function numero_colas(id_inv_colas, colas_reports){

	let resultado = '';


	let nombre = colas_reports
	.filter((x) => {
		return x.id_inv_colas === id_inv_colas ? true : false;
	})
	.map((x) => {
		return x.numero_colas
	})

//	console.log('nombre', dato_inicial);

	if(nombre.length > 0) {
		resultado = nombre;
	}


	return resultado;

}


function nombre_reportes_colas(id_inv_colas, colas_reports){

	let resultado = '';


	let nombre = colas_reports
	.filter((x) => {
		return x.id_inv_colas === id_inv_colas ? true : false;
	})
	.map((x) => {
		return x.nombre_reportes_colas
	})

//	console.log('nombre', dato_inicial);

	if(nombre.length > 0) {
		resultado = nombre;
	}


	return resultado;

}






// Funciones auxiliares

function createdAt() {

  let resultado = '';
  resultado = fechas.unixDate(new Date());
  return resultado;
}

function updatedAt() {

  let resultado = '';
  resultado = fechas.unixDate(new Date());
  return resultado;
}


// Exportar para uso
module.exports = {

	nombre_reportes_campanas,
	codigo_campanas,
	tiempo_after_call,


	numero_colas,
	nombre_reportes_colas,



	createdAt,
	updatedAt,


}