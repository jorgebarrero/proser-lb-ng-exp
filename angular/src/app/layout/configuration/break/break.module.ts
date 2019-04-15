import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreakRoutingModule } from './break-routing.module';
import { BreakComponent } from './break.component';
import { BreakIntroComponent } from './break-intro/break-intro.component';

@NgModule({
  declarations: [BreakComponent, BreakIntroComponent],
  imports: [
    CommonModule,
    BreakRoutingModule
  ]
})
export class BreakModule { }
