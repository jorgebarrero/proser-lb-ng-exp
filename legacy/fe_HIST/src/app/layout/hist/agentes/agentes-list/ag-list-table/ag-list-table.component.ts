

import { Component, OnInit, Input } from '@angular/core';

import { SelectedRecord } from './../../../../../shared/models';

@Component({
  selector: 'app-ag-list-table',
  templateUrl: './ag-list-table.component.html',
  styleUrls: ['./ag-list-table.component.scss']
})
export class AgListTableComponent implements OnInit {

 
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
