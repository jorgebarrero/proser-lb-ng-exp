
import { Component, OnInit, Input } from '@angular/core';

import { DetalleLlamadas } from '../../../../../shared/models/reports/detalle-llamadas';
import { OperativoDetallado, SelectedRecord } from './../../../../../shared/models';
import { Selection } from './../../../../../shared/models/selection';

import { saveAs } from 'file-saver';
import { DownloadService } from '../../../../../shared/services/download.service';



@Component({
  selector: 'app-dl-list-table',
  templateUrl: './dl-list-table.component.html',
  styleUrls: ['./dl-list-table.component.scss']
})
export class DlListTableComponent implements OnInit {

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


constructor(
  private downloadService: DownloadService
) {

  this.selected = [] ;

}

ngOnInit() {

}

onActivate($event) {

}

onDownload() {

  console.log('bajando la data');

  this.downloadService.export(
    'http://10.30.4.54:8080/grabaciones/2018/10/01/q-2701-4145200351-20181001-080302-1538395381.64030.gsm'
    ).subscribe(
    data => saveAs(data, `grabacion.gsm`));
}

onSelect(value) {

  // console.log('value', value);

}

showDetail(value) {
  // console.log('value', value);
if (value[0].cdr) {
  let registro = value[0].cdr;

  // console.log('value', registro);

  let nombre_grabacion = registro.cdr.agente;

  console.log('nombre_grabacion', nombre_grabacion);
}
}

}
