/*
 *
 * FUNCIONES PARA CALCULO DE INDICADORES
 *
 */

// Dependencias
const moment = require('moment');
const fechas = require('./../utilitarios/fechas_utilitarios');
const _ = require('lodash');

/*************************************************
 * FUNCIONES
 */



function IND_llamadas_recibidas(cdr_filtrado) {
  let resultado = '';

  // inicio
  let sum = 0;

  for (let i = 0; i < cdr_filtrado.length; i++) {
    sum += cdr_filtrado[i].llamadas_recibidas;
  }

  resultado = sum;

  // fin

  return resultado;
}

function IND_llamadas_abandonadas(cdr_filtrado) {
  let resultado = '';


  // inicio
  let sum = 0;

  for (let i = 0; i < cdr_filtrado.length; i++) {
    sum += cdr_filtrado[i].llamadas_abandonadas;
  }

  resultado = sum;
  // fin


  return resultado;
}

/*

function IND_llamadas_abandonadas(cdr_filtrado) {
  let resultado = '';


  // inicio
  let sum = 0;

  for (let i = 0; i < cdr_filtrado.length; i++) {
    sum += cdr_filtrado[i].llamadas_abandonadas;
  }

  resultado = sum;
  // fin


  return resultado;
}


function IND_llamadas_abandonadas(cdr_filtrado_colas_involucradas) {
  let resultado = '';


  // inicio
  let sum = 0;

  for (let i = 0; i < cdr_filtrado.length; i++) {
    sum += cdr_filtrado[i].llamadas_abandonadas;
  }

  resultado = sum;
  // fin


  return resultado;
}
*/


function IND_llamadas_atendidas(cdr_filtrado) {
  let resultado = '';

  // inicio
  let sum = 0;

  for (let i = 0; i < cdr_filtrado.length; i++) {
    sum += cdr_filtrado[i].llamadas_atendidas;
  }
  resultado = sum;
  // fin

  return resultado;
}

function IND_llamadas_cortas(cdr_filtrado) {
  let resultado = '';

  // inicio
  let sum = 0;

  for (let i = 0; i < cdr_filtrado.length; i++) {
    sum += cdr_filtrado[i].llamadas_cortas;
  }

  resultado = sum;
  // fin

  return resultado;
}

function IND_llamadas_en_cola(realtime_colas_filtrado) {
  let resultado = '';


  // inicio
  if(realtime_colas_filtrado) {

    let llamadas_en_cola = realtime_colas_filtrado
    .reduce((sum, x ) => {


        return sum + parseInt(x.llamadas_en_cola, 10);

    }, 0 );

    //console.log('cantidad_de_llamadas_en_cola', llamadas_en_cola);
    return llamadas_en_cola;
  }

  // fin

  return resultado;
}

function IND_llamadas_antes_de_20(cdr_filtrado) {
  let resultado = '';

  // inicio
  let sum = 0;

  for (let i = 0; i < cdr_filtrado.length; i++) {
    sum += cdr_filtrado[i].llamadas_antes_de_20;
  }

  resultado = sum;
  // fin

  return resultado;
}

function IND_tiempo_de_operacion(cdr_filtrado) {
  let resultado = '';

  // inicio
  let sum = 0;

  for (let i = 0; i < cdr_filtrado.length; i++) {
    sum += cdr_filtrado[i].tiempo_de_operacion;
  }

  resultado = sum;
  // fin

  return resultado;
}

function IND_tiempo_cola_agente(cdr_filtrado) {
  let resultado = '';

  // inicio
  let sum = 0;

  for (let i = 0; i < cdr_filtrado.length; i++) {
    sum += cdr_filtrado[i].tiempo_cola_agente;
  }

  resultado = sum;
  // fin

  return resultado;
}

function IND_nivel_de_servicio (llamadas_antes_de_20, llamadas_recibidas) {

  let resultado = '';
  let indicador = '';

  // inicio
  if(llamadas_recibidas !== 0){
    indicador = ((llamadas_antes_de_20 / llamadas_recibidas) * 100).toFixed(2);
  }
  resultado = indicador;
  // fin

  return resultado;
}

function IND_nivel_de_atencion(llamadas_atendidas, llamadas_recibidas) {
  let resultado = '';
  let indicador = '';


  // inicio
  if(llamadas_recibidas !== 0){
      indicador = ((llamadas_atendidas / llamadas_recibidas) * 100).toFixed(2);
  }
  resultado = indicador;
  // fin

  return resultado;
}

function IND_nivel_de_abandono(llamadas_abandonadas, llamadas_recibidas) {
  let resultado = '';
  let indicador = '';

  // inicio
  if(llamadas_recibidas !== 0){
    indicador = ((llamadas_abandonadas / llamadas_recibidas) * 100).toFixed(2);
  }
  resultado = indicador;
  // fin

  return resultado;
}

function IND_tmo_entrantes(tiempo_de_operacion, llamadas_atendidas) {
  let resultado = '';
  let indicador = '';

  // inicio
  if(llamadas_atendidas !== 0){
    indicador = ((tiempo_de_operacion / llamadas_atendidas)).toFixed(2);
  }
  resultado = indicador;
  // fin
  return resultado;
}

function IND_asa(tiempo_cola_agente, llamadas_atendidas) {
  let resultado = '';
  let indicador = '';

  // inicio
  if(llamadas_atendidas !== 0){
    indicador = (tiempo_cola_agente / llamadas_atendidas).toFixed(2);
  }
  resultado = indicador;
  // fin
  return resultado;
}
/////////////////////////// VALIDADO HASTA AQUI ////////////////////


///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
/////////////////////////// NUEVAS FUNCIONES 22/04/2018 ///////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////


/***************************************************************
 *  PROCESOS DEL AUDIT PARA CONTABILIZAR
 */

//**************************************************************



function IND_agentes_conectados_ahora (agent_filtrado) {

  let result = 0;

  if(agent_filtrado) {

    // Filtro

    let temp = agent_filtrado
    .filter( x => (

      (x.estado_agentes === 'conectado')
       ?
      true: false

      ))
      .reduce( (agentes, x) => {
        return agentes + 1;
      }, 0);

      result = JSON.stringify(temp);

    // Fin filtro
  }

  //console.log(result);


 return result;
}


function IND_agentes_conectados_en_el_dia (agent_filtrado) {

  let result = 0;

  if(agent_filtrado) {

    // Filtro

    let temp = agent_filtrado
    .filter( x => (

      (x.estado_agentes === 'conectado' || x.estado_agentes === 'desconectado')
       ?
      true: false

      ))
      .reduce( (agentes, x) => {
        return agentes + 1;
      }, 0);

      result = JSON.stringify(temp);

    // Fin filtro
  }

  //console.log(result);


 return result;

}




function IND_agentes_auxiliares_productivos(agent_filtrado) {

  let result = 0;

  if(agent_filtrado) {

    // Filtro

    let temp = agent_filtrado
    .filter( x => (

      (x.estado_agentes === 'conectado' && x.id_inv_auxiliares > 0 && x.productividad === 1 )
       ?
      true: false

      ))
      .reduce( (agentes, x) => {
        return agentes + 1;
      }, 0);

      result = JSON.stringify(temp);

    // Fin filtro
  }

  //console.log(result);


 return result;
}


function IND_agentes_ocupados(agent_filtrado) {

  let result = 0;

  if(agent_filtrado) {

    // Filtro

    let temp = agent_filtrado
    .filter( x => (

      (x.estado_agentes === 'conectado' && x.estado_actual === 'ocupado')
       ?
      true: false

      ))
      .reduce( (agentes, x) => {
        return agentes + 1;
      }, 0);

      result = JSON.stringify(temp);

    // Fin filtro
  }

  //console.log(result);


 return result;
}

function IND_agentes_disponibles(agent_filtrado) {
  let result = 0;

  if(agent_filtrado) {

    // Filtro

    let temp = agent_filtrado
    .filter( x => (

      (x.estado_agentes === 'conectado' && x.estado_actual === 'disponible')
       ?
      true: false

      ))
      .reduce( (agentes, x) => {
        return agentes + 1;
      }, 0);

      result = JSON.stringify(temp);

    // Fin filtro
  }

  //console.log(result);


 return result;

}

function IND_agentes_auxiliares_no_productivos(agent_filtrado) {

 let result = 0;

  if(agent_filtrado) {

    // Filtro

    let temp = agent_filtrado
    .filter( x => (

      (x.estado_agentes === 'conectado' && x.estado_actual === 'auxiliar')
       ?
      true: false

      ))
      .reduce( (agentes, x) => {
        return agentes + 1;
      }, 0);

      result = JSON.stringify(temp);

    // Fin filtro
  }

  //console.log(result);


 return result;

}

 /*******************************************************************
  * LISTAS DE AGENTES
  */
function IND_lista_agentes_conectados_ahora(agent_filtrado){




  let result = 0;

  if(agent_filtrado) {

    // Filtro

    let temp = agent_filtrado
    .filter( x => (

      (x.estado_agentes === 'conectado')
       ?
      true: false

      ));

      result = JSON.stringify(temp);

    // Fin filtro
  }

  //console.log(result);


 return result;

}

function IND_lista_agentes_conectados_en_el_dia(agent_filtrado){




  let result = 0;

  if(agent_filtrado) {

    // Filtro

    let temp = agent_filtrado
    .filter( x => (

      (x.estado_agentes === 'conectado' || x.estado_agentes === 'desconectado')
       ?
      true: false

      ));

      result = JSON.stringify(temp);

    // Fin filtro
  }

  //console.log(result);


 return result;


}


function IND_lista_auxiliares_productivos(agent_filtrado) {


  let result = 0;

  if(agent_filtrado) {

    // Filtro

    let temp = agent_filtrado
    .filter( x => (

      (x.estado_agentes === 'conectado' && x.id_inv_auxiliares > 0 && x.productividad === 1 )
       ?
      true: false

      ));

      result = JSON.stringify(temp);

    // Fin filtro
  }

  //console.log(result);


 return result;

}

function IND_lista_auxiliares_no_productivos(agent_filtrado) {


  let result = 0;

  if(agent_filtrado) {

    // Filtro

    let temp = agent_filtrado
    .filter( x => (

      (x.estado_agentes === 'conectado' && x.id_inv_auxiliares > 0 && x.productividad === 0 )
       ?
      true: false

      ));

      result = JSON.stringify(temp);

    // Fin filtro
  }

  //console.log(result);


 return result;

}




function IND_contactabilidad(llamadas_contestadas, llamadas_realizadas) {
  let resultado = '';

  // inicio

  if(llamadas_realizadas){
  resultado = ((llamadas_contestadas / llamadas_realizadas) * 100).toFixed(2);;
  }
  // fin

  return resultado;
}

function IND_efectividad(llamadas_efectivas, llamadas_contestadas) {
  let resultado = '';

  // inicio
  if(llamadas_contestadas){
  resultado = ((llamadas_efectivas / llamadas_contestadas) * 100).toFixed(2);
  }
  // fin

  return resultado;
}

function IND_tmo_manuales(tiempo_operacion, llamadas_contestadas) {
  let resultado = '';

  // inicio
  if(llamadas_contestadas){
  resultado = (tiempo_operacion / llamadas_contestadas).toFixed(2);
  }
  // fin

  return resultado;
}

function IND_llamadas_realizadas(cdr_filtrado) {
  let resultado = '';

  // inicio
  let sum = 0;

  for (let i = 0; i < cdr_filtrado.length; i++) {
    sum += cdr_filtrado[i].llamadas_realizadas;
  }

  resultado = sum;
  // fin

  return resultado;
}

function IND_llamadas_fallidas(cdr_filtrado) {
  let resultado = '';

  // inicio
  let sum = 0;

  for (let i = 0; i < cdr_filtrado.length; i++) {
    sum += cdr_filtrado[i].llamadas_fallidas;
  }

  resultado = sum;
  // fin

  return resultado;
}

function IND_llamadas_contestadas(cdr_filtrado) {
  let resultado = '';

  // inicio
  let sum = 0;

  for (let i = 0; i < cdr_filtrado.length; i++) {
    sum += cdr_filtrado[i].llamadas_contestadas;
  }

  resultado = sum;
  // fin

  return resultado;
}

function IND_llamadas_efectivas(cdr_filtrado) {
  let resultado = '';

  // inicio
  let sum = 0;

  for (let i = 0; i < cdr_filtrado.length; i++) {
    sum += cdr_filtrado[i].llamadas_efectivas;
  }

  resultado = sum;
  // fin

  return resultado;
}

function IND_llamadas_colgadas(cdr_filtrado) {
  let resultado = '';

  // inicio
  let sum = 0;

  for (let i = 0; i < cdr_filtrado.length; i++) {
    sum += cdr_filtrado[i].llamadas_colgadas;
  }

  resultado = sum;
  // fin

  return resultado;
}

function IND_marcador_bbdd(parametros) {
  let resultado = '';

  // inicio

  // TODO:  Informacuión proveniente del marcador

  resultado = sum;

  // fin

  return resultado;
}

function IND_marcador_recorridas(parametros) {
  let resultado = '';

  // inicio

  // TODO:  Informacuión proveniente del marcador

  resultado = sum;

  // fin

  return resultado;
}

function IND_marcador_faltantes(parametros) {
  let resultado = '';

  // inicio

  // TODO:  Informacuión proveniente del marcador

  resultado = sum;

  // fin

  return resultado;
}

function IND_intentos_fallidos(parametros) {
  let resultado = '';

  // inicio

  // TODO: Datos provenientes del marcador

  resultado = sum;

  // fin

  return resultado;
}

function resultado(parametros) {
  let resultado = '';

  // inicio

  // TODO: Datos provenientes del marcador

  resultado = sum;

  // fin

  return resultado;
}

function IND_marcador_vuelta(parametros) {
  let resultado = '';

  // inicio

  // TODO:  Informacuión proveniente del marcador

  resultado = sum;

  // fin

  return resultado;
}

function IND_tmo_automaticas(cdr_filtrado) {
  let resultado = '';

  // inicio
  resultado = (tiempo_operacion / llamadas_realizadas).toFixed(2);
  // fin

  return resultado;
}

function IND_tiempo_espera(cdr_filtrado) {
  let resultado = '';

  // inicio

  // TODO: FIXME: suma(tiempo_cola_agente) ????

  resultado = sum;

  // fin

  return resultado;
}

function IND_tiempo_hold(cdr_filtrado) {
  let resultado = '';

  // inicio
  let sum = 0;

  for (let i = 0; i < cdr_filtrado.length; i++) {
    sum += cdr_filtrado[i].tiempo_hold;
  }

  resultado = sum;

  // TODO: transformar resultado a HH:MM:SS
  //http://notasjs.blogspot.com/2013/07/transformar-segundos-horas-minutos-y.html

  // fin

  return resultado;
}

function IND_tiempo_de_total(parametros) {
  let resultado = '';

  // inicio

  // TODO: FIXME: NO EXISTE tiempo_de_total ?????

  resultado = sum;

  // fin

  return resultado;
}

function IND_tiempo_login(audit_filtrado) {
  let resultado = '';

  // inicio
  let sum = 0;

  for (let i = 0; i < audit_filtrado.length; i++) {
    sum += audit_filtrado[i].tiempo_login;
  }

  resultado = sum;

  // TODO: transformar resultado a HH:MM:SS
  //http://notasjs.blogspot.com/2013/07/transformar-segundos-horas-minutos-y.html

  // fin

  return resultado;
}

function IND_tiempo_auxiliar(audit_filtrado) {
  let resultado = '';

  // inicio
  let sum = 0;

  for (let i = 0; i < audit_filtrado.length; i++) {
    sum += audit_filtrado[i].tiempo_auxiliar;
  }

  resultado = sum;

  // TODO: transformar resultado a HH:MM:SS
  //http://notasjs.blogspot.com/2013/07/transformar-segundos-horas-minutos-y.html

  // fin

  return resultado;
}

function IND_tiempo_conversado(cdr_filtrado) {
  let resultado = '';

  // inicio
  let sum = 0;

  for (let i = 0; i < cdr_filtrado.length; i++) {
    sum += cdr_filtrado[i].tiempo_agente_finalizacion;
  }

  resultado = sum;

  // TODO: transformar resultado a HH:MM:SS
  //http://notasjs.blogspot.com/2013/07/transformar-segundos-horas-minutos-y.html

  // fin

  return resultado;
}

function IND_tiempo_disponible(tiempo_conectado, tiempo_conversado, tiempo_auxiliar) {
  let resultado = '';

  // inicio
  resultado = tiempo_conectado - tiempo_conversado - tiempo_auxiliars;
  // fin

  // TODO: transformar resultado a HH:MM:SS
  //http://notasjs.blogspot.com/2013/07/transformar-segundos-horas-minutos-y.html

  return resultado;
}

function IND_utilizacion(tiempo_conversado, tiempo_login) {
  let resultado = '';

  // inicio
  resultado = tiempo_conversado / tiempo_login;
  // fin

  // TODO: transformar resultado a HH:MM:SS
  //http://notasjs.blogspot.com/2013/07/transformar-segundos-horas-minutos-y.html

  return resultado;
}

function IND_tiempo_after_call(cdr_filtrado) {
  let resultado = '';

  // inicio
  let sum = 0;

  for (let i = 0; i < cdr_filtrado.length; i++) {
    sum += cdr_filtrado[i].tiempo_after_call;
  }

  resultado = sum;

  // TODO: transformar resultado a HH:MM:SS
  //http://notasjs.blogspot.com/2013/07/transformar-segundos-horas-minutos-y.html

  // fin

  return resultado;
}

function IND_cantidad_not_ready(parametros) {
  let resultado = '';

  // inicio

  // TODO: FIXME: NPI !!!
  resultado = sum;

  // fin

  return resultado;
}

function IND_tiempo_not_ready(parametros) {
  let resultado = '';

  // inicio

  // TODO: FIXME: NPI !!!
  // Cantidad de veces que el agente colocó NotReady

  resultado = sum;

  // fin

  return resultado;
}

function IND_llamadas_on_hold(cdr_filtrado) {
  // TODO: Cantidad de llamadas colocadas en retener
  // sumar(llamadas_on_hold)

  // FIXME: Crear campo llamadas_on_hold en tabla: dar_cdr_clasif

  let resultado = '';

  // inicio
  let sum = 0;

  for (let i = 0; i < cdr_filtrado.length; i++) {
    sum += cdr_filtrado[i].llamadas_on_hold;
  }

  resultado = sum;
  // fin

  return resultado;
}

function IND_llamadas_internas(cdr_filtrado) {
  let resultado = '';

  // inicio
  let sum = 0;

  for (let i = 0; i < cdr_filtrado.length; i++) {
    sum += cdr_filtrado[i].llamadas_internas;
  }

  resultado = sum;
  // fin

  return resultado;
}

function IND_tiempo_llamadas_internas(parametros) {
  let resultado = '';

  // inicio

  // TODO: sum (llamada_interna)

  resultado = sum;

  // fin

  return resultado;
}

function IND_tiempo_atencion(parametros) {
  let resultado = '';

  // inicio

  // TODO: FIXME: ASA o tiempo_agente_finalizacion ?????

  resultado = sum;

  // fin

  return resultado;
}

function IND_nivel_servicio(llamadas_antes_de_20, llamadas_recibidas) {
  let resultado = '';

  // inicio
  resultado = (llamadas_antes_de_20 / llamadas_recibidas).toFixed(2);
  // fin

  return resultado;
}

function IND_max_agentes_conectados(parametros) {
  let resultado = '';

  // inicio

  // TODO: Máximo de agentes conectados en un período de tiempo

  resultado = sum;

  // fin

  return resultado;
}

function IND_min_agentes_conectados(parametros) {
  let resultado = '';

  // inicio

  // TODO: Mínimo de agentes conectados en un período de tiempo

  resultado = sum;

  // fin

  return resultado;
}

function IND_prom_agentes_conectados(parametros) {
  let resultado = '';

  // inicio

  // TODO: Promedio de agentes conectados en un período de tiempo

  resultado = sum;

  // fin

  return resultado;
}

function IND_max_agentes_disponibles(parametros) {
  let resultado = '';

  // inicio

  // TODO: Máximo de agentes disponibles en un período de tiempo

  resultado = sum;

  // fin

  return resultado;
}

function IND_min_agentes_disponibles(parametros) {
  let resultado = '';

  // inicio

  // TODO: Mínimo de agentes disponibles en un período de tiempo

  resultado = sum;

  // fin

  return resultado;
}

function IND_prom_agentes_disponibles(parametros) {
  let resultado = '';

  // inicio

  // TODO: Máximo de agentes disponibles en un período de tiempo

  resultado = sum;

  // fin

  return resultado;
}

function IND_tiempo_ocupacion(parametros) {
  let resultado = '';

  // inicio

  // TODO: Sumna del tiempo que efectivamente se conversa, suma(Tiempo_Total_Conversación)

  resultado = sum;

  // fin

  return resultado;
}

function IND_porc_ocupacion(parametros) {
  let resultado = '';

  // inicio

  // TODO: Proporción del tiempo que efectivamente se conversa, suma(Tiempo_Total_Conversación del intervalo)/(suma(Tiempo_Total_Conversación)+suma(Tiempo_Disponible) del intervalo)

  resultado = sum;

  // fin

  return resultado;
}



/////////////////////// AUDIT ///////////////////////////

function IND_ocupados(parametros) {
  let resultado = '';

  // inicio

  // TODO: Cantidad de agentes conectados que están contestando/realizando una llamada

  resultado = sum;

  // fin

  return resultado;
}

function IND_nombre_auxiliares(parametros) {
  let resultado = '';

  // inicio

  // TODO:

  resultado = sum;

  // fin

  return resultado;
}

function IND_tipo_auxiliares(parametros) {
  let resultado = '';

  // inicio

  // TODO: FIXME: ??? Productivos / NO Productivos ????

  resultado = sum;

  // fin

  return resultado;
}

function IND_tiempo_auxiliares(parametros) {
  let resultado = '';

  // inicio

  // TODO: Tiempo Total en el que el agente ha estado en auxiliares

  resultado = sum;

  // fin

  return resultado;
}

function IND_tiempo_login(parametros) {
  let resultado = '';

  // inicio

  // TODO: Total Tiempo que el agente ha estado conectado al sistema

  resultado = sum;

  // fin

  return resultado;
}

function IND_porc_auxiliares(parametros) {
  let resultado = '';

  // inicio

  // TODO: Porcentaje del tiempo en que el agente ha estado en auxiliares


  resultado = sum;

  // fin

  return resultado;
}


// CONEXIONES audit


function IND_inicio_conexion(parametro1, parametro2) {
  let resultado = '';

  // inicio

  // TODO: datetime_init

  resultado = sum;

  // fin

  return resultado;
}

function IND_fin_conexion(parametros) {
  let resultado = '';

  // inicio

  // TODO: datetime_end

  resultado = sum;

  // fin

  return resultado;
}

function IND_duracion(parametros) {
  let resultado = '';

  // inicio

  // TODO: duration

  resultado = sum;

  // fin

  return resultado;
}

/**
 * Campos automaticos de registro
 */


function IND_createdAt() {

  let resultado = '';
  resultado = fechas.unixDate(new Date());
  return resultado;
}

function IND_updatedAt() {

  let resultado = '';
  resultado = fechas.unixDate(new Date());
  return resultado;
}

/****************************************************
 *  EXPORTAR LAS FUNCIONES
 *
 */

module.exports = {

  IND_llamadas_recibidas,
  IND_llamadas_abandonadas,
  IND_llamadas_atendidas,
  IND_llamadas_cortas,
  IND_llamadas_en_cola,
  IND_llamadas_antes_de_20,
  IND_tiempo_de_operacion,
  IND_tiempo_cola_agente,
  IND_nivel_de_servicio,
  IND_nivel_de_atencion,
  IND_nivel_de_abandono,
  IND_tmo_entrantes,
  IND_asa,

  IND_agentes_conectados_ahora,
  IND_agentes_conectados_en_el_dia,
  IND_agentes_ocupados,
  IND_agentes_auxiliares_no_productivos,
  IND_agentes_auxiliares_productivos,
  IND_agentes_disponibles,

  IND_lista_agentes_conectados_ahora,
  IND_lista_agentes_conectados_en_el_dia,

  IND_lista_auxiliares_productivos,
  IND_lista_auxiliares_no_productivos,



  IND_llamadas_realizadas,
  IND_llamadas_fallidas,
  IND_llamadas_contestadas,
  IND_llamadas_efectivas,
  IND_llamadas_colgadas,

  IND_contactabilidad,

  IND_efectividad,

  IND_tmo_manuales,


  IND_marcador_bbdd,
  IND_marcador_recorridas,
  IND_marcador_faltantes,
  IND_marcador_vuelta,
  IND_tmo_automaticas,
  IND_tiempo_espera,
  IND_tiempo_hold,
  IND_tiempo_de_total,
  IND_tiempo_login,
  IND_tiempo_auxiliar,
  IND_tiempo_conversado,
  IND_tiempo_disponible,
  IND_utilizacion,
  IND_tiempo_after_call,
  IND_cantidad_not_ready,
  IND_tiempo_not_ready,
  IND_llamadas_on_hold,
  IND_llamadas_internas,
  IND_tiempo_llamadas_internas,
  IND_tiempo_atencion,
  IND_nivel_servicio,
  IND_max_agentes_conectados,
  IND_min_agentes_conectados,
  IND_prom_agentes_conectados,
  IND_max_agentes_disponibles,
  IND_min_agentes_disponibles,
  IND_prom_agentes_disponibles,
  IND_tiempo_ocupacion,
  IND_porc_ocupacion,
  IND_intentos_fallidos,

  IND_nombre_auxiliares,
  IND_tipo_auxiliares,
  IND_tiempo_auxiliares,
  IND_tiempo_login,
  IND_porc_auxiliares,
  IND_inicio_conexion,
  IND_fin_conexion,
  IND_duracion,

  IND_createdAt,
  IND_updatedAt,
};

