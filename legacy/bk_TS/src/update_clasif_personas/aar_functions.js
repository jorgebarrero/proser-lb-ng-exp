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
const _ = require('lodash');
const fechas = require('./../funciones/fechas_utilitarios');




function colas_cdr(id_inv_agentes, cdr_aux) {



  let resultado = '';
  if (cdr_aux) {
    let temp = cdr_aux
      .filter( (x, index) => {
        return x.id_inv_agentes === id_inv_agentes;
      })
    let unique = _.uniqBy(temp, 'numero_colas')
      .map((x, index) => {
        return `{numero_colas: "${x.numero_colas}", nombre_colas: "${x.nombre_colas}"}`;
      })
      resultado = JSON.stringify(unique);
    return resultado; 
  }

}

function clientes_cdr(id_inv_agentes, cdr_aux) {

  let resultado = '';
  if (cdr_aux) {
    let temp = cdr_aux
      .filter( (x, index) => {
        return x.id_inv_agentes === id_inv_agentes;
      })
    let unique = _.uniqBy(temp, 'id_inv_clientes')
      .map((x, index) => {
        return `{id_inv_clientes: "${x.id_inv_clientes}", nombre_clientes: "${x.nombre_clientes}"}`;
      })
      resultado = JSON.stringify(unique);
    return resultado; 
  }
}


function servicios_cdr(id_inv_agentes, cdr_aux) {

  let resultado = '';
  if (cdr_aux) {
    let temp = cdr_aux
      .filter( (x, index) => {
        return x.id_inv_agentes === id_inv_agentes;
      })
    let unique = _.uniqBy(temp, 'id_inv_servicios')
      .map((x, index) => {
        return `{id_inv_servicios: "${x.id_inv_clientes}", nombre_servicios: "${x.nombre_servicios}"}`;
      })
      resultado = JSON.stringify(unique);
    return resultado; 
  }
}


function campanas_cdr(id_inv_agentes, cdr_aux) {

  let resultado = '';
  if (cdr_aux) {
    let temp = cdr_aux
      .filter( (x, index) => {
        return x.id_inv_agentes === id_inv_agentes;
      })
    let unique = _.uniqBy(temp, 'id_inv_campanas')
      .map((x, index) => {
        return `{id_inv_campanas: "${x.id_inv_clientes}", nombre_campanas: "${x.nombre_campanas}"}`;
      })
      resultado = JSON.stringify(unique);
    return resultado; 
  }
}


/************************************************************ */
function numero_colas(id_inv_agentes, cdr_aux) {

  let resultado = '';
  if (cdr_aux) {
    let temp = cdr_aux
      .filter( (x, index) => {
        return x.id_inv_agentes === id_inv_agentes;
      })
    let unique = _.uniqBy(temp, 'numero_colas')
      .map((x, index) => {
        return `${x.numero_colas}`;
      })
      resultado = JSON.stringify(unique);
    return resultado; 
  }
}

function id_inv_colas(id_inv_agentes, cdr_aux) {

  let resultado = '';
  if (cdr_aux) {
    let temp = cdr_aux
      .filter( (x, index) => {
        return x.id_inv_agentes === id_inv_agentes
      })

    let unique = _.uniqBy(temp, 'id_inv_colas')
      .map((x, index) => {
        return `${x.id_inv_colas}`;
      })
      resultado = JSON.stringify(unique);
    return resultado; 
  }
}


function id_inv_clientes(id_inv_agentes, cdr_aux) {

  let resultado = '';
  if (cdr_aux) {
    let temp = cdr_aux
      .filter( (x, index) => {
        return x.id_inv_agentes === id_inv_agentes
      })
    let unique = _.uniqBy(temp, 'id_inv_clientes')
      .map((x, index) => {
        return `${x.id_inv_clientes}`;
      })
      resultado = JSON.stringify(unique);
    return resultado; 
  }
}

function id_inv_servicios(id_inv_agentes, cdr_aux) {

  let resultado = '';
  if (cdr_aux) {
    let temp = cdr_aux
      .filter( (x, index) => {
        return x.id_inv_agentes === id_inv_agentes
      })
    let unique = _.uniqBy(temp, 'id_inv_servicios')
      .map((x, index) => {
        return `${x.id_inv_servicios}`;
      })
      resultado = JSON.stringify(unique);
    return resultado; 
  }
}

function id_inv_campanas(id_inv_agentes, cdr_aux) {

  let resultado = '';
  if (cdr_aux) {
    let temp = cdr_aux
      .filter( (x, index) => {
        return x.id_inv_agentes === id_inv_agentes
      })
    let unique = _.uniqBy(temp, 'id_inv_campanas')
      .map((x, index) => {
        return `${x.id_inv_campanas}`;
      })
      resultado = JSON.stringify(unique);
    return resultado; 
  }
}

/*********************************************************** */


function conexiones(id_inv_agentes, audit) {

  let resultado = '';
  if (audit) {
    let temp = audit
      .filter( (x, index) => {
        return x.id_inv_agentes === id_inv_agentes && x.tipo_registro === 'login'
      })
      .map(x => {
        return 1;
      })
      .reduce((total, amount, index) => {
        return total + amount;
      }, 0)

      resultado = temp;
    return resultado; 
  }

}

function tiempo_conexiones(id_inv_agentes, audit) {
  let resultado = '';
  if (audit) {
    let temp = audit
      .filter( (x, index) => {
        return x.id_inv_agentes === id_inv_agentes && x.tipo_registro === 'login'
      })
      .map(x => {
        return x.duracion;
      })
      .reduce((total, amount, index) => {
        return total + amount;
      }, 0)

      resultado = temp;
    return resultado; 
  }
}



function auxiliares(id_inv_agentes, audit) {
  let resultado = '';
  if (audit) {
    let temp = audit
      .filter( (x, index) => {
        return x.id_inv_agentes === id_inv_agentes && x.tipo_registro === 'auxiliar'
      })
      .map(x => {
        return 1;
      })
      .reduce((total, amount, index) => {
        return total + amount;
      }, 0)

      resultado = temp;
    return resultado; 
  }
}

function tiempo_auxiliares(id_inv_agentes, audit) {
  let resultado = '';
  if (audit) {
    let temp = audit
      .filter( (x, index) => {
        return x.id_inv_agentes === id_inv_agentes && x.tipo_registro === 'auxiliar'
      })
      .map(x => {
        return x.duracion;
      })
      .reduce((total, amount, index) => {
        return total + amount;
      }, 0)

      resultado = temp;
    return resultado; 
  }
}

function asignaciones(id_inv_agentes, audit) {
  let resultado = '';
  if (audit) {
    let temp = audit
      .filter( (x, index) => {
        return x.id_inv_agentes === id_inv_agentes && x.tipo_registro === 'asignacion'
      })
      .map(x => {
        return 1;
      })
      .reduce((total, amount, index) => {
        return total + amount;
      }, 0)

      resultado = temp;
    return resultado; 
  }
}

function tiempo_asignaciones(id_inv_agentes, audit) {
  let resultado = '';
  if (audit) {
    let temp = audit
      .filter( (x, index) => {
        return x.id_inv_agentes === id_inv_agentes && x.tipo_registro === 'asignacion'
      })
      .map(x => {
        return x.duracion;
      })
      .reduce((total, amount, index) => {
        return total + amount;
      }, 0)

      resultado = temp;
    return resultado; 
  }
}

/*********************************************************** */



function estado_realtime(numero_agentes, realtime_agentes){

  let resultado = '';
  let agentes;
  let agentes_unico;

  agentes = realtime_agentes
  .filter(x =>{

    // console.log('agentes_unico', x.numero_agentes, numero_agentes);
    return x.numero_agentes == numero_agentes
  })

  agentes_unico =_.uniqBy(agentes,  'estado');

  
  if (agentes_unico.length > 0) {
  resultado = agentes_unico[0].estado;
} else {
  resultado = 'Not registered'
}

  return resultado;
}

/***************************************************************** */

function estado_conexiones_actual (id_inv_agentes, audit) {

  let resultado = '';
  if (audit) {
    let temp = audit
      .filter( (x, index) => {
        return x.id_inv_agentes === id_inv_agentes && x.tipo_registro === 'login'
        && (x.duration < 1 || x.duration === null || x.duration === undefined);
      })
      .map(x => {
        return {id: x.id_inv_auxiliares, name: x.nombre_auxiliares, time: x.duracion};
      });

      resultado = JSON.stringify(temp);
    return resultado; 
  }

}

function id_conexiones_actual (id_inv_agentes, audit) {

  let resultado = '';
  if (audit) {
    let temp = audit
      .filter( (x, index) => {
        return x.id_inv_agentes === id_inv_agentes && x.tipo_registro === 'login'
        && (x.duration < 1 || x.duration === null || x.duration === undefined);
      })
      .map(x => {
        return x.id_inv_auxiliares;
      });

      resultado = (temp[0]);
    return resultado; 
  }

}

function nombre_conexiones_actual (id_inv_agentes, audit) {

  let resultado = '';
  if (audit) {
    let temp = audit
      .filter( (x, index) => {
        return x.id_inv_agentes === id_inv_agentes && x.tipo_registro === 'login'
        && (x.duration < 1 || x.duration === null || x.duration === undefined);
      })
      .map(x => {
        return x.nombre_auxiliares;
      });

      resultado = (temp[0]);
    return resultado; 
  }

}

function tiempo_conexiones_actual (id_inv_agentes, audit) {

  let resultado = '';
  if (audit) {
    let temp = audit
      .filter( (x, index) => {
        return x.id_inv_agentes === id_inv_agentes && x.tipo_registro === 'login'
        && (x.duration < 1 || x.duration === null || x.duration === undefined);
      })
      .map(x => {
        return x.duracion;
      });

      resultado = (temp[0]);
    return resultado; 
  }

}


/********************************************************************** */

function estado_auxiliares_actual(id_inv_agentes, audit) {

  let resultado = '';
  if (audit) {
    let temp = audit
      .filter( (x, index) => {
        return x.id_inv_agentes === id_inv_agentes && x.tipo_registro === 'auxiliar'
        && (x.duration < 1 || x.duration === null || x.duration === undefined);
      })
      .map(x => {
        return {id: x.id_inv_auxiliares, name: x.nombre_auxiliares, time: x.duracion};
      })

      resultado = JSON.stringify(temp);
    return resultado; 
    }
}


function id_auxiliares_actual (id_inv_agentes, audit) {

  let resultado = '';
  if (audit) {
    let temp = audit
      .filter( (x, index) => {
        return x.id_inv_agentes === id_inv_agentes && x.tipo_registro === 'auxiliar'
        && (x.duration < 1 || x.duration === null || x.duration === undefined);
      })
      .map(x => {
        return x.id_inv_auxiliares;
      });

      resultado = (temp[0]);
    return resultado; 
  }

}

function nombre_auxiliares_actual (id_inv_agentes, audit) {

  let resultado = '';
  if (audit) {
    let temp = audit
      .filter( (x, index) => {
        return x.id_inv_agentes === id_inv_agentes && x.tipo_registro === 'auxiliar'
        && (x.duration < 1 || x.duration === null || x.duration === undefined);
      })
      .map(x => {
        return x.nombre_auxiliares;
      });

      resultado = (temp[0]);
    return resultado; 
  }


}

function tiempo_auxiliares_actual (id_inv_agentes, audit) {

  let resultado = '';
  if (audit) {
    let temp = audit
      .filter( (x, index) => {
        return x.id_inv_agentes === id_inv_agentes && x.tipo_registro === 'auxiliar'
        && (x.duration < 1 || x.duration === null || x.duration === undefined);
      })
      .map(x => {
        return x.duracion;
      });

      resultado = (temp[0]);
    return resultado; 
  }

}


/********************************************************************** */

function estado_asignaciones_actual(id_inv_agentes, audit) {

  let resultado = '';
  if (audit) {
    let temp = audit
      .filter( (x, index) => {
        return x.id_inv_agentes === id_inv_agentes && x.tipo_registro === 'asignacion'
        && (x.duration < 1 || x.duration === null || x.duration === undefined);
      })
      .map(x => {
        return {id: x.id_inv_auxiliares, name: x.nombre_auxiliares, time: x.duracion};
      });

      resultado = JSON.stringify(temp);
    return resultado; 
    }
}



function id_asignaciones_actual (id_inv_agentes, audit) {

  let resultado = '';
  if (audit) {
    let temp = audit
      .filter( (x, index) => {
        return x.id_inv_agentes === id_inv_agentes && x.tipo_registro === 'asignacion'
        && (x.duration < 1 || x.duration === null || x.duration === undefined);
      })
      .map(x => {
        return x.id_inv_auxiliares;
      });

      resultado = (temp[0]);
    return resultado; 
  }

}

function nombre_asignaciones_actual (id_inv_agentes, audit) {

  let resultado = '';
  if (audit) {
    let temp = audit
      .filter( (x, index) => {
        return x.id_inv_agentes === id_inv_agentes && x.tipo_registro === 'asignacion'
        && (x.duration < 1 || x.duration === null || x.duration === undefined);
      })
      .map(x => {
        return x.nombre_auxiliares;
      });

      resultado = (temp[0]);
    return resultado; 
  }
}

function tiempo_asignaciones_actual (id_inv_agentes, audit) {

  let resultado = '';
  if (audit) {
    let temp = audit
      .filter( (x, index) => {
        return x.id_inv_agentes === id_inv_agentes && x.tipo_registro === 'asignacion'
        && (x.duration < 1 || x.duration === null || x.duration === undefined);
      })
      .map(x => {
        return x.duracion;
      });

      resultado = (temp[0]);
    return resultado; 
  }

}


/********************************************************************** */
function nombre_auxiliares(id_inv_agentes, audit) {

  let resultado = '';
  if (audit) {
    let temp = audit
      .filter( (x, index) => {
        return x.id_inv_agentes === id_inv_agentes && x.tipo_registro === 'auxiliar'
        && (x.duration < 1 || x.duration === null || x.duration === undefined);
      })
      .map(x => {
        return x.nombre_auxiliares;
      })
      // .reduce((total, amount, index) => {
      //   return amount;
      // }, '')

      resultado = JSON.stringify(temp);
    return resultado; 
    }
}

function nombre_asignaciones(id_inv_agentes, audit) {

  let resultado = '';
  if (audit) {
    let temp = audit
      .filter( (x, index) => {
        return x.id_inv_agentes === id_inv_agentes && x.tipo_registro === 'asignacion'
        && (x.duration < 1 || x.duration === null || x.duration === undefined);
      })
      .map(x => {
        return x.nombre_auxiliares;
      })
      // .reduce((total, amount, index) => {
      //   return amount;
      // }, '')

      resultado = JSON.stringify(temp);
    return resultado; 
    }
}


/*********************************************************************** */


function resumen_conexiones(id_inv_agentes, audit) {


  let resultado = '';
  if (audit) {
    let temp = audit
      .filter( (x, index) => {
        return x.id_inv_agentes === id_inv_agentes && x.tipo_registro === 'login'
      })
      .map(x => {
        return {id: x.id_inv_auxiliares, name: x.nombre_auxiliares, time: x.duracion};
      })
      // .reduce((total, amount, index) => {
      //   return total + amount;
      // }, 0)

      resultado = JSON.stringify(temp);
    return resultado; 
  }


}


function resumen_auxiliares(id_inv_agentes, audit) {

  let resultado = '';
  if (audit) {
    let temp = audit
      .filter( (x, index) => {
        return x.id_inv_agentes === id_inv_agentes && x.tipo_registro === 'auxiliar'
      })
      .map(x => {
        return {id: x.id_inv_auxiliares, name: x.nombre_auxiliares, time: x.duracion};
      })
      // .reduce((total, amount, index) => {
      //   return total + amount;
      // }, 0)

      resultado = JSON.stringify(temp);
    return resultado; 
    }
}


function resumen_asignaciones(id_inv_agentes, audit) {

  let resultado = '';
  if (audit) {
    let temp = audit
      .filter( (x, index) => {
        return x.id_inv_agentes === id_inv_agentes && x.tipo_registro === 'asignacion'
      })
      .map(x => {
        return {id: x.id_inv_auxiliares, name: x.nombre_auxiliares, time: x.duracion};
      })
      // .reduce((total, amount, index) => {
      //   return total + amount;
      // }, 0)

      resultado = JSON.stringify(temp);
    return resultado; 
    }
}

/********************************************************** */

function aparece_cola(estado_realtime) {
  let resultado = '';
  if (estado_realtime === 'Not registered') {
    resultado = 0;
  } else {
    resultado = 1;
  }
  return resultado; 
}

function aparece_logueado(conexiones, aparece_cola){
  let resultado = 0;
  if (conexiones > 0 && aparece_cola === 1) {
    resultado = 1;
  }
  return resultado; 
}


function aparece_conectado(estado_conexiones) {
  let resultado = '';
  if( estado_conexiones.length > 2 ) {
    resultado = 1;
  }
  return resultado; 
}

function aparece_auxiliar(estado_auxiliares) {
  let resultado = '';
  if( estado_auxiliares.length > 2 ) {
    resultado = 1;
  }
  return resultado; 
}

function aparece_asignado(estado_asignaciones) {
  let resultado = '';
  if( estado_asignaciones.length > 2 ) {
    resultado = 1;
  }
  return resultado; 
}

function aparece_ocupado(aparece_conectado, estado_realtime) {
  let resultado = '';
  if( aparece_conectado === 1 && estado_realtime === 'in call' ) {
    resultado = 1;
  }
  return resultado; 
}

function aparece_disponible(aparece_conectado, aparece_auxiliar, aparece_asignado, estado_realtime) {
  let resultado = '';
  if( 
    aparece_conectado === 1 
    &&
    aparece_auxiliar !== 1
    && 
    aparece_asignado !== 1
    &&
    estado_realtime === 'Not in use' ) {
    resultado = 1;
  }
  return resultado; 
}

function aparece_no_disponible(aparece_conectado, estado_realtime) {
  let resultado = '';
  if( aparece_conectado === 1 && estado_realtime === 'Unavialable' ) {
    resultado = 1;
  }
  return resultado; 
}








function estado_actual(estado_realtime, estado_conexiones, estado_auxiliares, estado_asignaciones, tiempo_conexiones) {

  //console.log('AUDIT_estado_realtime ------------------------------------------------');

  let realtime = estado_realtime;
  let conexion = estado_conexiones.length;
  let auxiliar = estado_auxiliares.length;
  let asignacion = estado_asignaciones.length;
  let tiempo = tiempo_conexiones.length;

  let resultado = '';

  if (estado_realtime === 'in call') {
    resultado = 'ocupado'
  }

  if (estado_realtime === 'Not in use' && conexion > 2 ) {
    resultado = 'disponible'
  }

  if (estado_realtime === 'Not in use' && conexion === 2 ) {
    resultado = 'desconectado'
  }

  if (realtime === 'Unavailable' && tiempo_conexiones > 1) {
    resultado = 'desconectado'
  }

  if (realtime === 'Unavailable' && tiempo_conexiones <= 0 ) {
    resultado = 'inconectado'
  }

  if (realtime === 'Unavailable' && conexion > 0 ) {
    resultado = 'indispuesto'
  }

  if (realtime === 'Not registered') {
    resultado = 'inexistente'
  }

  if (conexion > 2 && auxiliar !== 2) {
    resultado = 'auxiliar'
  }

  if (conexion > 2 && asignacion !== 2) {
    resultado = 'asignado'
  }

  // if (conexion === 2 && auxiliar === 2 && asignacion === 2 && estado_realtime === 'Unavailable') {
  //   resultado = 'desconectado'
  // }

  return resultado;
}

/********************************************************************** */

function llamadas_entrantes ( id_inv_agentes, cdr_aux ) {
  let resultado = '';
 if ( cdr_aux) {

  let temp = cdr_aux
  .filter( x => {
    return x.id_inv_agentes === id_inv_agentes && x.llamada_entrante === 1;
  })
  .map( x => {
    return x.llamada_entrante;
  })
  .reduce( (a, b) => {
    return a + b
  }, 0 )

  resultado = temp;
 }

  return resultado;
}
function llamadas_automaticas ( id_inv_agentes, cdr_aux ) {
  let resultado = '';
 if ( cdr_aux) {

  let temp = cdr_aux
  .filter( x => {
    return x.id_inv_agentes === id_inv_agentes && x.llamada_entrante_automatica === 1;
  })
  .map( x => {
    return x.llamada_entrante_automatica;
  })
  .reduce( (a, b) => {
    return a + b
  }, 0 )

  resultado = temp;
 }

  return resultado;
}
function llamadas_salientes ( id_inv_agentes, cdr_aux ) {
  let resultado = '';
 if ( cdr_aux) {

  let temp = cdr_aux
  .filter( x => {
    return x.id_inv_agentes === id_inv_agentes && x.llamada_saliente_manual === 1;
  })
  .map( x => {
    return x.llamada_saliente_manual;
  })
  .reduce( (a, b) => {
    return a + b
  }, 0 )

  resultado = temp;
 }

  return resultado;
}
function llamadas_internas( id_inv_agentes, cdr_aux ) {
  let resultado = '';
 if ( cdr_aux) {

  let temp = cdr_aux
  .filter( x => {
    return x.id_inv_agentes === id_inv_agentes && x.llamada_interna === 1;
  })
  .map( x => {
    return x.llamada_interna;
  })
  .reduce( (a, b) => {
    return a + b
  }, 0 )

  resultado = temp;
 }

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

  // productividad,
  // tipo_registro,
  // id_inv_auxiliares,
  // nombre_auxiliares,

  // nombre_agentes,
  // numero_agentes,

  // __CLASIF_SUPERVISORES__: 1,
  // id_inv_supervisores,
  // nombre_supervisores,

  // __CLASIF_SUPLENTES__: 1,
  // id_inv_suplentes,
  // nombre_suplentes,

  // __HORARIOS__: 1,
  // id_inv_horarios,
  // nombre_horarios,
  // horarios_inicio,
  // horarios_final,
  // segundos_horario_inicio,
  // segundos_horario_final,

  // ___REALTIME___: 1,
  estado_realtime,
  estado_actual,

  colas_cdr,
  clientes_cdr,
  servicios_cdr,
  campanas_cdr,


  conexiones,
  tiempo_conexiones,
  

  auxiliares,
tiempo_auxiliares,

asignaciones,
tiempo_asignaciones,


resumen_conexiones,
resumen_auxiliares,
resumen_asignaciones,


aparece_cola,
aparece_logueado,
aparece_conectado,
aparece_auxiliar,
aparece_ocupado,
aparece_asignado,
aparece_disponible,
aparece_no_disponible,


llamadas_entrantes,
llamadas_automaticas,
llamadas_salientes,
llamadas_internas,

nombre_asignaciones,
nombre_auxiliares,

estado_conexiones_actual,
id_conexiones_actual,
nombre_conexiones_actual,
tiempo_conexiones_actual,

estado_auxiliares_actual,
id_auxiliares_actual,
nombre_auxiliares_actual,
tiempo_auxiliares_actual,


estado_asignaciones_actual,
id_asignaciones_actual,
nombre_asignaciones_actual,
tiempo_asignaciones_actual,

}


