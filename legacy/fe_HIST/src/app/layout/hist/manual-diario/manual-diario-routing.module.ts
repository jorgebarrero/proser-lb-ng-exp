import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManualDiarioComponent } from './manual-diario.component';
import { ManualDiarioIntroComponent } from './manual-diario-intro/manual-diario-intro.component';
import { ManualDiarioListComponent } from './manual-diario-list/manual-diario-list.component';
import { ManualDiarioConfigComponent } from './manual-diario-config/manual-diario-config.component';



const routes: Routes = [
  { path: '', component: ManualDiarioComponent,
  children: [
     { path: '', pathMatch: 'full', redirectTo: 'intro' },
     { path: 'intro', component: ManualDiarioIntroComponent },
     { path: 'lista', component: ManualDiarioListComponent },
     { path: 'config', component: ManualDiarioConfigComponent },
  ],
 }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManualDiarioRoutingModule { }
