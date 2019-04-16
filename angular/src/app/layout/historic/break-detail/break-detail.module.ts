import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreakDetailRoutingModule } from './break-detail-routing.module';
import { BreakDetailComponent } from './break-detail.component';

@NgModule({
  declarations: [BreakDetailComponent],
  imports: [
    CommonModule,
    BreakDetailRoutingModule
  ]
})
export class BreakDetailModule { }
