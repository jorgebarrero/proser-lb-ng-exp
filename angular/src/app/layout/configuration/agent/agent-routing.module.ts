import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentComponent } from './agent.component';
import { AgentIntroComponent } from './agent-intro/agent-intro.component';
import { AgentListComponent } from './agent-list/agent-list.component';
import { AgentDetailComponent } from './agent-detail/agent-detail.component';
import { AgentEditComponent } from './agent-edit/agent-edit.component';
import { AgentAddComponent } from './agent-add/agent-add.component';


const routes: Routes = [

  {
    path: '', component: AgentComponent,
    children: [
      { path: '', redirectTo: 'intro' },
      { path: 'intro', component: AgentIntroComponent },
      { path: 'list', component: AgentListComponent},
      { path: 'detail', component: AgentDetailComponent},
      { path: 'edit', component: AgentEditComponent },
      { path: 'add', component: AgentAddComponent },
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
