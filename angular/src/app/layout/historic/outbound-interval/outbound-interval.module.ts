import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutboundIntervalRoutingModule } from './outbound-interval-routing.module';
import { OutboundIntervalComponent } from './outbound-interval.component';
import { OutboundIntervalIntroComponent } from './outbound-interval-intro/outbound-interval-intro.component';
import { OutboundIntervalMenuComponent } from './outbound-interval-menu/outbound-interval-menu.component';
import { OutboundIntervalGraphComponent } from './outbound-interval-graph/outbound-interval-graph.component';
import { OutboundIntervalFilterComponent } from './outbound-interval-filter/outbound-interval-filter.component';
import { OutboundIntervalReportComponent } from './outbound-interval-report/outbound-interval-report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [OutboundIntervalComponent, OutboundIntervalIntroComponent, OutboundIntervalMenuComponent, OutboundIntervalGraphComponent, OutboundIntervalFilterComponent, OutboundIntervalReportComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    OutboundIntervalRoutingModule
  ]
})
export class OutboundIntervalModule { }
