import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationComponent } from './location.component';
import { LocationIntroComponent } from './location-intro/location-intro.component';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';

const routes: Routes = [

  {
    path: '', component: LocationComponent,
    children: [
      { path: '', redirectTo: 'intro' },
      { path: 'intro', component: LocationIntroComponent },
      { path: 'list', component: LocationListComponent},
      { path: 'detail', component: LocationDetailComponent},
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
