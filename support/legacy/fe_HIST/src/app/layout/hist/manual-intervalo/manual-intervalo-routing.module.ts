import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManualIntervaloComponent } from './manual-intervalo.component';
import { ManualIntervaloIntroComponent } from './manual-intervalo-intro/manual-intervalo-intro.component';
import { ManualIntervaloListComponent } from './manual-intervalo-list/manual-intervalo-list.component';
import { ManualIntervaloConfigComponent } from './manual-intervalo-config/manual-intervalo-config.component';



const routes: Routes = [
  { path: '', component: ManualIntervaloComponent,
  children: [
     { path: '', pathMatch: 'full', redirectTo: 'intro' },
     { path: 'intro', component: ManualIntervaloIntroComponent },
     { path: 'lista', component: ManualIntervaloListComponent },
     { path: 'config', component: ManualIntervaloConfigComponent },
  ],
 }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManualIntervaloRoutingModule { }
