
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';

import { AngularMaterialModule } from './../../../shared/modules';


import { ServicioIntervaloRoutingModule } from './servicio-intervalo-routing.module';
import { ServicioIntervaloComponent } from './servicio-intervalo.component';
import { ServicioIntervaloIntroComponent } from './servicio-intervalo-intro/servicio-intervalo-intro.component';

import { ServicioIntervaloListComponent } from './servicio-intervalo-list/servicio-intervalo-list.component';
import { SnListTableComponent } from './servicio-intervalo-list/sn-list-table/sn-list-table.component';
import { ServicioIntervaloConfigComponent } from './servicio-intervalo-config/servicio-intervalo-config.component';
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
    ServicioIntervaloRoutingModule
  ],
  declarations: [
    ServicioIntervaloComponent,
    ServicioIntervaloListComponent,
    ServicioIntervaloIntroComponent,
    SnListTableComponent,
    ServicioIntervaloConfigComponent,
  ]
})
export class ServicioIntervaloModule { }
