import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceIntervalRoutingModule } from './service-interval-routing.module';
import { ServiceIntervalComponent } from './service-interval.component';

@NgModule({
  declarations: [ServiceIntervalComponent],
  imports: [
    CommonModule,
    ServiceIntervalRoutingModule
  ]
})
export class ServiceIntervalModule { }
