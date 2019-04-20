import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceIntervalRoutingModule } from './service-interval-routing.module';
import { ServiceIntervalComponent } from './service-interval.component';
import { ServiceIntervalIntroComponent } from './service-interval-intro/service-interval-intro.component';
import { ServiceIntervalMenuComponent } from './service-interval-menu/service-interval-menu.component';
import { ServiceIntervalFilterComponent } from './service-interval-filter/service-interval-filter.component';
import { ServiceIntervalReportComponent } from './service-interval-report/service-interval-report.component';
import { ServiceIntervalGraphComponent } from './service-interval-graph/service-interval-graph.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [ServiceIntervalComponent, ServiceIntervalIntroComponent, ServiceIntervalMenuComponent, ServiceIntervalFilterComponent, ServiceIntervalReportComponent, ServiceIntervalGraphComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    ServiceIntervalRoutingModule
  ]
})
export class ServiceIntervalModule { }
