import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';
import { ScheduleIntroComponent } from './schedule-intro/schedule-intro.component';

@NgModule({
  declarations: [ScheduleComponent, ScheduleIntroComponent],
  imports: [
    CommonModule,
    ScheduleRoutingModule
  ]
})
export class ScheduleModule { }
