/*
*
* FUNCIONES DE IMPORTACION INVENTARIO DE colas
*/

// Dependencias
var moment = require('moment');
var fechas = require('./../funciones/fechas_utilitarios');
const _ = require('lodash');



function id_inv_escalas(id_inv_colas, colas_productividad_reports, dato_default){

  /******************************** INICIALIZAMOS RESULTADO EN CERO */
    let resultado = '';
  /******************************** FILTRAMOS REGISTRO Y SELECCIONAMOS CAMPO*/
    let nombre = colas_productividad_reports
    .filter((x) => {
      return x.id_inv_colas === id_inv_colas ? true : false;
    })
    .map((x) => {
      return x.id_inv_escalas
    })
  /******************************** SI HAY DATO SUSTITUIMOS*/
    if(nombre.length > 0) {
      resultado = nombre;
    } else {
      resultado = dato_default;
    }
  /******************************** DEVOLVEMOS EL RESULTADO*/
    return resultado;
  }

  function nombre_escalas(id_inv_colas, colas_productividad_reports, dato_default){

    /******************************** INICIALIZAMOS RESULTADO EN CERO */
      let resultado = '';
    /******************************** FILTRAMOS REGISTRO Y SELECCIONAMOS CAMPO*/
      let nombre = colas_productividad_reports
      .filter((x) => {
        return x.id_inv_colas === id_inv_colas ? true : false;
      })
      .map((x) => {
        return x.nombre_escalas
      })
    /******************************** SI HAY DATO SUSTITUIMOS*/
      if(nombre.length > 0) {
        resultado = nombre;
      } else {
        resultado = dato_default;
      }
    /******************************** DEVOLVEMOS EL RESULTADO*/
      return resultado;
    }


  function rojo(id_inv_colas, colas_productividad_reports, dato_default){

    /******************************** INICIALIZAMOS RESULTADO EN CERO */
      let resultado = '';
    /******************************** FILTRAMOS REGISTRO Y SELECCIONAMOS CAMPO*/
      let nombre = colas_productividad_reports
      .filter((x) => {
        return x.id_inv_colas === id_inv_colas ? true : false;
      })
      .map((x) => {
        return x.rojo
      })
    /******************************** SI HAY DATO SUSTITUIMOS*/
      if(nombre.length > 0) {
        resultado = nombre;
      } else {
        resultado = dato_default;
      }
    /******************************** DEVOLVEMOS EL RESULTADO*/
      return resultado;
    }


  function amarillo(id_inv_colas, colas_productividad_reports, dato_default){

    /******************************** INICIALIZAMOS RESULTADO EN CERO */
      let resultado = '';
    /******************************** FILTRAMOS REGISTRO Y SELECCIONAMOS CAMPO*/
      let nombre = colas_productividad_reports
      .filter((x) => {
        return x.id_inv_colas === id_inv_colas ? true : false;
      })
      .map((x) => {
        return x.amarillo
      })
    /******************************** SI HAY DATO SUSTITUIMOS*/
      if(nombre.length > 0) {
        resultado = nombre;
      } else {
        resultado = dato_default;
      }
    /******************************** DEVOLVEMOS EL RESULTADO*/
      return resultado;
    }

    function verde(id_inv_colas, colas_productividad_reports, dato_default){

      /******************************** INICIALIZAMOS RESULTADO EN CERO */
        let resultado = '';
      /******************************** FILTRAMOS REGISTRO Y SELECCIONAMOS CAMPO*/
        let nombre = colas_productividad_reports
        .filter((x) => {
          return x.id_inv_colas === id_inv_colas ? true : false;
        })
        .map((x) => {
          return x.verde
        })
      /******************************** SI HAY DATO SUSTITUIMOS*/
        if(nombre.length > 0) {
          resultado = nombre;
        } else {
          resultado = dato_default;
        }
      /******************************** DEVOLVEMOS EL RESULTADO*/
        return resultado;
      }

      function azul(id_inv_colas, colas_productividad_reports, dato_default){

        /******************************** INICIALIZAMOS RESULTADO EN CERO */
          let resultado = '';
        /******************************** FILTRAMOS REGISTRO Y SELECCIONAMOS CAMPO*/
          let nombre = colas_productividad_reports
          .filter((x) => {
            return x.id_inv_colas === id_inv_colas ? true : false;
          })
          .map((x) => {
            return x.azul
          })
        /******************************** SI HAY DATO SUSTITUIMOS*/
          if(nombre.length > 0) {
            resultado = nombre;
          } else {
            resultado = dato_default;
          }
        /******************************** DEVOLVEMOS EL RESULTADO*/
          return resultado;
        }


    function escalas(id_inv_colas, colas_productividad_reports, dato_default){

      /******************************** INICIALIZAMOS RESULTADO EN CERO */
        let resultado = '';
      /******************************** FILTRAMOS REGISTRO Y SELECCIONAMOS CAMPO*/
        let nombre = colas_productividad_reports
        .filter((x) => {
          return x.id_inv_colas === id_inv_colas ? true : false;
        })
        .map((x) => {
          return x.escalas
        })
      /******************************** SI HAY DATO SUSTITUIMOS*/
        if(nombre.length > 0) {
          resultado = nombre;
        } else {
          resultado = dato_default;
        }
      /******************************** DEVOLVEMOS EL RESULTADO*/
        return resultado;
      }


