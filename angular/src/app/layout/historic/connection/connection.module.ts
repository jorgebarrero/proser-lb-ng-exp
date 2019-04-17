import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectionRoutingModule } from './connection-routing.module';
import { ConnectionComponent } from './connection.component';
import { ConnectionIntroComponent } from './connection-intro/connection-intro.component';
import { ConnectionMenuComponent } from './connection-menu/connection-menu.component';
import { ConnectionReportComponent } from './connection-report/connection-report.component';
import { ConnectionFilterComponent } from './connection-filter/connection-filter.component';
import { ConnectionGraphComponent } from './connection-graph/connection-graph.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [ConnectionComponent, ConnectionIntroComponent, ConnectionMenuComponent, ConnectionReportComponent, ConnectionFilterComponent, ConnectionGraphComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    ConnectionRoutingModule
  ]
})
export class ConnectionModule { }
