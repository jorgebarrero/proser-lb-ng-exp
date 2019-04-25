import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';

import { AngularMaterialModule } from './../../../shared/modules';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

import { SharedPipesModule } from './../../../shared/pipes/shared-pipes.module';


import { ConfigModule } from '../../config/config.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ChartsModule as Ng2Charts } from 'ng2-charts';


import { ManualDiarioRoutingModule } from './manual-diario-routing.module';
import { ManualDiarioComponent } from './manual-diario.component';
import { ManualDiarioIntroComponent } from './manual-diario-intro/manual-diario-intro.component';
import { ManualDiarioConfigComponent } from './manual-diario-config/manual-diario-config.component';
import { ManualDiarioListComponent } from './manual-diario-list/manual-diario-list.component';
import { MeListTableComponent } from './manual-diario-list/me-list-table/me-list-table.component';
import { MeGraphComponent } from './manual-diario-list/me-graph/me-graph.component';

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
    SharedPipesModule,
    Ng2Charts,
    ManualDiarioRoutingModule,
  ],
  declarations: [
    ManualDiarioComponent,
    ManualDiarioIntroComponent,
    ManualDiarioConfigComponent,
    ManualDiarioListComponent,
    MeListTableComponent,
    MeGraphComponent
  ]
})
export class ManualDiarioModule { }
