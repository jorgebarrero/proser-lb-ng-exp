import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsignationComponent } from './asignation.component';
import { AsignationIntroComponent } from './asignation-intro/asignation-intro.component';
import { AsignationListComponent } from './asignation-list/asignation-list.component';
import { AsignationDetailComponent } from './asignation-detail/asignation-detail.component';

const routes: Routes = [

  {
    path: '', component: AsignationComponent,
    children: [
      { path: '', redirectTo: 'intro' },
      { path: 'intro', component: AsignationIntroComponent },
      { path: 'list', component: AsignationListComponent},
      { path: 'detail', component: AsignationDetailComponent},
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsignationRoutingModule { }
