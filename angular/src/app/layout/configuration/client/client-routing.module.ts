import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';
import { ClientIntroComponent } from './client-intro/client-intro.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';

const routes: Routes = [

  {
    path: '', component: ClientComponent,
    children: [
      { path: '', redirectTo: 'intro' },
      { path: 'intro', component: ClientIntroComponent },
      { path: 'list', component: ClientListComponent},
      { path: 'detail', component: ClientDetailComponent},
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
