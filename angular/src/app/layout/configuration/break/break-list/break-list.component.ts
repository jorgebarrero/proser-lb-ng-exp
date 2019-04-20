import { Component, OnInit } from '@angular/core';

import { InvBreakService } from 'src/app/shared/services/configuration/inv-break.service';
import { InvBreak} from 'src/app/shared/models/configuration/InvBreak';
import { ExcelService } from 'src/app/shared/services/helpers/excel.service';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AlertModel } from 'src/app/shared/models/Alert';


@Component({
  selector: 'app-break-list',
  templateUrl: './break-list.component.html',
  styleUrls: ['./break-list.component.scss']
})
export class BreakListComponent implements OnInit {

  constructor(
    private invBreakService: InvBreakService,
    private excelService: ExcelService,
    private modalService: NgbModal,

  ) { }

  registerForm;
  submitted = false;
  alertMessage = new AlertModel;

  itemsInList = 15;
  cantidadItems = [1, 5, 10, 15, 20, 25, 50, 100, 150, 200, 500 ];
  temp;
  table;

  itemsList = 10;
  tableMessage = {emptyMessage: 'Sin datos que mostrar'};
  selected = [];
  selectedInList;
  loadingIndicator = true;
  reorderable = true;

  findInList;

  masterlist;
  original_list;
  rows: any;

  columns = [
    { prop: 'inv_break_name', name: 'Auxiliares', width: 200 },
    { prop: 'inv_break_schedule_name', name: 'Horario', width: 100 },
    { prop: 'inv_break_status', name: 'Estado', width: 50 },
  ];

  closeResult: string;

  ngOnInit() {

    this.getAll_Records('');
  }

  onSelect(event) {

    this.selectedInList = null;
    this.selectedInList = this.selected[0];
    console.log('seleccionado', this.selected[0] );

  }


  onActivate(event) {

  }

  getAll_Records(query?) {
    this.selected = [];
    this.invBreakService.getAllRecords(query)
    .subscribe( data => {
      data === undefined ? this.masterlist = 0 : this.masterlist = 1;
      console.log('data', data);
              this.original_list = data;
              this.rows = data;
          }
        );
  }

  onGetActive_Records() {
    this.selected = [];
    const query = JSON.stringify({where: {inv_break_status: 'A'}});
    console.log('query', query);

    this.invBreakService.getSelectedRecords(query)
    .subscribe( data => {
      data === undefined ? this.masterlist = 0 : this.masterlist = 1;
      console.log('data', data);
              this.original_list = data;
              this.rows = data;
          }
        );
  }

  onGetInactive_Records() {
    this.selected = [];
    const query = JSON.stringify({where: {inv_break_status: 'I'}});
    console.log('query', query);

    this.invBreakService.getSelectedRecords(query)
    .subscribe( data => {
      data === undefined ? this.masterlist = 0 : this.masterlist = 1;
      console.log('data', data);
              this.original_list = data;
              this.rows = data;
          }
        );
  }


  onFind_Record(data, findString) {

    this.rows = data;
  }


    // Export data to Excel
    exportToExcel(data, name) {

      const filterData = data
      .map( x => {
        return {

          id: x.inv_break_id,
          status: x.inv_break_status,
          chk: x.inv_break_chk,
          nombre: x.inv_break_name,
          nombre_corto: x.inv_break_shortname,
          tipo: x.inv_break_type,
          identificacion: x.inv_break_legal_id,
          numero_interno: x.inv_break_internal_id,
          id_turno: x.inv_break_schedule_id,
          nombre_turno: x.inv_break_schedule_name,
        };
      });

      this.excelService.exportAsExcelFile(filterData, name);
    }

    open(content) {
      this.modalService.open(content, {size: 'lg'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }

    onResetForm() {
      this.alertMessage = new AlertModel;
      this.submitted = false;
      this.registerForm.reset();
    }


    updateFilter(event) {
      const val = event.target.value.toLowerCase();

      // console.log('UPDATE FILTER', val);
      // console.log('rows', this.rows);

      if (val === '') {
        this.getAll_Records('');
      }

      // filter our data
      const temp = this.rows.filter(function(d) {
        return d.inv_break_name.toLowerCase().indexOf(val) !== -1 || !val;
      });



      // update the rows

      this.rows = temp;
      // Whenever the filter changes, always go back to the first page
      // this.table.offset = 0;

    }

}
