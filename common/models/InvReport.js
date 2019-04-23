'use strict';

const myPool = require ('../../connectors/pool');
const constructor = require ('../../helpers/constructor');
const selectReport = require ('../../helpers/selection-report');


const poolDat = myPool.poolDat;

module.exports = function(InvReport) {

  //*************MAIN QUERY***********************************************/

    InvReport.mainQuery = async function(filtro) {
        return sql(filtro);
      }
    
      InvReport.remoteMethod('mainQuery', {
            accepts: {arg: 'filtro', type: 'object', http: { source: 'body'} },
            returns: {type: 'array', root: 'true'}
      });
    
      async function sql(filtro){

        //**********************REPORT SELECTION***************************/

        var querySelection = await selectReport.selectionReport(filtro);
        // console.log("QUERY SELECTION", querySelection);
        
        //**********************INSERTION DATA FIELD & TABLE INTO FILTRO***************************/
        filtro.field = [querySelection[0].inv_report_field];
        filtro.table = [querySelection[0].inv_report_table];
        // console.log("//***********FILTRO MODIFICADO********//")
        // console.log("FILTRO", filtro);

        //**********************REPORT QUERY***************************/

        var querySQL = await constructor.mainQuery(filtro);
        // console.log("//*************QUERY FINAL******//");
        // console.log("QUERY", querySQL);
        
    
            try {
            
            var result = await poolDat.query(querySQL);
            // console.log(result);
            return result;
                
            } catch (error) {
    
              console.log('Server error');
              console.log(querySQL);
              return error;
                
            }
      };

};