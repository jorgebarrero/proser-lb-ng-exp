
  
// _CLASIFICACION_LLAMADA__,

function cdr_call_class( src, dst, lastapp, queue) {

  let result = null;

  let largo_src = null;
  let largo_dst = null;
  let autoQueue = null;


  if(queue) {
    if ( queue.charAt(0) === process.env.CDR_MARKER_CHAR_ID) {
      autoQueue = 1;
    }
  }
  
  if( src && dst) {
    largo_src = src.length;
    largo_dst = dst.length;
  }


  if ((largo_src <= 7 && largo_dst <= 7) || (src == dst && largo_src <= 7)) {
    result = 'Interna';
  } else {

    if (largo_src < largo_dst && src) {
      result = 'Saliente';
    }

    if (lastapp == 'Queue') {

      result = 'Entrante';

      if(autoQueue) {
        result = 'Automatica';
      }
    }
  }
  return result;
}

/********************************************** */

function cdr_call_internal(call_class){
  let result = null;
  if(call_class === 'Interna') {
    result = 1;
  }
  return result;
}

function cdr_call_in(call_class){
  let result = null;
  if(call_class === 'Entrante') {
    result = 1;
  }
  return result;

}
function cdr_call_out(call_class){
  let result = null;
  if(call_class === 'Saliente') {
    result = 1;
  }
  return result;

}
function cdr_call_in_auto(call_class){
  let result = null;
  if(call_class === 'Automatica') {
    result = 1;
  }
  return result;

}

/*****************ENTRANTE*************************** */

function cdr_call_received(call_class){
  let result = null;
  if(call_class === 'Entrante') {
    result = 1;
  }
  return result;
}
function cdr_call_atended(call_class, disposition, abandon_time){
  let result = null;
  if(call_class === 'Entrante' && disposition === 'ANSWERED' && (abandon_time === null || abandon_time === undefined || abandon_time === '')) {
    result = 1;
  }
  return result;
}
function cdr_call_abandoned(call_class, abandon_time){
  let result = null;
  if(call_class === 'Entrante' && abandon_time > 0) {
    result = 1;
  }
  return result;
}
function cdr_call_short(atended, time_with_agent){
  let result = null;
  if(atended === 1  && time_with_agent <= process.env.CDR_SHORTCALL_TIME) {
    result = 1;
  }
  return result;
}
function cdr_call_before_time(atended, wait_on_queue_time){
  let result = null;
  if(atended === 1  && wait_on_queue_time <= process.env.CDR_SERVICE_IDEAL_TIME) {
    result = 1;
  }
  return result;
}

/********** SALIENTE ************************************************* */

function cdr_call_made(call_class){
  let result = null;
  if(call_class === 'Saliente') {
    result = 1;
  }
  return result;
}
function cdr_call_fail(call_made, disposition, lastapp){
  let result = null;
  if(disposition != 'ANSWERED' && lastapp != 'Playback' && call_made === 1) {
    result = 1;
  }
  return result;
}
function cdr_call_answered(call_made, disposition){
  let result = null;
  if(disposition === 'ANSWERED' && call_made === 1)  {
    result = 1;
  }
  return result;
}
function cdr_call_efective(call_made, outbound_result){
  let result = null;
  if(call_made == 1 && outbound_result == 'Efectiva') {
    result = 1;
  }
  return result;
}
function cdr_call_hungout(call_made, lastapp){
  let result = null;
  if(lastapp == 'Playback' && call_made == 1) {
    result = 1;
  }
  return result;
}

// x.__AUTOMATIC__
function cdr_call_auto_bbdd(){
  return null;
}
function cdr_call_auto_run(){
  return null;
}
function cdr_call_auto_left(){
  return null;
}
function cdr_call_auto_turn(){
  return null;
}
// x.__RESULTS__
function cdr_call_result_inbound(disposition){
  let result = null;

  if (disposition === 'NO ANSWER') {
    return 'SIN RESPUESTA';
  }

  if (disposition === 'CONGESTION') {
    return 'CONGESTION';
  }

  if (disposition === 'FAILED') {
    return 'FALLA';
  }

  if (disposition === 'BUSY') {
    return 'OCUPADA';
  }

  if (disposition === 'ANSWERED') {
    return 'CONTESTADA';
  }
  return null;
}
function cdr_call_result_outbound(){
  return null;
}
function cdr_call_result_auto(){
  return null;
}

module.exports = {

  cdr_call_class,
  // class
  cdr_call_internal,
  cdr_call_in,
  cdr_call_out,
  cdr_call_in_auto,
  // In

  //INBOUND
  cdr_call_received,
  cdr_call_abandoned,
  cdr_call_atended,
  cdr_call_short,
  cdr_call_before_time,

  // OUTBOUND
  cdr_call_made,
  cdr_call_fail,
  cdr_call_answered,
  cdr_call_efective,
  cdr_call_hungout,

  // x.__AUTOMATIC__
  cdr_call_auto_bbdd,
  cdr_call_auto_run,
  cdr_call_auto_left,
  cdr_call_auto_turn,
  //  x.__RESULTS__
  cdr_call_result_inbound,
  cdr_call_result_outbound,
  cdr_call_result_auto,

};
