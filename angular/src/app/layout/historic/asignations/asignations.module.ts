import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsignationsRoutingModule } from './asignations-routing.module';
import { AsignationsComponent } from './asignations.component';

@NgModule({
  declarations: [AsignationsComponent],
  imports: [
    CommonModule,
    AsignationsRoutingModule
  ]
})
export class AsignationsModule { }
