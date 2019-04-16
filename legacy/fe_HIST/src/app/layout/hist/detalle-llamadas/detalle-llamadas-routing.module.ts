import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleLlamadasIntroComponent } from './detalle-llamadas-intro/detalle-llamadas-intro.component';
import { DetalleLlamadasListComponent } from './detalle-llamadas-list/detalle-llamadas-list.component';
import { DetalleLlamadasComponent } from './detalle-llamadas.component';
import { DetalleLlamadasConfigComponent } from './detalle-llamadas-config/detalle-llamadas-config.component';


const routes: Routes = [
  { path: '', component: DetalleLlamadasComponent,
  children: [
     { path: '', pathMatch: 'full', redirectTo: 'intro' },
     { path: 'intro', component: DetalleLlamadasIntroComponent },
     { path: 'lista', component: DetalleLlamadasListComponent },
     { path: 'config', component: DetalleLlamadasConfigComponent },

  ],
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleLlamadasRoutingModule { }
