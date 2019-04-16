import { Component, OnInit } from '@angular/core';


import { SelectionConfig } from './../../../../shared/models';


import { datePickerFormatDate } from './../../../../shared/functions';

import { ProductividadService, ExcelService } from './../../../../shared/services';

import { ServicioIntervaloService } from './../../../../shared/services';

@Component({
  selector: 'app-servicio-intervalo-list',
  templateUrl: './servicio-intervalo-list.component.html',
  styleUrls: ['./servicio-intervalo-list.component.scss']
})
export class ServicioIntervaloListComponent implements OnInit {


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
    private servicioIntervaloService: ServicioIntervaloService,
    private excelService: ExcelService
    ) {

    // this.proser_store = new ProserStore;
    this.selection = new SelectionConfig;


    this.proser_store = JSON.parse(localStorage.getItem('proser_store'));


    let storedSelection = this.proser_store.servicio_intervalo.selection;


    if (storedSelection) {
      this.selection = this.proser_store.servicio_intervalo.selection;
    }

  }

  ngOnInit() {

    if (this.proser_store.servicio_intervalo.selection) {
      console.log('NO HAY DATOS');
    }

    this.getList();


  }

  getList() {

    let consulta_SQL = this.selection;

    this.servicioIntervaloService.getList(consulta_SQL)
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
