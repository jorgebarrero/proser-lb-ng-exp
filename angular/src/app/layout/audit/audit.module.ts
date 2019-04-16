import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditRoutingModule } from './audit-routing.module';
import { AuditComponent } from './audit.component';

@NgModule({
  declarations: [AuditComponent],
  imports: [
    CommonModule,
    AuditRoutingModule
  ]
})
export class AuditModule { }
