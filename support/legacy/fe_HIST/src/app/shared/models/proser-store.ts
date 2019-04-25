import { User } from './user';
import {  SelectionConfig } from './filter';

export class ProserStore {

    currentUser;
    conexion_desconexion;
    detalle_auxiliares;
    detalle_asignaciones;

    detallado_auxiliares;
    detallado_asignaciones;
    detalle_llamadas;
    operativo_detallado;
    productividad;
    saliente_intervalo;
    servicio_diario;
    servicio_intervalo;
    agente;
    servicio_historico;
    saliente_diario;

    entrante_diario;
    entrante_intervalo;
    entrante_dashboard;

    manual_diario;
    manual_intervalo;
    manual_dashboard;

    automatica_diario;
    automatica_intervalo;
    automatica_dashboard;

    cdr;


    constructor () {
        this.currentUser = new User;

        this.conexion_desconexion = new ReportItems;
        this.operativo_detallado = new ReportItems;
        this.detallado_auxiliares = new ReportItems;

        this.detalle_auxiliares = new ReportItems;
        this.detalle_asignaciones = new ReportItems;


        this.detallado_asignaciones = new ReportItems;
        this.detalle_llamadas = new ReportItems;
        this.operativo_detallado = new ReportItems;
        this.productividad = new ReportItems;
        this.saliente_intervalo = new ReportItems;
        this.servicio_diario = new ReportItems;
        this.servicio_intervalo = new ReportItems;
        this.agente = new ReportItems;
        this.servicio_historico = new ReportItems;
        this.saliente_diario = new ReportItems;

        this.entrante_diario = new ReportItems;
        this.entrante_intervalo = new ReportItems;
        this.entrante_dashboard  = new ReportItems;

        this.manual_diario = new ReportItems;
        this.manual_intervalo = new ReportItems;
        this.manual_dashboard  = new ReportItems;

        this.automatica_diario = new ReportItems;
        this.automatica_intervalo = new ReportItems;
        this.automatica_dashboard  = new ReportItems;

        this.cdr = new ReportItems;

    }
}

class ReportItems {

    selection;
    options;
    filter;
    result;

    constructor () {
        this.selection = new SelectionConfig;
        this.options = new SelectionConfig;
        this.result = '';
    }
}
