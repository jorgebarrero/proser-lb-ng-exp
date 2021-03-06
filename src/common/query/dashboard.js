function sqlCdr(arg){

  let date = arg.date;

  let build_sqlCdr = `
    SELECT

    SUM(cdr_call_received) as llamadas_recibidas,
    SUM(cdr_call_abandoned) as llamadas_abandonadas,
    SUM(cdr_call_atended) as llamadas_atendidas,
    SUM(cdr_call_short) as llamadas_cortas,
    SUM(cdr_call_before_time) as llamadas_antes_de,
    SUM(cdr_call_before_time)/SUM(cdr_call_received) as nivel_servicio,
    SUM(cdr_call_atended)/SUM(cdr_call_received) as nivel_atencion,
    SUM(cdr_call_abandoned)/SUM(cdr_call_received) as nivel_abandono,
    SUM(duration)/SUM(cdr_call_received) as tmo,
    sum(cdr_qlog_secs_at_wait)/SUM(cdr_call_received) as asa

    FROM MainCdr

    WHERE cdr_dates_calldate = ${date}
    `;

  return build_sqlCdr;
}

function sqlHcaAgent(arg){

  let date = arg.date;
  let paramFilter = arg.filter;
  let and = validateAND(arg) ? "AND" : "";

  let build_sqlHcaAgent = `

    SELECT

    hca_agent_agent_id as ig_agente,
    hca_agent_agent_name as nombre_agente,
    hca_agent_supervisor_name as nombre_supervisor,
    hca_agent_agente_extension as extension_agente

    FROM HcaAgent as agent


    WHERE agent.hca_agent_date_text = ${date} ${and} ${paramFilter}

    `;

  return build_sqlHcaAgent;

}

function sqlAudit(arg){

  let date = arg.date;
  let paramFilter = arg.filter;
  let and = validateAND(arg) ? "AND" : "";

  let build_sqlAudit = `

    SELECT
    audit.id_agent as id_agente,
    agent.hca_agent_agent_name as nombre_agente,
    agent.hca_agent_supervisor_name as nombre_supervisor,
    agent.hca_agent_agente_extension as extension_agente,
    audit.audit_status as estado

    FROM MainAudit as audit
    INNER JOIN HcaAgent as agent
    ON
    audit.audit_hca_agent_id = agent.hca_agent_key_audit

    WHERE
    agent.hca_agent_date_text = ${date} ${and} ${paramFilter}

    `;

  return build_sqlAudit;

}

function sqlAuditCdr(arg){

  let build_sqlAuditCdr = `

    SELECT

`;

  return build_sqlAuditCdr;
}

function validateAND(arg){

  let result = false;

  if (arg.filter){

    return true;
  } else {
    result = false;
  }
  return result;
}

export { sqlCdr, sqlHcaAgent, sqlAudit, sqlAuditCdr};
