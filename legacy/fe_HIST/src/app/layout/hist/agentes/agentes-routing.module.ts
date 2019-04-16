import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentesListComponent } from './agentes-list/agentes-list.component';
import { AgentesIntroComponent } from './agentes-intro/agentes-intro.component';
import { AgentesConfigComponent } from './agentes-config/agentes-config.component';
import { AgentesComponent } from './agentes.component';


const routes: Routes = [
  { path: '', component: AgentesComponent,
  children: [
     { path: '', pathMatch: 'full', redirectTo: 'intro' },
     { path: 'intro', component: AgentesIntroComponent },
     { path: 'lista', component: AgentesListComponent },
     { path: 'config', component: AgentesConfigComponent },

  ],
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentesRoutingModule { }
