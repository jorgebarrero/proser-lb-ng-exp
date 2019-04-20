'use strict';

const myPool = require ('../../connectors/pool');

const poolDat = myPool.poolDat;


module.exports = function(InvMenu) {

    InvMenu.selectionMenu = async function(filtro) {
        return multipleSqlMenu(filtro);
      }
    
      InvMenu.remoteMethod('selectionMenu', {
            accepts: {arg: 'filtro', type: 'object', http: { source: 'body'} },
            returns: {type: 'array', root: 'true'}
      });

      async function multipleSqlMenu(filtro){

        // let start_date = validateStartDate(filtro) ? filtro.start_date : "";         //Invoke validations    
        // let end_date = validateEndDate(filtro) ? filtro.end_date : "";
        // let start_date = filtro.start_date;                                          //Get param from object filter
        // let end_date = filtro.end_date;

        let menu = {};
        
        
        // if(start_date && end_date){

        //*****************************CLIENT*********************************************/
    
        let queryMenuClient =                              
        `
        SELECT 
        hca_queue_client_id, 
        hca_queue_client_name 
        FROM 
        HcaQueue 
        WHERE 
        1 
        group by 
        hca_queue_client_name

        `;
        // console.log("SQL", availableSQL);
    
        try {
          var result = await poolDat.query(queryMenuClient);
          console.log("CLIENT", result);
          var client = result;
        } 
        catch (error) {
            console.log('Server error');
            console.log(queryMenuClient);
            res.status(500).send('Server error');
        }

        //*****************************QUEUE*********************************************/
    
        let queryMenuQueue = 
        `
        SELECT 
        hca_queue_queue_id as id, 
        hca_queue_queue_name as queue
        FROM 
        HcaQueue 
        WHERE 
        1 
        group by 
        hca_queue_queue_name
        `;

        try {
          var result = await poolDat.query(queryMenuQueue);
          console.log("QUEUE", result);
          var queue = result;
        } 
        catch (error) {
            console.log('Server error');
            console.log(queryMenuQueue);
            res.status(500).send('Server error');
        }

        //*****************************SERVICE*********************************************/
    
        let queryMenuService =                              
        `
        SELECT 
        hca_queue_client_id, 
        hca_queue_client_name 
        FROM 
        HcaQueue 
        WHERE 
        1 
        group by 
        hca_queue_client_name

        `;
        // console.log("SQL", availableSQL);
    
        try {
          var result = await poolDat.query(queryMenuService);
          console.log("SERVICE", result);
          var service = result;
        } 
        catch (error) {
            console.log('Server error');
            console.log(queryMenuService);
            res.status(500).send('Server error');
        }

        //*****************************CAMPAIGN*********************************************/
    
        let queryMenuCampaign =                              
        `
        SELECT 
        hca_queue_client_id, 
        hca_queue_client_name 
        FROM 
        HcaQueue 
        WHERE 
        1 
        group by 
        hca_queue_client_name

        `;
        // console.log("SQL", availableSQL);
    
        try {
          var result = await poolDat.query(queryMenuCampaign);
          console.log("CAMPAIGN", result);
          var campaign = result;
        } 
        catch (error) {
            console.log('Server error');
            console.log(queryMenuCampaign);
            res.status(500).send('Server error');
        }

        //*****************************SUPERVISOR*********************************************/
    
        let queryMenuSupervisor =                              
        `
        SELECT 
        hca_queue_client_id, 
        hca_queue_client_name 
        FROM 
        HcaQueue 
        WHERE 
        1 
        group by 
        hca_queue_client_name

        `;
        // console.log("SQL", availableSQL);
    
        try {
          var result = await poolDat.query(queryMenuSupervisor);
          console.log("SUPERVISOR", result);
          var supervisor = result;
        } 
        catch (error) {
            console.log('Server error');
            console.log(queryMenuSupervisor);
            res.status(500).send('Server error');
        }

        //*****************************SUBSTITUTE*********************************************/
    
        let queryMenuSubstitute =                              
        `
        SELECT 
        hca_queue_client_id, 
        hca_queue_client_name 
        FROM 
        HcaQueue 
        WHERE 
        1 
        group by 
        hca_queue_client_name

        `;
        // console.log("SQL", availableSQL);
    
        try {
          var result = await poolDat.query(queryMenuSubstitute);
          console.log("SUBSTITUTE", result);
          var substitute = result;
        } 
        catch (error) {
            console.log('Server error');
            console.log(queryMenuSubstitute);
            res.status(500).send('Server error');
        }

        //*****************************AGENT*********************************************/
    
        let queryMenuAgent =                              
        `
        SELECT 
        hca_queue_client_id, 
        hca_queue_client_name 
        FROM 
        HcaQueue 
        WHERE 
        1 
        group by 
        hca_queue_client_name

        `;
        // console.log("SQL", availableSQL);
    
        try {
          var result = await poolDat.query(queryMenuAgent);
          console.log("AGENT", result);
          var agent = result;
        } 
        catch (error) {
            console.log('Server error');
            console.log(queryMenuAgent);
            res.status(500).send('Server error');
        }

        //*****************************SCHEDULE*********************************************/
    
        let queryMenuSchedule =                              
        `
        SELECT 
        hca_queue_client_id, 
        hca_queue_client_name 
        FROM 
        HcaQueue 
        WHERE 
        1 
        group by 
        hca_queue_client_name

        `;
        // console.log("SQL", availableSQL);
    
        try {
          var result = await poolDat.query(queryMenuSchedule);
          console.log("SCHEDULE", result);
          var schedule = result;
        } 
        catch (error) {
            console.log('Server error');
            console.log(queryMenuSchedule);
            res.status(500).send('Server error');
        }

        //******************************RESULT*******************/

        menu = {
          client,
          queue,
          service,
          campaign,
          supervisor,
          substitute,
          agent,
          schedule
        };

        return menu;
      };
    
    
    //   function validateStartDate(filtro){                             //Modificar la validacion    
    //     let result = false
    
    // if (filtro.start_date){
    
    //     if (filtro.start_date.length = 12){
    //         return true
    //     } else {
    //         result = false
    //     };
    //  }
    //     return result;
    // };

    // function validateEndDate(filtro){                             //Modificar la validacion    
    //     let result = false
    
    // if (filtro.end_date){
    
    //     if (filtro.end_date.length = 12){
    //         return true
    //     } else {
    //         result = false
    //     };
    //  }
    //     return result;
    // };
};
