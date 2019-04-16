import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
;
import { AngularMaterialModule } from './../../../shared/modules';

import { ConfigModule } from '../../config/config.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AgentesRoutingModule } from './agentes-routing.module';
import { AgentesComponent } from './agentes.component';
import { AgentesListComponent } from './agentes-list/agentes-list.component';
import { AgentesConfigComponent } from './agentes-config/agentes-config.component';
import { AgentesIntroComponent } from './agentes-intro/agentes-intro.component';
import { AgListTableComponent } from './agentes-list/ag-list-table/ag-list-table.component';

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
    AgentesRoutingModule,
  ],
  declarations: [
    AgentesComponent, 
    AgentesListComponent, 
    AgentesConfigComponent, 
    AgentesIntroComponent, 
    AgListTableComponent,
  ]
})
export class AgentesModule { }
