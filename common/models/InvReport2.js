'use strict';

const myPool = require ('../../connectors/pool');
const constructor = require ('../../helpers/constructor');

const poolDat = myPool.poolDat;

module.exports = function(InvReport) {

  //*************MAIN QUERY***********************************************/

    InvReport.mainQuery = async function(filtro) {
        return sql(filtro);
      }
    
      InvReport.remoteMethod('mainQuery', {
            accepts: {arg: 'filtro', type: 'object', http: { source: 'body'} },
            returns: {arg: 'result', type: 'array'}
      });
    
      async function sql(filtro){

        let id = filtro.id;

        let findSQL = 
        `
        SELECT inv_report_field, inv_report_table
        FROM InvReport
        WHERE inv_report_id = ${id}
        `;
        console.log(findSQL);

        try {
          var result = await poolDat.query(findSQL);
          console.log("FIND", result);
          return result;
        } catch (error) {
          
        }












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

      //***************ENTRANTE POR INTERVALO******************************/


      // InvReport.selectionReport = async function(arg) {
      //   return selectSQL(arg);
      // }
    
      // InvReport.remoteMethod('selectionReport', {
      //       accepts: {arg: 'arg', type: 'object', http: {source: 'body'}},
      //       returns: {type: 'object', root: 'true'}
      // });

      async function selectSQL(arg){

        
      }


      
};
