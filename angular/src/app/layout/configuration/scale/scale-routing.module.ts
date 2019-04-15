import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScaleComponent } from './scale.component';
import { ScaleIntroComponent } from './scale-intro/scale-intro.component';

const routes: Routes = [

  {
    path: '', component: ScaleComponent,
    children: [
      { path: '', redirectTo: 'intro' },
      { path: 'intro', component: ScaleIntroComponent },
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScaleRoutingModule { }
