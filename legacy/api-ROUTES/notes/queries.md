
UPDATE b_clasif_agentes_hist INNER JOIN inv_agentes ON b_clasif_agentes_hist.id_inv_agentes = inv_agentes.id_inv_agentes SET b_clasif_agentes_hist.`doc_ident_agentes` = inv_agentes.doc_ident_agentes, b_clasif_agentes_hist.`doc_complementario_agentes`= inv_agentes.doc_complementario_agentes



UPDATE a_clasif_cdr_hist INNER JOIN inv_agentes ON a_clasif_cdr_hist.id_inv_agentes = inv_agentes.id_inv_agentes SET a_clasif_cdr_hist.`doc_ident_agentes` = inv_agentes.doc_ident_agentes, a_clasif_cdr_hist.`doc_complementario_agentes`= inv_agentes.doc_complementario_agentes


UPDATE a_clasif_audit_hist INNER JOIN inv_agentes ON a_clasif_audit_hist.id_inv_agentes = inv_agentes.id_inv_agentes SET a_clasif_audit_hist.`doc_ident_agentes` = inv_agentes.doc_ident_agentes, a_clasif_audit_hist.`doc_complementario_agentes`= inv_agentes.doc_complementario_agentes

/*************************************

SET @interval = 30;


SELECT 

hora, 

time_to_sec(hora) as seconds, 

TRUNCATE( (time_to_sec(hora) / 60), 0 ) as minutes,

TRUNCATE( (TRUNCATE( (time_to_sec(hora) / 60), 0 )/ @interval), 0) AS block,

TRUNCATE( (TRUNCATE( (time_to_sec(hora) / 60), 0 )/ @interval), 0) * @interval AS minutes_interval,


TRUNCATE( (TRUNCATE( (time_to_sec(hora) / 60), 0 )/ @interval), 0) * @interval * 60 AS seconds_interval,


sec_to_time(
    
  TRUNCATE( (TRUNCATE( (time_to_sec(hora) / 60), 0 )/ @interval), 0) * @interval * 60   
    
    ) as timeIntervals,


@interval,



id 

from a_clasif_cdr_hist
