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

        // console.log("//*************QUERY FINAL******//");
        // console.log("QUERY", querySQL);
        var querySQLDetail = constructor.detailQuery(filtro);
        console.log("DETAIL", querySQLDetail);
        var querySQLTotal = constructor.totalQuery(filtro, querySQLDetail);
        console.log("TOTAL", querySQLTotal);       
        
            try {
            
            var resultQueryDetail = await poolDat.query(querySQLDetail);
            var resultQueryTotal = await poolDat.query(querySQLTotal);
            // console.log(result);
            var detail = resultQueryDetail;
            var total = resultQueryTotal;
                
            } catch (error) {
    
              console.log('Server error');
              return error;
                
            }

              let fullQuery = {
                total,
                detail
              };

              return fullQuery;

              
      };

};