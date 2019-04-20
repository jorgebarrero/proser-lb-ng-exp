import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutboundIntervalComponent } from './outbound-interval.component';
import { OutboundIntervalIntroComponent } from './outbound-interval-intro/outbound-interval-intro.component';
import { OutboundIntervalFilterComponent } from './outbound-interval-filter/outbound-interval-filter.component';
import { OutboundIntervalGraphComponent } from './outbound-interval-graph/outbound-interval-graph.component';
import { OutboundIntervalReportComponent } from './outbound-interval-report/outbound-interval-report.component';


const routes: Routes = [

  {
    path: '', component: OutboundIntervalComponent,
    children: [
    { path: '', redirectTo: 'intro' },
    { path: 'intro', component: OutboundIntervalIntroComponent},
    { path: 'filter', component: OutboundIntervalFilterComponent},
    { path: 'graph', component: OutboundIntervalGraphComponent},
    { path: 'report', component: OutboundIntervalReportComponent},
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutboundIntervalRoutingModule { }
