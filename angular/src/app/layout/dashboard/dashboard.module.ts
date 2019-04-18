import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NowModule } from 'src/app/shared/modules/now/now.module';
import { ConnectionModule } from 'src/app/shared/modules/connection/connection.module';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { DashboardIntroComponent } from './dashboard-intro/dashboard-intro.component';

@NgModule({
  declarations: [DashboardComponent, DashboardHeaderComponent, DashboardIntroComponent],
  imports: [
    CommonModule,
    NowModule,
    ConnectionModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
