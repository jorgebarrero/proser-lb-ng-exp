import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigComponent } from './config.component';
import { ConfigIntroComponent } from './config-intro/config-intro.component';


const routes: Routes = [
  { path: '', component: ConfigComponent,
  children: [
      { path: '', pathMatch: 'full', redirectTo: 'intro-config' },
      { path: 'intro-config', component: ConfigIntroComponent },

  ],
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigRoutingModule { }
