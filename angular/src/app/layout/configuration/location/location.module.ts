import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';
import { LocationIntroComponent } from './location-intro/location-intro.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { LocationMenuComponent } from './location-menu/location-menu.component';
import { LocationListComponent } from './location-list/location-list.component';

@NgModule({
  declarations: [LocationComponent, LocationIntroComponent, LocationDetailComponent, LocationMenuComponent, LocationListComponent],
  imports: [
    CommonModule,
    LocationRoutingModule
  ]
})
export class LocationModule { }
