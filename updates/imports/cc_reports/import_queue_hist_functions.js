const moment = require(`moment`);


function hca_queue_text_key (date, queue_number) {
  let result = null;

  if(date && queue_number){
    result = date + `-que-` + queue_number;
  }
  return result;
}

module.exports = {
  hca_queue_text_key,
};
