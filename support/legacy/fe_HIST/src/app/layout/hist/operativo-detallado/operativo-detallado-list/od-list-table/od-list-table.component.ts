
import { Component, OnInit, Input } from '@angular/core';

import { OperativoDetallado, SelectedRecord } from './../../../../../shared/models';
import { Selection } from './../../../../../shared/models/selection';


@Component({
  selector: 'app-od-list-table',
  templateUrl: './od-list-table.component.html',
  styleUrls: ['./od-list-table.component.scss']
})
export class OdListTableComponent implements OnInit {

  @Input() rows;
  @Input() rows_all;
  @Input() filter;
  @Input() selection;
// Selection values
 //   selection = new Selection;


// rows: OperativoDetallado[] = [];
loadingIndicator: boolean = false;
emptyMessage: 'Sin data para mostrar';
reorderable: boolean = true;
selected: SelectedRecord[] = [];
itemsList;

totals

  constructor( ) { }

  ngOnInit() {

    
  }

  onActivate($event) {

  }

  onSelect(item) {

    console.log(item.selected[0])

  }

}
