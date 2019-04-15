import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScaleRoutingModule } from './scale-routing.module';
import { ScaleComponent } from './scale.component';
import { ScaleIntroComponent } from './scale-intro/scale-intro.component';

@NgModule({
  declarations: [ScaleComponent, ScaleIntroComponent],
  imports: [
    CommonModule,
    ScaleRoutingModule
  ]
})
export class ScaleModule { }
