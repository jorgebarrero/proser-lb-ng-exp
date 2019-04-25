import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';

import { AngularMaterialModule } from 'src/app/shared/modules/angular-material/angular-material.module';

import { ConexionDesconexionRoutingModule } from './conexion-desconexion-routing.module';

import { ConexionDesconexionComponent } from './conexion-desconexion.component';
import { ConexionDesconexionIntroComponent } from './conexion-desconexion-intro/conexion-desconexion-intro.component';
import { ConexionDesconexionListComponent } from './conexion-desconexion-list/conexion-desconexion-list.component';
import { CdListTableComponent } from './conexion-desconexion-list/cd-list-table/cd-list-table.component';
import { ConexionDesconexionConfigComponent } from './conexion-desconexion-config/conexion-desconexion-config.component';

import { MainReportModule } from '../../reports/main-report/main-report.module';

import { ConfigModule } from '../../config/config.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NowModule } from 'src/app/shared/modules/now/now.module';
import { ConnectionModule } from 'src/app/shared/modules/connection/connection.module';
import { AlertModule } from 'src/app/shared/modules/alert/alert.module';

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
    MainReportModule,
    AlertModule,
    ConnectionModule,
    NowModule,
    ConexionDesconexionRoutingModule
  ],
  declarations: [
    ConexionDesconexionComponent,
    ConexionDesconexionIntroComponent,
    ConexionDesconexionListComponent,
    CdListTableComponent,
    ConexionDesconexionConfigComponent,
  ]
})
export class ConexionDesconexionModule { }
