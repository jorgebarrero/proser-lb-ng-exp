

import { Component, OnInit, Input } from '@angular/core';

import { SelectedRecord } from './../../../../../shared/models';


@Component({
  selector: 'app-me-list-table',
  templateUrl: './me-list-table.component.html',
  styleUrls: ['./me-list-table.component.scss']
})
export class MeListTableComponent implements OnInit {


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


constructor() { }

ngOnInit() {

}

onActivate($event) {

}

onSelect($event) {

}

}