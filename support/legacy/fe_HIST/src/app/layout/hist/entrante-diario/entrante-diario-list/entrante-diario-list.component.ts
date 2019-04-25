import { Component, OnInit, OnDestroy } from '@angular/core';

import { SelectionConfig } from './../../../../shared/models';

import { WeekDayPipe } from './../../../../shared/pipes/week-day.pipe';

import {  createTitles, createSubTitles } from './../../../../shared/functions';

import { EntranteDiarioService, ExcelService } from './../../../../shared/services';

@Component({
  selector: 'app-entrante-diario-list',
  templateUrl: './entrante-diario-list.component.html',
  styleUrls: ['./entrante-diario-list.component.scss']
})
export class EntranteDiarioListComponent implements OnInit, OnDestroy {

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
    private entranteDiarioService: EntranteDiarioService,
    private excelService: ExcelService
    ) {

    this.selection = new SelectionConfig;

    this.proser_store = JSON.parse(localStorage.getItem('proser_store'));

    let storedSelection = this.proser_store.entrante_diario.selection;

    if (storedSelection) {
      this.selection = this.proser_store.entrante_diario.selection;
    }

    this.show_table = true;
    this.show_graph = false;
  }

  ngOnInit() {

    if (this.proser_store.entrante_diario.selection) {
     //  console.log('NO HAY SELECCION');
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


    this.entranteDiarioService.getList(this.selection)

    .subscribe(res => {
      let temp = JSON.parse(JSON.stringify(res));
      console.log('ROWS', temp);

      this.rows = temp
      .filter( x => {
        return x.calc.row !== 'TOTAL';
      });

      this.rows_all = temp
      .filter( x => {
        return x.calc.row === 'TOTAL';
      });

      console.log('ROWS', this.rows);
      console.log('ROWS_ALL',  this.rows_all);
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
        hora_inicio: x.calc.hora_final,
        hora_final: x.calc.hora_inicio,
        llamadas_recibidas: x.calc.llamadas_recibidas,
        llamadas_abandonadas: x.calc.llamadas_abandonadas,
        llamadas_atendidas: x.calc.llamadas_atendidas,
        llamadas_cortas: x.calc.llamadas_cortas,
        llamadas_antes_de_20: x.calc.llamadas_antes_de_20,
        colgado_agente: x.calc.colgado_agente,
        nivel_de_servicio: x.calc.nivel_de_servicio,
        nivel_de_atencion: x.calc.nivel_de_atencion,
        nivel_de_abandono: x.calc.nivel_de_abandono,
        seg_operacion_recibidas: x.calc.seg_operacion_recibidas,
        t_operacion_recibidas: x.calc.t_operacion_recibidas,
        seg_espera_recibidas: x.calc.seg_espera_recibidas,
        t_espera_recibidas: x.calc.t_espera_recibidas,
        seg_min_espera_recibidas: x.calc.seg_min_espera_recibidas,
        seg_max_espera_recibidas: x.calc.seg_max_espera_recibidas,
        tmo_entrante: x.calc.tmo_entrante,
        asa_entrante: x.calc.asa_entrante,
      };
    });

    this.excelService.exportAsExcelFile(rowData, name);
  }

}
