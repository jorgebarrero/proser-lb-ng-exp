import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';

import { AngularMaterialModule } from './../../../shared/modules';


import { DetalladoAuxiliaresRoutingModule } from './detallado-auxiliares-routing.module';
import { DetalladoAuxiliaresComponent } from './detallado-auxiliares.component';
import { DetalladoAuxiliaresListComponent } from './detallado-auxiliares-list/detallado-auxiliares-list.component';
import { DetalladoAuxiliaresIntroComponent } from './detallado-auxiliares-intro/detallado-auxiliares-intro.component';
import { DaListTableComponent } from './detallado-auxiliares-list/da-list-table/da-list-table.component';
import { DetalladoAuxiliaresConfigComponent } from './detallado-auxiliares-config/detallado-auxiliares-config.component';
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
    DetalladoAuxiliaresRoutingModule
  ],
  declarations: [DetalladoAuxiliaresComponent, DetalladoAuxiliaresListComponent, DetalladoAuxiliaresIntroComponent, DaListTableComponent, DetalladoAuxiliaresConfigComponent]
})
export class DetalladoAuxiliaresModule { }
