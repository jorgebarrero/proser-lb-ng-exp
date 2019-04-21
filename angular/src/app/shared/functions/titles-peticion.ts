import {
  UserSelection
} from './../models/filter/Selection';

export function createTitles(userSelection: UserSelection) {

  const resultado: any = [];


  if (userSelection.client) {
    if (userSelection.client.length > 0) {
      const sqlClientes = userSelection.client
        .map(x => {
          return `${x.name}`;
        });
      const temp = sqlClientes.join(' - ');
      resultado.push(`CLIENTES: [${temp}]`);
    }
  }

  if (userSelection.queue) {
    if (userSelection.queue.length > 0) {
      const sqlColas = userSelection.queue
        .map(x => {
          return `${x.id}`;
        });
      const temp = sqlColas.join(' - ');
      resultado.push(`COLAS: [${temp}]`);
    }
  }

  if (userSelection.service) {
    if (userSelection.service.length > 0) {
      const sqlServicios = userSelection.service
        .map(x => {
          return `${x.name}`;
        });
      const temp = sqlServicios.join(' - ');
      resultado.push(`SERVICIOS: [${temp}]`);
    }
  }

  if (userSelection.campaign) {
    if (userSelection.campaign.length > 0) {
      const sqlCampanas = userSelection.campaign
        .map(x => {
          return `${x.name}`;
        });
      const temp = sqlCampanas.join(' - ');
      resultado.push(`CAMPAÑAS: [${temp}]`);
    }
  }

  if (userSelection.supervisor) {
    if (userSelection.supervisor.length > 0) {
      const sqlSupervisores = userSelection.supervisor
        .map(x => {
          return `${x.name}`;
        });
      const temp = sqlSupervisores.join(' OR ');
      resultado.push(`SUPERVISORES: [${temp}]`);
    }
  }

  if (userSelection.substitute) {
    if (userSelection.substitute.length > 0) {
      const sqlSuplentes = userSelection.substitute
        .map(x => {
          return `${x.name}`;
        });
      const temp = sqlSuplentes.join(' OR ');
      resultado.push(`SUPLENTES: [${temp}]`);
    }
  }

  if (userSelection.agent) {
    if (userSelection.agent.length > 0) {
      const sqlAgentes = userSelection.agent
        .map(x => {
          return `${x.name}`;
        });
      const temp = sqlAgentes.join(' OR ');
      resultado.push(`AGENTES: [${temp}]`);
    }
  }

  if (userSelection.schedule) {
    if (userSelection.schedule.length > 0) {
      const sqlHorarios = userSelection.schedule
        .map(x => {
          return `${x.name}`;
        });
      const temp = sqlHorarios.join(' OR ');
      resultado.push(`HORARIOS: [${temp}]`);
    }
  }

  const filtered_resultado = resultado
    .filter(x => {
      const lastChars = x.substr(x.length - 2);
      return lastChars !== '[]';
    });


  const filtered_join = filtered_resultado.join(' & ');
  const resultado_string = filtered_join;

  return resultado_string;
}



export function createSubTitles(userSelection: UserSelection) {

  const resultado = [];

  if (userSelection) {
    //  console.log('userSelection.interval.name', userSelection.interval);

    userSelection.start_date !== undefined ?
      resultado.push(` Hora inicio: ${userSelection.start_date.name} `) : returnWhite();
    userSelection.end_date !== undefined ?
      resultado.push(` Hora final: ${userSelection.end_date.name} `) : returnWhite();
    userSelection.lastMinutes !== undefined ?
      resultado.push(` Ultimos minutos: ${userSelection.lastMinutes.name} `) : returnWhite();
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
