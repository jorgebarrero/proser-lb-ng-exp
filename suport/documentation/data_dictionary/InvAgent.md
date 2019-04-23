# InvAgent
Inventario de datos de los agentes

## Campos
### inv_agent_id
Número de identificación del registro del agente

- Clave primaria
- Campo numérico auto-incremental

### inv_agent_status
Estade del agente
- A = Activo
- B = inactivo

### inv_agent_chk
Marca de uso del campo
- 0
- 1

### inv_agent_name
Nombre del agente
__Texto__

### inv_agent_shortname
Nombre corto del agente
- texto

### inv_agent_type
Tipo de agente
- texto

### inv_agent_extension
Extensión asignada al agente
- Agent = Agente que solo recibe llmadas
- SIP = agente que hace y recibe llamadas

### inv_agent_extension
Extensión asignada al agente
__texto en forma de numero__

### inv_agent_legal_id
Indentificación oficial del agente
__Cédula, pasaporte o documento legal del agente__

### inv_agent_internal_id
Identificacion interna del agente
__Numero asignado por la organización para identificar al agente__

### inv_agent_supervisor_id
Id de identificación del supervisor
__Número de identificación del registro del supervisor__

### inv_agent_supervisor_name
Nombre del supervisor
__Texto__

### inv_agent_schedule_id
Id de identificación del turno o el horario

### inv_agent_schedule_name
Nombre del horario
__Nombre del horario (Mañana, Tarde, Noche, etc)__

### inv_agent_password
Contraseña
__En texto normal__

### inv_agent_eccp_password
Clave cifrada
__Con eccp__
