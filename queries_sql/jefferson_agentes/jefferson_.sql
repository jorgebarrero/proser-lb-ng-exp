SELECT
COUNT(*) as registros,
MIN(cdr_dates_aaaa_mm_dd) AS fecha_inicio,
MAX(cdr_dates_aaaa_mm_dd) AS fecha_final,
clientes.inv_client_id AS clientes
FROM MainCdrMainCdr.InvClient
  