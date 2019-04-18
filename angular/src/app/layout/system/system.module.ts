import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NowModule } from 'src/app/shared/modules/now/now.module';
import { ConnectionModule } from 'src/app/shared/modules/connection/connection.module';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { SystemIntroComponent } from './system-intro/system-intro.component';
import { SystemHeaderComponent } from './system-header/system-header.component';



@NgModule({
  declarations: [SystemComponent, SystemIntroComponent, SystemHeaderComponent],
  imports: [
    CommonModule,
    NowModule,
    ConnectionModule,
    SystemRoutingModule
  ]
})
export class SystemModule { }
