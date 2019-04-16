/*
*
* FUNCIONES DE IMPORTACION INVENTARIO DE auxiliares
*/

// Dependencias
var moment = require('moment');
var fechas = require('./../funciones/fechas_utilitarios');
const _ = require('lodash');


function nombre_reportes_auxiliares (id_inv_auxiliares, inventario_auxiliares_productividad, nombre_auxiliares){

  let resultado = nombre_auxiliares;

  let nombre = inventario_auxiliares_productividad
    .filter((x) => {
      return x.id_inv_auxiliares === id_inv_auxiliares ? true : false;
    })
    .map((x) => {
      return x.nombre_reportes_auxiliares;
    });

  //	console.log('nombre', dato_inicial);

  if(nombre.length > 0) {
    resultado = nombre;
  } else {
    resultado = nombre_auxiliares;
  }


  return resultado;

}


function productividad (id_inv_auxiliares, inventario_auxiliares_productividad){

  let resultado = '';


  let productividad = inventario_auxiliares_productividad
    .filter((x) => {
      return x.id_inv_auxiliares === id_inv_auxiliares ? true : false;
    })
    .map((x) => {
      return x.productividad;
    });

  //console.log('productividad', productividad);

  if(productividad.length > 0) {
    resultado = productividad;
  }


  return resultado;

}

/************************************ */

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

  nombre_reportes_auxiliares,
  productividad,


  createdAt,
  updatedAt,


};
