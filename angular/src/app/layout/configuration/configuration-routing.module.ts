import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigIntroComponent } from './components/config-intro/config-intro.component';
import { ConfigurationComponent } from './configuration.component';
import { AgentComponent } from './agent/agent.component';
import { SupervisorComponent } from './supervisor/supervisor.component';


const routes: Routes = [
  {
      path: '', component: ConfigurationComponent,
      children: [
        { path: '', redirectTo: 'config-intro' },

        { path: 'config-intro', component: ConfigIntroComponent },

        { path: 'supervisor', loadChildren: './supervisor/supervisor.module#SupervisorModule' },
        { path: 'agent', loadChildren: './agent/agent.module#AgentModule' },

        { path: 'location', loadChildren: './location/location.module#LocationModule' },
        { path: 'schedule', loadChildren: './schedule/schedule.module#ScheduleModule' },
        { path: 'asignation', loadChildren: './asignation/asignation.module#AsignationModule' },
        { path: 'break', loadChildren: './break/break.module#BreakModule' },

        { path: 'client', loadChildren: './client/client.module#ClientModule' },
        { path: 'queue', loadChildren: './queue/queue.module#QueueModule' },
        { path: 'service', loadChildren: './service/service.module#ServiceModule' },

        { path: 'campaign', loadChildren: './campaign/campaign.module#CampaignModule' },
        { path: 'scale', loadChildren: './scale/scale.module#ScaleModule' },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
