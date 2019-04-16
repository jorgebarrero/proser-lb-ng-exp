export class Group {
    theGroup = [
        {id: 1, name: 'Cliente', 
        group: `GROUP BY nombre_clientes`, 
        group_compuesto: `GROUP BY nombre_clientes, nombre_auxiliares`},

        {id: 2, name: 'Cola',
        group: `GROUP BY nombre_colas`, 
        group_compuesto: `GROUP BY nombre_colas, nombre_auxiliares`},

        {id: 3, name: 'Servicio',
        group: `GROUP BY nombre_servicios`, 
        group_compuesto: `GROUP BY nombre_servicios, nombre_auxiliares`},

        {id: 4, name: 'Campaña',
        group: `GROUP BY nombre_campanas`, 
        group_compuesto: `GROUP BY nombre_campanas, nombre_auxiliares`},

        {id: 5, name: 'Supervisor',
        group: `GROUP BY nombre_supervisores`, 
        group_compuesto: `GROUP BY nombre_supervisores, nombre_auxiliares`},


        {id: 6, name: 'Suplente',
        group: `GROUP BY nombre_suplentes`, 
        group_compuesto: `GROUP BY nombre_suplentes, nombre_auxiliares`},

        {id: 7, name: 'Agente',
        group: `GROUP BY nombre_agentes`, 
        group_compuesto: `GROUP BY nombre_agentes, nombre_auxiliares`},

        {id: 8, name: 'Horario',
        group: `GROUP BY nombre_horarios`, 
        group_compuesto: `GROUP BY nombre_horarios, nombre_auxiliares`},

    ]
}