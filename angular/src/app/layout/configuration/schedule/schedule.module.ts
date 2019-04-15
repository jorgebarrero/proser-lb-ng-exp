import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';
import { ScheduleIntroComponent } from './schedule-intro/schedule-intro.component';
import { ScheduleDetailComponent } from './schedule-detail/schedule-detail.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { ScheduleMenuComponent } from './schedule-menu/schedule-menu.component';

@NgModule({
  declarations: [ScheduleComponent, ScheduleIntroComponent, ScheduleDetailComponent, ScheduleListComponent, ScheduleMenuComponent],
  imports: [
    CommonModule,
    ScheduleRoutingModule
  ]
})
export class ScheduleModule { }
