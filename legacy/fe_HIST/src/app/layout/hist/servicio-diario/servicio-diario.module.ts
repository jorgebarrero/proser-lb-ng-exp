import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';

import { AngularMaterialModule } from './../../../shared/modules';
import { NgxJsonViewerModule } from 'ngx-json-viewer';


import { ConfigModule } from '../../config/config.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ServicioDiarioRoutingModule } from './servicio-diario-routing.module';
import { ServicioDiarioComponent } from './servicio-diario.component';
import { ServicioDiarioListComponent } from './servicio-diario-list/servicio-diario-list.component';
import { ServicioDiarioIntroComponent } from './servicio-diario-intro/servicio-diario-intro.component';
import { SdListTableComponent } from './servicio-diario-list/sd-list-table/sd-list-table.component';
import { ServicioDiarioConfigComponent } from './servicio-diario-config/servicio-diario-config.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    ConfigModule,
    NgbModule,
    NgxJsonViewerModule,
    AngularMaterialModule,
    ServicioDiarioRoutingModule
  ],
  declarations: [
    ServicioDiarioComponent, 
    ServicioDiarioListComponent, 
    ServicioDiarioIntroComponent, 
    SdListTableComponent, 
    ServicioDiarioConfigComponent
  ]
})
export class ServicioDiarioModule { }
