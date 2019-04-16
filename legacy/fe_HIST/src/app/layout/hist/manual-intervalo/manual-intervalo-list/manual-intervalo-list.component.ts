import { Component, OnInit, OnDestroy } from '@angular/core';

import { SelectionConfig } from './../../../../shared/models';

import {  createTitles, createSubTitles } from './../../../../shared/functions';

import { ManualIntervaloService, ExcelService } from './../../../../shared/services';

@Component({
  selector: 'app-manual-intervalo-list',
  templateUrl: './manual-intervalo-list.component.html',
  styleUrls: ['./manual-intervalo-list.component.scss']
})
export class ManualIntervaloListComponent implements OnInit, OnDestroy {

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
    show_graph;
    draw;


  constructor(
    private manualIntervaloService: ManualIntervaloService,
    private excelService: ExcelService
    ) {

    this.selection = new SelectionConfig;

    this.proser_store = JSON.parse(localStorage.getItem('proser_store'));

    let storedSelection = this.proser_store.manual_intervalo.selection;


    if (storedSelection) {
      this.selection = this.proser_store.manual_intervalo.selection;
    }

    this.show_table = true;
    this.show_graph = false;

  }

  ngOnInit() {

    if (this.proser_store.manual_intervalo.selection) {
      // console.log('NO HAY SELECCION');
    }

    this.getList();
    this.selection.subtitles = createSubTitles(this.selection);
    this.selection.titles = createTitles(this.selection);

  }

  ngOnDestroy() {
    this.selection.titles = createTitles(this.selection);
    this.selection.subtitles = createSubTitles(this.selection);
  }


  getList() {

    // console.log('THIS SELECTION', this.selection);

    this.manualIntervaloService.getList(this.selection)

    .subscribe(res => {
      let temp = JSON.parse(JSON.stringify(res));

      this.rows = temp
      .filter( x => {
        return x.calc.row !== 'TOTAL';
      });

      this.rows_all = temp
      .filter( x => {
        return x.calc.row === 'TOTAL';
      });

      console.log('ROWS', this.rows);
      console.log('ROWS_ALL', this.rows_all);

    });
  }

  toogleGraph() {
    this.show_graph = !this.show_graph;
    this.show_table = !this.show_table;
  }


  exportToExcel(data, name) {

    let rowData = data
    .map( x => {
      return {
        fecha_inicio: x.calc.fecha_inicio,
        fecha_final: x.calc.fecha_final,
        inicio_intervalo: x.serie.minutes,
        fin_intervalo: x.serie.to,
        llamadas_realizadas: x.calc.llamadas_realizadas,
        llamadas_fallidas: x.calc.llamadas_fallidas,
        llamadas_contestadas: x.calc.llamadas_contestadas,
        llamadas_efectivas: x.calc.llamadas_efectivas,
        llamadas_colgadas: x.calc.llamadas_colgadas,

        nivel_de_contactabilidad: x.calc.nivel_de_contactabilidad,
        nivel_de_efectividad: x.calc.nivel_de_efectividad,

        seg_operacion_realizadas: x.calc.seg_operacion_realizadas,
        t_llamadas_realizadas: x.calc.t_llamadas_realizadas,

       tmo_saliente: x.calc.tmo_saliente,
      };
    });

    this.excelService.exportAsExcelFile(rowData, name);
  }


}
