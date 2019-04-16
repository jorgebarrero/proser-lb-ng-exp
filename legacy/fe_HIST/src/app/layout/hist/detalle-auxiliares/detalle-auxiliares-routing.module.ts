
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleAuxiliaresListComponent } from './detalle-auxiliares-list/detalle-auxiliares-list.component';
import { DetalleAuxiliaresIntroComponent } from './detalle-auxiliares-intro/detalle-auxiliares-intro.component';
import { DetalleAuxiliaresComponent } from './detalle-auxiliares.component';
import { DetalleAuxiliaresConfigComponent } from './detalle-auxiliares-config/detalle-auxiliares-config.component';



const routes: Routes = [
  { path: '', component: DetalleAuxiliaresComponent,
  children: [
     { path: '', pathMatch: 'full', redirectTo: 'intro' },
     { path: 'intro', component: DetalleAuxiliaresIntroComponent },
     { path: 'lista', component: DetalleAuxiliaresListComponent },
     { path: 'config', component: DetalleAuxiliaresConfigComponent },

  ],
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleAuxiliaresRoutingModule { }
