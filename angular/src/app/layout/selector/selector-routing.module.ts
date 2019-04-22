import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectorComponent } from './selector.component';
import { SelectorIntroComponent } from './components/selector-intro/selector-intro.component';
import { SelectorStartDateComponent } from './selector-start-date/selector-start-date.component';
import { LlamadasEntrantesComponent } from './components/llamadas-entrantes/llamadas-entrantes.component';

const routes: Routes = [

  {
    path: '', component: SelectorComponent,
    children: [
      { path: '', redirectTo: 'intro' },

      { path: 'intro', component: SelectorIntroComponent },
      { path: 'start-date', component: SelectorStartDateComponent },
      { path: 'llamadas-entrantes', component: LlamadasEntrantesComponent },
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectorRoutingModule { }
