/*
* RESUMEN AGENTES
*
*/

// Dependencias
import express from 'express';
import bodyParser from 'body-parser';
// import _ from 'lodash';
import myPool from './../../connections/pool';
import dates from './../../functions/dates';
import fields from './../../functions/fields';
import time from './../../functions/time';
import { SelectionConfig } from '../../models/selection';

const router = express.Router();

const poolDat = myPool.poolDat;


router.use(bodyParser.json());


/* ************************************************************************************* */
// LIST
router.post('/list', async (req, res, next) => {
  
  let selection = new SelectionConfig;
  let filter = new SelectionConfig;
  let filter_like = new SelectionConfig;
  selection = (req.body);
  let ok = true;


  let result_cdr = [];
  let result_audit = [];
  let result_auxiliares = [];
  let result_asignaciones = [];
  let result_series = [];
  let result_calculos = [];
  
  let error_cdr;
  let error_audit;
  let error_auxiliares;
  let error_asignaciones;
  let error_series;
  let error_calc;
  
  let result_final;

  let today = dates.dateToText( new Date());

  // console.log('DATA',
  //   selection.hora_inicio.value,
  //   selection.hora_final.value,
  //   selection.minutos_intervalo.value
  // );
  

  // Preparation

  let tabla_cdr = fields.tableCdrFilter(selection.fecha_inicio); // a_clasif_cdr, a_hist_cdr_clasif
  let tabla_audit = fields.tableAuditFilter(selection.fecha_inicio); /// a_clasif_audit, a_clasif_audit_hist
  let tabla_personas = `a_clasif_personas`;  // a_clasif_personas, a_clasif_personas_hist
  
  filter.minutos_intervalo = ( selection.minutos_intervalo.value ?  selection.minutos_intervalo.value : 30);  // { 'id': 30, 'name': '30 min', 'value': 30 }
  
  filter.llamada_clasificacion = ``;

  filter.fecha = `AND date_text = '${selection.date_text_inicio}'`;

  // filter.desde = fields.fieldOneFilter( 'fecha', '>=', selection.desde );  // full time
  // filter.hasta = fields.fieldOneFilter( 'fecha', '<=', selection.hasta );  // full time

  filter.desde_audit = `AND datetime_init >= '${selection.date_text_inicio} 00:00:00'`;  // full time
  filter.hasta_audit = `AND datetime_init <= '${selection.date_text_final} 23:59:59'`;  // full time

  filter.desde_cdr = `AND calldate >= '${selection.date_text_inicio} 00:00:00'`;  // full time
  filter.hasta_cdr = `AND calldate <= '${selection.date_text_final} 23:59:59'`;  // full time

  filter.hora_inicio = `AND hora >= '${selection.hora_inicio.hour}'`;  // 'formato hh:mm:ss'
  filter.hora_final = `AND hora <= '${selection.hora_final.hour}'`;  // formato hh:mm:ss


  filter.colas = fields.fieldMultipleFilter( selection.colas, 'numero_colas', 'id' );
  filter.clientes = fields.fieldMultipleFilter( selection.clientes, 'id_inv_clientes', 'id' );
  filter.campanas = fields.fieldMultipleFilter( selection.campanas, 'id_inv_campanas', 'id' );
  filter.servicios = fields.fieldMultipleFilter( selection.servicio, 'id_inv_servicio', 'id' );

  filter.supervisores = fields.fieldMultipleFilter( selection.supervisores, 'id_inv_supervisores', 'id' );
  filter.suplentes = fields.fieldMultipleFilter( selection.suplentes, 'id_inv_suplentes', 'id' );
  filter.agentes = fields.fieldMultipleFilter( selection.agentes, 'id_inv_agentes', 'id' );
  filter.horarios = fields.fieldMultipleFilter( selection.horarios, 'id_inv_horarios', 'id' );

  filter.group = 'GROUP BY id_inv_agentes';

  // FILTROS PARA AUDIT
  filter_like.colas = fields.fieldMultipleFilterLike( selection.colas, 'numero_colas', 'id' );
  filter_like.clientes = fields.fieldMultipleFilterLike( selection.clientes, 'id_inv_clientes', 'id' );
  filter_like.campanas = fields.fieldMultipleFilterLike( selection.campanas, 'id_inv_campanas', 'id' );
  filter_like.servicios = fields.fieldMultipleFilterLike( selection.servicio, 'id_inv_servicio', 'id' );

  filter_like.supervisores = fields.fieldMultipleFilterLike( selection.supervisores, 'id_inv_supervisores', 'id' );
  filter_like.suplentes = fields.fieldMultipleFilterLike( selection.suplentes, 'id_inv_suplentes', 'id' );
  filter_like.agentes = fields.fieldMultipleFilterLike( selection.agentes, 'id_inv_agentes', 'id' );
  filter_like.horarios = fields.fieldMultipleFilterLike( selection.horarios, 'id_inv_horarios', 'id' );
  
  filter_like.desde = fields.fieldOneFilter( 'fecha', '>=', selection.desde );  // full time
  filter_like.hasta = ''; //fields.fieldOneFilter( 'fecha', '<=', selection.hasta );  // full time
  

  let querySQL_cdr =
  `
SELECT

  COUNT(id_global) as registros,
  
      MIN(fecha) AS fecha_inicio,
      MAX(fecha) AS fecha_final,

      id_inv_clientes,
      nombre_clientes,

      id_inv_colas,
      nombre_colas,

      id_inv_servicios,
      nombre_servicios,

      id_inv_campanas,
      nombre_campanas,


      id_inv_supervisores,
      nombre_supervisores AS supervisor,

      id_inv_suplentes,
      nombre_suplentes,

      id_inv_agentes as id_inv_agentes,
      nombre_agentes,
      doc_ident_agentes,
      doc_complementario_agentes,

      id_inv_horarios,
      nombre_horarios,
      COUNT(id_global) as registros,
      MIN(fecha) AS fecha_inicio,
      MAX(fecha) AS fecha_final,
    
      SUM(llamadas_recibidas) AS llamadas_recibidas,
      SUM(llamadas_abandonadas) AS llamadas_abandonadas,
      SUM(llamadas_atendidas) AS llamadas_atendidas,
      SUM(llamadas_cortas) AS llamadas_cortas,
      SUM(llamadas_antes_de_20) AS llamadas_antes_de_20,
      SUM( colgado_agente ) as colgado_agente,
    
      '${ selection.hora_inicio.hour }' as hora_inicio,
      '${ selection.hora_final.hour }' as hora_final,
    
    
      SUM( IF( llamadas_recibidas = 1, tiempo_de_operacion, 0 ) )
      AS seg_llamadas_recibidas,
      
      SUM( IF( llamadas_recibidas = 1, tiempo_espera, 0 ) )
      AS seg_espera_recibidas,
    
      MIN( IF( llamadas_recibidas = 1, tiempo_espera, 0 ) )
      AS seg_min_espera_recibidas,
    
      MAX( IF( llamadas_recibidas = 1, tiempo_espera, 0 ) )
      AS seg_max_espera_recibidas,
    
    
      ROUND((SUM( IF( llamadas_recibidas = 1, tiempo_de_operacion, 0 ) )
      /SUM(llamadas_atendidas)), 0) AS tmo_entrante,
    
    
      ROUND(
       (SUM( IF( llamadas_recibidas = 1, tiempo_espera, 0 ) )
      /SUM(llamadas_atendidas)), 0 ) AS asa_entrante,

      SUM(llamadas_realizadas) AS llamadas_realizadas,
      SUM(llamadas_fallidas) AS llamadas_fallidas,
      SUM(llamadas_contestadas) AS llamadas_contestadas,
      SUM(llamadas_efectivas) AS llamadas_efectivas,
      SUM(llamadas_colgadas) AS llamadas_colgadas,
    
      SUM( IF( llamadas_realizadas = 1, tiempo_de_operacion, 0 ) )
      AS seg_tiempo_de_operacion_realizadas,
    
      ROUND((SUM( IF( llamadas_realizadas = 1, tiempo_de_operacion, 0 ) )
      /SUM(llamadas_realizadas)), 0) AS tmo_saliente,
      

      id_global

      FROM
        ${tabla_cdr}

      WHERE 1

      ${ filter.llamada_clasificacion}

      ${ filter.desde_cdr }
      ${ filter.hasta_cdr }

  
    
    
      ${ filter.colas }
      ${ filter.clientes }
      ${ filter.campanas }
      ${ filter.servicios }
    
      ${ filter.supervisores }
      ${ filter.suplentes }
      ${ filter.agentes }
      ${ filter.horarios }
    
      ${ filter.group }
  `;


// Data base access
try {
    var result = await poolDat.query(querySQL_cdr);
    result_cdr = result;
    console.log('****** CDR ******');
    console.log(result_cdr.length);
    console.log(querySQL_cdr);

    ok = true;
  }
catch(err) {


  ok = false;
  error_cdr = {
    status: 500,
    origin: `cdr`,
    query: querySQL_cdr,
    error: err
  };

}



/*****************************
* AUDIT
/*************************** */

// SUM(tiempo_connections) AS seg_conectado,
// SEC_TO_TIME ( SUM(tiempo_connections)) AS t_conectado,

// SUM(tiempo_auxiliares) AS seg_auxiliares,
// SEC_TO_TIME ( SUM(tiempo_auxiliares) ) AS t_auxiliares,

// SUM(tiempo_asignaciones) AS seg_asignaciones,
// SEC_TO_TIME ( SUM(tiempo_asignaciones) ) AS t_asignaciones,

let querySQL_audit =
`
SELECT

  id_inv_supervisores,
  nombre_supervisores AS supervisor,

  id_inv_suplentes,
  nombre_suplentes,

  id_inv_agentes as id_inv_agentes,
  nombre_agentes,
  doc_ident_agentes,
  doc_complementario_agentes,

  id_inv_horarios,
  nombre_horarios,


  MIN(datetime_init) AS fecha_inicio,
  MAX(datetime_end) AS fecha_final,

  date_text,
  fecha as date,

  SUM(tiempo_conexiones) AS seg_conectado,
  SEC_TO_TIME ( SUM(tiempo_conexiones)) AS t_conectado,

  SUM(tiempo_auxiliares) AS seg_auxiliares,
  SEC_TO_TIME ( SUM(tiempo_auxiliares) ) AS t_auxiliares,

  SUM(tiempo_asignaciones) AS seg_asignaciones,
  SEC_TO_TIME ( SUM(tiempo_asignaciones) ) AS t_asignaciones,



  id_global

FROM
  ${tabla_audit}

WHERE 1


${ filter.desde_audit }
${ filter.hasta_audit }



${ filter.colas }
${ filter.clientes }
${ filter.campanas }
${ filter.servicios }

${ filter.supervisores }
${ filter.suplentes }
${ filter.agentes }
${ filter.horarios }

${ filter.group }

`;


// Data base access
try {
  var result = await poolDat.query(querySQL_audit);
  result_audit = result
  
    console.log('***** AUDIT ******');
    console.log(result_audit.length);
    console.log(querySQL_audit);

}
catch(err) {
console.log('Server error querySQL_audit');
console.log(querySQL_audit);

ok = false;
error_audit = {
  status: 500,
  origin: `cdr`,
  query: querySQL_audit,
  error: err
};
// res.status(500).send('Server error');
// res.status(500).send(JSON.stringify(err));
// throw new Error(err)
}




/************************************* */

let intervalo_serie = dates.createDateIntervals (
  selection.desde,
  selection.hasta,
);

console.log('intervalo_serie', intervalo_serie);


try {

  console.log('');
  
  if (ok) {
    
    
    let result_join_cdr = result_audit
    .map( x => {
      return  {
        audit: x,
        cdr: match( x.id_inv_agentes, result_cdr),
      }
    })
    
    let result_join = result_join_cdr
    .map( x => {
      return  {
        cdr: x.cdr,
        audit: x.audit,
        calc: calculate( x.cdr),
      }
    })
    
    result_final = result_join
  }
  
}
catch(err) {
  ok = false;
  error_calc = {
    status: 500,
    origin: `cdr`,
    query: 'Calculos funciones JS',
    error: err
  };
  

    console.log('Process errors', error_final );
    // console.log(querySQL_cdr);
    // res.status(500).send(error_final);
}

/********************************* */

// error_calculos = err;

  
let error_final = {
  error_cdr,
  error_audit,
  error_auxiliares,
  error_asignaciones,
  error_series,
  error_calc,
}
  /************************************************************* */
  if (result_final && ok) {
    res.status(201).send(JSON.stringify(result_final));
    // console.log(querySQL_cdr);

  } else {
    if (error_final && !ok) {
      res.status(500).send(error_final);
    }
  }



});



/***********************************************
 * FUNCTIONS
*/

function match( item, data){
  let newResult = {};

  if (item && data ) {
    let temp = data
    .filter( x => {
      return x.id_inv_agentes === item;
    })

    newResult = temp[0];
  }
  return newResult;
}

function matchSerie( cdr, serie ){
let newResult = {};

if ( cdr && serie ) {
let temp = serie
.selection( x => {
  return x.date === fecha;
})

newResult = temp[0];
}
return newResult;
}


function match_all( date_text, audit){
let newResult = {};

if (date_text && audit ) {
let temp = audit
.selection( x => {
  return x.date_text === date_text;
})

newResult = temp;
}
return newResult;
}

/****************************************************************************** */

function calculate (cdr) {

let result = {

  row: null,

fecha_inicio: null,
fecha_final: null,

hora_inicio: null,
hora_final: null,

day_week_number: null,

llamadas_recibidas: null,
llamadas_abandonadas: null,
llamadas_atendidas: null,
llamadas_cortas: null,
llamadas_antes_de_20: null,

nivel_de_servicio: null,
nivel_de_atencion: null,
nivel_de_abandono: null,

seg_operacion_recibidas: null,
t_operacion_recibidas: null,

seg_espera_recibidas: null,
t_espera_recibidas: null,

seg_min_espera_recibidas: null,
t_min_espera_recibidas: null,

seg_max_espera_recibidas: null,
t_max_espera_recibidas: null,

tmo_entrante: null,
asa_entrante: null,


}

if( cdr ) {

// console.log('cdr', cdr);
let row = cdr.row;

let fecha_inicio = dates.dateToText(cdr.fecha_inicio);
let fecha_final = dates.dateToText(cdr.fecha_final);

let hora_inicio = cdr.hora_inicio;
let hora_final = cdr.hora_final;

let day_week_number = (new Date(cdr.fecha_inicio).getDay()) + 1;

let llamadas_recibidas = cdr.llamadas_recibidas;
let llamadas_abandonadas = cdr.llamadas_abandonadas;
let llamadas_atendidas = cdr.llamadas_atendidas;
let llamadas_cortas = cdr.llamadas_cortas;
let llamadas_antes_de_20 = cdr.llamadas_antes_de_20;

let nivel_de_servicio = llamadas_antes_de_20/llamadas_recibidas;
let nivel_de_atencion = llamadas_atendidas/llamadas_recibidas;
let nivel_de_abandono = llamadas_abandonadas/llamadas_recibidas;


let seg_operacion_recibidas = cdr.seg_llamadas_recibidas;
let t_operacion_recibidas = time.secToTime(seg_operacion_recibidas);

let seg_espera_recibidas = cdr.seg_espera_recibidas;
let t_espera_recibidas = time.secToTime(seg_espera_recibidas);

let seg_min_espera_recibidas = cdr.seg_min_espera_recibidas;
let t_min_espera_recibidas = time.secToTime(seg_min_espera_recibidas);

let seg_max_espera_recibidas = cdr.seg_max_espera_recibidas;
let t_max_espera_recibidas = time.secToTime(seg_max_espera_recibidas);

let tmo_entrante = cdr.tmo_entrante;
let asa_entrante = cdr.asa_entrante;


result = {

row,

fecha_inicio,
fecha_final,

hora_inicio,
hora_final,

day_week_number,

llamadas_recibidas,
llamadas_abandonadas,
llamadas_atendidas,
llamadas_cortas,
llamadas_antes_de_20,

nivel_de_servicio,
nivel_de_atencion,
nivel_de_abandono,

seg_operacion_recibidas,
t_operacion_recibidas,

seg_espera_recibidas,
t_espera_recibidas,

seg_min_espera_recibidas,
t_min_espera_recibidas,

seg_max_espera_recibidas,
t_max_espera_recibidas,

tmo_entrante,
asa_entrante,

 }
}

return result
}


// module.exports = router;
export default router;
