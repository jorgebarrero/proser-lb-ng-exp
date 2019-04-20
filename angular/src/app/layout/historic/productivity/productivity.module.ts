import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductivityRoutingModule } from './productivity-routing.module';
import { ProductivityComponent } from './productivity.component';
import { ProductivityIntroComponent } from './productivity-intro/productivity-intro.component';
import { ProductivityMenuComponent } from './productivity-menu/productivity-menu.component';
import { ProductivityFilterComponent } from './productivity-filter/productivity-filter.component';
import { ProductivityReportComponent } from './productivity-report/productivity-report.component';
import { ProductivityGraphComponent } from './productivity-graph/productivity-graph.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [ProductivityComponent, ProductivityIntroComponent, ProductivityMenuComponent, ProductivityFilterComponent, ProductivityReportComponent, ProductivityGraphComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    ProductivityRoutingModule
  ]
})
export class ProductivityModule { }
