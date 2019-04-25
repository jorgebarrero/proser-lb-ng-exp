
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';

import { AngularMaterialModule } from './../../../shared/modules';

import { OperativoDetalladoRoutingModule } from './operativo-detallado-routing.module';

import { OperativoDetalladoComponent } from './operativo-detallado.component';
import { OperativoDetalladoListComponent } from './operativo-detallado-list/operativo-detallado-list.component';
import { OperativoDetalladoIntroComponent } from './operativo-detallado-intro/operativo-detallado-intro.component';
import { OdListTableComponent } from './operativo-detallado-list/od-list-table/od-list-table.component';
import { OperativoDetalladoConfigComponent } from './operativo-detallado-config/operativo-detallado-config.component';

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
    OperativoDetalladoRoutingModule
  ],
  declarations: [
    OperativoDetalladoComponent,
    OperativoDetalladoListComponent,
    OperativoDetalladoIntroComponent,
    OdListTableComponent,
    OperativoDetalladoConfigComponent,
  ]
})
export class OperativoDetalladoModule { }
