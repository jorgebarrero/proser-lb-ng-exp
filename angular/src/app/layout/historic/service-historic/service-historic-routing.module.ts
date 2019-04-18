import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceHistoricComponent } from './service-historic.component';
import { ServiceHistoricIntroComponent } from './service-historic-intro/service-historic-intro.component';
import { ServiceHistoricFilterComponent } from './service-historic-filter/service-historic-filter.component';
import { ServiceHistoricGraphComponent } from './service-historic-graph/service-historic-graph.component';
import { ServiceHistoricReportComponent } from './service-historic-report/service-historic-report.component';


const routes: Routes = [

  {
    path: '', component: ServiceHistoricComponent,
    children: [
    { path: '', redirectTo: 'intro' },
    { path: 'intro', component: ServiceHistoricIntroComponent},
    { path: 'filter', component: ServiceHistoricFilterComponent},
    { path: 'graph', component: ServiceHistoricGraphComponent},
    { path: 'report', component: ServiceHistoricReportComponent},
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceHistoricRoutingModule { }
