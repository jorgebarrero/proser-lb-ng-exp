

import { Component, OnInit, Input, TemplateRef, ViewChild } from '@angular/core';

import { SelectedRecord } from './../../../../../shared/models';



@Component({
  selector: 'app-mi-list-table',
  templateUrl: './mi-list-table.component.html',
  styleUrls: ['./mi-list-table.component.scss']
})
export class MiListTableComponent implements OnInit {

  @Input() rows;
  @Input() rows_all;
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



currencySumm;
currencyCode;

constructor() { }

ngOnInit() {

  // console.log('ROWS IN TABLE', this.rows);

}

onActivate($event) {

}

onSelect($event) {

}

emptySumm() {
  return null;
}

caclulateSumm( item ) {

  let elements = item.
  map( x => {
    return item.cdr.llamadas_recibidas;
  });

  let result;
  elements.forEach((x) => {
    result += x;
  });
  return result;
}

}
