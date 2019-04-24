const conexion = `

SELECT
    "DETAIL" As row,
    audit.audit_date AS date ,
    audit.audit_date AS date_texte,
    (DAYOFWEEK(audit.audit_date)) AS day_week_number,
    COUNT(audit.id_break) AS registros,
    audit.datetime_init AS fecha_inicio,
    audit.datetime_end AS fecha_final,
    DATE_FORMAT(audit.datetime_init, '%H:%i:%s') AS hora_inicio,
    DATE_FORMAT(audit.datetime_end, '%H:%i:%s') As hora_final,
    TIME_TO_SEC(audit.datetime_init) AS segundos_inicio,
    TIME_TO_SEC(audit.datetime_end) AS segundos_final,
    audit.duration AS seg_conexion,
    SEC_TO_TIME(audit.duration)AS t_conexion,
	  break.inv_break_name AS nombre_auxiliares,
    agent.hca_agent_supervisor_name AS nombre_supervisor,
	  audit.id_agent  AS id_inv_agentes,
    agent.hca_agent_agente_extension AS numero_agentes,
    agent.hca_agent_agent_name AS nombre_agentes,
    agent.hca_agent_legal_id AS doc_indent_agentes,
    agent.hca_agent_internal_id AS doc_complemtario_agentes,
    DATE_FORMAT(audit.datetime_init, '%H:%i:%s') AS horarios_inicio ,
    DATE_FORMAT(audit.datetime_end, '%H:%i:%s')   AS horarios_final,
    TIME_TO_SEC(audit.datetime_init) AS segundos_horario_inicio,
    TIME_TO_SEC(audit.datetime_end) AS segundos_horario_final,
	  TIMEDIFF(audit.datetime_end, audit.datetime_init) AS segundos_horario,
    "t_horarios" AS t_horarios,
    "id_global" AS id_global

FROM
 MainAudit AS audit
INNER JOIN
 HcaAgent AS agent ON audit.id_agent = agent.hca_agent_agent_id
 LEFT OUTER JOIN
 InvBreak AS break ON audit.id_break = break.inv_break_id

WHERE
 DATE_FORMAT(datetime_init, '%Y-%m%-%d') = '2018-11-23'
 AND
 (id_agent = 163 OR id_agent = 151)
  AND
 id_break = 0
`
