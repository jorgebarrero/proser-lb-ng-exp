import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationDetailRoutingModule } from './operation-detail-routing.module';
import { OperationDetailComponent } from './operation-detail.component';
import { OperationDetailIntroComponent } from './operation-detail-intro/operation-detail-intro.component';
import { OperationDetailMenuComponent } from './operation-detail-menu/operation-detail-menu.component';
import { OperationDetailFilterComponent } from './operation-detail-filter/operation-detail-filter.component';
import { OperationDetailGraphComponent } from './operation-detail-graph/operation-detail-graph.component';
import { OperationDetailReportComponent } from './operation-detail-report/operation-detail-report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [OperationDetailComponent, OperationDetailIntroComponent, OperationDetailMenuComponent, OperationDetailFilterComponent, OperationDetailGraphComponent, OperationDetailReportComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    OperationDetailRoutingModule
  ]
})
export class OperationDetailModule { }
