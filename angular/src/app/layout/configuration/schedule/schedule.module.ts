import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';
import { ScheduleIntroComponent } from './schedule-intro/schedule-intro.component';
import { ScheduleDetailComponent } from './schedule-detail/schedule-detail.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { ScheduleMenuComponent } from './schedule-menu/schedule-menu.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScheduleEditComponent } from './schedule-edit/schedule-edit.component';
import { ScheduleAddComponent } from './schedule-add/schedule-add.component';


@NgModule({
  declarations: [ScheduleComponent, ScheduleIntroComponent, ScheduleDetailComponent, ScheduleListComponent, ScheduleMenuComponent, ScheduleEditComponent, ScheduleAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    ScheduleRoutingModule
  ]
})
export class ScheduleModule { }
