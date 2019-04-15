import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { FilterIntroComponent } from './components/filter-intro/filter-intro.component';
import { FilterComponent } from './filter.component';
import { FilterSupervisorComponent } from './filter-supervisor/filter-supervisor.component';

const routes: Routes = [

  {
    path: '', component: FilterComponent,
    children: [
      { path: '', redirectTo: 'intro' },

      { path: 'intro', component: FilterIntroComponent },
      { path: 'supervisor', component: FilterSupervisorComponent },
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilterRoutingModule { }
