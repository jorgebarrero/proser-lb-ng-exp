import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicioHistoricoComponent } from './servicio-historico.component';
import { ServicioHistoricoIntroComponent } from './servicio-historico-intro/servicio-historico-intro.component';
import { ServicioHistoricoListComponent } from './servicio-historico-list/servicio-historico-list.component';
import { ServicioHistoricoConfigComponent } from './servicio-historico-config/servicio-historico-config.component';



const routes: Routes = [
  { path: '', component: ServicioHistoricoComponent,
  children: [
     { path: '', pathMatch: 'full', redirectTo: 'intro' },
     { path: 'intro', component: ServicioHistoricoIntroComponent },
     { path: 'lista', component: ServicioHistoricoListComponent },
     { path: 'config', component: ServicioHistoricoConfigComponent },
  ],
 }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicioHistoricoRoutingModule { }
