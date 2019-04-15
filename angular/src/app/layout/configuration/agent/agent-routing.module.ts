import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentComponent } from './agent.component';
import { AgentIntroComponent } from './agent-intro/agent-intro.component';


const routes: Routes = [

  {
    path: '', component: AgentComponent,
    children: [
      { path: '', redirectTo: 'intro' },
      { path: 'intro', component: AgentIntroComponent },
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
