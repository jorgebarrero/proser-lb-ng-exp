import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NowModule } from 'src/app/shared/modules/now/now.module';
import { ConnectionModule } from 'src/app/shared/modules/connection/connection.module';

import { AuditRoutingModule } from './audit-routing.module';
import { AuditComponent } from './audit.component';
import { AuditHeaderComponent } from './components/audit-header/audit-header.component';
import { AuditIntroComponent } from './audit-intro/audit-intro.component';

@NgModule({
  declarations: [AuditComponent, AuditHeaderComponent, AuditIntroComponent],
  imports: [
    CommonModule,
    NowModule,
    ConnectionModule,
    AuditRoutingModule
  ]
})
export class AuditModule { }
