// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-access-control
// This file is licensed under the Artistic License 2.0.
// License text available at https://opensource.org/licenses/Artistic-2.0
'use strict';

const myPool = require ('../../connectors/pool_cc_reports');

const poolDat = myPool.poolCCreports;

module.exports = function(InvAgent) {

  InvAgent.greet = async function(msg) {
    return sql(msg);
  }

  InvAgent.remoteMethod('greet', {
        accepts: {arg: 'msg', type: 'array', http: { source: 'body'} },
        returns: {arg: 'result', type: 'array'}
  });

  async function sql(msg){
    
    console.log("MSG", msg);
    let filter = msg[0].status;  
    console.log("FILTER", filter); 
    let querySQL_cdr = 

        `
        SELECT * 
        FROM inv_agentes
        WHERE estatus_inv_agentes = ${filter} 
        `;
    

        try {
        
        var result = await poolDat.query(querySQL_cdr);
        // var result_cdr = JSON.stringify(result);
        //console.log('****** CDR ******');
        //console.log(result);
        // console.log(querySQL_cdr);
        return result;
            
        } catch (error) {
            
        }
  }

};
