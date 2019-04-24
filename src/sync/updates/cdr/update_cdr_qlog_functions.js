const moment = require(`moment`);


function cdr_qlog_field_time (queuelog, uniqueid, field){

  // console.log('queuelog FUNCTION', queuelog[0], uniqueid, field);
  

  let result = null;

  if(queuelog && uniqueid) {
    let temp = queuelog
      .filter( x => {
        return x.callid == uniqueid && x.event == field;
      });

    if (!temp.length) {
      result = null;
    } else {
      // console.log('temp', temp);
      // console.log('temp', temp[0].time);
      // result = JSON.stringify(temp[0].time);
      result = (temp[0].time);
    }
  }
  return result;
}

function cdr_qlog_complete_time (completecaller, completeagent, abandon){
  let result = null;
  let timeArray = [completecaller, completeagent, abandon].sort();
  if( completecaller || completeagent || abandon ) {
    // console.log('TIMIING', completecaller, completeagent, abandon);
    // console.log('sorted', timeArray);
    result = timeArray[0];
  }
  return result;
}
// __DURATION_TIME___
function cdr_qlog_secs_diff (major, minor){
  let result = null;
  if( major && minor ) {
    let major_time = moment(major, `YYYY-MM-DD HH:mm:ss`);
    let minor_time = moment(minor, `YYYY-MM-DD HH:mm:ss`);
    let diff = major_time.diff(minor_time, `seconds`);
    // console.log('diff', diff);
    result = diff;
  }
  return result;
}

//  __QLOG_RESULT__
function cdr_qlog_result_hung_by (completecaller,  completeagent){
  let result = null;

  if ( completecaller && !completeagent) {
    result = `Llamante`;
  }

  if ( !completecaller && completeagent) {
    result = `Agente`;
  }
  return result;
}
function cdr_qlog_result_hung_agent (completeagent){
  let result = null;
  if (completeagent) {
    result = 1;
  }
  return result;
}

function cdr_qlog_secs_at_hold() {
  return null;
}

module.exports = {

  // qlog
  cdr_qlog_field_time,
  // Complete
  cdr_qlog_complete_time,
  // __DURATION_TIME___
  cdr_qlog_secs_diff,
  // __QLOG_RESULT__
  cdr_qlog_result_hung_by,
  cdr_qlog_result_hung_agent,

  cdr_qlog_secs_at_hold,
};
