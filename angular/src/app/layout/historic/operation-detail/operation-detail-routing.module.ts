import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperationDetailComponent } from './operation-detail.component';
import { OperationDetailIntroComponent } from './operation-detail-intro/operation-detail-intro.component';
import { OperationDetailFilterComponent } from './operation-detail-filter/operation-detail-filter.component';
import { OperationDetailGraphComponent } from './operation-detail-graph/operation-detail-graph.component';
import { OperationDetailReportComponent } from './operation-detail-report/operation-detail-report.component';


const routes: Routes = [

  {
    path: '', component: OperationDetailComponent,
    children: [
    { path: '', redirectTo: 'intro' },
    { path: 'intro', component: OperationDetailIntroComponent},
    { path: 'filter', component: OperationDetailFilterComponent},
    { path: 'graph', component: OperationDetailGraphComponent},
    { path: 'report', component: OperationDetailReportComponent},
 ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationDetailRoutingModule { }
