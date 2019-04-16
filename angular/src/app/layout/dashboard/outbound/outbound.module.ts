import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutboundRoutingModule } from './outbound-routing.module';
import { OutboundComponent } from './outbound.component';

@NgModule({
  declarations: [OutboundComponent],
  imports: [
    CommonModule,
    OutboundRoutingModule
  ]
})
export class OutboundModule { }
