import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreakComponent } from './break.component';
import { BreakIntroComponent } from './break-intro/break-intro.component';
import { BreakListComponent } from './break-list/break-list.component';
import { BreakDetailComponent } from './break-detail/break-detail.component';

const routes: Routes = [

  {
    path: '', component: BreakComponent,
    children: [
      { path: '', redirectTo: 'intro' },
      { path: 'intro', component: BreakIntroComponent },
      { path: 'list', component: BreakListComponent},
      { path: 'detail', component: BreakDetailComponent},
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreakRoutingModule { }
