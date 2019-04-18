import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreakDetailRoutingModule } from './break-detail-routing.module';
import { BreakDetailComponent } from './break-detail.component';
import { BreakDetailIntroComponent } from './break-detail-intro/break-detail-intro.component';
import { BreakDetailMenuComponent } from './break-detail-menu/break-detail-menu.component';
import { BreakDetailReportComponent } from './break-detail-report/break-detail-report.component';
import { BreakDetailGraphComponent } from './break-detail-graph/break-detail-graph.component';
import { BreakDetailFilterComponent } from './break-detail-filter/break-detail-filter.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [BreakDetailComponent, BreakDetailIntroComponent, BreakDetailMenuComponent, BreakDetailReportComponent, BreakDetailGraphComponent, BreakDetailFilterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    BreakDetailRoutingModule
  ]
})
export class BreakDetailModule { }
