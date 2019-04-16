import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntranteIntervaloComponent } from './entrante-intervalo.component';
import { EntranteIntervaloIntroComponent } from './entrante-intervalo-intro/entrante-intervalo-intro.component';
import { EntranteIntervaloListComponent } from './entrante-intervalo-list/entrante-intervalo-list.component';
import { EntranteIntervaloConfigComponent } from './entrante-intervalo-config/entrante-intervalo-config.component';



const routes: Routes = [
  { path: '', component: EntranteIntervaloComponent,
  children: [
     { path: '', pathMatch: 'full', redirectTo: 'intro' },
     { path: 'intro', component: EntranteIntervaloIntroComponent },
     { path: 'lista', component: EntranteIntervaloListComponent },
     { path: 'config', component: EntranteIntervaloConfigComponent },
  ],
 }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntranteIntervaloRoutingModule { }
