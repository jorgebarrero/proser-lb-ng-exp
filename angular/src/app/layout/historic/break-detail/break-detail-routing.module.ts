import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreakDetailComponent } from './break-detail.component';
import { BreakDetailIntroComponent } from './break-detail-intro/break-detail-intro.component';
import { BreakDetailFilterComponent } from './break-detail-filter/break-detail-filter.component';
import { BreakDetailGraphComponent } from './break-detail-graph/break-detail-graph.component';
import { BreakDetailReportComponent } from './break-detail-report/break-detail-report.component';


const routes: Routes = [

  {
    path: '', component: BreakDetailComponent,
    children: [
    { path: '', redirectTo: 'intro' },
    { path: 'intro', component: BreakDetailIntroComponent },
    { path: 'filter', component: BreakDetailFilterComponent},
    { path: 'graph', component: BreakDetailGraphComponent},
    { path: 'report', component: BreakDetailReportComponent},
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreakDetailRoutingModule { }
