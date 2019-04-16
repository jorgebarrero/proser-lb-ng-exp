import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';

import { AngularMaterialModule } from './../../../shared/modules';


import { DetalleLlamadasRoutingModule } from './detalle-llamadas-routing.module';

import { DetalleLlamadasComponent } from './detalle-llamadas.component';
import { DetalleLlamadasListComponent } from './detalle-llamadas-list/detalle-llamadas-list.component';
import { DetalleLlamadasIntroComponent } from './detalle-llamadas-intro/detalle-llamadas-intro.component';
import { DlListTableComponent } from './detalle-llamadas-list/dl-list-table/dl-list-table.component';
import { DetalleLlamadasConfigComponent } from './detalle-llamadas-config/detalle-llamadas-config.component';

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
    DetalleLlamadasRoutingModule
  ],
  declarations: [
    DetalleLlamadasComponent, 
    DetalleLlamadasListComponent, 
    DetalleLlamadasIntroComponent, 
    DlListTableComponent, 
    DetalleLlamadasConfigComponent
  ]
})
export class DetalleLlamadasModule { }
