import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsignationsComponent } from './asignations.component';
import { AsignationsIntroComponent } from './asignations-intro/asignations-intro.component';
import { AsignationsFilterComponent } from './asignations-filter/asignations-filter.component';
import { AsignationsGraphComponent } from './asignations-graph/asignations-graph.component';
import { AsignationsReportComponent } from './asignations-report/asignations-report.component';

const routes: Routes = [

  {
    path: '', component: AsignationsComponent,
    children: [
    { path: '', redirectTo: 'intro' },
    { path: 'intro', component: AsignationsIntroComponent },
    { path: 'filter', component: AsignationsFilterComponent},
    { path: 'graph', component: AsignationsGraphComponent},
    { path: 'report', component: AsignationsReportComponent},
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsignationsRoutingModule { }
