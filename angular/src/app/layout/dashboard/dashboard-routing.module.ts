import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardIntroComponent } from './dashboard-intro/dashboard-intro.component';




const routes: Routes = [
  {
      path: '', component: DashboardComponent,
      children: [
        { path: '', redirectTo: 'dashboard-intro' },

        { path: 'dashboard-intro', component: DashboardIntroComponent },

        { path: 'inbound', loadChildren: './inbound/inbound.module#InboundModule' },
        { path: 'outbound', loadChildren: './outbound/outbound.module#OutboundModule' },

        { path: 'agents', loadChildren: './agents/agents.module#AgentsModule' },
        { path: 'automatic', loadChildren: './automatic/automatic.module#AutomaticModule' },

        
        
    ] 
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
