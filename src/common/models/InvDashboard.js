'use strict';

const myPool = require ('../../connectors/pool');
const dashboard = require ('../query/dashboard');


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
          
        let resultDashboard = {};

        //***************************INVOKE QUERY****************************/
        var queryCallToday = dashboard.sqlCdr(filtro);
        console.log("CALL OF THE DAY", queryCallToday);
        var queryAgentToday = dashboard.sqlHcaAgent(filtro);
        console.log("AGENTS TODAY", queryAgentToday);       
        
            try {
            
            var resultCallToday = await poolDat.query(queryCallToday);
            var resultAgentToday = await poolDat.query(queryAgentToday);
            console.log(queryCallToday);
            var CallToday = resultCallToday;
            var AgentToday = resultAgentToday;
                
            } catch (error) {
    
              console.log('Server error');
              return error;
                
            }
        
        

        //******************************RESULT*******************/

        resultDashboard = {
          CallToday,
          AgentToday
        };
        // resultDashboard[1] = hcaAgent;
        // resultDashboard[2] = callcenter;

        return resultDashboard;
      }

      
};
