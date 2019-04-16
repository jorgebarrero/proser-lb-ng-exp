import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboundRoutingModule } from './inbound-routing.module';
import { InboundComponent } from './inbound.component';

@NgModule({
  declarations: [InboundComponent],
  imports: [
    CommonModule,
    InboundRoutingModule
  ]
})
export class InboundModule { }
