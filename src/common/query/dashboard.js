let SQLCdr = `
SUM(cdr_call_received),
SUM(cdr_call_abandoned),
SUM(cdr_call_atended),
SUM(cdr_call_short),
SUM(cdr_call_before_time),
SUM(cdr_call_before_time)/SUM(cdr_call_received),
SUM(cdr_call_atended)/SUM(cdr_call_received),
SUM(cdr_call_abandoned)/SUM(cdr_call_received),
SUM(duration)/SUM(cdr_call_received),
sum(cdr_qlog_secs_at_wait)/SUM(cdr_call_received)
`;

<<<<<<< HEAD
// let SQLAudit = `
// COUNT()
// `
// SELECT 
// 'LOGIN', 
// COUNT(id_break), 
// MIN(datetime_init), 
// MAX(datetime_end) 
=======
let SQLAudit = `
COUNT()
<<<<<<< HEAD
'
=======

>>>>>>> 329a93600d47868ec929996e9e2d0118c7d74701
SELECT 'LOGIN', COUNT(id_break), MIN(datetime_init), MAX(datetime_end) FROM 'MainAudit' WHERE id_break = '0'
>>>>>>> 133303951ba4c5475a30bb8a825d17218c2e49b9

// FROM `MainAudit` 

<<<<<<< HEAD
// WHERE id_break = '0'
=======
SELECT 'AUXILIAR', COUNT(audit.id_break) FROM 'MainAudit' as audit JOIN 'InvBreak' as break ON audit.id_break = break.inv_break_id  WHERE audit.id_break <> '0' AND break.inv_break_productivity = '0'
>>>>>>> 133303951ba4c5475a30bb8a825d17218c2e49b9

// UNION

<<<<<<< HEAD
// SELECT 
// 'AUXILIAR', 
// COUNT(audit.id_break) 
// FROM `MainAudit` as audit JOIN `InvBreak` as break 
// ON 
// audit.id_break = break.inv_break_id  

// WHERE 
// audit.id_break <> '0' 
// AND 
// break.inv_break_productivity = '0'

// UNION

// SELECT 
// 'ASIGNATION', 
// COUNT(audit.id_break) 

// FROM `MainAudit` as audit JOIN `InvBreak` as break 
// ON 
// audit.id_break = break.inv_break_id  

// WHERE 
// audit.id_break <> '0' 
// AND 
// break.inv_break_productivity = '1'
=======
SELECT 'ASIGNATION', COUNT(audit.id_break) FROM 'MainAudit' as audit JOIN 'InvBreak' as break ON audit.id_break = break.inv_break_id  WHERE audit.id_break <> '0' AND break.inv_break_productivity = '1'
>>>>>>> 133303951ba4c5475a30bb8a825d17218c2e49b9


export { SQLCdr } `;
