import {
  dateToDatePicker ,
  formatDate,
  dateToText,
  datePickerToDate,
  datePickerToText,
  createTitles,
  createSubTitles,
} from './../functions';

export class SelectionConfig {

    id: any;
    user: any;
    titles: any;
    subtitles: any;
    peticion: any;

    lineas: any;
    limit: any;
    group: any;


    type: any; // entrante,manual, automatica
    mode: any;
    modalidad: any; // diario, historico

    llamada_clasificacion: any; // entrante, saliente, automatica
    resultado_llamada: any;

    desde: any; // full time
    hasta: any; // full time

    fecha_inicio: any;  // object picker
    fecha_final: any; // object picker

    date_text_inicio: any; // formato aaaa-mm-dd
    date_text_final: any; // formato aaaa-mm-dd

    hora_inicio: any; // formato hh:mm:ss
    hora_final: any; // formato hh:mm:ss
    minutos_intervalo: any; // { 'id': 30, 'name': '30 min', 'value': 30 }
    ultimos_minutos: any;


    colas: any;
    clientes: any;
    campanas: any;
    servicios: any;

    supervisores: any;
    suplentes: any;
    agentes: any;
    horarios: any;

    escalas: any;

    origen_destino: any;



constructor () {

  let hoy = new Date();
  // let hoy_text = dateToText(hoy);

  this.fecha_inicio = dateToDatePicker(hoy);
  this.fecha_final = dateToDatePicker(hoy);

  this.desde = datePickerToDate(this.fecha_inicio);
  this.hasta = datePickerToDate(this.fecha_final);

  this.date_text_inicio = datePickerToText(this.fecha_inicio);
  this.date_text_final = datePickerToText(this.fecha_final);


  this.minutos_intervalo = { 'id': 60, 'name': '60 min', 'value': 60 };

  this.lineas = { 'id': 10, 'name': '10 línea' };

  this.llamada_clasificacion =
  [ { 'id': 2, 'name': 'Entrante' }, { 'id': 4, 'name': 'Manual' } ];

  this.resultado_llamada =
  [ { 'id': 5, 'name': 'CONTESTADA' } ];

  this.hora_inicio = {id: 8, name: '7:00 am.', value: 7 * 60, hour: '07:00:00'};
  this.hora_final =  {id: 20, name: '9:00 pm.', value: 21 * 60, hour: '21:00:00'},

  this.titles = '';
  this.subtitles = '';

}

}


// export class  {

//   selection;

//   filtro_titles;

//   tabla_cdr;
//   tabla_audit;
//   tabla_personas;
//   tabla_agentes;
//   tabla_colas;

//   filtro_fecha;

//   filtro_fecha_inicio;
//   filtro_fecha_final;

//   filtro_hora_inicio;
//   filtro_hora_final;

//   filtro_llamada_clasificacion;
//   filtro_resultado_llamada;
//   filtro_disposition;

//   filtro_minutos_intervalo;
//   filtro_ultimos_minutos;

//   filtro_sql;
//   filtro_sql_like;

//   filtro_otro;

//   filtro_limit;
//   filtro_offset;
//   filtro_order;
//   filtro_group;
//   filtro_group_compuesto;

// constructor () {

//   let fecha = new Date();

//   this.selection = new SelectionConfig;

//   this.tabla_cdr = `a_clasif_cdr`;
//   this.tabla_audit = `a_clasif_audit`;
//   this.tabla_personas = `a_clasif_personas`;
//   this.tabla_agentes = `b_clasif_agentes`;
//   this.tabla_colas = `b_clasif_colas`;


//   this.filtro_fecha_inicio = `AND fecha >= '${formatDate(fecha)}'`;
//   this.filtro_fecha_final = `and fecha <= '${formatDate(fecha)}'`;

//   this.filtro_hora_inicio = `AND 1`;
//   this.filtro_hora_final = `AND 1`;

//   this.filtro_minutos_intervalo = `AND 1`;
//   this.filtro_ultimos_minutos = `AND 1`;

//   this.filtro_sql = `AND 1`;
//   this.filtro_sql_like = `AND 1`;

//   this.filtro_otro = `AND 1`;

//   this.filtro_limit = ``;
//   this.filtro_order = ``;
//   this.filtro_group = ``;
//   this.filtro_group_compuesto = ``;

//   this.filtro_titles = ``;

//   this.filtro_llamada_clasificacion =
//   `AND (llamada_clasificacion = 'Entrante' OR llamada_clasificacion = 'Manual')`;
//   this.filtro_resultado_llamada = `AND (resultado_llamada = 'CONTESTADA')`;
//   this.filtro_minutos_intervalo = 30;
// }

// }


// export class GroupBy {

//     cliente;
//     cola;
//     servicio;
//     campana;

//     supervisor;
//     suplente;
//     agente;
//     horario;

//     constructor () {
//       this.cliente = '';
//       this.cola = '';;
//       this.servicio = '';
//       this.campana = '';

//       this.supervisor = '';
//       this.suplente = '';
//       this.agente = '';
//       this.horario = '';

//     }

// }
