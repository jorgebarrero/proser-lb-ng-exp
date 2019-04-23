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


import { CdrRoutingModule } from './cdr-routing.module';
import { CdrComponent } from './cdr.component';
import { CdrIntroComponent } from './cdr-intro/cdr-intro.component';
import { CdrConfigComponent } from './cdr-config/cdr-config.component';
import { CdrListComponent } from './cdr-list/cdr-list.component';
import { CdListTableComponent } from './cdr-list/cd-list-table/cd-list-table.component';
import { CdGraphComponent } from './cdr-list/cd-graph/cd-graph.component';

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
    CdrRoutingModule
  ],
  declarations: [
    CdrComponent,
    CdrIntroComponent,
    CdrConfigComponent,
    CdrListComponent,
    CdListTableComponent,
    CdGraphComponent
  ]
})
export class CdrModule { }
