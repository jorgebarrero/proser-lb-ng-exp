import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SystemComponent } from './system.component';
import { SystemIntroComponent } from './system-intro/system-intro.component';


const routes: Routes = [
  {
      path: '', component: SystemComponent,
      children: [
        { path: '', redirectTo: 'system-intro' },

        { path: 'system-intro', component: SystemIntroComponent},

    ] 
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
