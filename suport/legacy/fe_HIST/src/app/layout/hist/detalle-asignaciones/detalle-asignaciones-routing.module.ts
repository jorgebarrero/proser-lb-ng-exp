
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleAsignacionesListComponent } from './detalle-asignaciones-list/detalle-asignaciones-list.component';
import { DetalleAsignacionesIntroComponent } from './detalle-asignaciones-intro/detalle-asignaciones-intro.component';
import { DetalleAsignacionesComponent } from './detalle-asignaciones.component';
import { DetalleAsignacionesConfigComponent } from './detalle-asignaciones-config/detalle-asignaciones-config.component';



const routes: Routes = [
  { path: '', component: DetalleAsignacionesComponent,
  children: [
     { path: '', pathMatch: 'full', redirectTo: 'intro' },
     { path: 'intro', component: DetalleAsignacionesIntroComponent },
     { path: 'lista', component: DetalleAsignacionesListComponent },
     { path: 'config', component: DetalleAsignacionesConfigComponent },

  ],
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleAsignacionesRoutingModule { }
