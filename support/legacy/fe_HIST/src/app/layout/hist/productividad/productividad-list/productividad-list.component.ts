import { Component, OnInit } from '@angular/core';

import { SelectionConfig } from './../../../../shared/models';

import { datePickerFormatDate } from './../../../../shared/functions';

import { ProductividadService, ExcelService } from './../../../../shared/services';



@Component({
  selector: 'app-productividad-list',
  templateUrl: './productividad-list.component.html',
  styleUrls: ['./productividad-list.component.scss']
})
export class ProductividadListComponent implements OnInit {

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
    private productividadService: ProductividadService,
    private excelService: ExcelService
    ) {

    // this.proser_store = new ProserStore;
    this.selection = new SelectionConfig;

    this.proser_store = JSON.parse(localStorage.getItem('proser_store'));


    let storedSelection = this.proser_store.productividad.selection;


    if (storedSelection) {
      this.selection = this.proser_store.productividad.selection;
    }

  }

  ngOnInit() {

    if (this.proser_store.productividad.selection) {
      console.log('NO HAY DATOS');
    }

    this.getList();

  }


  getList() {

    let consulta_SQL = this.selection;
    this.productividadService.getList(consulta_SQL)
    .subscribe(res => {
      let temp = JSON.parse(JSON.stringify(res));

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
