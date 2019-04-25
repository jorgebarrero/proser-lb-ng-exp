import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntranteDashboardIntroComponent } from './entrante-dashboard-intro/entrante-dashboard-intro.component';
import { EntranteDashboardListComponent } from './entrante-dashboard-list/entrante-dashboard-list.component';
import { EntranteDashboardComponent } from './entrante-dashboard.component';
import { EntranteDashboardConfigComponent } from './entrante-dashboard-config/entrante-dashboard-config.component';


const routes: Routes = [
  { path: '', component: EntranteDashboardComponent,
  children: [
     { path: '', pathMatch: 'full', redirectTo: 'intro' },
     { path: 'intro', component: EntranteDashboardIntroComponent },
     { path: 'lista', component: EntranteDashboardListComponent },
     { path: 'config', component: EntranteDashboardConfigComponent },

  ],
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntranteDashboardRoutingModule { }
