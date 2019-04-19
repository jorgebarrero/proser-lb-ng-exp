import { Component, OnInit } from '@angular/core';

import { InvSupervisorService } from 'src/app/shared/services/configuration/inv-supervisor.service';
import { InvSupervisor } from 'src/app/shared/models/configuration/InvSupervisor';
import { ExcelService } from 'src/app/shared/services/helpers/excel.service';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AlertModel } from 'src/app/shared/models/Alert';

@Component({
  selector: 'app-asignation-list',
  templateUrl: './asignation-list.component.html',
  styleUrls: ['./asignation-list.component.scss']
})
export class AsignationListComponent implements OnInit {

  constructor(
    private invSupervisorService: InvSupervisorService,
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
    { prop: 'inv_supervisor_name', name: 'Supervisor', width: 200 },
    { prop: 'inv_supervisor_schedule_name', name: 'Horario', width: 100 },
    { prop: 'inv_supervisor_status', name: 'Estado', width: 50 },
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
    this.invSupervisorService.getAllRecords(query)
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
    const query = JSON.stringify({where: {inv_supervisor_status: 'A'}});
    console.log('query', query);

    this.invSupervisorService.getSelectedRecords(query)
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
    const query = JSON.stringify({where: {inv_supervisor_status: 'I'}});
    console.log('query', query);

    this.invSupervisorService.getSelectedRecords(query)
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

          id: x.inv_supervisor_id,
          status: x.inv_supervisor_status,
          chk: x.inv_supervisor_chk,
          nombre: x.inv_supervisor_name,
          nombre_corto: x.inv_supervisor_shortname,
          tipo: x.inv_supervisor_type,
          identificacion: x.inv_supervisor_legal_id,
          numero_interno: x.inv_supervisor_internal_id,
          id_turno: x.inv_supervisor_schedule_id,
          nombre_turno: x.inv_supervisor_schedule_name,
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
        return d.inv_supervisor_name.toLowerCase().indexOf(val) !== -1 || !val;
      });



      // update the rows

      this.rows = temp;
      // Whenever the filter changes, always go back to the first page
      // this.table.offset = 0;

    }

}
