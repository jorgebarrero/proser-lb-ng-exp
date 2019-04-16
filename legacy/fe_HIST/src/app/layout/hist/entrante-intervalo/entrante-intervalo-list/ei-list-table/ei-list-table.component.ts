

import { Component, OnInit, Input } from '@angular/core';

import { SelectedRecord } from './../../../../../shared/models';



@Component({
  selector: 'app-ei-list-table',
  templateUrl: './ei-list-table.component.html',
  styleUrls: ['./ei-list-table.component.scss']
})
export class EdListTableComponent implements OnInit {


  @Input() rows;
  @Input() rows_all;
  @Input() filter;
  @Input() selection;

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