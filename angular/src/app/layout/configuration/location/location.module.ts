import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';
import { LocationIntroComponent } from './location-intro/location-intro.component';

@NgModule({
  declarations: [LocationComponent, LocationIntroComponent],
  imports: [
    CommonModule,
    LocationRoutingModule
  ]
})
export class LocationModule { }
