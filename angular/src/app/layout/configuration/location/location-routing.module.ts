import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationComponent } from './location.component';
import { LocationIntroComponent } from './location-intro/location-intro.component';

const routes: Routes = [

  {
    path: '', component: LocationComponent,
    children: [
      { path: '', redirectTo: 'intro' },
      { path: 'intro', component: LocationIntroComponent },
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
