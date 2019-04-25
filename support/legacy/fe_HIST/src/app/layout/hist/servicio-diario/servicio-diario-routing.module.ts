import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicioDiarioComponent } from './servicio-diario.component';
import { ServicioDiarioIntroComponent } from './servicio-diario-intro/servicio-diario-intro.component';
import { ServicioDiarioListComponent } from './servicio-diario-list/servicio-diario-list.component';
import { ServicioDiarioConfigComponent } from './servicio-diario-config/servicio-diario-config.component';



const routes: Routes = [
  { path: '', component: ServicioDiarioComponent,
  children: [
     { path: '', pathMatch: 'full', redirectTo: 'intro' },
     { path: 'intro', component: ServicioDiarioIntroComponent },
     { path: 'lista', component: ServicioDiarioListComponent },
     { path: 'config', component: ServicioDiarioConfigComponent },

  ],
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicioDiarioRoutingModule { }
