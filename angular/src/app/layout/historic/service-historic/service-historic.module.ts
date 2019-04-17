import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceHistoricRoutingModule } from './service-historic-routing.module';
import { ServiceHistoricComponent } from './service-historic.component';
import { ServiceHistoricIntroComponent } from './service-historic-intro/service-historic-intro.component';
import { ServiceHistoricMenuComponent } from './service-historic-menu/service-historic-menu.component';
import { ServiceHistoricFilterComponent } from './service-historic-filter/service-historic-filter.component';
import { ServiceHistoricReportComponent } from './service-historic-report/service-historic-report.component';
import { ServiceHistoricGraphComponent } from './service-historic-graph/service-historic-graph.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [ServiceHistoricComponent, ServiceHistoricIntroComponent, ServiceHistoricMenuComponent, ServiceHistoricFilterComponent, ServiceHistoricReportComponent, ServiceHistoricGraphComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    ServiceHistoricRoutingModule
  ]
})
export class ServiceHistoricModule { }
