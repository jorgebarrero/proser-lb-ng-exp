import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Selection, Menu, SelectionConfig,  ProserStore } from './../../../../shared/models';

import { OperativoDetallado, Productividad } from './../../../../shared/models';

import { formatDate, datePickerFormatDate } from './../../../../shared/functions';

import {  AgentesService, ExcelService } from './../../../../shared/services';

@Component({
  selector: 'app-agentes-list',
  templateUrl: './agentes-list.component.html',
  styleUrls: ['./agentes-list.component.scss']
})
export class AgentesListComponent implements OnInit {

  currentUser;

  rows: any;
  rows_all: any;


  message: string = 'Conectando con el servidor';

    // Selection values
    selection; // = new Selection;

    proser_store;

    show_titles;
    desde;
    hasta;


    show_table;
    lista_encontrada;


  constructor(
    private agentesService: AgentesService,
    private excelService: ExcelService
    ) {

    // this.proser_store = new ProserStore;
    this.selection = new SelectionConfig;

    this.proser_store = JSON.parse(localStorage.getItem('proser_store'));


    let storedSelection = this.proser_store.agente.selection;


    if (storedSelection) {
      this.selection = this.proser_store.agente.selection;
    }

  }

  ngOnInit() {

    if (this.proser_store.agente.selection) {
      console.log('NO HAY DATOS');
    }

    this.getList();

  }

  getList() {

    let consulta_SQL = this.selection;



    this.agentesService.getList(consulta_SQL)

    .subscribe(res => {
      // console.log('consulta_SQL', consulta_SQL);
      // console.log('GET ROWS', res);

      let temp = JSON.parse(JSON.stringify(res));

      console.log('temp', temp);

      this.rows = temp;

    });
  }



  exportToExcel(data, name) {

    let rowData = data
    .map( x => {
      return {
        id_inv_agentes: x.cdr.nombre_agentes,
        fecha_inicio: x.cdr.fecha_inicio,
        fecha_final: x.cdr.fecha_final,
        llamadas_realizadas: x.calc.llamadas_realizadas,
        llamadas_recibidas: x.calc.llamadas_recibidas,
        porc_auxiliar: x.calc.porc_auxiliar,
        porc_conversacion: x.calc.porc_conversacion,
        porc_disponible: x.calc.porc_disponible,
        porc_ocupacion: x.calc.porc_ocupacion,
        porc_produccion: x.calc.porc_produccion,
        tiempo_after_call: x.calc.tiempo_after_call,
        tiempo_asignaciones: x.calc.tiempo_asignaciones,
        tiempo_auxiliares: x.calc.tiempo_auxiliares,
        tiempo_conectado: x.calc.tiempo_conectado,
        tiempo_conversacion: x.calc.tiempo_conversacion,
        tiempo_disponible: x.calc.tiempo_disponible,
        tiempo_ocupado: x.calc.tiempo_ocupado,
        tiempo_productivo: x.calc.tiempo_productivo,
        tiempo_realizadas: x.calc.tiempo_realizadas,
        tiempo_recibidas: x.calc.tiempo_recibidas,
      };
    });

    this.excelService.exportAsExcelFile(rowData, name);
  }


}
