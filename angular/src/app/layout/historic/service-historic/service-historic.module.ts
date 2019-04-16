import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceHistoricRoutingModule } from './service-historic-routing.module';
import { ServiceHistoricComponent } from './service-historic.component';

@NgModule({
  declarations: [ServiceHistoricComponent],
  imports: [
    CommonModule,
    ServiceHistoricRoutingModule
  ]
})
export class ServiceHistoricModule { }
