import { Component, OnInit } from '@angular/core';

import { SelectionConfig } from './../../../../shared/models';

import { datePickerFormatDate } from './../../../../shared/functions';

import { DetalladoAsignacionesService, ExcelService } from './../../../../shared/services';


@Component({
  selector: 'app-detallado-asignaciones-list',
  templateUrl: './detallado-asignaciones-list.component.html',
  styleUrls: ['./detallado-asignaciones-list.component.scss']
})
export class DetalladoAsignacionesListComponent implements OnInit {

  currentUser;

  rows: any;
  rows_all: any;

  message: string = 'Conectando con el servidor';

    // Selection values
    selection; // = new Selection;

    proser_store;

    show_titles;

    show_table;
    lista_encontrada;


  constructor(
    private detalladoAsignacionesService: DetalladoAsignacionesService,
    private excelService: ExcelService
    ) {

    // this.proser_store = new ProserStore;
    this.selection = new SelectionConfig;

    this.proser_store = JSON.parse(localStorage.getItem('proser_store'));


    let storedSelection = this.proser_store.detallado_asignaciones.selection;


    if (storedSelection) {
      this.selection = this.proser_store.detallado_asignaciones.selection;
    }

  }

  ngOnInit() {

    if (this.proser_store.detallado_asignaciones.selection) {
      console.log('NO HAY DATOS');
    }

    this.getList();

  }

  getList() {

  let consulta_SQL  = this.selection;

    this.detalladoAsignacionesService.getList(consulta_SQL)
    .subscribe(res => {

      let temp = JSON.parse(JSON.stringify(res));

      // console.log('ROWS', temp);

      this.rows = temp
      .filter( x => {
        return x.row !== 'TOTAL';
      });

      this.rows_all = temp
      .filter( x => {
        return x.row === 'TOTAL';
      });

      // console.log('ROWS', this.rows);
      // console.log('ROWS_ALL',  this.rows_all);
    });
  }



  exportToExcel(data, name) {

    let rowData = data
    .map( x => {
      return {
        date: x.date,
        date_text: x.date_text,
        day_week_number: x.day_week_number,
        doc_complementario_agentes: x.doc_complementario_agentes,
        doc_ident_agentes: x.doc_ident_agentes,
        fecha_final: x.fecha_final,
        fecha_inicio: x.fecha_inicio,
        hora_final: x.hora_final,
        hora_inicio: x.hora_inicio,
        horarios_final: x.horarios_final,
        horarios_inicio: x.horarios_inicio,
        id_inv_agentes: x.id_inv_agentes,
        nombre_agentes: x.nombre_agentes,
        nombre_supervisores: x.nombre_supervisores,
        numero_agentes: x.numero_agentes,
        registros: x.registros,
        row: x.row,
        seg_conexion: x.seg_conexion,
        segundos_final: x.segundos_final,
        segundos_horario: x.segundos_horario,
        segundos_horario_final: x.segundos_horario_final,
        segundos_inicio: x.segundos_inicio,
        t_conexion: x.t_conexion,
        t_horarios: x.t_horarios,
      };
    });

    this.excelService.exportAsExcelFile(rowData, name);
  }


}
