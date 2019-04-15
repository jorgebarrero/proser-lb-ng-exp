import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceComponent } from './service.component';
import { ServiceIntroComponent } from './service-intro/service-intro.component';

const routes: Routes = [

  {
    path: '', component: ServiceComponent,
    children: [
      { path: '', redirectTo: 'intro' },
      { path: 'intro', component: ServiceIntroComponent },
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
