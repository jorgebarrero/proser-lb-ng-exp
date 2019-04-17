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
          { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
          { path: 'display', loadChildren: './display/display.module#DisplayModule' },
          { path: 'historic', loadChildren: './historic/historic.module#HistoricModule' },
          { path: 'audit', loadChildren: './audit/audit.module#AuditModule' },
          { path: 'system', loadChildren: './system/system.module#SystemModule' },


      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
