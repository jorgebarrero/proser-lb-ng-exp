import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';

import { AngularMaterialModule } from './../../../shared/modules';
import { NgxJsonViewerModule } from 'ngx-json-viewer';


import { ConfigModule } from '../../config/config.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductividadRoutingModule } from './productividad-routing.module';

import { ProductividadComponent } from './productividad.component';
import { ProductividadListComponent } from './productividad-list/productividad-list.component';
import { ProductividadIntroComponent } from './productividad-intro/productividad-intro.component';
import { PrListTableComponent } from './productividad-list/pr-list-table/pr-list-table.component';
import { ProductividadConfigComponent } from './productividad-config/productividad-config.component';






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
    ProductividadRoutingModule
  ],
  declarations: [
    ProductividadComponent, 
    ProductividadListComponent, 
    ProductividadIntroComponent, 
    PrListTableComponent, 
    ProductividadConfigComponent
  ]
})
export class ProductividadModule { }
