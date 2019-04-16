import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceDaylyRoutingModule } from './service-dayly-routing.module';
import { ServiceDaylyComponent } from './service-dayly.component';

@NgModule({
  declarations: [ServiceDaylyComponent],
  imports: [
    CommonModule,
    ServiceDaylyRoutingModule
  ]
})
export class ServiceDaylyModule { }
