
const _ = require('lodash');





function crearColasRealtime(realtime) {

  let   texto_BRUTO = realtime;
   //console.log('COLAS', texto_BRUTO);

   // Split por ' ' que crea un arreglo de palabras
  let  array_COLAS = [];
   for (let i = 0; i < texto_BRUTO.length; i++) {
     array_COLAS[i] = texto_BRUTO[i].split(' ');
   }

   // Se identifica cada cola porque el largo del primer arrelo es mayor que 0
   let array_RES_COLAS = [];
   for (let i = 0; i < array_COLAS.length; i++) {
     if (array_COLAS[i][0].length > 0) {
       array_RES_COLAS.push({numero_colas: array_COLAS[i][0], llamadas_en_cola: array_COLAS[i][2] });
     }
   }


   let result = _.uniqBy(array_RES_COLAS, 'numero_colas');

   return result;

   }

   function crearAgentesRealtime(realtime) {

      // traer el php
   let texto_BRUTO = realtime;

   let array_AGENTES = [];
   let array_COLAS = [];
   let estado = '';


   // Split por ' ' que crea un arreglo de palabras
   for (let i = 0; i < texto_BRUTO.length; i++) {
     array_COLAS[i] = texto_BRUTO[i].split(' ');
   }


   // Identificar cada linea recorrida con agente, cola y estado
     // Inicilaizar los arreglos de colas que sirven para identificar la cola
     let cola_actual = array_COLAS[0][0];
     let cola_anterior = array_COLAS[0][0];

     // recorrer el arreglo
     for (let i = 0; i < texto_BRUTO.length; i++) {

       // validar la cola a la que pertenece la linea actual en cada cambio de cola
       // usamos la primera palabra de la fila que identifica la cola
       // las que no son cola empiezan por espacio
       (array_COLAS[i][0].length > 0 ? cola_actual = array_COLAS[i][0] : cola_actual = '');
         if (array_COLAS[i][0].length > 0 ) {
           cola_actual = array_COLAS[i][0];
           cola_anterior = array_COLAS[i][0];

         } else {
           cola_actual = cola_anterior ;
         }

         // Determinar el estado del agente
         if ( texto_BRUTO[i].indexOf('Agent') > 0 ) {

           // Posibles estados del agente
           ( texto_BRUTO[i].indexOf('Unavailable') > 0 ? estado = 'Unavailable' : '' );
           ( texto_BRUTO[i].indexOf('(in call)') > 0 ? estado = 'in call' : '' );
           ( texto_BRUTO[i].indexOf('(Not in use)')  > 0 ? estado = 'Not in use' : '' );


           let numero_bruto =
           texto_BRUTO[i].slice(texto_BRUTO[i].indexOf('/')+1,
           texto_BRUTO[i].indexOf('/')+5).replace(/ /g,'');
           // agregar el estado identificado del agente
           array_AGENTES.push({
             numero_agentes: numero_bruto,
             estado: estado, numero_colas: cola_actual
           });
         }

     }

     let result = _.uniqBy(array_AGENTES, 'numero_agentes');


     return result;

   }

   module.exports ={
    crearColasRealtime,
    crearAgentesRealtime,
   }