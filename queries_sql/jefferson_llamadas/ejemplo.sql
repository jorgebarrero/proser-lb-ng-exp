SE

SELECT

  'TOTAL' as row,

  'TOTAL' as date,

  date_text,
  day_week_number,

  COUNT(id_global) as registros,
  MIN(fecha) AS fecha_inicio,
  MAX(fecha) AS fecha_final,

  SUM(llamadas_recibidas) AS llamadas_recibidas,
  SUM(llamadas_abandonadas) AS llamadas_abandonadas,
  SUM(llamadas_atendidas) AS llamadas_atendidas,
  SUM(llamadas_cortas) AS llamadas_cortas,
  SUM(llamadas_antes_de_20) AS llamadas_antes_de_20,
  SUM( colgado_agente ) as colgado_agente,

  '${ selection.hora_inicio.hour }' as hora_inicio,
  '${ selection.hora_final.hour }' as hora_final,


  SUM( IF( llamadas_recibidas = 1, tiempo_de_operacion, 0 ) )
  AS seg_llamadas_recibidas,
  
  SUM( IF( llamadas_recibidas = 1, tiempo_espera, 0 ) )
  AS seg_espera_recibidas,

  MIN( IF( llamadas_recibidas = 1, tiempo_espera, 0 ) )
  AS seg_min_espera_recibidas,

  MAX( IF( llamadas_recibidas = 1, tiempo_espera, 0 ) )
  AS seg_max_espera_recibidas,


  ROUND((SUM( IF( llamadas_recibidas = 1, tiempo_de_operacion, 0 ) )
  /SUM(llamadas_atendidas)), 0) AS tmo_entrante,


  ROUND(
   (SUM( IF( llamadas_recibidas = 1, tiempo_espera, 0 ) )
  /SUM(llamadas_atendidas)), 0 ) AS asa_entrante,


  id_global

  FROM
    ${tabla_cdr}