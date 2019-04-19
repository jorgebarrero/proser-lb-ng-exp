import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsignationsRoutingModule } from './asignations-routing.module';
import { AsignationsComponent } from './asignations.component';
import { AsignationsIntroComponent } from './asignations-intro/asignations-intro.component';
import { AsignationsMenuComponent } from './asignations-menu/asignations-menu.component';
import { AsignationsReportComponent } from './asignations-report/asignations-report.component';
import { AsignationsFilterComponent } from './asignations-filter/asignations-filter.component';
import { AsignationsGraphComponent } from './asignations-graph/asignations-graph.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [AsignationsComponent, AsignationsIntroComponent, AsignationsMenuComponent, AsignationsReportComponent, AsignationsFilterComponent, AsignationsGraphComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    AsignationsRoutingModule
  ]
})
export class AsignationsModule { }
