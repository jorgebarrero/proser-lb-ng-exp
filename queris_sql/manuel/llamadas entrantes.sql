SELECT  
SUM(cdr_call_received) AS llamadas_recibidas   
FROM MainCdr  WHERE cdr_dates_calldate="2018-04-25" 
