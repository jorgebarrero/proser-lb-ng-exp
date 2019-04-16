import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationDetailRoutingModule } from './operation-detail-routing.module';
import { OperationDetailComponent } from './operation-detail.component';

@NgModule({
  declarations: [OperationDetailComponent],
  imports: [
    CommonModule,
    OperationDetailRoutingModule
  ]
})
export class OperationDetailModule { }
