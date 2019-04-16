import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceComponent } from './service.component';
import { ServiceIntroComponent } from './service-intro/service-intro.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';

const routes: Routes = [

  {
    path: '', component: ServiceComponent,
    children: [
      { path: '', redirectTo: 'intro' },
      { path: 'intro', component: ServiceIntroComponent },
      { path: 'list', component: ServiceListComponent },
      { path: 'detail', component: ServiceDetailComponent },
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
