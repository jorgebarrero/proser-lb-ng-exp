/*
*
* FUNCIONES PARA CALCULO DE INDICADORES
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

      for(let i = 0; i < agent.length ; i++){

          for( let j = 0; j < agentes_involucrados.length ; j ++) {


             if( x.id_inv_agentes === agentes_involucrados[j].id_inv_agentes ) {
              console.log( x.id_inv_agentes, agentes_involucrados[j].id_inv_agentes);
               return true;
             }


        }

      }


    });
      resultado = agent_filtrado;
    }

   // console.log( 'agent', agent.length, 'agentes_involucrados', agentes_involucrados.length, 'resultado', resultado.length);

  return resultado;
  }




function FILTRO_cdr_filtrado(cdr, valor_peticiones){

  let resultado = cdr;

  if(cdr) {
    // Inicializa las variables para cada filtro

    let currentdate = new Date();
    let minutosAhora = (currentdate.getHours() * 60 + currentdate.getMinutes() )
    let minutosRestar = 0;
    let horaDeldiaDesde;
    let horaDeldiaHasta;

    let clientes = valor_peticiones.selectedClientesId;
    let colas = valor_peticiones.selectedColasId;
    let servicios = valor_peticiones.selectedServiciosId;
    let campanas = valor_peticiones.selectedCampanasId;
    let supervisores = valor_peticiones.selectedSupervisoresId;
    let agentes = valor_peticiones.selectedAgentesId;
    let llamada = valor_peticiones.clasificacionLlamada;

    let ultimosMinutos = valor_peticiones.minutosUltimoIntervalo;
    let minutoItenervalo = valor_peticiones.minutosIntervaloRegular;
    let horaDesde = valor_peticiones.horaDesde;
    let horaHasta = valor_peticiones.horaHasta;
    let fechaDesde = valor_peticiones.fechaDesde;
    let fechaHasta = valor_peticiones.fechaHasta;


   // console.log(clientes, ultimosMinutos );

    if(ultimosMinutos.length > 0){
    minutosRestar = (minutosAhora - ultimosMinutos[0].minutos);
    } else {
      minutosRestar = 0;
    }

    if(horaDesde.length > 0){
      horaDeldiaDesde = horaDesde[0].hora;
    }

    if(horaHasta.length > 0){
      horaDeldiaHasta = horaHasta[0].hora;
    }



    // FILTRO DEL CDR
    let cdr_filtrado = cdr
    // Filtro por llamada
    .filter(function(x) {
      let val = false;
      if (llamada.length > 0) {
            for( let i = 0; i < llamada.length; i++) {
                if (  x.clasificacion_llamada === llamada[i].clasificacion_llamada ) {
                      return true;
                    }
            }
      } else {
        return true;
      }
    })
    // Filtro por clientes
    .filter(function(x) {
      let val = false;
      if (clientes.length > 0) {
            for( let i = 0; i < clientes.length; i++) {
                if (  x.nombre_clientes === clientes[i].nombre_clientes ) {
                      return true;
                    }
            }
      } else {
        return true;
      }
    })
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
    // Filtro por servicios
    .filter(function(x) {
      let val = false;
      if (servicios.length > 0) {
          for( let i = 0; i < servicios.length; i++) {
              if (  x.id_inv_servicios === servicios[i].id_inv_servicios ) {
                    return true;
                  }
              }
        } else {
          return true;
        }
    })
    // Filtro por campañas
    .filter(function(x) {
      let val = false;
      if (campanas.length > 0) {
          for( let i = 0; i < campanas.length; i++) {
              if (  x.id_inv_campanas === campanas[i].id_inv_campanas ) {
                    return true;
                  }
              }
      } else {
        return true;
      }
    })
    // Filtro por supervisores
    .filter(function(x) {
      let val = false;
      if (supervisores.length > 0) {
          for( let i = 0; i < supervisores.length; i++) {
              if (  x.id_inv_supervisores === supervisores[i].id_inv_supervisores ) {
                    return true;
                  }
          }

      } else {
        return true;
      }
    })
    // Filtro por agentes
    .filter(function(x) {
      let val = false;
      if (agentes.length > 0) {
          for( let i = 0; i < agentes.length; i++) {
              if (  x.numero_agentes === agentes[i].numero_agentes ) {
                    return true;
                  }
          }
      } else {
        return true;
      }
    })
      // Filtro por ultimo intervalo
      .filter(function(x) {
        let val = false;
        if (ultimosMinutos.length > 0) {
            for( let i = 0; i < ultimosMinutos.length; i++) {
                if (  x.minuto_del_dia >= minutosRestar ) {

                 //  console.log(x.minuto_del_dia, minutosRestar );
                      return true;
                    }
            }
        } else {
          return true;
        }
      })

          // Filtro por hora desde
      .filter(function(x) {
        let val = false;
        if (horaDesde.length > 0) {

            for( let i = 0; i < horaDesde.length; i++) {
                if (  x.hora_del_dia >= horaDeldiaDesde ) {
                 //  console.log(x.minuto_del_dia, minutosRestar );
                      return true;
                    }
            }
        } else {
          return true;
        }
      })
       // Filtro por hora hasta
      .filter(function(x) {
        let val = false;
        if (horaHasta.length > 0) {

         // console.log(horaHasta, horaDeldiaHasta);

            for( let i = 0; i < horaHasta.length; i++) {
                if (  x.hora_del_dia <= horaDeldiaHasta) {
                 //  console.log(x.minuto_del_dia, minutosRestar );
                      return true;
                    }
            }
        } else {
          return true;
        }
      })
    ;


   // console.log('filtrado ', cdr_filtrado.length)


      resultado = cdr_filtrado;
       return cdr_filtrado;
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
function FILTRO_audit_filtrado(audit, agentes_que_aplican){

  let resultado = '';

  // inicio


if(audit) {


  let audit_filtrado = audit
    .filter(function(x) {

     let val = false;

     if (agentes_que_aplican.length > 0) {

             for( let i = 0; i < agentes_que_aplican.length; i++) {


                       if (  x.numero_agentes === agentes_que_aplican[i].numero_agentes ) {

                            return true;
                           }


             }

     } else {
       return true;
     }


   });

    resultado = audit_filtrado;
 }

  // fin

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



/****************************************************
 *  EXPORTAR LAS FUNCIONES
 *
 */

module.exports = {

  FILTRO_agent_filtrado,
  FILTRO_cdr_filtrado,
  FILTRO_colas_involucradas,
  FILTRO_agentes_involucrados,
  FILTRO_audit_filtrado,
  FILTRO_realtime_colas_filtrado,
  FILTRO_realtime_agentes_filtrado,
  FILTRO_cdr_filtrado_colas_involucradas,

};



