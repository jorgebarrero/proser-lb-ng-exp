import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoricComponent } from './historic.component';
import { HistoricIntroComponent } from './historic-intro/historic-intro.component';


const routes: Routes = [
  {
      path: '', component: HistoricComponent,
      children: [
        { path: '', redirectTo: 'historic-intro' },

        { path: 'historic-intro', component: HistoricIntroComponent },
   
        { path: 'asignation-detail', loadChildren: './asignation-detail/asignation-detail.module#AsignationDetailModule' },
        { path: 'asignations', loadChildren: './asignations/asignations.module#AsignationsModule' },
        
        { path: 'breaks', loadChildren: './breaks/breaks.module#BreaksModule' },
        { path: 'break-detail', loadChildren: './break-detail/break-detail.module#BreakDetailModule' },
        { path: 'call-detail', loadChildren: './call-detail/call-detail.module#CallDetailModule' },
        { path: 'connection', loadChildren: './connection/connection.module#ConnectionModule' },
        { path: 'inbound-dayly', loadChildren: './inbound-dayly/inbound-dayly.module#InboundDaylyModule' },
        { path: 'inbound-interval', loadChildren: './inbound-interval/inbound-interval.module#InboundIntervalModule' },
        { path: 'operation-detail', loadChildren: './operation-detail/operation-detail.module#OperationDetailModule' },
        { path: 'outbound-dayly', loadChildren: './outbound-dayly/outbound-dayly.module#OutboundDaylyModule' },
        { path: 'outbound-interval', loadChildren: './outbound-interval/outbound-interval.module#OutboundIntervalModule' },
        { path: 'productivity', loadChildren: './productivity/productivity.module#ProductivityModule' },
        { path: 'service-dayly', loadChildren: './service-dayly/service-dayly.module#ServiceDaylyModule' },
        { path: 'service-historic', loadChildren: './service-historic/service-historic.module#ServiceHistoricModule' },
        { path: 'service-interval', loadChildren: './service-interval/service-interval.module#ServiceIntervalModule' },
     
    ] 
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoricRoutingModule { }
