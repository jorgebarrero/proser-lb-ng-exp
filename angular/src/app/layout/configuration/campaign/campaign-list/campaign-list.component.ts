import { Component, OnInit } from '@angular/core';
import { InvCampaignService } from 'src/app/shared/services/configuration/inv-campaign.service';
import { InvCampaign } from 'src/app/shared/models/configuration/InvCampaign';
import { ExcelService } from 'src/app/shared/services/helpers/excel.service';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AlertModel } from 'src/app/shared/models/Alert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss']
})
export class CampaignListComponent implements OnInit {

  constructor(
    private invCampaignService: InvCampaignService,
    private excelService: ExcelService,
    private modalService: NgbModal,
    private router: Router

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
    { prop: 'inv_campaign_name', name: 'Campaign', width: 200 },
    { prop: 'inv_campaign_schedule_name', name: 'Horario', width: 100 },
    { prop: 'inv_campaign_status', name: 'Estado', width: 50 },
  ];

  closeResult: string;

  ngOnInit() {

    this.getAll_Records('');
  }

  onSelect(event) {

    this.selectedInList = null;
    this.selectedInList = this.selected[0];
    // console.log('seleccionado', this.selected[0] );

  }


  onActivate(event) {

  }

  getAll_Records(query?) {
    this.selected = [];
    this.invCampaignService.getAllRecords(query)
    .subscribe( data => {
      data === undefined ? this.masterlist = 0 : this.masterlist = 1;
      // console.log('data', data);
              this.original_list = data;
              this.rows = data;
          }
        );
  }

  onGetActive_Records() {
    this.selected = [];
    const query = JSON.stringify({where: {inv_campaign_status: 'A'}});
    console.log('query', query);

    this.invCampaignService.getSelectedRecords(query)
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
    const query = JSON.stringify({where: {inv_campaign_status: 'I'}});
    console.log('query', query);

    this.invCampaignService.getSelectedRecords(query)
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

          id: x.inv_campaign_id,
          status: x.inv_campaign_status,
          chk: x.inv_campaign_chk,
          nombre: x.inv_campaign_name,
          nombre_corto: x.inv_campaign_shortname,
          tipo: x.inv_campaign_type,
          identificacion: x.inv_campaign_legal_id,
          numero_interno: x.inv_campaign_internal_id,
          id_turno: x.inv_campaign_schedule_id,
          nombre_turno: x.inv_campaign_schedule_name,
        };
      });

      this.excelService.exportAsExcelFile(filterData, name);
    }

    openDetail(detail) {
      this.modalService.open(detail, {size: 'lg'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    // openEdit(edit) {
    //   this.modalService.open(edit, {size: 'lg'}).result.then((result) => {
    //     this.closeResult = `Closed with: ${result}`;
    //   }, (reason) => {
    //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    //   });
    // }

    openEdit(edit) {
      this.modalService.open(edit, {size: 'lg'});
    }

    // closeEdit(edit) {
    //   this.modalService.close(edit);
    // }

    openAdd(add) {
      this.modalService.open(add, {size: 'lg'}).result.then((result) => {
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
        return d.inv_campaign_name.toLowerCase().indexOf(val) !== -1 || !val;
      });

      // update the rows

      this.rows = temp;
      // Whenever the filter changes, always go back to the first page
      // this.table.offset = 0;

    }

    onEdit(selected) {

    console.log (selected)
      localStorage.setItem("Campaign", JSON.stringify(selected))
      this.router.navigate(['/configuration/campaign/edit']);
      // this.router("/configuration/campaign/edit")

    }


    onNew() {

        this.router.navigate(['/configuration/campaign/add']);
        // this.router("/configuration/campaign/edit")
  
      }
}
