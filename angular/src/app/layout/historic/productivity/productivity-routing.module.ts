import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductivityComponent } from './productivity.component';
import { ProductivityIntroComponent } from './productivity-intro/productivity-intro.component';
import { ProductivityFilterComponent } from './productivity-filter/productivity-filter.component';
import { ProductivityGraphComponent } from './productivity-graph/productivity-graph.component';
import { ProductivityReportComponent } from './productivity-report/productivity-report.component';



const routes: Routes = [

  {
    path: '', component: ProductivityComponent,
    children: [
    { path: '', redirectTo: 'intro' },
    { path: 'intro', component: ProductivityIntroComponent},
    { path: 'filter', component: ProductivityFilterComponent},
    { path: 'graph', component: ProductivityGraphComponent},
    { path: 'report', component: ProductivityReportComponent},
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductivityRoutingModule { }
