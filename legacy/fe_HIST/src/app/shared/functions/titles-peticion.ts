import {
  SelectionConfig
} from './../models';

export function createTitles(selection: SelectionConfig) {

  let resultado: any = [];


  if (selection.clientes) {
    if (selection.clientes.length > 0) {
      let sqlClientes = selection.clientes
        .map(x => {
          return `${x.name}`;
        });
      let temp = sqlClientes.join(' - ');
      resultado.push(`CLIENTES: [${temp}]`);
    }
  }

  if (selection.colas) {
    if (selection.colas.length > 0) {
      let sqlColas = selection.colas
        .map(x => {
          return `${x.id}`;
        });
      let temp = sqlColas.join(' - ');
      resultado.push(`COLAS: [${temp}]`);
    }
  }

  if (selection.servicios) {
    if (selection.servicios.length > 0) {
      let sqlServicios = selection.servicios
        .map(x => {
          return `${x.name}`;
        });
      let temp = sqlServicios.join(' - ');
      resultado.push(`SERVICIOS: [${temp}]`);
    }
  }

  if (selection.campanas) {
    if (selection.campanas.length > 0) {
      let sqlCampanas = selection.campanas
        .map(x => {
          return `${x.name}`;
        });
      let temp = sqlCampanas.join(' - ');
      resultado.push(`CAMPAÑAS: [${temp}]`);
    }
  }

  if (selection.supervisores) {
    if (selection.supervisores.length > 0) {
      let sqlSupervisores = selection.supervisores
        .map(x => {
          return `${x.name}`;
        });
      let temp = sqlSupervisores.join(' OR ');
      resultado.push(`SUPERVISORES: [${temp}]`);
    }
  }

  if (selection.suplentes) {
    if (selection.suplentes.length > 0) {
      let sqlSuplentes = selection.suplentes
        .map(x => {
          return `${x.name}`;
        });
      let temp = sqlSuplentes.join(' OR ');
      resultado.push(`SUPLENTES: [${temp}]`);
    }
  }

  if (selection.agentes) {
    if (selection.agentes.length > 0) {
      let sqlAgentes = selection.agentes
        .map(x => {
          return `${x.name}`;
        });
      let temp = sqlAgentes.join(' OR ');
      resultado.push(`AGENTES: [${temp}]`);
    }
  }

  if (selection.horarios) {
    if (selection.horarios.length > 0) {
      let sqlHorarios = selection.horarios
        .map(x => {
          return `${x.name}`;
        });
      let temp = sqlHorarios.join(' OR ');
      resultado.push(`HORARIOS: [${temp}]`);
    }
  }

  let filtered_resultado = resultado
    .filter(x => {
      let lastChars = x.substr(x.length - 2);
      return lastChars !== '[]';
    });


  let filtered_join = filtered_resultado.join(' & ');
  let resultado_string = filtered_join;

  return resultado_string;
}




export function createSubTitles(selection: SelectionConfig) {

  let resultado = [];

  if (selection) {
    //  console.log('selection.minutos_intervalo.name', selection.minutos_intervalo);

    selection.hora_inicio !== undefined ?
      resultado.push(` Hora inicio: ${selection.hora_inicio.name} `) : returnWhite();
    selection.hora_final !== undefined ?
      resultado.push(` Hora final: ${selection.hora_final.name} `) : returnWhite();
    selection.ultimos_minutos !== undefined ?
      resultado.push(` Ultimos minutos: ${selection.ultimos_minutos.name} `) : returnWhite();
  }



  return resultado;
}




export function createIntervalTitles(selection: SelectionConfig, subtitles) {

  let resultado = [subtitles];

  if (selection.minutos_intervalo) {
    resultado.push(` Minutos intervalo: ${selection.minutos_intervalo.name} `);
  } else {
    returnWhite();
  }

  return resultado;
}



function returnWhite() {
  return '';
}
