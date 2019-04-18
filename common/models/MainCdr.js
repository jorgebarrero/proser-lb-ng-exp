// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-access-control
// This file is licensed under the Artistic License 2.0.
// License text available at https://opensource.org/licenses/Artistic-2.0

const myPool = require ('../../connectors/pool');

const poolDat = myPool.poolDat;



module.exports = function(MainCdr) {

    MainCdr.available = async function(filtro) {
        return selectionAvailable(filtro);
      }
    
      MainCdr.remoteMethod('available', {
            accepts: {arg: 'filtro', type: 'object', http: { source: 'body'} },
            returns: {arg: 'result', type: 'array'}
      });

      async function selectionAvailable(filtro){

        let id = validateId(filtro) ? filtro.id : "";         //Invocar la funcion para validar los parametros de entrada    
        if(id){
    
        let availableSQL =                              //Modificar el query
        `
        SELECT inv_report_field, inv_report_table       
        FROM InvReport
        WHERE inv_report_id = ${id}
        `;
        console.log("SQL", findSQL);
    
        try {
          var result = await poolDat.query(availableSQL);
          console.log("REPORTE", result);
          return result;
        } 
        catch (error) {
            console.log('Server error');
            console.log(querySQL);
            res.status(500).send('Server error');
        }
    
        } else {
        
        result = null;
        return result;
    
        }
      };
    
    
      function validateId(filtro){                             //Modificar la validacion    
        let result = false
    
    if (filtro.id){
    
        if (filtro.id > 0){
            return true
        } else {
            result = false
        };
     }
        return result;
    };

};
