import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsignationRoutingModule } from './asignation-routing.module';
import { AsignationComponent } from './asignation.component';
import { AsignationIntroComponent } from './asignation-intro/asignation-intro.component';

@NgModule({
  declarations: [AsignationComponent, AsignationIntroComponent],
  imports: [
    CommonModule,
    AsignationRoutingModule
  ]
})
export class AsignationModule { }
