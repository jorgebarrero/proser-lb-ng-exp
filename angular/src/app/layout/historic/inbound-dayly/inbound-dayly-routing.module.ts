import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InboundDaylyComponent } from './inbound-dayly.component';
import { InboundDaylyIntroComponent } from './inbound-dayly-intro/inbound-dayly-intro.component';
import { InboundDaylyFilterComponent } from './inbound-dayly-filter/inbound-dayly-filter.component';
import { InboundDaylyReportComponent } from './inbound-dayly-report/inbound-dayly-report.component';
import { InboundDaylyGraphComponent } from './inbound-dayly-graph/inbound-dayly-graph.component';


const routes: Routes = [

  {
    path: '', component: InboundDaylyComponent,
    children: [
    { path: '', redirectTo: 'intro' },
    { path: 'intro', component: InboundDaylyIntroComponent},
    { path: 'filter', component: InboundDaylyFilterComponent},
    { path: 'graph', component: InboundDaylyGraphComponent},
    { path: 'report', component: InboundDaylyReportComponent},
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboundDaylyRoutingModule { }
