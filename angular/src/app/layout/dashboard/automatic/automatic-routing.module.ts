import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutomaticComponent } from './automatic.component';
import { AutomaticIntroComponent } from './automatic-intro/automatic-intro.component';
import { AutomaticListComponent } from './automatic-list/automatic-list.component';
import { AutomaticDetailComponent } from './automatic-detail/automatic-detail.component';
import { AutomaticFilterComponent } from './automatic-filter/automatic-filter.component';

const routes: Routes = [

  {
    path: '', component: AutomaticComponent,
    children: [
    { path: '', redirectTo: 'intro' },
    { path: 'intro', component: AutomaticIntroComponent},
    { path: 'list', component: AutomaticListComponent},
    { path: 'detail', component: AutomaticDetailComponent},
    { path: 'filter', component: AutomaticFilterComponent},
 ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutomaticRoutingModule { }
