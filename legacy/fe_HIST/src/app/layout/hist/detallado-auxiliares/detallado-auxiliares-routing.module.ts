
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalladoAuxiliaresComponent } from './detallado-auxiliares.component';
import { DetalladoAuxiliaresListComponent } from './detallado-auxiliares-list/detallado-auxiliares-list.component';
import { DetalladoAuxiliaresIntroComponent } from './detallado-auxiliares-intro/detallado-auxiliares-intro.component';
import { DetalladoAuxiliaresConfigComponent } from './detallado-auxiliares-config/detallado-auxiliares-config.component';





const routes: Routes = [
  { path: '', component: DetalladoAuxiliaresComponent,
  children: [
     { path: '', pathMatch: 'full', redirectTo: 'intro' },
     { path: 'intro', component: DetalladoAuxiliaresIntroComponent },
     { path: 'lista', component: DetalladoAuxiliaresListComponent },
     { path: 'config', component: DetalladoAuxiliaresConfigComponent },

  ],
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalladoAuxiliaresRoutingModule { }
