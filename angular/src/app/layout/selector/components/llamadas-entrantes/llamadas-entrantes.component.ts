import { Component, OnInit, OnDestroy } from '@angular/core';

import { UserSelection } from '../../../../shared/models/filter/Selection';

import { WeekDayPipe } from './../../../../shared/pipes/week-day.pipe';

import {  createTitles, createSubTitles } from 'src/app/shared/functions/titles-peticion';

import { EntranteDiarioService } from 'src/app/shared/services/reports/entrante-diario.service';
import { ExcelService } from 'src/app/shared/services/helpers/excel.service';
import { AlertModel } from 'src/app/shared/models/Alert';



@Component({
  selector: 'app-llamadas-entrantes',
  templateUrl: './llamadas-entrantes.component.html',
  styleUrls: ['./llamadas-entrantes.component.scss']
})
export class LlamadasEntrantesComponent implements OnInit, OnDestroy {

  currentUser;

  rows: any;
  rows_all: any;


  message = 'Conectando con el servidor';

    // Selection values
    userSelection; // = new Selection;

    proser_store;

    show_titles;
    desde;
    hasta;

    show_table;
    show_graph;
    draw;

    alertMessage = new AlertModel;

  constructor(
    private entranteDiarioService: EntranteDiarioService,
    private excelService: ExcelService
    ) {

    this.userSelection = new UserSelection;
    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.proser_store =  JSON.parse(localStorage.getItem('proser_store'));


    // const storedSelection = this.proser_store.entrante_diario.userSelection;

    // if (storedSelection) {
    //   this.userSelection = this.proser_store.entrante_diario.userSelection;
    // }

    this.show_table = true;
    this.show_graph = false;

    this.rows = {
      data: 1,
      newData: 2
    };
  }

  ngOnInit() {

    if (this.proser_store.entrante_diario.userSelection) {
     //  console.log('NO HAY SELECCION');
    }

    this.getList();
    this.userSelection.subtitle = createSubTitles(this.userSelection);
    this.userSelection.title = createTitles(this.userSelection);
  }

  ngOnDestroy() {
    this.userSelection.title = createTitles(this.userSelection);
    this.userSelection.subtitle = createSubTitles(this.userSelection);
  }


  getList() {


    this.entranteDiarioService.getList(this.userSelection)

    .subscribe(res => {
      const temp = JSON.parse(JSON.stringify(res));
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

    const rowData = data
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
