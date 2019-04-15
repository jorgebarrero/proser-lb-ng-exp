const moment = require(`moment`);

function inv_campaign_queue_id(queue, queue_number) {

  let result = null;

  // console.log('data', queue, queue_number);
  if (queue && queue_number){
    let thisQueue = queue
      .filter( x => {
        return x.inv_queue_number === queue_number;
      });

    if(thisQueue && thisQueue[0]){
      result = thisQueue[0].inv_queue_id;
      // console.log('thisQueue', queue_number, result);
    }
  }

  return result;
}


function inv_campaign_queue_name(queue, queue_number) {

  let result = null;

  // console.log('data', queue, queue_number);
  if (queue && queue_number){
    let thisQueue = queue
      .filter( x => {
        return x.inv_queue_number === queue_number;
      });

    if(thisQueue  && thisQueue[0]){
      result = thisQueue[0].inv_queue_name;
      // console.log('thisQueue', queue_number, result);
    }
  }

  return result;
}

function inv_campaign_description(queue, queue_number) {

  let result = null;

  // console.log('data', queue, queue_number);
  if (queue && queue_number){
    let thisQueue = queue
      .filter( x => {
        return x.inv_queue_number === queue_number;
      });

    if(thisQueue  && thisQueue[0]){
      result = thisQueue[0].inv_queue_description;
      // console.log('thisQueue', queue_number, result);
    }
  }

  return result;
}




module.exports = {
  inv_campaign_queue_id,
  inv_campaign_queue_name,
  inv_campaign_description
};