function nombre_colas(numero_colas, colas_asterisk){


	let resultado = '';


	let nombre = colas_asterisk
	.filter((x) => {
		return x.extension === numero_colas ? true : false;
	})
	.map((x) => {
		return x.descr
	})

//	console.log('nombre', dato_inicial);

	if(nombre.length > 0) {
		resultado = nombre;
	}


	return resultado;


}



function tipo_colas(id_inv_colas, colas_productividad_reports, dato_default){

  /******************************** INICIALIZAMOS RESULTADO EN CERO */
    let resultado = '';
  /******************************** FILTRAMOS REGISTRO Y SELECCIONAMOS CAMPO */
    let nombre = colas_productividad_reports
    .filter((x) => {
      return x.id_inv_colas === id_inv_colas ? true : false;
    })
    .map((x) => {
      // cambiar por el campo deseado
      return x.tipo_colas
    })
  /******************************** SI HAY DATO SUSTITUIMOS */
    if(nombre.length > 0) {
      resultado = nombre;
    } else {
      resultado = dato_default;
    }
  /******************************** DEVOLVEMOS EL RESULTADO */
    return resultado;
  }




function uso_produccion(id_inv_colas, colas_productividad_reports, dato_default){

  /******************************** INICIALIZAMOS RESULTADO EN CERO */
    let resultado = '';
  /******************************** FILTRAMOS REGISTRO Y SELECCIONAMOS CAMPO*/
    let nombre = colas_productividad_reports
    .filter((x) => {
      return x.id_inv_colas === id_inv_colas ? true : false;
    })
    .map((x) => {
      return x.uso_produccion
    })
  /******************************** SI HAY DATO SUSTITUIMOS*/
    if(nombre.length > 0) {
      resultado = nombre;
    } else {
      resultado = dato_default;
    }
  /******************************** DEVOLVEMOS EL RESULTADO*/
    return resultado;
  }


function nombre_reportes_colas(id_inv_colas, colas_productividad_reports, dato_default){

/******************************** INICIALIZAMOS RESULTADO EN CERO */
	let resultado = '';
/******************************** FILTRAMOS REGISTRO Y SELECCIONAMOS CAMPO*/
	let nombre = colas_productividad_reports
	.filter((x) => {
		return x.id_inv_colas === id_inv_colas ? true : false;
	})
	.map((x) => {
		return x.nombre_reportes_colas
	})
/******************************** SI HAY DATO SUSTITUIMOS*/
	if(nombre.length > 0) {
		resultado = nombre;
	} else {
    resultado = dato_default;
  }
/******************************** DEVOLVEMOS EL RESULTADO*/
	return resultado;
}


function id_inv_clientes(id_inv_colas, colas_productividad_reports, dato_default){

/******************************** INICIALIZAMOS RESULTADO EN CERO */
let resultado = '';
/******************************** FILTRAMOS REGISTRO Y SELECCIONAMOS CAMPO*/
	let nombre = colas_productividad_reports
	.filter((x) => {
		return x.id_inv_colas === id_inv_colas ? true : false;
	})
	.map((x) => {
		return x.id_inv_clientes
	})
/******************************** SI HAY DATO SUSTITUIMOS*/
	if(nombre.length > 0) {
		resultado = nombre;
	} else {
    resultado = dato_default;
  }
/******************************** DEVOLVEMOS EL RESULTADO*/
	return resultado;

}

function codigo_clientes(id_inv_colas, colas_productividad_reports, dato_default){

/******************************** INICIALIZAMOS RESULTADO EN CERO */
let resultado = '';
/******************************** FILTRAMOS REGISTRO Y SELECCIONAMOS CAMPO*/
	let nombre = colas_productividad_reports
	.filter((x) => {
		return x.id_inv_colas === id_inv_colas ? true : false;
	})
	.map((x) => {
		return x.codigo_clientes
	})
/******************************** SI HAY DATO SUSTITUIMOS*/
	if(nombre.length > 0) {
		resultado = nombre;
	} else {
    resultado = dato_default;
  }
/******************************** DEVOLVEMOS EL RESULTADO*/
	return resultado;

}

