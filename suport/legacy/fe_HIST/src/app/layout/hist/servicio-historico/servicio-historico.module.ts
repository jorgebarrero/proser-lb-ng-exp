import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';

import { AngularMaterialModule } from './../../../shared/modules';
import { NgxJsonViewerModule } from 'ngx-json-viewer';


import { ConfigModule } from '../../config/config.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ServicioHistoricoRoutingModule } from './servicio-historico-routing.module';
import { ServicioHistoricoComponent } from './servicio-historico.component';
import { ServicioHistoricoConfigComponent } from './servicio-historico-config/servicio-historico-config.component';
import { ServicioHistoricoIntroComponent } from './servicio-historico-intro/servicio-historico-intro.component';
import { ServicioHistoricoListComponent } from './servicio-historico-list/servicio-historico-list.component';
import { ShListTableComponent } from './servicio-historico-list/sh-list-table/sh-list-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    AngularMaterialModule,
    NgxJsonViewerModule,
    ConfigModule,
    NgbModule,
    ServicioHistoricoRoutingModule
  ],
  declarations: [
    ServicioHistoricoComponent,
    ServicioHistoricoConfigComponent,
    ServicioHistoricoIntroComponent,
    ServicioHistoricoListComponent,
    ShListTableComponent
  ]
})
export class ServicioHistoricoModule { }
