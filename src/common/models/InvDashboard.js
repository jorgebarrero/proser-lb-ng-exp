'use strict';

const myPool = require ('../../connectors/pool');
// const dashboard = require ('../query/dashboard');


const poolDat = myPool.poolDat;

module.exports = function(InvDashboard) {

    InvDashboard.dashboard = async function(filtro) {
        return mainSQLDahsboard(filtro);
      }
    
      InvDashboard.remoteMethod('dashboard', {
            accepts: {arg: 'filtro', type: 'object', http: { source: 'body'} },
            returns: {type: 'array', root: 'true'}
      });

      async function mainSQLDahsboard(filtro){
          
        let resultDashboard = [];

        //***************************INVOKE QUERY****************************/
        var queryCdr = dashboard.sqlCdr(filtro);
        console.log("CDR DASHBOARD", queryCdr);
        var queryHcaAgent = constructor.totalQuery(filtro, querySQLDetail);
        console.log("TOTAL", querySQLTotal);       
        
            try {
            
            var resultQueryCdr = await poolDat.query(queryCdr);
            var resultHcaAgent = await poolDat.query(queryHcaAgent);
            // console.log(result);
            var cdr = resultQueryCdr;
            var hcaAgent = resultHcaAgent;
                
            } catch (error) {
    
              console.log('Server error');
              return error;
                
            }
        
        

        //******************************RESULT*******************/

        resultDashboard[0] = cdr;
        resultDashboard[1] = hcaAgent;
        resultDashboard[2] = callcenter;
      }

      
};
