import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
  {
      path: '',
      component: LayoutComponent,
      children: [
          { path: '', redirectTo: 'intro' },
          { path: 'intro', loadChildren: './intro/intro.module#IntroModule' },
          { path: 'configuration', loadChildren: './configuration/configuration.module#ConfigurationModule' },
          { path: 'filter', loadChildren: './filter/filter.module#FilterModule' },

      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
