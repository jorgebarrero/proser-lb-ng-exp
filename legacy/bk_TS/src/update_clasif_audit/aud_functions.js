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

// const moment = require('moment');
const _ = require('lodash');
// const fechas = require('./../funciones/fechas_utilitarios');






function colas_cdr(id_inv_agentes, cdr_aux) {

  let resultado = '';
  if (cdr_aux) {
    let temp = cdr_aux
      .filter( (x) => {
        return x.id_inv_agentes === id_inv_agentes;
      });
    let unique = _.uniqBy(temp, 'numero_colas')
      .map((x) => {
        return `{numero_colas: "${x.numero_colas}", nombre_colas: "${x.nombre_colas}"}`;
      });
    resultado = JSON.stringify(unique);
    return resultado;
  }
}

function clientes_cdr(id_inv_agentes, cdr_aux) {

  let resultado = '';
  if (cdr_aux) {
    let temp = cdr_aux
      .filter( (x) => {
        return x.id_inv_agentes === id_inv_agentes;
      });
    let unique = _.uniqBy(temp, 'id_inv_clientes')
      .map((x) => {
        return `{id_inv_clientes: "${x.id_inv_clientes}", nombre_clientes: "${x.nombre_clientes}"}`;
      });
    resultado = JSON.stringify(unique);
    return resultado;
  }
}


function servicios_cdr(id_inv_agentes, cdr_aux) {

  let resultado = '';
  if (cdr_aux) {
    let temp = cdr_aux
      .filter( (x) => {
        return x.id_inv_agentes === id_inv_agentes;
      });
    let unique = _.uniqBy(temp, 'id_inv_servicios')
      .map((x) => {
        return `{id_inv_servicios: "${x.id_inv_clientes}", nombre_servicios: "${x.nombre_servicios}"}`;
      });
    resultado = JSON.stringify(unique);
    return resultado;
  }
}


function campanas_cdr(id_inv_agentes, cdr_aux) {

  let resultado = '';
  if (cdr_aux) {
    let temp = cdr_aux
      .filter( (x) => {
        return x.id_inv_agentes === id_inv_agentes;
      });
    let unique = _.uniqBy(temp, 'id_inv_campanas')
      .map((x) => {
        return `{id_inv_campanas: "${x.id_inv_clientes}", nombre_campanas: "${x.nombre_campanas}"}`;
      });
    resultado = JSON.stringify(unique);
    return resultado;
  }
}


/************************************************************ */
function numero_colas(id_inv_agentes, cdr_aux) {

  let resultado = '';
  if (cdr_aux) {
    let temp = cdr_aux
      .filter( (x) => {
        return x.id_inv_agentes === id_inv_agentes;
      });
    let unique = _.uniqBy(temp, 'numero_colas')
      .map((x) => {
        return  `"${x.numero_colas}"`;
      });
    resultado = JSON.stringify(unique);
    return resultado;
  }
}

function id_inv_colas(id_inv_agentes, cdr_aux) {

  let resultado = '';
  if (cdr_aux) {
    let temp = cdr_aux
      .filter( (x) => {
        return x.id_inv_agentes === id_inv_agentes;
      });

    let unique = _.uniqBy(temp, 'id_inv_colas')
      .map((x) => {
        return  `"${x.id_inv_colas}"`;
      });
    resultado = JSON.stringify(unique);
    return resultado;
  }
}


function id_inv_clientes(id_inv_agentes, cdr_aux) {

  let resultado = '';
  if (cdr_aux) {
    let temp = cdr_aux
      .filter( (x) => {
        return x.id_inv_agentes === id_inv_agentes;
      });
    let unique = _.uniqBy(temp, 'id_inv_clientes')
      .map((x) => {
        return  `"${x.id_inv_clientes}"`;
      });
    resultado = JSON.stringify(unique);
    return resultado;
  }
}

function id_inv_servicios(id_inv_agentes, cdr_aux) {

  let resultado = '';
  if (cdr_aux) {
    let temp = cdr_aux
      .filter( (x) => {
        return x.id_inv_agentes === id_inv_agentes;
      });
    let unique = _.uniqBy(temp, 'id_inv_servicios')
      .map((x) => {
        return  `"${x.id_inv_servicios}"`;
      });
    resultado = JSON.stringify(unique);
    return resultado;
  }
}

function id_inv_campanas(id_inv_agentes, cdr_aux) {

  let resultado = '';
  if (cdr_aux) {
    let temp = cdr_aux
      .filter( (x) => {
        return  x.id_inv_agentes === id_inv_agentes;
      });
    let unique = _.uniqBy(temp, 'id_inv_campanas')
      .map((x) => {
        return `"${x.id_inv_campanas}"`;
      });
    resultado = JSON.stringify(unique);
    return resultado;
  }
}

/*********************************************************** */



/********************************************************** */

function productividad(id_inv_auxiliares, auxiliares) {

  let resultado = 0;


  // resultado = auxiliares[6].productividad;


  if (auxiliares) {

    let temp = auxiliares
      .filter(x => {
        return x.id_inv_auxiliares === id_inv_auxiliares;
      })
      .map(x => {

        return x.productividad;
      });

    if (temp.length > 0) {
      // console.log(temp);
      resultado = JSON.stringify(temp[0]);
    }

    return resultado;
  }

}

function tipo_registro(id_inv_auxiliares, productividad) {

  let resultado = '';

  productividad = JSON.parse(productividad);

  // console.log(id_inv_auxiliares, productividad);



  if (id_inv_auxiliares === 0 && productividad === 0 ) {
    resultado = 'login';
  }

  if (id_inv_auxiliares !== 0 && productividad === 1) {
    resultado = 'asignacion';
  }

  if (id_inv_auxiliares !== 0 && productividad === 0) {
    resultado = 'auxiliar';
  }

  return resultado;
}

function id_inv_auxiliares(id_break) {

  let resultado = '';

  if (id_break === null ) {
    resultado = 0;
  } else {
    resultado = id_break;
  }

  return resultado;
}

function nombre_auxiliares (id_inv_auxiliares, auxiliares) {

  // console.log(auxiliares);

  let resultado = '';

  if (id_inv_auxiliares === 0 ) {
    resultado = 'LOGIN';
  }

  if (auxiliares) {

    let temp = auxiliares
      .filter(x => {
        return x.id_inv_auxiliares === id_inv_auxiliares;
      })
      .map(x => {

        return x.nombre_reportes_auxiliares;
      });

    if (temp.length > 0) {
      resultado = (temp);
    }


    return resultado;
  }
}



/********************************************************************* */
function nombre_agentes(id_inv_agentes, agentsClasif) {

  let resultado = '';

  if (agentsClasif) {

    let temp = agentsClasif
      .filter(x => {
        return x.id_inv_agentes === id_inv_agentes;
      })
      .map(x => {
        return x.nombre_agentes;
      });

    if (temp.length > 0) {
      resultado = JSON.parse(JSON.stringify(temp))[0];
    }

    return resultado;
  }
}

function numero_agentes(id_inv_agentes, agentsClasif) {

  let resultado = '';

  if (agentsClasif) {

    let temp = agentsClasif
      .filter(x => {
        return x.id_inv_agentes === id_inv_agentes;
      })
      .map(x => {
        return x.numero_agentes;
      });

    if (temp.length > 0) {
      resultado = JSON.parse(JSON.stringify(temp))[0];
    }

    return resultado;
  }
}

function doc_ident_agentes(id_inv_agentes, agentsClasif) {

  let resultado = '';

  if (agentsClasif) {

    let temp = agentsClasif
      .filter(x => {
        return x.id_inv_agentes === id_inv_agentes;
      })
      .map(x => {
        return x.doc_ident_agentes;
      });

    if (temp.length > 0) {
      resultado = JSON.parse(JSON.stringify(temp))[0];
    }

    return resultado;
  }
}

