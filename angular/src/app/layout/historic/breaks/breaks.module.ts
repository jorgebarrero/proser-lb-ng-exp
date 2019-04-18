import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreaksRoutingModule } from './breaks-routing.module';
import { BreaksComponent } from './breaks.component';
import { BreaksFilterComponent } from './breaks-filter/breaks-filter.component';
import { BreaksMenuComponent } from './breaks-menu/breaks-menu.component';
import { BreaksIntroComponent } from './breaks-intro/breaks-intro.component';
import { BreaksReportComponent } from './breaks-report/breaks-report.component';
import { BreaksGraphComponent } from './breaks-graph/breaks-graph.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [BreaksComponent, BreaksFilterComponent, BreaksMenuComponent, BreaksIntroComponent, BreaksReportComponent, BreaksGraphComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    BreaksRoutingModule
  ]
})
export class BreaksModule { }
