import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CdrComponent } from './cdr.component';
import { CdrIntroComponent } from './cdr-intro/cdr-intro.component';
import { CdrListComponent } from './cdr-list/cdr-list.component';
import { CdrConfigComponent } from './cdr-config/cdr-config.component';



const routes: Routes = [
  { path: '', component: CdrComponent,
  children: [
     { path: '', pathMatch: 'full', redirectTo: 'intro' },
     { path: 'intro', component: CdrIntroComponent },
     { path: 'lista', component: CdrListComponent },
     { path: 'config', component: CdrConfigComponent },
  ],
 }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CdrRoutingModule { }
