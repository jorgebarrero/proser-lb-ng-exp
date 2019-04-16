

import { Component, OnInit, Input } from '@angular/core';

import { SelectedRecord } from './../../../../../shared/models';

@Component({
  selector: 'app-ed-dashboard',
  templateUrl: './ed-dashboard.component.html',
  styleUrls: ['./ed-dashboard.component.scss']
})
export class EdDashboardComponent implements OnInit {


  @Input() rows;
  @Input() rows_all;
  @Input() cdr;
  @Input() filter;
  @Input() selection;

  // Selection values
  // selection = new Selection;

/********************************
* TABLA
*/

loadingIndicator: boolean = false;
emptyMessage: 'Sin data para mostrar';
reorderable: boolean = true;
selected: SelectedRecord[] = [];
itemsList;


mensaje_tipo;
counter;

constructor() { }

ngOnInit() {

}

onActivate($event) {

}

onSelect($event) {

}




/***********************************************************************************
 * COLORES SEGUN DATO
 * Controlan los colores del fondo segun valor del dato
 */

fondoNivel80(ns) {

  if ( ns <= 79 ) {
    return 'btn btn-block btn-danger';
  }
  if ( ns <= 83  ) {
    return 'btn btn-block btn-warning';
  }
  if ( ns <= 86 ) {
    return 'btn btn-block btn-success';
  }
  if ( ns > 86 ) {
    return 'btn btn-block btn-primary';
}

return 'btn btn-block btn-light';
}

fondoNivel90(ns) {
  if ( ns <= 89 ) {
    return 'btn btn-block btn-danger';
  }
  if ( ns <= 93  ) {
    return 'btn btn-block btn-warning';
  }
  if ( ns <= 96 ) {
    return 'btn btn-block btn-success';
  }
  if ( ns > 96 ) {
    return 'btn btn-block btn-primary';
}

return 'btn btn-block btn-light';
}

fondoLlamadasEnCola(ns) {
if ( ns > this.rows_all.agentes_conectados_ahora / 2) {
  return 'btn btn-block btn-danger';
}
if ( ns > this.rows_all.agentes_conectados_ahora / 4) {
  return 'btn btn-block btn-warning';
}
if ( ns > 0 || ns > this.rows_all.agentes_conectados_ahora / 6 ) {
  return 'btn btn-block btn-success';
}

return 'btn btn-block btn-light';

}


}
