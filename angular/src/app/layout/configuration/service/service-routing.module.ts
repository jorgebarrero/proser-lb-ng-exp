import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceComponent } from './service.component';
import { ServiceIntroComponent } from './service-intro/service-intro.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ServiceEditComponent } from './service-edit/service-edit.component';
import { ServiceAddComponent } from './service-add/service-add.component';



const routes: Routes = [

  {
    path: '', component: ServiceComponent,
    children: [
      { path: '', redirectTo: 'intro' },
      { path: 'intro', component: ServiceIntroComponent },
      { path: 'list', component: ServiceListComponent },
      { path: 'detail', component: ServiceDetailComponent },
      { path: 'edit', component: ServiceEditComponent },
      { path: 'add', component: ServiceAddComponent },
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
