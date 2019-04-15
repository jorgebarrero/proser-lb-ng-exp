import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreakComponent } from './break.component';
import { BreakIntroComponent } from './break-intro/break-intro.component';

const routes: Routes = [

  {
    path: '', component: BreakComponent,
    children: [
      { path: '', redirectTo: 'intro' },
      { path: 'intro', component: BreakIntroComponent },
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreakRoutingModule { }
