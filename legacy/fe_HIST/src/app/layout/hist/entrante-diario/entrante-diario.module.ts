import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';

import { AngularMaterialModule } from './../../../shared/modules';
import { NgxJsonViewerModule } from 'ngx-json-viewer';


import { ConfigModule } from '../../config/config.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { SharedPipesModule } from './../../../shared/pipes/shared-pipes.module';


import { EntranteDiarioRoutingModule } from './entrante-diario-routing.module';
import { EntranteDiarioComponent } from './entrante-diario.component';
import { EntranteDiarioIntroComponent } from './entrante-diario-intro/entrante-diario-intro.component';
import { EntranteDiarioConfigComponent } from './entrante-diario-config/entrante-diario-config.component';
import { EntranteDiarioListComponent } from './entrante-diario-list/entrante-diario-list.component';
import { EdListTableComponent } from './entrante-diario-list/ed-list-table/ed-list-table.component';
import { EdGraphComponent } from './entrante-diario-list/ed-graph/ed-graph.component';

@NgModule({
  imports: [

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    NgxJsonViewerModule,
    AngularMaterialModule,
    ConfigModule,
    NgbModule,
    Ng2Charts,
    SharedPipesModule,
    EntranteDiarioRoutingModule,
  ],
  declarations: [
    EntranteDiarioComponent,
    EntranteDiarioIntroComponent,
    EntranteDiarioConfigComponent,
    EntranteDiarioListComponent,
    EdListTableComponent,
    EdGraphComponent
  ]
})
export class EntranteDiarioModule { }
