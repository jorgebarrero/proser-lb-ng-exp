// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-access-control
// This file is licensed under the Artistic License 2.0.
// License text available at https://opensource.org/licenses/Artistic-2.0
'use strict';

const myPool = require ('../../connectors/pool');
const constructor = require ('../../helpers/constructor');

const poolDat = myPool.poolDat;

module.exports = function(InvAgent) {

  InvAgent.mainQuery = async function(filtro) {
    return sql(filtro);
  }

  InvAgent.remoteMethod('mainQuery', {
        accepts: {arg: 'filtro', type: 'object', http: { source: 'body'} },
        returns: {arg: 'result', type: 'array'}
  });

  async function sql(filtro){
    
    console.log("FILTRO", filtro);
    var querySQL = await constructor.mainQuery(filtro);
    console.log("QUERY", querySQL);
    

        try {
        
        var result = await poolDat.query(querySQL);
        console.log(result);
        return result;
            
        } catch (error) {

          console.log('Server error');
          console.log(querySQL);
          res.status(500).send('Server error');
            
        }
  }

};
