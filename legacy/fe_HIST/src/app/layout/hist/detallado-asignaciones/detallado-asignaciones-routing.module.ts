import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalladoAsignacionesComponent } from './detallado-asignaciones.component';
import { DetalladoAsignacionesListComponent } from './detallado-asignaciones-list/detallado-asignaciones-list.component';
import { DetalladoAsignacionesIntroComponent } from './detallado-asignaciones-intro/detallado-asignaciones-intro.component';
import { DetalladoAsignacionesConfigComponent } from './detallado-asignaciones-config/detallado-asignaciones-config.component';





const routes: Routes = [
  { path: '', component: DetalladoAsignacionesComponent,
  children: [
     { path: '', pathMatch: 'full', redirectTo: 'intro' },
     { path: 'intro', component: DetalladoAsignacionesIntroComponent },
     { path: 'lista', component: DetalladoAsignacionesListComponent },
     { path: 'config', component: DetalladoAsignacionesConfigComponent },

  ],
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalladoAsignacionesRoutingModule { }
