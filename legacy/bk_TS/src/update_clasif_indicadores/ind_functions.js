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
const fechas = require('../funciones/fechas_utilitarios');

/********************************************************************* */

function date_text(calldate) {

  let resultado = '';

  calldate = moment(calldate).format('YYYY-MM-DD')

  resultado = calldate;

  return resultado;
}


function numero_telefonico(sal_ent_vacia, dst, src) {
  let resultado = '';
  if (sal_ent_vacia == 'Saliente') {
    return resultado = dst;
  }
  if (sal_ent_vacia == 'Entrante') {
    resultado = src;
  } else {
    return resultado = '-';
  }
  return resultado;
}



/***************************************************** */

function largo_src(src) {

  let resultado = '';
  return resultado = src.length;
  return resultado;
}

function largo_dst(dst) {

  let resultado = '';
  resultado = dst.length;
  return resultado;
}


function int_ext(src, dst) {

  let resultado = '';
  let largo_src = src.length;
  let largo_dst = dst.length;
  if ((largo_src <= 7 && largo_dst <= 7) || (src == dst && largo_src <= 7)) {
    return resultado = "Interna"
  } else {
    return resultado = "Externa"
  }
  return resultado;
}


function sal_ent(src, dst, int_ext, lastapp) {

  let resultado = '';
  let largo_src = src.length;
  let largo_dst = dst.length;
  if (int_ext == "Interna") {
    return resultado = "Interna";
  }
  if (int_ext == "Externa" && largo_src < largo_dst) {
    return resultado = "Saliente";
  }
  if (lastapp == "Queue") {
    return resultado = "Entrante";
  } else {
    return resultado = "Interna";
  }
  return resultado;
}

function sal_ent_vacia(sal_ent, src) {


  let resultado = '';
  if (sal_ent == "Saliente" && src == "") {
    return resultado = "Vacia";
  } else {
    return resultado = sal_ent;
  }
  return resultado;
}

function saliente_entrante(sal_ent_vacia, lastapp) {

  let resultado = '';
  if (sal_ent_vacia == "Entrante" && lastapp == "Queue") {
    return resultado = "Entrante"
  } else {
    return resultado = sal_ent_vacia
  }
  return resultado;
}


function productiva(sal_ent, dst, src, id) {

  let resultado = 'Sistema';

  if (src === 'anonymous') {
    resultado = "Productiva";
  } else {

    if (sal_ent == "Interna" || sal_ent == "Vacia") {
      resultado = "Sistema";
    }

    if (dst.length == 1 || dst == "hangup" || dst == "hang" || (src == "anonymous" && recordingfile == '')) {
      resultado = "Sistema";
    } else {
      resultado = "Productiva";
    }


  }

  // console.log('data ', sal_ent, dst, src, resultado, id);
  return resultado;
}


function llamada_produccion(sal_ent_vacia, productiva) {

  let resultado = '';
  if (sal_ent_vacia == "Vacia" || productiva == "Vacia") {
    return resultado = "Sistema";
  } else {
    return resultado = productiva
  }
  return resultado;
}


function ext_ent_larga(sal_ent, dstchannel) {

  let resultado = '';
  if (sal_ent == "Entrante" && dstchannel.substring(0, 6) == 'Agent/') {
    return resultado = dstchannel.substring(6, 10);
  }
  if (sal_ent == "Entrante") {
    return resultado = dstchannel
  }
  return resultado;
}

function ext_ent(ext_ent_larga, dstchannel) {

  let numberPattern = /\d+/g;

  if (ext_ent_larga === null || ext_ent_larga === '') {
    return resultado = '';
  }

  // resultado = ext_ent_larga.slice(inicio + 1, fin);

  resultado = ext_ent_larga.match(numberPattern);
  return resultado;
}

function ext_sal(sal_ent, src) {

  let resultado = '';
  if (sal_ent == "Saliente") {
    return resultado = src;
  }
  return resultado;
}

/*************************************** */

function llamada_cola(lastapp, saliente_entrante, llamada_produccion, dst) {

  let resultado = '';

  if (lastapp == "Queue") {
    if (saliente_entrante == "Entrante" && llamada_produccion == "Productiva") {
      return resultado = dst;
    }
  }
  return resultado;
}

function llamada_extension(ext_ent, ext_sal, dstchannel) {

  // console.log('ext_ent', ext_ent, 'ext_sal', ext_sal);


  let resultado = '';

  if (ext_ent) {
    return resultado = JSON.parse(JSON.stringify(ext_ent))[0]; //ext_ent
  }
  if (ext_sal) {
    return resultado = ext_sal; // ext_sal
  }

  return resultado;
}

/************************************************************************ */


function llamada_clasificacion(sal_ent_vacia, tipo_colas, numero_colas, llamada_produccion) {

  let resultado = '';

  if (tipo_colas === 'Automatica' && sal_ent_vacia === 'Entrante') {
    return resultado = 'Automatica';
  }

  if (sal_ent_vacia === 'Saliente') {
    return resultado = 'Manual';
  }
  if (sal_ent_vacia === 'Entrante') {
    return resultado = 'Entrante';
  }

  if (llamada_produccion === 'Sistema') {
    return resultado = 'Sistema';
  }

  return resultado;
}

function llamada_productiva(productiva_sin_vacias) {

  let resultado = '';

  if (productiva_sin_vacias == 'Productiva') {
    return resultado = 1;

  } else {
    return resultado = 0;
  }

  return resultado;
}

function llamada_operativa(productiva_sin_vacias) {


  let resultado = '';

  if (productiva_sin_vacias == 'Sistema') {

    return resultado = 1;

  } else {
    return resultado = 0;
  }

  return resultado;

}

function llamada_interna(llamada_clasificacion) {

  let resultado = '';

  if (llamada_clasificacion == 'Interna') {

    return resultado = 1;

  } else {
    return resultado = 0;
  }


  return resultado;

}

function llamada_entrante(llamada_clasificacion) {


  let resultado = '';

  if (llamada_clasificacion == 'Entrante') {

    return resultado = 1;

  } else {
    return resultado = 0;
  }


  return resultado;
}


function llamada_entrante_automatica(llamada_clasificacion) {

  let resultado = '';

  if (llamada_clasificacion == 'Automatica') {

    return resultado = 1;

  } else {
    return resultado = 0;
  }

  return resultado;
}


function llamada_saliente_manual(llamada_clasificacion) {

  let resultado = '';

  if (llamada_clasificacion == 'Manual') {

    return resultado = 1;

  } else {
    return resultado = 0;
  }


  return resultado;
}


/*********************************************************************** */



function id_inv_colas(llamada_cola, queuesClasif) {

  let resultado = '';

  if (queuesClasif) {

    let temp = queuesClasif
      .filter(x => {
        return x.numero_colas === llamada_cola
      })
      .map(x => {
        return x.id_inv_colas;
      })

  }

  return resultado;
}

function nombre_colas(llamada_cola, queuesClasif) {

  let resultado = '';

  if (queuesClasif) {

    let temp = queuesClasif
      .filter(x => {
        return x.numero_colas === llamada_cola
      })
      .map(x => {
        return x.nombre_colas;
      })

    if (temp.length > 0) {
      resultado = JSON.parse(JSON.stringify(temp))[0];
    }

  }

  return resultado;
}



function tipo_colas(llamada_cola, queuesClasif) {

  let resultado = '';

  if (queuesClasif) {

    let temp = queuesClasif
      .filter(x => {
        return x.numero_colas === llamada_cola
      })
      .map(x => {
        return x.tipo_colas;
      })

      if (temp.length > 0) {
        resultado = JSON.parse(JSON.stringify(temp))[0];
      }

  }

  return resultado;
}




function id_inv_clientes(llamada_cola, queuesClasif) {

  let resultado = '';

  if (queuesClasif) {

    let temp = queuesClasif
      .filter(x => {
        return x.numero_colas === llamada_cola
      })
      .map(x => {
        return x.id_inv_clientes;
      })

      if (temp.length > 0) {
        resultado = JSON.parse(JSON.stringify(temp))[0];
      }

  }

  return resultado;
}


function nombre_clientes(llamada_cola, queuesClasif) {

  let resultado = '';

  if (queuesClasif) {

    let temp = queuesClasif
      .filter(x => {
        return x.numero_colas === llamada_cola
      })
      .map(x => {
        return x.nombre_clientes;
      })

      if (temp.length > 0) {
        resultado = JSON.parse(JSON.stringify(temp))[0];
      }

  }

  return resultado;
}


function id_inv_servicios(llamada_cola, queuesClasif) {

  let resultado = '';

  if (queuesClasif) {

    let temp = queuesClasif
      .filter(x => {
        return x.numero_colas === llamada_cola
      })
      .map(x => {
        return x.id_inv_servicios;
      })


      if (temp.length > 0) {
        resultado = JSON.parse(JSON.stringify(temp))[0];
      }
  }

  return resultado;
}

function nombre_servicios(llamada_cola, queuesClasif) {

  let resultado = '';

  if (queuesClasif) {

    let temp = queuesClasif
      .filter(x => {
        return x.numero_colas === llamada_cola
      })
      .map(x => {
        return x.nombre_servicios;
      })

      if (temp.length > 0) {
        resultado = JSON.parse(JSON.stringify(temp))[0];
      }

  }

  return resultado;
}



function id_inv_campanas(llamada_cola, queuesClasif) {

  let resultado = '';

  if (queuesClasif) {

    let temp = queuesClasif
      .filter(x => {
        return x.numero_colas === llamada_cola
      })
      .map(x => {
        return x.id_inv_campanas;
      })

      if (temp.length > 0) {
        resultado = JSON.parse(JSON.stringify(temp))[0];
      }
  }

  return resultado;
}

function nombre_campanas(llamada_cola, queuesClasif) {

  let resultado = '';

  if (queuesClasif) {

    let temp = queuesClasif
      .filter(x => {
        return x.numero_colas === llamada_cola
      })
      .map(x => {
        return x.nombre_campanas;
      })

      if (temp.length > 0) {
        resultado = JSON.parse(JSON.stringify(temp))[0];
      }

  }

  return resultado;
}

function tiempo_after_call(llamada_cola, queuesClasif) {

  let resultado = '';

  if (queuesClasif) {

    let temp = queuesClasif
      .filter(x => {
        return x.numero_colas === llamada_cola
      })
      .map(x => {
        return x.tiempo_after_call;
      })

      if (temp.length > 0) {
        resultado = JSON.parse(JSON.stringify(temp))[0];
      }

  }

  return resultado;
}



function id_inv_escalas(llamada_cola, queuesClasif) {

  let resultado = '';

  if (queuesClasif) {

    let temp = queuesClasif
      .filter(x => {
        return x.numero_colas === llamada_cola
      })
      .map(x => {
        return x.id_inv_escalas;
      })

      if (temp.length > 0) {
        resultado = JSON.parse(JSON.stringify(temp))[0];
      }

  }

  return resultado;
}

function nombre_escalas(llamada_cola, queuesClasif) {

  let resultado = '';

  if (queuesClasif) {

    let temp = queuesClasif
      .filter(x => {
        return x.numero_colas === llamada_cola
      })
      .map(x => {
        return x.nombre_escalas;
      })

      if (temp.length > 0) {
        resultado = JSON.parse(JSON.stringify(temp))[0];
      }

  }

  return resultado;
}

function rojo(llamada_cola, queuesClasif) {

  let resultado = '';

  if (queuesClasif) {

    let temp = queuesClasif
      .filter(x => {
        return x.numero_colas === llamada_cola
      })
      .map(x => {
        return x.rojo;
      })

      if (temp.length > 0) {
        resultado = JSON.parse(JSON.stringify(temp))[0];
      }

  }

  return resultado;
}

function amarillo(llamada_cola, queuesClasif) {

  let resultado = '';

  if (queuesClasif) {

    let temp = queuesClasif
      .filter(x => {
        return x.numero_colas === llamada_cola
      })
      .map(x => {
        return x.amarillo;
      })

      if (temp.length > 0) {
        resultado = JSON.parse(JSON.stringify(temp))[0];
      }

  }

  return resultado;
}

function verde(llamada_cola, queuesClasif) {

  let resultado = '';

  if (queuesClasif) {

    let temp = queuesClasif
      .filter(x => {
        return x.numero_colas === llamada_cola
      })
      .map(x => {
        return x.verde;
      })

      if (temp.length > 0) {
        resultado = JSON.parse(JSON.stringify(temp))[0];
      }

  }

  return resultado;
}

function azul(llamada_cola, queuesClasif) {

  let resultado = '';

  if (queuesClasif) {

    let temp = queuesClasif
      .filter(x => {
        return x.numero_colas === llamada_cola
      })
      .map(x => {
        return x.azul;
      })

      if (temp.length > 0) {
        resultado = JSON.parse(JSON.stringify(temp))[0];
      }

  }

  return resultado;
}


function azul(llamada_cola, queuesClasif) {

  let resultado = '';

  if (queuesClasif) {

    let temp = queuesClasif
      .filter(x => {
        return x.numero_colas === llamada_cola
      })
      .map(x => {
        return x.azul;
      })

      if (temp.length > 0) {
        resultado = JSON.parse(JSON.stringify(temp))[0];
      }

  }

  return resultado;
}

function id_inv_agentes(llamada_extension, agentsClasif) {

  // console.log(llamada_extension);
  // console.log(agentsClasif);

  let resultado = '';

  if (agentsClasif) {

    let temp = agentsClasif
      .filter(x => {
        return x.numero_agentes === llamada_extension
      })
      .map(x => {
        return x.id_inv_agentes;
      })

      if (temp.length > 0) {
        resultado = JSON.parse(JSON.stringify(temp))[0];
      }


  }

  return resultado;
}


function nombre_agentes(id_inv_agentes, agentsClasif) {

  let resultado = '';

  if (agentsClasif) {

    let temp = agentsClasif
      .filter(x => {
        return x.id_inv_agentes === id_inv_agentes
      })
      .map(x => {
        return x.nombre_agentes;
      })

      if (temp.length > 0) {
        resultado = JSON.parse(JSON.stringify(temp))[0];
      }


  }

  return resultado;
}


function tipo_agentes(id_inv_agentes, agentsClasif) {

  let resultado = '';

  if (agentsClasif) {

    let temp = agentsClasif
      .filter(x => {
        return x.id_inv_agentes === id_inv_agentes
      })
      .map(x => {
        return x.tipo_agentes;
      })

      if (temp.length > 0) {
        resultado = JSON.parse(JSON.stringify(temp))[0];
      }


  }

  return resultado;
}


function id_inv_supervisores(id_inv_agentes, agentsClasif) {

  let resultado = '';

  if (agentsClasif) {

    let temp = agentsClasif
      .filter(x => {
        return x.id_inv_agentes === id_inv_agentes
      })
      .map(x => {
        return x.id_inv_supervisores;
      })

      if (temp.length > 0) {
        resultado = JSON.parse(JSON.stringify(temp))[0];
      }


  }

  return resultado;
}

function nombre_supervisores(id_inv_agentes, agentsClasif) {

  let resultado = '';

  if (agentsClasif) {

    let temp = agentsClasif
      .filter(x => {
        return x.id_inv_agentes === id_inv_agentes
      })
      .map(x => {
        return x.nombre_supervisores;
      })

      if (temp.length > 0) {
        resultado = JSON.parse(JSON.stringify(temp))[0];
      }


  }

  return resultado;
}



/************************************************* */


function id_inv_horarios(id_inv_agentes, agentsClasif) {

  let resultado = '';

  if (agentsClasif) {

    let temp = agentsClasif
      .filter(x => {
        return x.id_inv_agentes === id_inv_agentes
      })
      .map(x => {
        return x.id_inv_horarios;
      })

      if (temp.length > 0) {
        resultado = JSON.parse(JSON.stringify(temp))[0];
      }


  }

  return resultado;
}

function nombre_horarios(id_inv_agentes, agentsClasif) {

  let resultado = '';

  if (agentsClasif) {

    let temp = agentsClasif
      .filter(x => {
        return x.id_inv_agentes === id_inv_agentes
      })
      .map(x => {
        return x.nombre_horarios;
      })

      if (temp.length > 0) {
        resultado = JSON.parse(JSON.stringify(temp))[0];
      }


  }

  return resultado;
}


/*********************************************************************** */


//* Clasificacion del evento recibido del Queue Log en la llamada
function queuelogClasificado(queuelog, uniqueid, campo) {

  // Registro vacio
  let seleccionada = [{

    id: '',
    time: '00:00:00',
    callid: '',
    queuename: '',
    agent: '',
    event: '',
    data: '',
    data1: '',
    data2: '',
    data3: '',
    data4: '',
    data5: '',
    created: ''
  }];

  //console.log('valido')

  // Validar de la respuesta no sea undefined en caso de no existir
  //  if ((queuelog.filter(queue => (queue.callid == uniqueid)).push(seleccionada)).length * 1 != 0) {
  if (true) {
      //console.log('si hay');

    // IVROPTION
    if (campo == 'IVROPTION' && queuelog.filter(queue => (queue.callid == uniqueid && queue.event == 'IVROPTION')).push(seleccionada) > 1) {
      let fecha_hora = (new Date((queuelog.filter(queue => (queue.callid == uniqueid && queue.event == 'IVROPTION'))[0].time)));
      return (fechas.standardDate(parseInt((new Date(fecha_hora).getTime() / 1000).toFixed(0))));
    }

    // ENTERQUEUE
    if (campo == 'ENTERQUEUE' && queuelog.filter(queue => (queue.callid == uniqueid && queue.event == 'ENTERQUEUE')).push(seleccionada) > 1) {
      let fecha_hora = (new Date((queuelog.filter(queue => (queue.callid == uniqueid && queue.event == 'ENTERQUEUE'))[0].time)));
      return (fechas.standardDate(parseInt((new Date(fecha_hora).getTime() / 1000).toFixed(0))));
    }


    // CONNECT
    if (campo == 'CONNECT' && queuelog.filter(queue => (queue.callid == uniqueid && queue.event == 'CONNECT')).push(seleccionada) > 1) {
      let fecha_hora = (new Date((queuelog.filter(queue => (queue.callid == uniqueid && queue.event == 'CONNECT'))[0].time)));
      return (fechas.standardDate(parseInt((new Date(fecha_hora).getTime() / 1000).toFixed(0))));
    }

    // COMPLETECALLER
    if (campo == 'COMPLETECALLER' && queuelog.filter(queue => (queue.callid == uniqueid && queue.event == 'COMPLETECALLER')).push(seleccionada) > 1) {
      let fecha_hora = (new Date((queuelog.filter(queue => (queue.callid == uniqueid && queue.event == 'COMPLETECALLER'))[0].time)));
      return (fechas.standardDate(parseInt((new Date(fecha_hora).getTime() / 1000).toFixed(0))));
    }

    // COMPLETEAGENT
    if (campo == 'COMPLETEAGENT' && queuelog.filter(queue => (queue.callid == uniqueid && queue.event == 'COMPLETEAGENT')).push(seleccionada) > 1) {
      let fecha_hora = (new Date((queuelog.filter(queue => (queue.callid == uniqueid && queue.event == 'COMPLETEAGENT'))[0].time)));
      return (fechas.standardDate(parseInt((new Date(fecha_hora).getTime() / 1000).toFixed(0))));
    }

    // ABANDON
    if (campo == 'ABANDON' && queuelog.filter(queue => (queue.callid == uniqueid && queue.event == 'ABANDON')).push(seleccionada) > 1) {
      let fecha_hora = (new Date((queuelog.filter(queue => (queue.callid == uniqueid && queue.event == 'ABANDON'))[0].time)));
      return (fechas.standardDate(parseInt((new Date(fecha_hora).getTime() / 1000).toFixed(0))));
    }


  } else {
    // console.log('no aplica');
    return seleccionada.time

  }
}


function complete_time( completecaller, completeagent, abandon ){
  //=SI(DI4<>'';DI4;SI(DJ4<>'';DJ4;SI(DK4<>'';DK4;'')))
  // DI4=completecaller, DJ4=completeagent, DK4=abandon

  let resultado = null;

    if( typeof completecaller == 'string' ) {
      return resultado = completecaller;
    }

    if( typeof completeagent  == 'string' ) {
      return resultado = completeagent;
    }

    if( typeof abandon  == 'string' ) {
      return resultado = abandon;
    }

  return resultado;
  }

/*********************************************************************** */



function tiempo_ivr_cola( ivroption_time, enterqueue_time ){

  let resultado = '';

  if( typeof ivroption_time != 'undefined' && typeof enterqueue_time != 'undefined' ){

  let tiempo1 = new Date(ivroption_time)
  let tiempo2 = new Date(enterqueue_time)
  let dif = tiempo1.getTime() - tiempo2.getTime()

  let segundos_de_T1_a_T2 = dif / 1000;
  let segundos_entre_fechas = Math.abs(segundos_de_T1_a_T2);

  // console.log('resultado', ivroption_time, enterqueue_time, segundos_entre_fechas);

  resultado = segundos_entre_fechas;
  return resultado;
  }else {
    return null;
  }


  return resultado;

  }


  function tiempo_cola_agente( enterqueue_time, connect_time ){


  let resultado = '';

  if( typeof enterqueue_time != 'undefined' && typeof connect_time != 'undefined' ){

    let tiempo1 = new Date(enterqueue_time);
    let tiempo2 = new Date(connect_time);
    let dif = tiempo1.getTime() - tiempo2.getTime();

    let segundos_de_T1_a_T2 = dif / 1000;
    let segundos_entre_fechas = Math.abs(segundos_de_T1_a_T2);

    // console.log('resultado', enterqueue_time, connect_time, segundos_entre_fechas);

    resultado = segundos_entre_fechas;
    return resultado;
    }else {
      return null;
    }

  return resultado;

  }


  function tiempo_agente_finalizacion(  complete_time, connect_time, billsec){

  let resultado = '';

  if(complete_time === null){
   return billsec;
  }

  if( typeof complete_time != 'undefined' && typeof connect_time != 'undefined' ){

    let tiempo1 = new Date(complete_time);
    let tiempo2 = new Date(connect_time);
    let dif = tiempo1.getTime() - tiempo2.getTime();

    let segundos_de_T1_a_T2 = dif / 1000;
    let segundos_entre_fechas = Math.abs(segundos_de_T1_a_T2);

    // console.log('resultado', enterqueue_time, connect_time, segundos_entre_fechas);

    resultado = segundos_entre_fechas;
    return resultado;
    }else {
      return null;
    }

  return resultado;

  }

  function tiempo_llamante_abandono(  complete_time, connect_time, billsec){

    let resultado = '';

    if(complete_time === null){
     return billsec;
    }

    if( typeof complete_time != 'undefined' && typeof connect_time != 'undefined' ){

      let tiempo1 = new Date(complete_time);
      let tiempo2 = new Date(connect_time);
      let dif = tiempo1.getTime() - tiempo2.getTime();

      let segundos_de_T1_a_T2 = dif / 1000;
      let segundos_entre_fechas = Math.abs(segundos_de_T1_a_T2);

      // console.log('resultado', enterqueue_time, connect_time, segundos_entre_fechas);

      resultado = segundos_entre_fechas;
      return resultado;
      }else {
        return null;
      }

    return resultado;

    }

  function tiempo_de_operacion(  numero_colas, tiempo_agente_finalizacion, billsec, tiempo_after_call  ){


    let resultado = '';

    if( numero_colas === '' || numero_colas === null) {
      resultado =  Number(billsec) + Number(tiempo_after_call);
    } else {
      resultado = Number(tiempo_agente_finalizacion) + Number(tiempo_after_call)
    }

    return resultado;

    }

/***************************************************************** */

    function colgado_por( completecaller, completeagent ){
      // =SI.ERROR(EH4+EK4;'')
      //EH4=duracion_llamada, EK4=tiempo_after_call

      let resultado = '';

      if( typeof completecaller != 'undefined' ){
        return 'Llamante'
      }

      if( typeof completeagent != 'undefined' ){
        return 'Agente'
      }


      return resultado;

      }


    function colgado_agente( colgado_por ){


      let resultado = '';

      if( colgado_por === 'Agente' ){
        return 1
      } else {
      return 0;
      }
      return resultado;
      }


/********************************************************************** */


function llamada_clasificacion( sal_ent_vacia, tipo_colas, numero_colas, llamada_produccion ){

    let resultado = '';

    if(tipo_colas=== 'Automatica' && sal_ent_vacia === 'Entrante'){
      return resultado = 'Automatica';
    }

    if( sal_ent_vacia === 'Saliente' ){
      return resultado = 'Manual';
    }
    if( sal_ent_vacia === 'Entrante' ){
      return resultado = 'Entrante';
    }

    if( llamada_produccion === 'Sistema' ){
      return resultado = 'Sistema';
    }

    return resultado;
  }

  function llamada_productiva( productiva_sin_vacias ){

    let resultado = '';

    if( productiva_sin_vacias == 'Productiva' ){
      return resultado = 1;

    } else {
      return resultado = 0;
    }

    return resultado;
  }

  function llamada_operativa( productiva_sin_vacias ){

    let resultado = '';

    if( productiva_sin_vacias == 'Sistema' ){

      return resultado = 1;

    } else {
      return resultado = 0;
    }

    return resultado;

  }

  function llamada_interna( llamada_clasificacion ){

    let resultado = '';

    if( llamada_clasificacion == 'Interna' ){

      return resultado = 1;

    } else {
      return resultado = 0;
    }


    return resultado;

  }

  function llamada_entrante( llamada_clasificacion ){

  let resultado = '';

  if( llamada_clasificacion == 'Entrante' ){

    return resultado = 1;

  } else {
    return resultado = 0;
  }


  return resultado;
  }


  function llamada_entrante_automatica(llamada_clasificacion){

  let resultado = '';

  if( llamada_clasificacion == 'Automatica' ){

    return resultado = 1;

  } else {
    return resultado = 0;
  }

  return resultado;
  }


  function llamada_saliente_manual(llamada_clasificacion){

  let resultado = '';

  if( llamada_clasificacion == 'Manual' ){

    return resultado = 1;

  } else {
    return resultado = 0;
  }


  return resultado;
  }


/*********************************************************************** */


function llamadas_recibidas(llamada_clasificacion){
  //=SI(CU4='Entrante';1;0)
  // CU4=llamada_clasificacion;

  let resultado = '';

  if( llamada_clasificacion == 'Entrante' ){
    return resultado = 1;
  } else {
    return resultado = 0;
  }
  return resultado;
  }


  function llamadas_abandonadas(abandon_time ){
  //=SI(Y(DS4=1;DQ4='ABANDON');1;0)
  //DS4=llamadas_recibidas, DQ4=result_qlog

  let resultado = '';

    if( typeof abandon_time == 'undefined') {
      return resultado = 0;
    } else {
      return resultado = 1;
    }

  return resultado;
  }


  function llamadas_atendidas(llamadas_recibidas, complete, llamadas_abandonadas, disposition){
  // =SI(Y(DS4=1;DL4<>'');1;0)
  // DS4=llamadas_recibidas, DL4=complete

  let resultado = '';

    if( (llamadas_recibidas == 1 && complete && llamadas_abandonadas != 1) ) {
      return resultado = 1;
    } else {
      return resultado = 0;
    }

  return resultado;
  }


  function llamadas_cortas( llamadas_recibidas, tiempo_agente_finalizacion ){
  // =SI(Y(DS4=1;DO4<= 0,0000578703703703704 ;DO4>0);1;0)
  // DS4=llamadas_recibidas,DO4=tiempo_agente_finalizacion


  let resultado = 0;
  let intervalo = 5;


  if(tiempo_agente_finalizacion <= intervalo && tiempo_agente_finalizacion > 0){
    return 1;
  }

  return resultado;
  }




function llamadas_antes_de_20( llamadas_atendidas, tiempo_cola_agente ) {
  // =SI(Y(DN4<=0,000231481481481481; DU4=1);1;0)
  //  DU4= llamadas_atendidas , DN4= tiempo_cola_agente

  //@ TODO

  let resultado = 0;
  let intervalo = 20

  if (llamadas_atendidas === 1) {

    if (tiempo_cola_agente <= intervalo) {

      resultado = 1;
    }

  }

  return resultado;
  }

function resultado_llamada_saliente(){

  // @TODO

  let resultado = '';
  return resultado;
}


function llamadas_realizadas(llamada_clasificacion){
//	=SI(O(CU4='Automatica';CU4='Manual');1;0)
// CU4=llamada_clasificacion

let resultado = '';

  if( llamada_clasificacion=='Automatica' || llamada_clasificacion=='Manual' ){
    return resultado = 1;
  } else {
    return resultado = 0;
  }

return resultado;
}


function llamadas_fallidas( disposition, lastapp, llamadas_realizadas ){
//=SI(Y(DD4<>'ANSWERED';DE4<>'Playback';DY4 =1);1;0)
// DD4=disposition, DE4=lastaap, DY4=llamadas_realizadas

let resultado = '';

  if(	disposition != 'ANSWERED' &&
    lastapp != 'Playback' &&
      llamadas_realizadas == 1){

    return resultado = 1;
  } else {
    return resultado = 0;
  }

return resultado;
}


function llamadas_contestadas( disposition, llamadas_realizadas ){
//=SI(Y(DD4='ANSWERED';DY4 =1);1;0)
//DD4=disposition, DY4=llamadas_realizadas


let resultado = '';

if( disposition == 'ANSWERED' && llamadas_realizadas == 1 ) {
  return resultado = 1;
} else {
  return resultado = 0;
}

return resultado;
}

function llamadas_efectivas( resultado_llamada_saliente, llamadas_contestadas ){
// =SI(Y(EA4=1;DX4='Efectiva');1;0));
// EA4=llamadas_contestadas, DX4=resultado_llamada_saliente

let resultado = '';

  if( llamadas_contestadas == 1 && resultado_llamada_saliente =='Efectiva'){
    return resultado = 1;
  } else {
    return resultado = 0;
  }


return resultado;
}



function llamadas_colgadas( lastaap, llamadas_realizadas){
//=SI(Y(DE4='Playback';DY4 =1);1;0)
//DE4=lastaap, DY4=llamadas_realizadas


let resultado = '';

if( lastaap =='Playback' && llamadas_realizadas ==1 ){
  return resultado = 1;
}else{
  return resultado = 0;
}

return resultado;
}

/*
*
* Las llamads del marcador quedan pendientes
*
*/

function marcador_bbdd(){
  //@ TODO

  let resultado = '';
  return resultado;
}


function marcador_recorridas(){
 //@ TODO
  let resultado = '';
  return resultado;
}


function marcador_faltantes(){
 //@ TODO
  let resultado = '';
  return resultado;
}


function marcador_vuelta(){
 //@ TODO
  let resultado = '';
  return resultado;
}



/*********************************************************************** */

// Exportar para uso
module.exports = {


  date_text,

  // ___CALCULOS_INTERMEDIOS___,
  largo_src,
  largo_dst,
  int_ext,
  sal_ent,
  sal_ent_vacia,
  saliente_entrante,
  productiva,
  llamada_produccion,
  ext_ent_larga,
  ext_ent,
  ext_sal,

  // __COLA_EXTENSION__,
  llamada_cola,
  llamada_extension,
  numero_telefonico,



  // __CLASIF_CDR__,

  id_inv_colas,
  nombre_colas,
  tipo_colas,

  id_inv_clientes,
  nombre_clientes,

  id_inv_servicios,
  nombre_servicios,

  id_inv_campanas,
  nombre_campanas,
  tiempo_after_call,

  id_inv_escalas,
  nombre_escalas,
  rojo,
  amarillo,
  verde,
  azul,

  id_inv_agentes,
  nombre_agentes,
  tipo_agentes,

  id_inv_supervisores,
  nombre_supervisores,

  id_inv_horarios,
  nombre_horarios,

  //agentes_cdr,
  // id_inv_agentes,
  // supervisores_cdr,
  // id_inv_supervisores,
  // suplentes_cdr,
  // id_inv_supervisores_suplente,
  // horario_cdr,
  // id_inv_horarios,
  // __DATA_QLOG__,


  // ivroption_time,
  // enterqueue_time,
  // connect_time,
  // completecaller_time,
  // completeagent_time,
  // abandon_time,
  // complete_time,

  // __CALCULOS_TIEMPOS__,
  tiempo_ivr_cola,
  tiempo_cola_agente,
  tiempo_agente_finalizacion,
  tiempo_llamante_abandono,
  // tiempo_espera,
  // tiempo_hold,
  tiempo_de_operacion,
  // tiempo_conversado,

  // __RESULTADO_LLAMADA__,
  colgado_por,
  colgado_agente,
  // result_qlog,
  // result_qlog_time,
  // resultado,


  // __CLASIFICACION_LLAMADA__,
  llamada_clasificacion,
  llamada_productiva,
  llamada_operativa,
  llamada_interna,
  llamada_entrante,
  llamada_entrante_automatica,
  llamada_saliente_manual,



  // __LLAMADAS_RECIBIDAS__,
  llamadas_recibidas,
  llamadas_abandonadas,
  llamadas_atendidas,
  llamadas_cortas,
  llamadas_antes_de_20,

  // __LLAMADAS_REALIZADAS__,
  llamadas_realizadas,
  llamadas_fallidas,
  llamadas_contestadas,
  llamadas_efectivas,
  llamadas_colgadas,
  resultado_llamada_saliente,

  // __LLAMADAS_MARCADOR__,
  // marcador_bbdd,
  // marcador_recorridas,
  // marcador_faltantes,
  // marcador_vuelta,

  // __CLASIFICACION_FECHA__,
  // date_text,
  // time_text,
  // day_week_number,
  // week,
  // hora_del_dia,
  // minuto_del_dia,
  // segundo_del_dia,
  // hora_actual,
  // segundos_hora_actual,


  queuelogClasificado,
  complete_time,
}