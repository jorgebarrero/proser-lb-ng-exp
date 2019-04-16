import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutboundDaylyRoutingModule } from './outbound-dayly-routing.module';
import { OutboundDaylyComponent } from './outbound-dayly.component';

@NgModule({
  declarations: [OutboundDaylyComponent],
  imports: [
    CommonModule,
    OutboundDaylyRoutingModule
  ]
})
export class OutboundDaylyModule { }
