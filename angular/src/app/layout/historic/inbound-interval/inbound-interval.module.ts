import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboundIntervalRoutingModule } from './inbound-interval-routing.module';
import { InboundIntervalComponent } from './inbound-interval.component';
import { InboundIntervalIntroComponent } from './inbound-interval-intro/inbound-interval-intro.component';
import { InboundIntervalMenuComponent } from './inbound-interval-menu/inbound-interval-menu.component';
import { InboundIntervalReportComponent } from './inbound-interval-report/inbound-interval-report.component';
import { InboundIntervalFilterComponent } from './inbound-interval-filter/inbound-interval-filter.component';
import { InboundIntervalGraphComponent } from './inbound-interval-graph/inbound-interval-graph.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [InboundIntervalComponent, InboundIntervalIntroComponent, InboundIntervalMenuComponent, InboundIntervalReportComponent, InboundIntervalFilterComponent, InboundIntervalGraphComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    InboundIntervalRoutingModule
  ]
})
export class InboundIntervalModule { }
