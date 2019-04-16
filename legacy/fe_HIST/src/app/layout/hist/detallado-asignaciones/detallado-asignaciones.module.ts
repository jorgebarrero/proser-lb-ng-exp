import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';

import { AngularMaterialModule } from './../../../shared/modules';
import { ConfigModule } from '../../config/config.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import { DetalladoAsignacionesRoutingModule } from './detallado-asignaciones-routing.module';
import { DetalladoAsignacionesComponent } from './detallado-asignaciones.component';
import { DetalladoAsignacionesListComponent } from './detallado-asignaciones-list/detallado-asignaciones-list.component';
import { DetalladoAsignacionesIntroComponent } from './detallado-asignaciones-intro/detallado-asignaciones-intro.component';
import { DetalladoAsignacionesConfigComponent } from './detallado-asignaciones-config/detallado-asignaciones-config.component';
import { DsListTableComponent } from './detallado-asignaciones-list/ds-list-table/ds-list-table.component';

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
    DetalladoAsignacionesRoutingModule
  ],
  declarations: [
    DetalladoAsignacionesComponent,
    DetalladoAsignacionesListComponent,
    DetalladoAsignacionesIntroComponent,
    DetalladoAsignacionesConfigComponent,
    DsListTableComponent
  ]
})
export class DetalladoAsignacionesModule { }
