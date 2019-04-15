import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleComponent } from './schedule.component';
import { ScheduleIntroComponent } from './schedule-intro/schedule-intro.component';

const routes: Routes = [

  {
    path: '', component: ScheduleComponent,
    children: [
      { path: '', redirectTo: 'intro' },
      { path: 'intro', component: ScheduleIntroComponent },
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }
