import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutboundIntervalRoutingModule } from './outbound-interval-routing.module';
import { OutboundIntervalComponent } from './outbound-interval.component';

@NgModule({
  declarations: [OutboundIntervalComponent],
  imports: [
    CommonModule,
    OutboundIntervalRoutingModule
  ]
})
export class OutboundIntervalModule { }
