const moment = require(`moment`);


function hca_agent_text_key (date, extension) {
  let result = null;

  if(date && extension){
    result = date + `-agt-` + extension;
  }
  return result;
}


function hca_agent_min_start(start){
  let result = null;

  if(start) {

    let temp_hours = start.substring(0,2);
    let temp_minutes = start.substring(3,7);

    let hours = parseInt(temp_hours) * 60;
    let minutes = parseInt(temp_minutes) * 1;

    result = hours + minutes;
  }

  return result;
}


function hca_agent_min_end(end) {
  let result = null;

  if(end) {

    let temp_hours = end.substring(0,2);
    let temp_minutes = end.substring(3,7);

    let hours = parseInt(temp_hours) * 60;
    let minutes = parseInt(temp_minutes) * 1;

    result = hours + minutes;
  }

  return result;
}

module.exports = {
  hca_agent_min_start,
  hca_agent_min_end,
  hca_agent_text_key,
};
