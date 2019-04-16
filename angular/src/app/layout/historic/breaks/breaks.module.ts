import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreaksRoutingModule } from './breaks-routing.module';
import { BreaksComponent } from './breaks.component';

@NgModule({
  declarations: [BreaksComponent],
  imports: [
    CommonModule,
    BreaksRoutingModule
  ]
})
export class BreaksModule { }
