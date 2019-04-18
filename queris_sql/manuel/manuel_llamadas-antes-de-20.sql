SELECT  
SUM(cdr_call_atended) AS llamadas_antes_de_20
FROM MainCdr  WHERE cdr_dates_calldate="2018-04-25" 