function doc_complementario_agentes(id_inv_agentes, agentsClasif) {

  let resultado = '';

  if (agentsClasif) {

    let temp = agentsClasif
      .filter(x => {
        return x.id_inv_agentes === id_inv_agentes;
      })
      .map(x => {
        return x.doc_complementario_agentes;
      });

    if (temp.length > 0) {
      resultado = JSON.parse(JSON.stringify(temp))[0];
    }

    return resultado;
  }
}

function id_inv_supervisores(id_inv_agentes, agentsClasif) {

  let resultado = '';

  if (agentsClasif) {

    let temp = agentsClasif
      .filter(x => {
        return x.id_inv_agentes === id_inv_agentes;
      })
      .map(x => {
        return x.id_inv_supervisores;
      });

    if (temp.length > 0) {
      resultado = JSON.parse(JSON.stringify(temp))[0];
    }

    return resultado;
  }
}

function nombre_supervisores(id_inv_agentes, agentsClasif) {

  let resultado = '';

  if (agentsClasif) {

    let temp = agentsClasif
      .filter(x => {
        return x.id_inv_agentes === id_inv_agentes;
      })
      .map(x => {
        return x.nombre_supervisores;
      });

    if (temp.length > 0) {
      resultado = JSON.parse(JSON.stringify(temp))[0];
    }

    return resultado;
  }
}

function id_inv_suplentes(id_inv_agentes, agentsClasif) {

  let resultado = '';

  if (agentsClasif) {

    let temp = agentsClasif
      .filter(x => {
        return x.id_inv_agentes === id_inv_agentes;
      })
      .map(x => {
        return x.id_inv_suplentes;
      });

    if (temp.length > 0) {
      resultado = JSON.parse(JSON.stringify(temp))[0];
    }

    return resultado;
  }
}

function nombre_suplentes(id_inv_agentes, agentsClasif) {

  let resultado = '';

  if (agentsClasif) {

    let temp = agentsClasif
      .filter(x => {
        return x.id_inv_agentes === id_inv_agentes;
      })
      .map(x => {
        return x.nombre_suplentes;
      });

    if (temp.length > 0) {
      resultado = JSON.parse(JSON.stringify(temp))[0];
    }

    return resultado;
  }
}

function id_inv_horarios(id_inv_agentes, agentsClasif) {

  let resultado = '';

  if (agentsClasif) {

    let temp = agentsClasif
      .filter(x => {
        return x.id_inv_agentes === id_inv_agentes;
      })
      .map(x => {
        return x.id_inv_horarios;
      });

    if (temp.length > 0) {
      resultado = JSON.parse(JSON.stringify(temp))[0];
    }

    return resultado;
  }
}

function nombre_horarios(id_inv_agentes, agentsClasif) {

  let resultado = '';

  if (agentsClasif) {

    let temp = agentsClasif
      .filter(x => {
        return x.id_inv_agentes === id_inv_agentes;
      })
      .map(x => {
        return x.nombre_horarios;
      });

    if (temp.length > 0) {
      resultado = JSON.parse(JSON.stringify(temp))[0];
    }

    return resultado;
  }
}

function horarios_inicio(id_inv_agentes, agentsClasif) {

  let resultado = '';

  if (agentsClasif) {

    let temp = agentsClasif
      .filter(x => {
        return x.id_inv_agentes === id_inv_agentes;
      })
      .map(x => {
        return x.horarios_inicio;
      });

    if (temp.length > 0) {
      resultado = JSON.parse(JSON.stringify(temp))[0];
    }

    return resultado;
  }
}

