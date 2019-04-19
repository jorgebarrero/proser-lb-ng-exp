import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboundDaylyRoutingModule } from './inbound-dayly-routing.module';
import { InboundDaylyComponent } from './inbound-dayly.component';
import { InboundDaylyIntroComponent } from './inbound-dayly-intro/inbound-dayly-intro.component';
import { InboundDaylyMenuComponent } from './inbound-dayly-menu/inbound-dayly-menu.component';
import { InboundDaylyReportComponent } from './inbound-dayly-report/inbound-dayly-report.component';
import { InboundDaylyFilterComponent } from './inbound-dayly-filter/inbound-dayly-filter.component';
import { InboundDaylyGraphComponent } from './inbound-dayly-graph/inbound-dayly-graph.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [InboundDaylyComponent, InboundDaylyIntroComponent, InboundDaylyMenuComponent, InboundDaylyReportComponent, InboundDaylyFilterComponent, InboundDaylyGraphComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    InboundDaylyRoutingModule
  ]
})
export class InboundDaylyModule { }
