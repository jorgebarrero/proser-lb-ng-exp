import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutboundDaylyRoutingModule } from './outbound-dayly-routing.module';
import { OutboundDaylyComponent } from './outbound-dayly.component';
import { OutboundDaylyIntroComponent } from './outbound-dayly-intro/outbound-dayly-intro.component';
import { OutboundDaylyMenuComponent } from './outbound-dayly-menu/outbound-dayly-menu.component';
import { OutboundDaylyReportComponent } from './outbound-dayly-report/outbound-dayly-report.component';
import { OutboundDaylyFilterComponent } from './outbound-dayly-filter/outbound-dayly-filter.component';
import { OutboundDaylyGraphComponent } from './outbound-dayly-graph/outbound-dayly-graph.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [OutboundDaylyComponent, OutboundDaylyIntroComponent, OutboundDaylyMenuComponent, OutboundDaylyReportComponent, OutboundDaylyFilterComponent, OutboundDaylyGraphComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    OutboundDaylyRoutingModule
  ]
})
export class OutboundDaylyModule { }
