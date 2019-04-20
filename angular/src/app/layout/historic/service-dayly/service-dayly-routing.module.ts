import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceDaylyComponent } from './service-dayly.component';
import { ServiceDaylyIntroComponent } from './service-dayly-intro/service-dayly-intro.component';
import { ServiceDaylyFilterComponent } from './service-dayly-filter/service-dayly-filter.component';
import { ServiceDaylyGraphComponent } from './service-dayly-graph/service-dayly-graph.component';
import { ServiceDaylyReportComponent } from './service-dayly-report/service-dayly-report.component';



const routes: Routes = [

  {
    path: '', component: ServiceDaylyComponent,
    children: [
    { path: '', redirectTo: 'intro' },
    { path: 'intro', component: ServiceDaylyIntroComponent},
    { path: 'filter', component: ServiceDaylyFilterComponent},
    { path: 'graph', component: ServiceDaylyGraphComponent},
    { path: 'report', component: ServiceDaylyReportComponent},
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceDaylyRoutingModule { }
