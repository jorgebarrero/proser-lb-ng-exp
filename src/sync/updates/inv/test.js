import * as pool from '../../../connectors/pool';


function readMaxId() {
    let querySQL = `SELECT max(id) as maxId FROM agent`;
    pool.poolCall.query(querySQL);
}



function resolveAfter2Seconds() {
  return new Promise(
    resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
    reject => {
      reject('rejected');
    }
  });
}

async function asyncCall() {
  console.log('calling');
  var result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: 'resolved'
}


var call = function() {
  return new Promise(function(resolve, reject) {
      resolve();
      console.log("Proser starting update process...");
  });
};

call().then(function() {
  console.log("resolved");
});


module.exports = {
  asyncCall
}
