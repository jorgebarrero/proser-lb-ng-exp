import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboundIntervalRoutingModule } from './inbound-interval-routing.module';
import { InboundIntervalComponent } from './inbound-interval.component';

@NgModule({
  declarations: [InboundIntervalComponent],
  imports: [
    CommonModule,
    InboundIntervalRoutingModule
  ]
})
export class InboundIntervalModule { }
