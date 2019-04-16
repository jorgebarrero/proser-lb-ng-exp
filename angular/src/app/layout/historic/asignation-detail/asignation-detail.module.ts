import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsignationDetailRoutingModule } from './asignation-detail-routing.module';
import { AsignationDetailComponent } from './asignation-detail.component';

@NgModule({
  declarations: [AsignationDetailComponent],
  imports: [
    CommonModule,
    AsignationDetailRoutingModule
  ]
})
export class AsignationDetailModule { }