function horarios_final(id_inv_agentes, agentsClasif) {

  let resultado = '';

  if (agentsClasif) {

    let temp = agentsClasif
      .filter(x => {
        return x.id_inv_agentes === id_inv_agentes;
      })
      .map(x => {
        return x.horarios_final;
      });

    if (temp.length > 0) {
      resultado = JSON.parse(JSON.stringify(temp))[0];
    }

    return resultado;
  }
}

function segundos_horario_inicio(id_inv_agentes, agentsClasif) {

  let resultado = '';

  if (agentsClasif) {

    let temp = agentsClasif
      .filter(x => {
        return x.id_inv_agentes === id_inv_agentes;
      })
      .map(x => {
        return x.segundos_horario_inicio;
      });

    if (temp.length > 0) {
      resultado = JSON.parse(JSON.stringify(temp))[0];
    }

    return resultado;
  }
}

function segundos_horario_final(id_inv_agentes, agentsClasif) {

  let resultado = '';

  if (agentsClasif) {

    let temp = agentsClasif
      .filter(x => {
        return x.id_inv_agentes === id_inv_agentes;
      })
      .map(x => {
        return x.segundos_horario_final;
      });

    if (temp.length > 0) {
      resultado = JSON.parse(JSON.stringify(temp))[0];
    }

    return resultado;
  }
}

/************************************************************** */


function estado_realtime(numero_agentes, realtime_agentes){

  let resultado = '';
  let agentes;
  let agentes_unico;

  agentes = realtime_agentes
    .filter(x =>{
      return x.numero_agentes = numero_agentes;
    });

  agentes_unico =_.uniqBy(agentes,  'estado');

  resultado = JSON.stringify(agentes_unico);

  return resultado;
}



function estado_actual(audit, estado_realtime){

  //console.log('AUDIT_estado_realtime ------------------------------------------------');

  let resultado = '';
  // let in_call;
  // let auxuliar;
  estado_realtime = JSON.parse(estado_realtime);

  //console.log(estado_realtime);

  if( audit && estado_realtime){
    resultado = 'disponible';

    let estado_realtime_incall = estado_realtime
      .filter(x => {
        return x.estado = 'in call';
      });

    let audit_auxiliar = audit
      .filter(x => {
        (x.id_break !== null)
      && (x.productividad === 0)
      && (x.datetime_end === null || x.datetime_end === '');
      });


    // .map(x => {
    //   return {
    //     numero_agentes: x.numero_agentes,
    //     estado: x.nombre_auxiliares,
    //     numero_colas: ''}
    // });

    // console.log('audit_auxiliar', audit_auxiliar);


    if(estado_realtime_incall.length > 0){
      //console.log('estado_realtime_incall', estado_realtime_incall);
      resultado = JSON.stringify(estado_realtime_incall[0]);

    }

    if(audit_auxiliar.length > 0){
      //console.log('audit_auxiliar', audit_auxiliar);
      resultado = JSON.stringify(audit_auxiliar);
    }


  }

  //console.log('resultado', resultado);
  return resultado;
}


/*********************************************************************** */

// Exportar para uso
module.exports = {

  numero_colas,

  id_inv_colas,
  id_inv_clientes,
  id_inv_servicios,
  id_inv_campanas,

  productividad,
  tipo_registro,
  id_inv_auxiliares,
  nombre_auxiliares,

  nombre_agentes,
  numero_agentes,

  // __CLASIF_SUPERVISORES__: 1,
  id_inv_supervisores,
  nombre_supervisores,

  // __CLASIF_SUPLENTES__: 1,
  id_inv_suplentes,
  nombre_suplentes,

  // __HORARIOS__: 1,
  id_inv_horarios,
  nombre_horarios,
  horarios_inicio,
  horarios_final,
  segundos_horario_inicio,
  segundos_horario_final,

  // ___REALTIME___: 1,
  estado_realtime,
  estado_actual,

  colas_cdr,
  clientes_cdr,
  servicios_cdr,
  campanas_cdr,
  
  doc_ident_agentes,
  doc_complementario_agentes,

};
