import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
;
import { AngularMaterialModule } from './../../../shared/modules';

import { ConexionDesconexionRoutingModule } from './conexion-desconexion-routing.module';

import { ConexionDesconexionComponent } from './conexion-desconexion.component';
import { ConexionDesconexionIntroComponent } from './conexion-desconexion-intro/conexion-desconexion-intro.component';
import { ConexionDesconexionListComponent } from './conexion-desconexion-list/conexion-desconexion-list.component';
import { CdListTableComponent } from './conexion-desconexion-list/cd-list-table/cd-list-table.component';
import { ConexionDesconexionConfigComponent } from './conexion-desconexion-config/conexion-desconexion-config.component';

import { ConfigModule } from '../../config/config.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


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
