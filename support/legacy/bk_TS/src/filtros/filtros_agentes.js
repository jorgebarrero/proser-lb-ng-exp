/*
*
* FUNCIONES PARA CALCULO DE AGENTES
*
*/

// Dependencias
var moment = require('moment');
var fechas = require('./../funciones/fechas_utilitarios');
const _ = require('lodash');

/*************************************************
 * FILTRO PARA EL CDR
 */


 function FILTRO_agent_filtrado(agent, agentes_involucrados) {

  // console.log('AUDIT FILTRADO DEL FILTRO...', audit.length);

  let resultado = agent;

  if(agent && agentes_involucrados) {

    let agent_filtrado = agent
    .filter(function(x) {

      for(let i = 0; i < agentes_involucrados.length ; i++){
        return x.id_inv_agentes ===agentes_involucrados[i].id_inv_agentes ? true: false;
      }


    });
      resultado = agent_filtrado;
    }

    console.log( 'agent_Filtrado', agent.length, agentes_involucrados.length, resultado.length);

  return resultado;
  }




function FILTRO_audit_unicos(audit){

  let resultado = audit;


  let temp = audit
  .filter( x => (

    ((x.id_break === null)) ?
    true: false
    ));

  resultado = _.uniqBy(temp, 'id_agent');

	return resultado;
}


function FILTRO_cdr_filtrado(cdr, id_inv_agentes){

  let resultado = cdr;

  if(cdr && id_inv_agentes) {

    let cdr_filtrado = cdr
    .filter(function(x) {
      return x.id_inv_agentes === id_inv_agentes;
    });
      resultado = cdr_filtrado;
      console.log(resultado.length);
    }

	return resultado;
}

/*************************************************
 * FILTRO PARA EL CDR COLAS
 */

function FILTRO_colas_involucradas(cdr_filtrado){

  let resultado = '';

// inicio

let dataColas;
let result;

dataColas = cdr_filtrado
  .map(function(x) {
    result=[];

    result.push({
      queue_call_entry: x.queue_call_entry,
      numero_colas: x.numero_colas,
      nombre_colas: x.nombre_colas,
      titulo: 'Colas: '
    });
    result = result[0];
    return result;
  })
  .filter(function(x){
    return x.nombre_colas !==  '' ? true: false;
  });

  resultado = _.uniqBy(dataColas, 'queue_call_entry');

// fin

	return resultado;
}

/*************************************************
 * FILTRO PARA EL CDR AGENTES
 */

function FILTRO_agentes_involucrados(cdr_filtrado){

  let resultado = '';

  // inicio

  let dataAgentes;
  let result;

  dataAgentes = cdr_filtrado
    .map(function(x) {
      result=[];

      result.push({
        id_inv_agentes: x.id_inv_agentes,
        numero_agentes: x.numero_agentes,
        nombre_reportes_agentes: x.nombre_reportes_agentes,
        titulo: 'Agentes: '
      });
      result = result[0];
      return result;
    })
    .filter(function(x){
      return x.nombre_reportes_agentes !==  '' ? true: false;
    });

    resultado = _.uniqBy(dataAgentes, 'id_inv_agentes');


	return resultado;
}



/*************************************************
 * FILTRO PARA EL AUDIT
 */
function FILTRO_audit_filtrado(audit, id_inv_agentes){

  // console.log('AUDIT FILTRADO DEL FILTRO...', audit.length);


  let resultado = audit;

  if(audit && id_inv_agentes) {

    let audit_filtrado = audit
    .filter(function(x) {
      return x.id_inv_agentes ===id_inv_agentes ? true: false;
    });
      resultado = audit_filtrado;
      // console.log('AUDIT FILTRADO DEL FILTRO...', resultado.length);
    }

	return resultado;
}

/*************************************************
 * FILTRO PARA EL REALTIME COLAS
 */
function FILTRO_realtime_colas_filtrado(realtime_colas, colas_involucradas){

  let resultado = realtime_colas;

  // inicio


    // console.log('audit sin filtrar....', audit);

    if(realtime_colas) {


      let colas_filtradas = realtime_colas
        .filter(function(x) {

         let val = false;

         if (colas_involucradas.length > 0) {

                 for( let i = 0; i < colas_involucradas.length; i++) {


                           if (  x.numero_colas === colas_involucradas[i].numero_colas ) {

                                return true;
                               }

                      //console.log(x.numero_agentes, agentes[i].numero_agentes, val);

                 }

         } else {
           return true;
         }


       });


        //console.log('VERDADERAS COLAS FILTRADAS.....', colas_filtradas);

        resultado = colas_filtradas;
     }


  // fin

	return resultado;
}

/*************************************************
 * FILTRO PARA EL REALTIME AGENTES
 */
function FILTRO_realtime_agentes_filtrado(realtime_agentes, agentes_involucrados){

  let resultado = realtime_agentes;

  // inicio


 if(realtime_agentes) {


  let agentes_filtrados = realtime_agentes
    .filter(function(x) {

     let val = false;

     if (agentes_involucrados.length > 0) {

             for( let i = 0; i < agentes_involucrados.length; i++) {

                // console.log('AGENTES ', x.numero_agentes , agentes_involucrados[i].numero_agentes );

                       if (  x.numero_agentes === agentes_involucrados[i].numero_agentes ) {
                        // console.log('EUREKA -----------------------------------------' );
                            return true;
                           }

                  //console.log(x.numero_agentes, agentes[i].numero_agentes, val);

             }

     } else {
       return true;
     }


   });


    // console.log('VERDADEROS AGENTES FILTRADOS.....', agentes_filtrados);

    resultado = agentes_filtrados;
 }

  // fin

	return resultado;
}


/*******************************************
 * NUEVO FILTRO PARA CDR CON COLAS INVOLUCRADAS ABANDONADAS
 *
 */


function FILTRO_cdr_filtrado_colas_involucradas(cdr, colas_involucradas){

  let resultado = cdr;

  if(cdr) {
    // Inicializa las variables para cada filtro
    let colas = colas_involucradas;


    // FILTRO DEL CDR
    let cdr_filtrado = cdr
    // Filtro por colas
    .filter(function(x) {
      let val = false;
      if (colas.length > 0) {
          for( let i = 0; i < colas.length; i++) {
              if (  x.queue_call_entry === colas[i].queue_call_entry ) {
                    return true;
                  }
          }
        } else {
          return true;
        }
      })

	return resultado;
}

}

function FILTRO_realtime_este_agente(realtime_agentes, numero_agentes){

  let resultado = '';

  // inicio


 if(realtime_agentes) {


  let agentes_filtrados = realtime_agentes
    .filter(function(x) {
      return x.numero_agentes === numero_agentes ? true: false;
   });

   if(agentes_filtrados.length > 0){

    resultado = agentes_filtrados[0].estado;

    // resultado = agentes_filtrados;
    }
 }


  // fin

	return resultado;

}

/****************************************************
 *  EXPORTAR LAS FUNCIONES
 *
 */

module.exports = {

  FILTRO_agent_filtrado,

  FILTRO_audit_unicos,
  FILTRO_cdr_filtrado,
  FILTRO_colas_involucradas,
  FILTRO_agentes_involucrados,
  FILTRO_audit_filtrado,
  FILTRO_realtime_colas_filtrado,
  FILTRO_realtime_agentes_filtrado,
  FILTRO_cdr_filtrado_colas_involucradas,

  FILTRO_realtime_este_agente,
};
