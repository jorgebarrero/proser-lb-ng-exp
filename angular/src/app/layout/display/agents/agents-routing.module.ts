import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentsComponent } from './agents.component';
import { AgentsIntroComponent } from './agents-intro/agents-intro.component';
import { AgentsListComponent } from './agents-list/agents-list.component';
import { AgentsDetailComponent } from './agents-detail/agents-detail.component';
import { AgentsFilterComponent } from './agents-filter/agents-filter.component';



const routes: Routes = [

  {
    path: '', component: AgentsComponent,
    children: [
    { path: '', redirectTo: 'intro' },
    { path: 'intro', component: AgentsIntroComponent },
    { path: 'list', component: AgentsListComponent},
    { path: 'detail', component: AgentsDetailComponent},
    { path: 'filter', component: AgentsFilterComponent},
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentsRoutingModule { }
