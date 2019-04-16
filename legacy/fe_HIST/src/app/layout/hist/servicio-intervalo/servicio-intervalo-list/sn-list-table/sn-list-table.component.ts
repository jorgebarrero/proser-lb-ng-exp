
import { Component, OnInit, Input } from '@angular/core';

import { ServicioIntervalo } from './../../../../../shared/models';
import { Selection } from './../../../../../shared/models/selection';



@Component({
  selector: 'app-sn-list-table',
  templateUrl: './sn-list-table.component.html',
  styleUrls: ['./sn-list-table.component.scss']
})
export class SnListTableComponent implements OnInit {

  @Input() rows;

  // Selection values
  selection = new Selection;

/********************************
* TABLA
*/


loadingIndicator: boolean = false;
emptyMessage: 'Sin data para mostrar';
reorderable: boolean = true;
selected: ServicioIntervalo[] = [];
itemsList;

date_text: string;
month_name: string;
day_name: string;
day_number: string;

recibidas: string;
atendidas: string;
atendidas_20: string;
abandonadas: string;

porc_abandono: string;
nivel_atencion: string;
asa: string;

minutos_atendidos: string;

tiempo_operacion: string;
tmo: string;
nivel_de_servicio: string;

cantidad_agentes: string;



columns = [
{ prop: 'date_text', name: 'Fecha', width: 100 },
{ prop: 'month_name', name: 'mes', width: 100 },
{ prop: 'day_name', name: 'dia_semana', width: 100 },
{ prop: 'day_number', name: 'dia_mes', width: 100 },

{ prop: 'recibidas', name: 'recibidas', width: 100 },
{ prop: 'atendidas', name: 'atendidas', width: 100 },
{ prop: 'atendidas_20', name: 'atendidas_20', width: 100 },
{ prop: 'abandonadas', name: 'abandonadas', width: 100 },

{ prop: 'porc_abandono', name: 'porc_abandono', width: 100 },
{ prop: 'nivel_atencion', name: 'nivel_atencion', width: 100 },
{ prop: 'asa', name: 'asa', width: 100 },

{ prop: 'minutos_atendidos', name: 'mitutos_atendidos_cdr_duration', width: 100 },
{ prop: 'tiempo_operacion', name: 'tiempo_operacion', width: 100 },
{ prop: 'tmo', name: 'tmo', width: 100 },
{ prop: 'nivel_de_servicio', name: 'nivel_de_servicio', width: 100 },

{ prop: 'cantidad_agentes', name: 'cantidad_agentes', width: 100 },

];

constructor( ) { }

ngOnInit() {

}

onActivate($event) {

}

onSelect($event) {

}


}
