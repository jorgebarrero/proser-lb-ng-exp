import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntranteDiarioComponent } from './entrante-diario.component';
import { EntranteDiarioIntroComponent } from './entrante-diario-intro/entrante-diario-intro.component';
import { EntranteDiarioListComponent } from './entrante-diario-list/entrante-diario-list.component';
import { EntranteDiarioConfigComponent } from './entrante-diario-config/entrante-diario-config.component';



const routes: Routes = [
  { path: '', component: EntranteDiarioComponent,
  children: [
     { path: '', pathMatch: 'full', redirectTo: 'intro' },
     { path: 'intro', component: EntranteDiarioIntroComponent },
     { path: 'lista', component: EntranteDiarioListComponent },
     { path: 'config', component: EntranteDiarioConfigComponent },
  ],
 }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntranteDiarioRoutingModule { }
