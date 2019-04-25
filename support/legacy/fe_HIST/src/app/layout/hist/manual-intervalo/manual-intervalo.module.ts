import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';

import { AngularMaterialModule } from './../../../shared/modules';
import { NgxJsonViewerModule } from 'ngx-json-viewer';


import { ChartsModule as Ng2Charts } from 'ng2-charts';


import { ConfigModule } from '../../config/config.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ManualIntervaloRoutingModule } from './manual-intervalo-routing.module';
import { ManualIntervaloComponent } from './manual-intervalo.component';
import { ManualIntervaloConfigComponent } from './manual-intervalo-config/manual-intervalo-config.component';
import { ManualIntervaloIntroComponent } from './manual-intervalo-intro/manual-intervalo-intro.component';
import { ManualIntervaloListComponent } from './manual-intervalo-list/manual-intervalo-list.component';
import { MiListTableComponent } from './manual-intervalo-list/mi-list-table/mi-list-table.component';
import { MiGraphComponent } from './manual-intervalo-list/mi-graph/mi-graph.component';

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
    ManualIntervaloRoutingModule
  ],
  declarations: [
    ManualIntervaloComponent,
    ManualIntervaloConfigComponent,
    ManualIntervaloIntroComponent,
    ManualIntervaloListComponent,
    MiListTableComponent,
    MiGraphComponent]
})
export class ManualIntervaloModule { }