function nombre_clientes(id_inv_colas, colas_productividad_reports, dato_default){

/******************************** INICIALIZAMOS RESULTADO EN CERO */
let resultado = '';
/******************************** FILTRAMOS REGISTRO Y SELECCIONAMOS CAMPO*/
	let nombre = colas_productividad_reports
	.filter((x) => {
		return x.id_inv_colas === id_inv_colas ? true : false;
	})
	.map((x) => {
		return x.nombre_clientes
	})
/******************************** SI HAY DATO SUSTITUIMOS*/
	if(nombre.length > 0) {
		resultado = nombre;
	} else {
    resultado = dato_default;
  }
/******************************** DEVOLVEMOS EL RESULTADO*/
	return resultado;

}


function id_inv_campanas(id_inv_colas, colas_reports){

	let resultado = '';


	let nombre = colas_reports
	.filter((x) => {
		return x.id_inv_colas === id_inv_colas ? true : false;
	})
	.map((x) => {
		return x.id_inv_campanas
	})

//	console.log('nombre', dato_inicial);

	if(nombre.length > 0) {
		resultado = nombre;
	}


	return resultado;

}

function codigo_campanas(id_inv_colas, colas_reports){

	let resultado = '';


	let nombre = colas_reports
	.filter((x) => {
		return x.id_inv_colas === id_inv_colas ? true : false;
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

function nombre_campanas(id_inv_colas, colas_reports){

	let resultado = '';


	let nombre = colas_reports
	.filter((x) => {
		return x.id_inv_colas === id_inv_colas ? true : false;
	})
	.map((x) => {
		return x.nombre_campanas
	})

//	console.log('nombre', dato_inicial);

	if(nombre.length > 0) {
		resultado = nombre;
	}


	return resultado;

}

function tiempo_after_call(id_inv_colas, colas_reports){

	let resultado = '';


	let nombre = colas_reports
	.filter((x) => {
		return x.id_inv_colas === id_inv_colas ? true : false;
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

function id_inv_servicios(id_inv_colas, colas_productividad_reports, dato_default){


/******************************** INICIALIZAMOS RESULTADO EN CERO */
let resultado = '';
/******************************** FILTRAMOS REGISTRO Y SELECCIONAMOS CAMPO*/
	let nombre = colas_productividad_reports
	.filter((x) => {
		return x.id_inv_colas === id_inv_colas ? true : false;
	})
	.map((x) => {
		return x.id_inv_servicios
	})
/******************************** SI HAY DATO SUSTITUIMOS*/
	if(nombre.length > 0) {
		resultado = nombre;
	} else {
    resultado = dato_default;
  }
/******************************** DEVOLVEMOS EL RESULTADO*/
	return resultado;

}


function codigo_servicios(id_inv_colas, colas_productividad_reports, dato_default){


/******************************** INICIALIZAMOS RESULTADO EN CERO */
let resultado = '';
/******************************** FILTRAMOS REGISTRO Y SELECCIONAMOS CAMPO*/
	let nombre = colas_productividad_reports
	.filter((x) => {
		return x.id_inv_colas === id_inv_colas ? true : false;
	})
	.map((x) => {
		return x.codigo_servicios
	})
/******************************** SI HAY DATO SUSTITUIMOS*/
	if(nombre.length > 0) {
		resultado = nombre;
	} else {
    resultado = dato_default;
  }
/******************************** DEVOLVEMOS EL RESULTADO*/
	return resultado;

}

function nombre_servicios(id_inv_colas, colas_productividad_reports, dato_default){


/******************************** INICIALIZAMOS RESULTADO EN CERO */
let resultado = '';
/******************************** FILTRAMOS REGISTRO Y SELECCIONAMOS CAMPO*/
	let nombre = colas_productividad_reports
	.filter((x) => {
		return x.id_inv_colas === id_inv_colas ? true : false;
	})
	.map((x) => {
		return x.nombre_servicios
	})
/******************************** SI HAY DATO SUSTITUIMOS*/
	if(nombre.length > 0) {
		resultado = nombre;
	} else {
    resultado = dato_default;
  }
/******************************** DEVOLVEMOS EL RESULTADO*/
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

	codigo_campanas,
	codigo_clientes,
	codigo_servicios,
	createdAt,
	id_inv_campanas,
	id_inv_clientes,
	id_inv_servicios,
	nombre_campanas,
	nombre_clientes,
	nombre_colas,
	nombre_reportes_colas,
	nombre_servicios,
  tiempo_after_call,
  id_inv_escalas,
  nombre_escalas,
  escalas,
  rojo,
  amarillo,
  verde,
  azul,
  tipo_colas,
  updatedAt,
  uso_produccion,

}