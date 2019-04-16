import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallDetailRoutingModule } from './call-detail-routing.module';
import { CallDetailComponent } from './call-detail.component';

@NgModule({
  declarations: [CallDetailComponent],
  imports: [
    CommonModule,
    CallDetailRoutingModule
  ]
})
export class CallDetailModule { }
