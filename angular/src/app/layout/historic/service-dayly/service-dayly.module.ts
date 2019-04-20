import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceDaylyRoutingModule } from './service-dayly-routing.module';
import { ServiceDaylyComponent } from './service-dayly.component';
import { ServiceDaylyIntroComponent } from './service-dayly-intro/service-dayly-intro.component';
import { ServiceDaylyMenuComponent } from './service-dayly-menu/service-dayly-menu.component';
import { ServiceDaylyReportComponent } from './service-dayly-report/service-dayly-report.component';
import { ServiceDaylyFilterComponent } from './service-dayly-filter/service-dayly-filter.component';
import { ServiceDaylyGraphComponent } from './service-dayly-graph/service-dayly-graph.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [ServiceDaylyComponent, ServiceDaylyIntroComponent, ServiceDaylyMenuComponent, ServiceDaylyReportComponent, ServiceDaylyFilterComponent, ServiceDaylyGraphComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    ServiceDaylyRoutingModule
  ]
})
export class ServiceDaylyModule { }
