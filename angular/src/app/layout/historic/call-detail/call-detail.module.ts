import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallDetailRoutingModule } from './call-detail-routing.module';
import { CallDetailComponent } from './call-detail.component';
import { CallDetailIntroComponent } from './call-detail-intro/call-detail-intro.component';
import { CallDetailMenuComponent } from './call-detail-menu/call-detail-menu.component';
import { CallDetailReportComponent } from './call-detail-report/call-detail-report.component';
import { CallDetailGraphComponent } from './call-detail-graph/call-detail-graph.component';
import { CallDetailFilterComponent } from './call-detail-filter/call-detail-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [CallDetailComponent, CallDetailIntroComponent, CallDetailMenuComponent, CallDetailReportComponent, CallDetailGraphComponent, CallDetailFilterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    CallDetailRoutingModule
  ]
})
export class CallDetailModule { }
