import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';

import { AngularMaterialModule } from './../../../shared/modules';

import { DetalleAuxiliaresRoutingModule } from './detalle-auxiliares-routing.module';

import { DetalleAuxiliaresComponent } from './detalle-auxiliares.component';
import { DetalleAuxiliaresIntroComponent } from './detalle-auxiliares-intro/detalle-auxiliares-intro.component';
import { DetalleAuxiliaresListComponent } from './detalle-auxiliares-list/detalle-auxiliares-list.component';
import { CxListTableComponent } from './detalle-auxiliares-list/cx-list-table/cx-list-table.component';
import { DetalleAuxiliaresConfigComponent } from './detalle-auxiliares-config/detalle-auxiliares-config.component';

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
    DetalleAuxiliaresRoutingModule
  ],
  declarations: [
    DetalleAuxiliaresComponent,
    DetalleAuxiliaresIntroComponent,
    DetalleAuxiliaresListComponent,
    CxListTableComponent,
    DetalleAuxiliaresConfigComponent,
  ]
})
export class DetalleAuxiliaresModule { }
