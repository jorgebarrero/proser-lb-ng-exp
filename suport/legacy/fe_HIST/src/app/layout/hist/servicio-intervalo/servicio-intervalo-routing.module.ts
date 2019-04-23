
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicioIntervaloComponent } from './servicio-intervalo.component';
import { ServicioIntervaloIntroComponent } from './servicio-intervalo-intro/servicio-intervalo-intro.component';
import { ServicioIntervaloListComponent } from './servicio-intervalo-list/servicio-intervalo-list.component';
import { ServicioIntervaloConfigComponent } from './servicio-intervalo-config/servicio-intervalo-config.component';


const routes: Routes = [
  { path: '', component: ServicioIntervaloComponent,
  children: [
     { path: '', pathMatch: 'full', redirectTo: 'intro' },
     { path: 'intro', component: ServicioIntervaloIntroComponent },
     { path: 'lista', component: ServicioIntervaloListComponent },
     { path: 'config', component: ServicioIntervaloConfigComponent },
  ],
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicioIntervaloRoutingModule { }
