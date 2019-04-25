import { Component, OnInit } from '@angular/core';

import { SelectionConfig } from './../../../../shared/models';

import { datePickerFormatDate } from './../../../../shared/functions';

import { DetalleLlamadasService, ExcelService} from './../../../../shared/services';

@Component({
  selector: 'app-detalle-llamadas-list',
  templateUrl: './detalle-llamadas-list.component.html',
  styleUrls: ['./detalle-llamadas-list.component.scss']
})
export class DetalleLlamadasListComponent implements OnInit {

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
    private detalleLlamadasService: DetalleLlamadasService,
    private excelService: ExcelService
    ) {

    // this.proser_store = new ProserStore;
    this.selection = new SelectionConfig;


    this.proser_store = JSON.parse(localStorage.getItem('proser_store'));


    let storedSelection = this.proser_store.detalle_llamadas.selection;


    if (storedSelection) {
      this.selection = this.proser_store.detalle_llamadas.selection;
    }

  }

  ngOnInit() {

    if (this.proser_store.detalle_llamadas.selection) {
      console.log('NO HAY DATOS');
    }

    this.getList();


  }

  getList() {

    let consulta_SQL  = this.selection;

    console.log('SELECTION', this.selection);

    this.detalleLlamadasService.getList(consulta_SQL)

    .subscribe(res => {
      let temp = JSON.parse(JSON.stringify(res));

      this.rows = temp;
      console.log('rows', this.rows);
    });
  }



  exportToExcel(data, name) {

    let rowData = data
    .map( x => {
      return {
        id_inv_agentes: x.cdr.agente,

        fecha: x.cdr.fecha,
        hora: x.cdr.hora,
        seg_evento: x.cdr.seg_evento,

        tipo: x.cdr.tipo,
        origen: x.cdr.origen,
        destino: x.cdr.destino,

        id: x.cdr.id,
        uniqueid: x.cdr.uniqueid,
        recordingfile: x.cdr.recordingfile,

        supervisor: x.cdr.supervisor,

        id_agente: x.cdr.id_agente,
        agente: x.cdr.agente,
        doc_ident_agentes: x.cdr.doc_ident_agentes,
        doc_complementario_agentes: x.cdr.doc_complementario_agentes,

        duracion: x.cdr.duracion,
        t_facturable: x.cdr.t_facturable,


        hora_inicio: x.cdr.hora_inicio,
        hora_ivr: x.cdr.hora_ivr,
        hora_cola: x.cdr.hora_cola,
        hora_conexion: x.cdr.hora_conexion,
        hora_fin_llamante: x.cdr.hora_fin_llamante,
        hora_fin_agente: x.cdr.hora_fin_agente,
        hora_abandono: x.cdr.hora_abandono,
        hora_fin_llmada: x.cdr.hora_fin_llmada,

        asa: x.cdr.asa,

        disposition: x.cdr.disposition,

        status: x.cdr.status,

        nombre_clientes: x.cdr.nombre_clientes,
        nombre_colas: x.cdr.nombre_colas,
        numero_colas: x.cdr.numero_colas,
        nombre_horarios: x.cdr.nombre_horarios,
        nombre_campanas: x.cdr.nombre_campanas,
        nombre_servicios: x.cdr.nombre_servicios,

        llamadas_recibidas: x.cdr.llamadas_recibidas,
        llamadas_abandonadas: x.cdr.llamadas_abandonadas,
        llamadas_atendidas: x.cdr.llamadas_atendidas,
        llamadas_cortas: x.cdr.llamadas_cortas,
        llamadas_antes_de_20: x.cdr.llamadas_antes_de_20,

        llamadas_realizadas: x.cdr.llamadas_realizadas,
        llamadas_fallidas: x.cdr.llamadas_fallidas,
        llamadas_contestadas: x.cdr.llamadas_contestadas,
        llamadas_efectivas: x.cdr.llamadas_efectivas,
        llamadas_colgadas: x.cdr.llamadas_colgadas,
        resultado_llamada_saliente: x.cdr.resultado_llamada_saliente,

        marcador_bbdd: x.cdr.marcador_bbdd,
        marcador_recorridas: x.cdr.marcador_recorridas,
        marcador_faltantes: x.cdr.marcador_faltantes,
        marcador_vuelta: x.cdr.marcador_vuelta,

        id_global: x.cdr.id_global

      };
    });

    this.excelService.exportAsExcelFile(rowData, name);
  }



}
