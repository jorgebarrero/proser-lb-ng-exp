import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductividadComponent } from './productividad.component';
import { ProductividadIntroComponent } from './productividad-intro/productividad-intro.component';
import { ProductividadListComponent } from './productividad-list/productividad-list.component';
import { ProductividadConfigComponent } from './productividad-config/productividad-config.component';



const routes: Routes = [
  { path: '', component: ProductividadComponent,
  children: [
     { path: '', pathMatch: 'full', redirectTo: 'intro' },
     { path: 'intro', component: ProductividadIntroComponent },
     { path: 'lista', component: ProductividadListComponent },
     { path: 'config', component: ProductividadConfigComponent },
  ],
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductividadRoutingModule { }
