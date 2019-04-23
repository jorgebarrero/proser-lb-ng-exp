import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';

import { AngularMaterialModule } from './../../../shared/modules';

import { ConfigModule } from '../../config/config.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { EntranteDashboardRoutingModule } from './entrante-dashboard-routing.module';
import { EntranteDashboardComponent } from './entrante-dashboard.component';
import { EntranteDashboardConfigComponent } from './entrante-dashboard-config/entrante-dashboard-config.component';
import { EntranteDashboardIntroComponent } from './entrante-dashboard-intro/entrante-dashboard-intro.component';
import { EntranteDashboardListComponent } from './entrante-dashboard-list/entrante-dashboard-list.component';
import { EdDashboardComponent } from './entrante-dashboard-list/ed-dashboard/ed-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    ConfigModule,
    NgbModule,
    AngularMaterialModule,
    EntranteDashboardRoutingModule
  ],
  declarations: [
    EntranteDashboardComponent,
    EntranteDashboardConfigComponent,
    EntranteDashboardIntroComponent,
    EntranteDashboardListComponent,
    EdDashboardComponent
  ]
})
export class EntranteDashboardModule { }
