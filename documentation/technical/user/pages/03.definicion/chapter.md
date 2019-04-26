---
title: Definiciones
body_classes: title-center title-h1h2
---

# Definiciones

## Campaña

## Llamada

## Skill, 

## Servicio

## Cola

## Supervisor
Es la persona responsable de un grupo de agentes

## Agente
La persona que atiende la llamada

## Inbound
Llamadas entrantes

## Nivel de Servicio - Expresado en %
### suma(llamadas_atendidas_antes_de_20_seg)/suma(llamadas_recibidas)
Una medición que expresa el porcentaje de transacciones que se atienden en un período específico. Por ejemplo, para un call center, un nivel de servicio 80/20 significa que se atiende o atenderán un 80% de las llamadas dentro de los 20 segundos. El Nivel de Servicio puede ser un objetivo o una medición del desempeño real.

## Nivel de Atención - Expresado en %
Suma(llamadas_atendidas)/suma(llamadas_Recibidas)

## Nivel de Abandono - Expresado en %
Suma(llamadas_abandonadas)/suma(llamadas_Recibidas)

## TMO - Expresado en Segundos
### entero(SUMA(tiempo_operacion)/CONTARA(llamadas_atendidas))
El tiempo promedio medido en segundos que le lleva al RAC procesar una transacción. Esto incluye el tiempo de comunicación con el cliente, colocar al cliente en hold (tiempo en hold), y completar la transacción luego de que el cliente haya concluido su participación en la transacción (wrapping).

### Que es el RAC? 
(representante de atención al cliente = agente)

### Wrapping 
Tiempo post llamada después de colgada la llamada y antes que el Agente finalice la transacción.

## Llamadas Recibidas - Expresado en Unidades
Cantidad de llamadas entrantes bruto, sin importar su clasificación o resultado.

## Llamadas Abandonadas - Expresado en Unidades
Cantidad de llamadas que el cliente inicia pero que el cliente cuelga antes que sean contestadas.

## Llamadas Atendidas - Expresado en Unidades
Cantidad de llamadas que son respondidas por un agente

## Llamadas Cortas - Expresado en Unidades
Cantidad de llamadas con duración inferior a un parámetro previamente ajustado que calcula la no posibilidad de gestion. (ejemplo: menos de 3 segundos).

## Llamadas en Cola - Expresado en Unidades
Cantidad de llamadas que están a la espera de ser atendidas

## Llamadas atendidas antes de 20 segundos - Expresado en Unidades
Cantidad de llamadas atendidas antes de 20 segundos

## Tiempo medio de atención (ASA) - Expresado en Segundos
entero(suma(tiempo_espera_en_cola)/suma(llamadas_atendidas))

## Agentes Conectados  - Expresado en Unidades
Cantidad de agentes que están conectados porque hicieron login

## Agentes Ocupados - Expresado en Unidades
Cantidad de agentes conectados que están contestando una llamada

## Agentes Disponibles - Expresado en Unidades
Cantidad de agentes conectados que están a la espera de una llamada

## Tiempo_de_operacion - Expresado en Segundos
### Suma de (duración de llamada + tiempo de hold + tiempo after call work)
after call = tiempo desde que se cuelga la llamada hasta que el operador completa el formulario (tipifica) y queda disponible para atender otra llamada y/o pasa a un auxiliar

## Tiempo_de_after_call_work - Expresado en Segundos
tiempo desde que se cuelga la llamada hasta que el operador completa el formulario (tipifica) y queda disponible para atender otra llamada y/o pasa a un auxiliar

## tiempo_de_espera_ivr - Expresado en Segundos
Suma del tiempo que reporta el IVR antes de que la llamada sea contestada
## Agentes_Auxiliar - Expresado en Unidades
Cantidad de agentes conectados que no están ni ocupados ni disponibles tomaron una pausa dentro del sistema
## Tabla auxiliar de agentes - Expresado en Unidades
En formato maestro detalle aparecen las causas auxiliares
este último con un desplegable para validar el detalle del tipo de auxiliar en el que se encuentran los agentes.


# Out Bound Marcación Predictiva


## BDD- Expresado en Unidades
Base de datos que el cliente suministra para llamadas o listado en papel

## Registros pendientes por recorrer - Expresado en Unidades
Registros que faltan por llamar

## Llamadas Realizadas - Expresado en Unidades
Cantidad de llamadas realizadas por el agente sin importar el resultado

## Llamadas Fallidas - Expresado en Unidades
Cantidad de llamadas realizadas que no cumplen la especificación de contactabilidad

## Llamadas Contestadas - Expresado en Unidades
Cantidad de llamadas con resultado de contactabilidad positivo

## Llamadas Abandonadas - Expresado en Unidades
Cantidad de llamadas que el cliente cuelga antes de ser atendidas
En Out Bound esta definición no tiene sentido, serán las llamadas atendidas y cortadas antes de cumplir con el criterio de efectividad

## Llamadas en Cola - Expresado en Unidades
Cantidad de llamadas que están a la espera de ser atendidas
En Out Bound esta definición no tiene sentido, ya que no hay llamadas entrantes esperando ser atendidas

## Llamadas Efectivas - Expresado en Unidades
Cantidad de llamadas que cumplen con el criterio de efectividad

## % de Contactabilidad  - Expresado en %
(suma(llamadas_Contestadas)/suma(llamadas_Realizadas))
suma(Registros contactados / Registros cargados)

## % de efectividad - Expresado en %
suma(llamadas_efectivas)/suma(llamadas_Contestadas)

## TMO - Expresado en Segundos
entero(SUMA(tiempo_operacion)/CONTAR(llamadas_Contestadas))

## Agentes Conectados - Expresado en Unidades
Cantidad de agentes que están conectados porque hicieron login

## Agentes Ocupados - Expresado en Unidades
Cantidad de agentes conectados que están contestando una llamada
En Out Bound esta definición no tiene sentido, ya que no hay llamadas entrantes será haciendo una llamada

## Agentes Disponibles - Expresado en Unidades
Cantidad de agentes conectados que están a la espera de una llamada
En Out Bound esta definición no tiene sentido, ya que no hay llamadas entrantes será a la espera de hacer una llamada

## Agentes Auxiliar - Expresado en Unidades
Cantidad de agentes conectados que no están ni ocupados ni disponibles tomaron una pausa dentro del sistema
este último con un desplegable para validar el detalle del tipo de auxiliar en el que se encuentran los agentes.

## Tabla auxiliar de agentes - Expresado en Unidades
En formato maestro detalle aparecen las causas auxiliares
este último con un desplegable para validar el detalle del tipo de auxiliar en el que se en

## tiempo_de_operacion - Expresado en Segundos
Suma de (duración de llamada + tiempo de hold + tiempo after call)


# Out Bound Marcación Manual


## Llamadas Realizadas - Expresado en Unidades
Cantidad de llamadas realizadas por el agente sin importar el resultado

## Llamadas Fallidas - Expresado en Unidades
Cantidad de llamadas realizadas que no cumplen la especificación de contactabilidad

## Llamadas Contestadas - Expresado en Unidades
Cantidad de llamadas con resultado de contactabilidad positivo

## Llamadas Efectivas - Expresado en Unidades
Cantidad de llamadas que cumplen con el criterio de efectividad

## % de Contactabilidad  - Expresado en %
(suma(llamadas_Contestadas)/suma(llamadas_Realizadas))

## % de efectividad - Expresado en %
suma(llamadas_efectivas)/suma(llamadas_Contestadas)

## TMO - Expresado en Segundos
entero(SUMA(tiempo_operacion)/CONTAR(llamadas_Contestadas))

## Agentes Conectados - Expresado en Unidades
Cantidad de agentes que están conectados porque hicieron login

## Agentes Ocupados - Expresado en Unidades
Cantidad de agentes conectados que están contestando una llamada
En Out Bound esta definición no tiene sentido, ya que no hay llamadas entrantes será haciendo una llamada

## Agentes Disponibles - Expresado en Unidades
Cantidad de agentes conectados que están a la espera de una llamada
En Out Bound esta definición no tiene sentido, ya que no hay llamadas entrantes será a la espera de hacer una llamada

## Agentes Auxiliar - Expresado en Unidades
Cantidad de agentes conectados que no están ni ocupados ni disponibles tomaron una pausa dentro del sistema
este último con un desplegable para validar el detalle del tipo de auxiliar en el que se encuentran los agentes.

## Tabla auxiliar de agentes - Expresado en Unidades
En formato maestro detalle aparecen las causas auxiliares
este último con un desplegable para validar el detalle del tipo de auxiliar en el que se en

## Tiempo_de_operacion - Expresado en Segundos
Suma de (duración de llamada + tiempo de hold + tiempo after call)


# Dashboard Supervisores
Filtro x servicio

### Pestaña Agente

## Nombre
Nombre del agente

## Id
Código de identificación del agente


## Nombre supervisor
Nombre del supervisor

## Extensión
Código de identificación de la extensión

## Skill
Habilidad certificada del agente

## Campaña
Empresa contratante

### Pestaña Llamadas

## Nombre
Nombre del agente

## Id
Código de identificación del agente

## Llamadas entrantes
Cantidad de llamadas entrantes

## Llamadas Realizadas
Cantidad de llamadas realizadas por el agente de forma manual

## Llamadas contestadas
Cantidad de llamadas contestadas, que ha tenido el agente

### Pestaña TMO

## Nombre
Nombre del agente

## Id
Código de identificación del agente

## TMO saliente
Cantidad de segundos TMO saliente del dia actual

## TMO entrante
Cantidad de segundos TMO entrante del día actual

### Pestaña ESTADO

## Estado actual
Estado actual del agente (ocupado/disponible/auxiliar)

## Tiempo login Expresado en H.M.S
Tiempo total de logueo que lleva el agente, de acuerdo al corte acordado con el cliente

## Tiempo Auxiliar en H.M.S
Tiempo total de auxiliar (suma de todos los auxiliares) que lleva el agente, de acuerdo al corte acordado con el cliente

## Tiempo Conversado en H.M.S
Tiempo total de conversando que lleva el agente, de acuerdo al corte acordado con el cliente

## Tiempo Disponible en H.M.S
Tiempo conectado - tiempo coversado - tiempo auxiliar
Tiempo total de espera por llamadas que lleva el agente, de acuerdo al corte acordado con el cliente

## Utilización - Expresado con decimales 2 decimales en %
Suma(Tiempo disponible; tiempo conversado)/(tiempo login)

## Auxiliar
Maestro detalle del