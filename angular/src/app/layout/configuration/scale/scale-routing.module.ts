import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScaleComponent } from './scale.component';
import { ScaleIntroComponent } from './scale-intro/scale-intro.component';
import { ScaleListComponent } from './scale-list/scale-list.component';
import { ScaleDetailComponent } from './scale-detail/scale-detail.component';

const routes: Routes = [

  {
    path: '', component: ScaleComponent,
    children: [
      { path: '', redirectTo: 'intro' },
      { path: 'intro', component: ScaleIntroComponent },
      { path: 'list', component: ScaleListComponent},
      { path: 'detail', component: ScaleDetailComponent},
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScaleRoutingModule { }
