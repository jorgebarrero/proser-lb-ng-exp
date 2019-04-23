import { formatDate } from './../functions/dates'

export class Menu {

  menu_agentes;
  menu_campanas;
  menu_clientes;
  menu_colas;
  menu_escalas;
  menu_horarios;
  menu_servicios;
  menu_supervisores;
  menu_suplentes;

  constructor(

  ) {

    this.menu_agentes = [];
    this.menu_campanas = [];
    this.menu_clientes = [];
    this.menu_colas = [];
    this.menu_escalas = [];
    this.menu_horarios = [];
    this.menu_servicios = [];
    this.menu_supervisores = [];
    this.menu_suplentes = [];

}

}



export class MenuCdr {

    colas: [{}];
    clientes: [{}];
    campanas: [{}];
    servicios: [{}];

    supervisores: [{}];
    suplentes: [{}];
    agentes: [{}];

    horarios: [{}];

    cantidad_colas: 0;
    cantidad_clientes: 0;
    cantidad_campanas: 0;
    cantidad_servicios: 0;

    cantidad_supervisores: 0;
    cantidad_suplentes: 0;
    cantidad_agentes: 0;

    cantidad_horarios: 0;


}

export class DataMenu {

        tabla;
        fecha;
        filtro;

        constructor () {

            this.tabla = `a_clasif_cdr_hist`;
            // this.fecha = `date_text = '${formatDate( new Date())}'`;
            this.fecha = `date_text = '2018-10-01'`;
            this.filtro = `1`;
        }

}