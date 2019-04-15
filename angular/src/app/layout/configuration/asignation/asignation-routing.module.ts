import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsignationComponent } from './asignation.component';
import { AsignationIntroComponent } from './asignation-intro/asignation-intro.component';

const routes: Routes = [

  {
    path: '', component: AsignationComponent,
    children: [
      { path: '', redirectTo: 'intro' },
      { path: 'intro', component: AsignationIntroComponent },
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsignationRoutingModule { }
