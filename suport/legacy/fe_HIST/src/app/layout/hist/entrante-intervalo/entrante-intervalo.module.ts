import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';

import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { AngularMaterialModule } from './../../../shared/modules';
import { NgxJsonViewerModule } from 'ngx-json-viewer';


import { ConfigModule } from '../../config/config.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { EntranteIntervaloRoutingModule } from './entrante-intervalo-routing.module';
import { EntranteIntervaloComponent } from './entrante-intervalo.component';
import { EntranteIntervaloIntroComponent } from './entrante-intervalo-intro/entrante-intervalo-intro.component';
import { EntranteIntervaloConfigComponent } from './entrante-intervalo-config/entrante-intervalo-config.component';
import { EntranteIntervaloListComponent } from './entrante-intervalo-list/entrante-intervalo-list.component';
import { EdListTableComponent } from './entrante-intervalo-list/ei-list-table/ei-list-table.component';
import { EiGraphComponent } from './entrante-intervalo-list/ei-graph/ei-graph.component';

@NgModule({
  imports: [

    CommonModule,
    FormsModule,
    Ng2Charts,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    NgxJsonViewerModule,
    AngularMaterialModule,
    ConfigModule,
    NgbModule,
    EntranteIntervaloRoutingModule,
  ],
  declarations: [
    EntranteIntervaloComponent,
    EntranteIntervaloIntroComponent,
    EntranteIntervaloConfigComponent,
    EntranteIntervaloListComponent,
    EdListTableComponent,
    EiGraphComponent
  ]
})
export class EntranteIntervaloModule { }
