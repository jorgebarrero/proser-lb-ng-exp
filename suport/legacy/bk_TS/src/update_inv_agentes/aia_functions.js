/*
*
* FUNCIONES DE IMPORTACION INVENTARIO DE AGENTES
*/

// Dependencias
// var moment = require('moment');
var fechas = require('./../funciones/fechas_utilitarios');
const _ = require('lodash');


function id_inv_agentes(tabla, numero_agentes){

  let resultado = '';

  function filtro (registro){
    return registro.numero_agentes == numero_agentes;
  }

  resultado = tabla.find(filtro).id_inv_agentes;
  return resultado;

}


function nombre_reportes_agentes (id_inv_agentes, dato_inicial, inventario){

  let resultado = dato_inicial;

  let nombre = inventario
    .filter((x) => {
      return x.id_inv_agentes === id_inv_agentes ? true : false;
    })
    .map((x) => {
      return x.nombre_reportes_agentes;
    });

  // console.log('nombre', nombre, nombre[0]);

  if(nombre.length > 0) {
    resultado = nombre[0];
  } else {
    resultado = dato_inicial;
  }


  return resultado;

}


function doc_ident_agentes (id_inv_agentes, inventario){

  // console.log('data doc', id_inv_agentes);
	

  let resultado = '';


  let documento = inventario
    .filter((x) => {
      return x.id_inv_agentes === id_inv_agentes ? true : false;
    })
    .map((x) => {
      return x.doc_ident_agentes;
    });

  // console.log('documento', id_inv_agentes, documento);

  if(documento.length > 0) {
    resultado = JSON.parse(JSON.stringify(documento))[0];
  }



  return resultado;

}



function doc_complementario_agentes (id_inv_agentes, inventario){

  let resultado = '';


  let documento = inventario
    .filter((x) => {
      return x.id_inv_agentes === id_inv_agentes ? true : false;
    })
    .map((x) => {
      return x.doc_complementario_agentes;
    });

  //console.log('documento', documento);

  if(documento.length > 0) {
    resultado = JSON.parse(JSON.stringify(documento))[0];
  }




  return resultado;

}





function id_inv_supervisores (id_inv_agentes, inventario){

  let resultado = '';


  let documento = inventario
    .filter((x) => {
      return x.id_inv_agentes === id_inv_agentes ? true : false;
    })
    .map((x) => {
      return x.id_inv_supervisores;
    });

  //console.log('documento', documento);

  if(documento.length > 0) {
    resultado = JSON.parse(JSON.stringify(documento))[0];
  }

  return resultado;

}



function codigo_supervisores (id_inv_agentes, inventario){

  let resultado = '';


  let documento = inventario
    .filter((x) => {
      return x.id_inv_agentes === id_inv_agentes ? true : false;
    })
    .map((x) => {
      return x.codigo_supervisores;
    });

  //console.log('documento', documento);

  if(documento.length > 0) {
    resultado = JSON.parse(JSON.stringify(documento))[0];
  }

  return resultado;

}



function nombre_supervisores (id_inv_agentes, inventario){

  let resultado = '';


  let documento = inventario
    .filter((x) => {
      return x.id_inv_agentes === id_inv_agentes ? true : false;
    })
    .map((x) => {
      return x.nombre_supervisores;
    });

  //console.log('documento', documento);

  if(documento.length > 0) {
    resultado = documento[0];
  }

  return resultado;

}



function doc_ident_supervisores (id_inv_agentes, inventario){

  let resultado = '';


  let documento = inventario
    .filter((x) => {
      return x.id_inv_agentes === id_inv_agentes ? true : false;
    })
    .map((x) => {
      return x.doc_ident_supervisores;
    });

  //console.log('documento', documento);

  if(documento.length > 0) {
    resultado = JSON.parse(JSON.stringify(documento))[0];
  }


  return resultado;

}


function doc_complementario_supervisores (id_inv_agentes, inventario){

  let resultado = '';


  let documento = inventario
    .filter((x) => {
      return x.id_inv_agentes === id_inv_agentes ? true : false;
    })
    .map((x) => {
      return x.doc_complementario_supervisores;
    });

  //console.log('documento', documento);

  if(documento.length > 0) {
    resultado = JSON.parse(JSON.stringify(documento))[0];
  }





  return resultado;

}





function igual_supervisores (id_inv_agentes, inventario){

  let resultado = '';


  let documento = inventario
    .filter((x) => {
      return x.id_inv_agentes === id_inv_agentes ? true : false;
    })
    .map((x) => {
      return x.igual_supervisores;
    });

  //console.log('documento', documento);

  if(documento.length > 0) {
    resultado = JSON.parse(JSON.stringify(documento))[0];
  }



  return resultado;

}



function colas_agentes (id_inv_agentes, inventario){

  let resultado = '';


  let documento = inventario
    .filter((x) => {
      return x.id_inv_agentes === id_inv_agentes ? true : false;
    })
    .map((x) => {
      return x.colas_agentes;
    });

  //console.log('documento', documento);

  if(documento.length > 0) {
    resultado = JSON.parse(JSON.stringify(documento))[0];
  }


  return resultado;

}



function id_inv_horarios (id_inv_agentes, inventario){

  let resultado = '';


  let documento = inventario
    .filter((x) => {
      return x.id_inv_agentes === id_inv_agentes ? true : false;
    })
    .map((x) => {
      return x.id_inv_horarios;
    })
    .map((x) => {
      return x === null || x === 0? null : x;
    });

  //console.log('documento', documento);

  if(documento.length > 0) {
    resultado = JSON.parse(JSON.stringify(documento))[0];
  }

  return resultado;
}

function horario (id_inv_agentes, inventario){

  let resultado = '';


  let documento = inventario
    .filter((x) => {
      return x.id_inv_agentes === id_inv_agentes ? true : false;
    })
    .map((x) => {
      return x.horario;
    });

  //console.log('documento', documento);

  if(documento.length > 0) {
    resultado = JSON.parse(JSON.stringify(documento))[0];
  }



  return resultado;

}



function nombre_horarios (id_inv_agentes, inventario){

  let resultado = '';


  let documento = inventario
    .filter((x) => {
      return x.id_inv_agentes === id_inv_agentes ? true : false;
    })
    .map((x) => {
      return x.nombre_horarios;
    });

  //console.log('documento', documento);

  if(documento.length > 0) {
    resultado = JSON.parse(JSON.stringify(documento))[0];
  }




  return resultado;

}



// Exportar para uso
module.exports = {
  id_inv_agentes,
  nombre_reportes_agentes,
  doc_ident_agentes,
  doc_complementario_agentes,
  id_inv_supervisores,
  codigo_supervisores,
  nombre_supervisores,
  doc_ident_supervisores,
  doc_complementario_supervisores,

  igual_supervisores,
  colas_agentes,

  id_inv_horarios,
  horario,
  nombre_horarios,


};
