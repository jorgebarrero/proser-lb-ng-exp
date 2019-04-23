import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OperativoDetalladoComponent } from './operativo-detallado.component';
import { OperativoDetalladoIntroComponent } from './operativo-detallado-intro/operativo-detallado-intro.component';
import { OperativoDetalladoListComponent } from './operativo-detallado-list/operativo-detallado-list.component';
import { OperativoDetalladoConfigComponent } from './operativo-detallado-config/operativo-detallado-config.component';



const routes: Routes = [
  { path: '', component: OperativoDetalladoComponent,
  children: [
     { path: '', pathMatch: 'full', redirectTo: 'intro' },
     { path: 'intro', component: OperativoDetalladoIntroComponent },
     { path: 'lista', component: OperativoDetalladoListComponent },
     { path: 'config', component: OperativoDetalladoConfigComponent },

  ],
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperativoDetalladoRoutingModule { }
