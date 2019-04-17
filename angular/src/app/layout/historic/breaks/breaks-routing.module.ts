import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreaksComponent } from './breaks.component';
import { BreaksIntroComponent } from './breaks-intro/breaks-intro.component';
import { BreaksFilterComponent } from './breaks-filter/breaks-filter.component';
import { BreaksGraphComponent } from './breaks-graph/breaks-graph.component';
import { BreaksReportComponent } from './breaks-report/breaks-report.component';

const routes: Routes = [

  {
    path: '', component: BreaksComponent,
    children: [
    { path: '', redirectTo: 'intro' },
    { path: 'intro', component: BreaksIntroComponent },
    { path: 'filter', component: BreaksFilterComponent},
    { path: 'graph', component: BreaksGraphComponent},
    { path: 'report', component: BreaksReportComponent},
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreaksRoutingModule { }
