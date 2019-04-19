import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InboundIntervalComponent } from './inbound-interval.component';
import { InboundIntervalIntroComponent } from './inbound-interval-intro/inbound-interval-intro.component';
import { InboundIntervalFilterComponent } from './inbound-interval-filter/inbound-interval-filter.component';
import { InboundIntervalGraphComponent } from './inbound-interval-graph/inbound-interval-graph.component';
import { InboundIntervalReportComponent } from './inbound-interval-report/inbound-interval-report.component';


const routes: Routes = [

  {
    path: '', component: InboundIntervalComponent,
    children: [
    { path: '', redirectTo: 'intro' },
    { path: 'intro', component: InboundIntervalIntroComponent},
    { path: 'filter', component: InboundIntervalFilterComponent},
    { path: 'graph', component: InboundIntervalGraphComponent},
    { path: 'report', component: InboundIntervalReportComponent},
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboundIntervalRoutingModule { }
