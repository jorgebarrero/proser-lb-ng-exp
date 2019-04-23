import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleComponent } from './schedule.component';
import { ScheduleIntroComponent } from './schedule-intro/schedule-intro.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { ScheduleDetailComponent } from './schedule-detail/schedule-detail.component';
import { ScheduleEditComponent } from './schedule-edit/schedule-edit.component';
import { ScheduleAddComponent } from './schedule-add/schedule-add.component';


const routes: Routes = [

  {
    path: '', component: ScheduleComponent,
    children: [
      { path: '', redirectTo: 'intro' },
      { path: 'intro', component: ScheduleIntroComponent },
      { path: 'list', component: ScheduleListComponent},
      { path: 'detail', component: ScheduleDetailComponent},
      { path: 'edit', component: ScheduleEditComponent },
      { path: 'add', component: ScheduleAddComponent },
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }
