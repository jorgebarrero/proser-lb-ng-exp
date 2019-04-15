import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';
import { ClientIntroComponent } from './client-intro/client-intro.component';

const routes: Routes = [

  {
    path: '', component: ClientComponent,
    children: [
      { path: '', redirectTo: 'intro' },
      { path: 'intro', component: ClientIntroComponent },
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
