import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceIntervalComponent } from './service-interval.component';
import { ServiceIntervalIntroComponent } from './service-interval-intro/service-interval-intro.component';
import { ServiceIntervalFilterComponent } from './service-interval-filter/service-interval-filter.component';
import { ServiceIntervalGraphComponent } from './service-interval-graph/service-interval-graph.component';
import { ServiceIntervalReportComponent } from './service-interval-report/service-interval-report.component';


const routes: Routes = [

  {
    path: '', component: ServiceIntervalComponent,
    children: [
    { path: '', redirectTo: 'intro' },
    { path: 'intro', component: ServiceIntervalIntroComponent},
    { path: 'filter', component: ServiceIntervalFilterComponent},
    { path: 'graph', component: ServiceIntervalGraphComponent},
    { path: 'report', component: ServiceIntervalReportComponent},
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceIntervalRoutingModule { }
