import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboundDaylyRoutingModule } from './inbound-dayly-routing.module';
import { InboundDaylyComponent } from './inbound-dayly.component';

@NgModule({
  declarations: [InboundDaylyComponent],
  imports: [
    CommonModule,
    InboundDaylyRoutingModule
  ]
})
export class InboundDaylyModule { }
