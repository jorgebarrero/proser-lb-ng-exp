import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';

import { AngularMaterialModule } from './../../../shared/modules';

import { DetalleAsignacionesRoutingModule } from './detalle-asignaciones-routing.module';

import { DetalleAsignacionesComponent } from './detalle-asignaciones.component';
import { DetalleAsignacionesIntroComponent } from './detalle-asignaciones-intro/detalle-asignaciones-intro.component';
import { DetalleAsignacionesListComponent } from './detalle-asignaciones-list/detalle-asignaciones-list.component';
import { CyListTableComponent } from './detalle-asignaciones-list/cy-list-table/cy-list-table.component';
import { DetalleAsignacionesConfigComponent } from './detalle-asignaciones-config/detalle-asignaciones-config.component';

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
    DetalleAsignacionesRoutingModule
  ],
  declarations: [
    DetalleAsignacionesComponent,
    DetalleAsignacionesIntroComponent,
    DetalleAsignacionesListComponent,
    CyListTableComponent,
    DetalleAsignacionesConfigComponent,
  ]
})
export class DetalleAsignacionesModule { }
