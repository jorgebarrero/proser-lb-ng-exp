import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutboundDaylyComponent } from './outbound-dayly.component';
import { OutboundDaylyIntroComponent } from './outbound-dayly-intro/outbound-dayly-intro.component';
import { OutboundDaylyFilterComponent } from './outbound-dayly-filter/outbound-dayly-filter.component';
import { OutboundDaylyGraphComponent } from './outbound-dayly-graph/outbound-dayly-graph.component';
import { OutboundDaylyReportComponent } from './outbound-dayly-report/outbound-dayly-report.component';


const routes: Routes = [

  {
    path: '', component: OutboundDaylyComponent,
    children: [
    { path: '', redirectTo: 'intro' },
    { path: 'intro', component: OutboundDaylyIntroComponent},
    { path: 'filter', component: OutboundDaylyFilterComponent},
    { path: 'graph', component: OutboundDaylyGraphComponent},
    { path: 'report', component: OutboundDaylyReportComponent},
 ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutboundDaylyRoutingModule { }
