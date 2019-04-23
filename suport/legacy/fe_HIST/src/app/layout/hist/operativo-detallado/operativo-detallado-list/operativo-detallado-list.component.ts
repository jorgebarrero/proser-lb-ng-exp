import { Component, OnInit } from '@angular/core';

import { SelectionConfig } from './../../../../shared/models';


import { datePickerFormatDate, textoANumeroFlotante } from './../../../../shared/functions';

import { OperativoDetalladoService, ExcelService } from './../../../../shared/services';

@Component({
  selector: 'app-operativo-detallado-list',
  templateUrl: './operativo-detallado-list.component.html',
  styleUrls: ['./operativo-detallado-list.component.scss']
})
export class OperativoDetalladoListComponent implements OnInit {


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
    private operativoDetalladoService: OperativoDetalladoService,
    private excelService: ExcelService
    ) {

    // this.proser_store = new ProserStore;
    this.selection = new SelectionConfig;

    this.proser_store = JSON.parse(localStorage.getItem('proser_store'));

    let storedSelection = this.proser_store.operativo_detallado.selection;

    if (storedSelection) {
      this.selection = this.proser_store.operativo_detallado.selection;
    }

  }

  ngOnInit() {

    this.getList();

  }

  getList() {

    let consulta_SQL = this.selection;
    this.operativoDetalladoService.getList(consulta_SQL)

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
      // console.log('FILTER', consulta_SQL);
      // console.log('DATA operativo_detallado', res);
      // let temp = JSON.parse(JSON.stringify(res));
      // this.rows = temp;

  }



  exportToExcel(data, name) {

    let rowData = data
    .map( x => {
      return {
        agente: x.cdr.agente,
        cedula: x.cdr.cedula,
        numero_interno: x.cdr.numero_interno,
        fecha_inicio: x.cdr.fecha_inicio,
        fecha_final: x.cdr.fecha_final,
        supervisor: x.cdr.supervisor,
        cliente: x.cdr.cliente,

        numero_clientes: x.cdr.numero_clientes,
        llamadas_recibidas: x.cdr.llamadas_recibidas,
        seg_recibidas: x.cdr.seg_recibidas,
        t_recibidas: x.cdr.t_recibidas,
        t_promedio_recibidas: x.cdr.t_promedio_recibidas,
        colgado_agente: x.cdr.colgado_agente,
        llamadas_realizadas: x.cdr.llamadas_realizadas,
        seg_realizadas: x.cdr.seg_realizadas,
        t_realizadas: x.cdr.t_realizadas,
        t_promedio_realizadas: x.cdr.t_promedio_realizadas,
        llamada_interna: x.cdr.llamada_interna,


        seg_conexion: x.calc.seg_conexion,
        seg_auxiliar: x.calc.seg_auxiliar,
        seg_asignacion: x.calc.seg_asignacion,


        seg_ocupacion_cdr: x.calc.seg_ocupacion_cdr,
        seg_ocupacion_audit: x.calc.seg_ocupacion_audit,

        seg_disponible_cdr: x.calc.seg_disponible_cdr,
        seg_disponible_audit: x.calc.seg_disponible_audit,



        t_conexion: x.calc.t_conexion,
        t_auxiliar: x.calc.t_auxiliar,
        t_asignacion: x.calc.t_asignacion,


        t_ocupacion_cdr: x.calc.t_ocupacion_cdr,
        t_ocupacion_audit: x.calc.t_ocupacion_audit,

        t_disponible_cdr: x.calc.t_disponible_cdr,
        t_disponible_audit: x.calc.t_disponible_audit,

        porc_conexion: x.calc.porc_conexion,
        porc_ocupacion_cdr: x.calc.porc_ocupacion_cdr,
        porc_ocupacion_audit: x.calc.porc_ocupacion_audit,

        porc_disponible_cdr: x.calc.porc_disponible_cdr,
        porc_disponible_audit: x.calc.porc_disponible_audit,

        porc_llamadas_asignacion: x.calc.porc_llamadas_asignacion,

        porc_ocupacion: x.calc.porc_ocupacion,
        porc_auxiliar: x.calc.porc_auxiliar,
        porc_disponible: x.calc.porc_disponible,

      };
    });

    this.excelService.exportAsExcelFile(rowData, name);
  }

}
