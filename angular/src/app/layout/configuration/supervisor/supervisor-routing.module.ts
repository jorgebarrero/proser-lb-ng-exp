import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupervisorComponent } from './supervisor.component';
import { SupervisorIntroComponent } from './supervisor-intro/supervisor-intro.component';
import { SupervisorListComponent } from './supervisor-list/supervisor-list.component';
import { SupervisorDetailComponent } from './supervisor-detail/supervisor-detail.component';
import { SupervisorEditComponent } from './supervisor-edit/supervisor-edit.component';
import { SupervisorAddComponent } from './supervisor-add/supervisor-add.component';



const routes: Routes = [

  {
    path: '', component: SupervisorComponent,
    children: [
      { path: '', redirectTo: 'intro' },
      { path: 'intro', component: SupervisorIntroComponent },
      { path: 'list', component: SupervisorListComponent },
      { path: 'detail', component: SupervisorDetailComponent },
      { path: 'edit', component: SupervisorEditComponent },
      { path: 'add', component: SupervisorAddComponent },
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupervisorRoutingModule { }
