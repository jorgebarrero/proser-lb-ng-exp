import { Component, OnInit } from '@angular/core';

import { SelectionConfig } from './../../../../shared/models';

import { datePickerFormatDate } from './../../../../shared/functions';

import { ServicioHistoricoService, ExcelService } from './../../../../shared/services';

@Component({
  selector: 'app-servicio-historico-list',
  templateUrl: './servicio-historico-list.component.html',
  styleUrls: ['./servicio-historico-list.component.scss']
})
export class ServicioHistoricoListComponent implements OnInit {


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
    // lineas

    show_table;
    lista_encontrada;


  constructor(
    private servicioHistoricoService: ServicioHistoricoService,
    private excelService: ExcelService
    ) {

    // this.proser_store = new ProserStore;
    this.selection = new SelectionConfig;

    this.proser_store = JSON.parse(localStorage.getItem('proser_store'));


    let storedSelection = this.proser_store.servicio_historico.selection;
    let storedFilter = this.proser_store.servicio_historico.filter;

    if (storedSelection) {
      this.selection = this.proser_store.servicio_historico.selection;
    }

  }

  ngOnInit() {

    if (this.proser_store.servicio_historico.selection) {
      console.log('NO HAY SELECCION');
    }

    this.getList();

  }


  getList() {

    let consulta_SQL = this.selection;

    this.servicioHistoricoService.getList(consulta_SQL)

    .subscribe(res => {
      let temp = JSON.parse(JSON.stringify(res));
      console.log('temp', temp);
      this.rows = temp;

    });
  }


  exportToExcel(data, name) {

    let rowData = data
    .map( x => {
      return {
        id_inv_agentes: x.cdr.agente
      };
    });

    this.excelService.exportAsExcelFile(rowData, name);
  }

}
