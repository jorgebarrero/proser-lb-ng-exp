import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallDetailComponent } from './call-detail.component';
import { CallDetailIntroComponent } from './call-detail-intro/call-detail-intro.component';
import { CallDetailFilterComponent } from './call-detail-filter/call-detail-filter.component';
import { CallDetailGraphComponent } from './call-detail-graph/call-detail-graph.component';
import { CallDetailReportComponent } from './call-detail-report/call-detail-report.component';


const routes: Routes = [

  {
    path: '', component: CallDetailComponent,
    children: [
    { path: '', redirectTo: 'intro' },
    { path: 'intro', component: CallDetailIntroComponent },
    { path: 'filter', component: CallDetailFilterComponent},
    { path: 'graph', component: CallDetailGraphComponent},
    { path: 'report', component: CallDetailReportComponent},
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CallDetailRoutingModule { }
