import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display.component';
import { DisplayIntroComponent } from './display-intro/display-intro.component';





const routes: Routes = [
  {
      path: '', component: DisplayComponent,
      children: [
        { path: '', redirectTo: 'display-intro' },

        { path: 'display-intro', component:DisplayIntroComponent },
        { path: 'inbound', loadChildren: '../display/inbound/inbound.module#InboundModule' },
        { path: 'outbound', loadChildren: '../display/outbound/outbound.module#OutboundModule' },

        { path: 'agents', loadChildren: '../display/agents/agents.module#AgentsModule' },
        { path: 'automatic', loadChildren: '../display/automatic/automatic.module#AutomaticModule' },

    ]
  }

];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisplayRoutingModule { }
