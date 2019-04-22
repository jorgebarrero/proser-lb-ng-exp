SELECT  
SUM(cdr_call_abandoned) AS llamadas_abandonadas   
FROM MainCdr  WHERE cdr_dates_calldate="2018-04-25" 