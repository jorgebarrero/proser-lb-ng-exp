export class SelectionConfig {

    id = '';
    user = '';
    titles = '';
    subtitles = '';
    peticion = '';

    lineas = '';
    limit = '';
    group = '';


    type = '';  // entrante,manual, automatica
    mode = '';
    modalidad = '';  // diario, historico

    llamada_clasificacion = '';  // entrante, saliente, automatica
    resultado_llamada = '';

    desde = '';  // full time
    hasta = '';  // full time

    fecha_inicio = '';   // object picker
    fecha_final = '';  // object picker

    date_text_inicio = '';  // formato aaaa-mm-dd
    date_text_final = '';  // formato aaaa-mm-dd

    hora_inicio = '';  // formato hh:mm:ss
    hora_final = '';  // formato hh:mm:ss
    minutos_intervalo = '';  // { 'id': 30, 'name': '30 min', 'value': 30 }
    ultimos_minutos = '';


    colas = '';
    clientes = '';
    campanas = '';
    servicios = '';

    supervisores = '';
    suplentes = '';
    agentes = '';
    horarios = '';

    escalas = '';



constructor () {

    
    this.id = '';
    this.user = '';
    this.titles = '';
    this.subtitles = '';
    this.peticion = '';

    this.lineas = '';
    this.limit = '';
    this.group = '';


    this.type = '';  // entrante,manual, automatica
    this.mode = '';
    this.modalidad = '';  // diario, historico

    this.llamada_clasificacion = '';  // entrante, saliente, automatica
    this.resultado_llamada = '';

    this.desde = '';  // full time
    this.hasta = '';  // full time

    this.fecha_inicio = '';   // object picker
    this.fecha_final = '';  // object picker

    this.date_text_inicio = '';  // formato aaaa-mm-dd
    this.date_text_final = '';  // formato aaaa-mm-dd

    this.hora_inicio = '';  // formato hh:mm:ss
    this.hora_final = '';  // formato hh:mm:ss
    this.minutos_intervalo = '';  // { 'id': 30, 'name': '30 min', 'value': 30 }
    this.ultimos_minutos = '';


    this.colas = '';
    this.clientes = '';
    this.campanas = '';
    this.servicios = '';

    this.supervisores = '';
    this.suplentes = '';
    this.agentes = '';
    this.horarios = '';

    this.escalas = '';
}
}
