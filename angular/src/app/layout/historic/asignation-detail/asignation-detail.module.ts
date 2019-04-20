import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsignationDetailRoutingModule } from './asignation-detail-routing.module';
import { AsignationDetailComponent } from './asignation-detail.component';
import { AsignationDetailReportComponent } from './asignation-detail-report/asignation-detail-report.component';
import { AsignationDetailGraphComponent } from './asignation-detail-graph/asignation-detail-graph.component';
import { AsignationDetailFilterComponent } from './asignation-detail-filter/asignation-detail-filter.component';
import { AsignationDetailIntroComponent } from './asignation-detail-intro/asignation-detail-intro.component';
import { AsignationDetailMenuComponent } from './asignation-detail-menu/asignation-detail-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [AsignationDetailComponent, AsignationDetailReportComponent, AsignationDetailGraphComponent, AsignationDetailFilterComponent, AsignationDetailIntroComponent, AsignationDetailMenuComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    AsignationDetailRoutingModule
  ]
})
export class AsignationDetailModule { }
