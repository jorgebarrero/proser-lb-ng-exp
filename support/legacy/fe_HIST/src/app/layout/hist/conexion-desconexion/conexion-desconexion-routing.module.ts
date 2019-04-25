
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConexionDesconexionListComponent } from './conexion-desconexion-list/conexion-desconexion-list.component';
import { ConexionDesconexionIntroComponent } from './conexion-desconexion-intro/conexion-desconexion-intro.component';
import { ConexionDesconexionComponent } from './conexion-desconexion.component';
import { ConexionDesconexionConfigComponent } from './conexion-desconexion-config/conexion-desconexion-config.component';



const routes: Routes = [
  { path: '', component: ConexionDesconexionComponent,
  children: [
     { path: '', pathMatch: 'full', redirectTo: 'intro' },
     { path: 'intro', component: ConexionDesconexionIntroComponent },
     { path: 'lista', component: ConexionDesconexionListComponent },
     { path: 'config', component: ConexionDesconexionConfigComponent },

  ],
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConexionDesconexionRoutingModule { }
