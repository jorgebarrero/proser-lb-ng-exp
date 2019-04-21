'use strict';

const myPool = require ('../../connectors/pool');

const poolDat = myPool.poolDat;


module.exports = function(InvMenu) {

  InvMenu.selectionMenu = async function(filtro) {
    return multipleSqlMenu(filtro);
  };

  InvMenu.remoteMethod('selectionMenu', {
    accepts: {arg: 'filtro', type: 'object', http: { source: 'body'} },
    returns: {type: 'array', root: 'true'}
  });

  async function multipleSqlMenu(filtro){

    // let start_date = validateStartDate(filtro) ? filtro.start_date : "";         //Invoke validations
    // let end_date = validateEndDate(filtro) ? filtro.end_date : "";
    let start_date = filtro.start_date;                                          //Get param from object filter
    let end_date = filtro.end_date;

    let menuOptions = {};


    // if(start_date && end_date){

    //*****************************CLIENT*********************************************/

    let queryMenuClient =
        `
        SELECT
        DISTINCT(queue.hca_queue_client_id) as menu_client_id,
        queue.hca_queue_client_name as menu_client_name

        FROM
        HcaQueue AS queue INNER JOIN MainCdr as cdr

        ON
        cdr.cdr_type_hca_queue_id = queue.hca_queue_text_key

        WHERE
        cdr.cdr_dates_calldate >= ${start_date}
        AND
        cdr.cdr_dates_calldate <= ${end_date}

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
      return error;
    }

    //*****************************QUEUE*********************************************/

    let queryMenuQueue =
        `
        SELECT
        DISTINCT(queue.hca_queue_queue_id) as menu_queue_id,
        queue.hca_queue_queue_name as menu_queue_name

        FROM
        HcaQueue AS queue INNER JOIN MainCdr as cdr
        ON
        cdr.cdr_type_hca_queue_id = queue.hca_queue_text_key

        WHERE
        cdr.cdr_dates_calldate >= '2019-01-25'
        AND
        cdr.cdr_dates_calldate <= '2019-01-26'

        `;

    try {
      var result = await poolDat.query(queryMenuQueue);
      console.log("QUEUE", result);
      var queue = result;
    }
    catch (error) {
      console.log('Server error');
      console.log(queryMenuQueue);
      return error;
    }

    //*****************************SERVICE*********************************************/

    let queryMenuService =
        `
        SELECT
        DISTINCT(queue.hca_queue_service_id) as menu_service_id,
        queue.hca_queue_service_name as menu_service_name

        FROM
        HcaQueue AS queue INNER JOIN MainCdr as cdr
        ON
        cdr.cdr_type_hca_queue_id = queue.hca_queue_text_key

        WHERE
        cdr.cdr_dates_calldate >= ${start_date}
        AND
        cdr.cdr_dates_calldate <= ${end_date}

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
      return error;
    }

    //*****************************CAMPAIGN*********************************************/

    let queryMenuCampaign =
        `
        SELECT
        inv_campaign_id as menu_campaign_id,
        inv_campaign_name as menu_campaign_name

        FROM
        InvCampaign

        WHERE
        inv_campaign_start_date_text >= ${start_date}
        AND
        inv_campaign_end_date_text <= ${end_date}

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
      return error;
    }

    //*****************************SUPERVISOR*********************************************/

    let queryMenuSupervisor =
        `
        SELECT
        DISTINCT(agent.hca_agent_supervisor_id) as menu_supervisor_id,
        agent.hca_agent_supervisor_name as menu_supervisor_name

        FROM
        HcaAgent AS agent INNER JOIN MainCdr as cdr
        ON
        cdr.cdr_type_hca_agent_id = agent.hca_agent_key_cdr

        WHERE
        cdr.cdr_dates_calldate >= ${start_date}
        AND
        cdr.cdr_dates_calldate <= ${end_date}

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
      return error;
    }

    //*****************************SUBSTITUTE*********************************************/

    // let queryMenuSubstitute =
    // `


    // `;
    // // console.log("SQL", availableSQL);

    // try {
    //   var result = await poolDat.query(queryMenuSubstitute);
    //   console.log("SUBSTITUTE", result);
    //   var substitute = result;
    // }
    // catch (error) {
    //     console.log('Server error');
    //     console.log(queryMenuSubstitute);
    //     return error;
    // }

    //*****************************AGENT*********************************************/

    let queryMenuAgent =
        `
        SELECT
        DISTINCT(agent.hca_agent_agent_id) as menu_agent_id,
        agent.hca_agent_agent_name as menu_agent_name

        FROM
        HcaAgent AS agent INNER JOIN MainCdr as cdr

        ON
        cdr.cdr_type_hca_agent_id = agent.hca_agent_key_cdr

        WHERE
        cdr.cdr_dates_calldate >= ${start_date}

        AND
        cdr.cdr_dates_calldate <= ${end_date}

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
      return error;
    }

    //*****************************SCHEDULE*********************************************/

    let queryMenuSchedule =
        `
        SELECT
        DISTINCT(agent.hca_agent_schedule_id) as menu_schedule_id,
        agent.hca_agent_schedule_name as menu_schedule_name

        FROM
        HcaAgent AS agent INNER JOIN MainCdr as cdr
        ON
        cdr.cdr_type_hca_agent_id = agent.hca_agent_key_cdr

        WHERE
        cdr.cdr_dates_calldate >= ${start_date}
        AND
        cdr.cdr_dates_calldate <= ${end_date}

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
      return error;
    }


    //*****************************AUXILIAR*********************************************/

    let queryMenuAuxiliar =
        `
        SELECT
        DISTINCT(break.inv_break_id) as menu_break_id,
        break.inv_break_name as menu_break_name

        FROM
        MainAudit AS audit INNER JOIN InvBreak AS break
        ON
        break.inv_break_id = audit.id_break

        WHERE
        audit.audit_date >= ${start_date}
        AND
        audit.audit_date <= ${end_date}
        AND
        break.inv_break_productivity = 0

        `;
    // console.log("SQL", availableSQL);

    try {
      var result = await poolDat.query(queryMenuAuxiliar);
      console.log("AUXILIAR", result);
      var auxiliar = result;
    }
    catch (error) {
      console.log('Server error');
      console.log(queryMenuAuxiliar);
      return error;
    }


    //*****************************ASIGNATION*********************************************/

    let queryMenuAsignation =
        `
        SELECT
        DISTINCT(break.inv_break_id) as menu_asignation_id,
        break.inv_break_name as menu_asignation_name

        FROM
        MainAudit AS audit INNER JOIN InvBreak AS break
        ON
        break.inv_break_id = audit.id_break

        WHERE
        audit.audit_date >= ${start_date}
        AND
        audit.audit_date <= ${end_date}
        AND
        break.inv_break_productivity = 1

        `;
    // console.log("SQL", availableSQL);

    try {
      var result = await poolDat.query(queryMenuAsignation);
      console.log("ASIGNATION", result);
      var asignation = result;
    }
    catch (error) {
      console.log('Server error');
      console.log(queryMenuAsignation);
      return error;
    }

    //******************************RESULT*******************/

    menuOptions = {
      client,
      queue,
      service,
      campaign,
      supervisor,
      // substitute,
      agent,
      schedule,
      auxiliar,
      asignation
    };

    return menuOptions;
  }


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
