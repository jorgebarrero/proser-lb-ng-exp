import {
  UserSelection
} from './../models/filter/Selection';


export function createFilterTitles(userSelection: UserSelection) {

  const resultado: any = [];

  if (userSelection.agent) {
    if (userSelection.agent.length > 0) {
      const sqlAgentes = userSelection.agent
        .map(x => {
          return `${x.menu_agent_name}`;
        });
      const temp = sqlAgentes.join(', ');
        resultado.push(` AGENTES: ${temp}`);
    }
  }

  if (userSelection.asignation) {
    if (userSelection.asignation.length > 0) {
      const sqlAgentes = userSelection.asignation
        .map(x => {
          return `${x.menu_asignation_name}`;
        });
      const temp = sqlAgentes.join(', ');
        resultado.push(` ASIGNACIONES: ${temp}`);
    }
  }

  if (userSelection.auxiliar) {
    if (userSelection.auxiliar.length > 0) {
      const sqlAgentes = userSelection.auxiliar
        .map(x => {
          return `${x.menu_auxiliar_name}`;
        });
      const temp = sqlAgentes.join(', ');
        resultado.push(` ASIGNACIONES: ${temp}`);
    }
  }

  if (userSelection.campaign) {
    if (userSelection.campaign.length > 0) {
      const sqlCampanas = userSelection.campaign
        .map(x => {
          return `${x.menu_campaign_name}`;
        });
      const temp = sqlCampanas.join(' - ');
      resultado.push(` CAMPAÑAS: ${temp}`);
    }
  }


  if (userSelection.client) {
    if (userSelection.client.length > 0) {
      const sqlClientes = userSelection.client
        .map(x => {
          return `${x.menu_client_name}`;
        });
      const temp = sqlClientes.join(' - ');
      resultado.push(` CLIENTES: ${temp}`);
    }
  }


  if (userSelection.queue) {
    if (userSelection.queue.length > 0) {
      const sqlColas = userSelection.queue
        .map(x => {
          return `${x.menu_queue_name}`;
        });
      const temp = sqlColas.join(' - ');
      resultado.push(` COLAS: ${temp}`);
    }
  }

  if (userSelection.scale) {
    if (userSelection.scale.length > 0) {
      const sqlServicios = userSelection.scale
        .map(x => {
          return `${x.menu_scale_name}`;
        });
      const temp = sqlServicios.join(' - ');
        resultado.push(` ESCALA: ${temp}`);

    }
  }

  if (userSelection.schedule) {
    if (userSelection.schedule.length > 0) {
      const sqlHorarios = userSelection.schedule
        .map(x => {
          return `${x.menu_schedule_name}`;
        });
      const temp = sqlHorarios.join(', ');
      resultado.push(` TURNOS: ${temp}`);
    }
  }



  if (userSelection.service) {
    if (userSelection.service.length > 0) {
      const sqlServicios = userSelection.service
        .map(x => {
          return `${x.menu_service_name}`;
        });
      const temp = sqlServicios.join(' - ');
        resultado.push(` SERVICIOS: ${temp}`);

    }
  }

  if (userSelection.substitute) {
    if (userSelection.substitute.length > 0) {
      const sqlSuplentes = userSelection.substitute
        .map(x => {
          return `${x.menu_substitute_name}`;
        });
      const temp = sqlSuplentes.join(', ');
      resultado.push(` SUPLENTES: ${temp}`);
    }
  }

  if (userSelection.supervisor) {
    if (userSelection.supervisor.length > 0) {
      const sqlSupervisores = userSelection.supervisor
        .map(x => {
          return `${x.menu_supervisor_name}`;
        });
      const temp = sqlSupervisores.join(', ');
      resultado.push(` SUPERVISORES: ${temp}`);
    }
  }



  const filtered_resultado = resultado
    .filter(x => {
      const lastChars = x.substr(x.length - 2);
      return lastChars !== '[]';
    });


  const filtered_join = filtered_resultado.join(' & ');
  const resultado_string = filtered_join;

  return resultado;
  // return 'Filter titles'
}



export function createSubTitles(userSelection: UserSelection) {

  const resultado = [];

  if (userSelection) {
    //  console.log('userSelection.interval.name', userSelection.interval);

    userSelection.start_date ?
      resultado.push(` Fecha inicio: ${userSelection.start_date} `) : returnWhite();
    userSelection.end_date  ?
      resultado.push(` Fecha final: ${userSelection.end_date} `) : returnWhite();

    userSelection.start_time  ?
      resultado.push(` Hora inicio: ${userSelection.start_time} `) : returnWhite();
    userSelection.end_time ?
      resultado.push(` Hora final: ${userSelection.end_time} `) : returnWhite();

    userSelection.last_minutes  ?
      resultado.push(` Ultimos minutos: ${userSelection.last_minutes} min`) : returnWhite();
    userSelection.interval ?
      resultado.push(` Intervalo: ${userSelection.interval} min`) : returnWhite();
  }



  return resultado;
}




export function createIntervalTitles(userSelection: UserSelection, subtitles) {

  const resultado = [subtitles];

  if (userSelection.interval) {
    resultado.push(` Minutos intervalo: ${userSelection.interval.name} `);
  } else {
    returnWhite();
  }

  return resultado;
}



function returnWhite() {
  return '';
}
