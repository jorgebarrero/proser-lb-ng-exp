import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsignationDetailComponent } from './asignation-detail.component';
import { AsignationDetailIntroComponent } from './asignation-detail-intro/asignation-detail-intro.component';
import { AsignationDetailFilterComponent } from './asignation-detail-filter/asignation-detail-filter.component';
import { AsignationDetailGraphComponent } from './asignation-detail-graph/asignation-detail-graph.component';
import { AsignationDetailReportComponent } from './asignation-detail-report/asignation-detail-report.component';


const routes: Routes = [

  {
    path: '', component: AsignationDetailComponent,
    children: [
    { path: '', redirectTo: 'intro' },
    { path: 'intro', component: AsignationDetailIntroComponent },
    { path: 'filter', component: AsignationDetailFilterComponent},
    { path: 'graph', component: AsignationDetailGraphComponent},
    { path: 'report', component: AsignationDetailReportComponent},
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsignationDetailRoutingModule { }
