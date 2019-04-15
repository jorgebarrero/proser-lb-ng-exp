import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScaleRoutingModule } from './scale-routing.module';
import { ScaleComponent } from './scale.component';
import { ScaleIntroComponent } from './scale-intro/scale-intro.component';
import { ScaleDetailComponent } from './scale-detail/scale-detail.component';
import { ScaleListComponent } from './scale-list/scale-list.component';
import { ScaleMenuComponent } from './scale-menu/scale-menu.component';

@NgModule({
  declarations: [ScaleComponent, ScaleIntroComponent, ScaleDetailComponent, ScaleListComponent, ScaleMenuComponent],
  imports: [
    CommonModule,
    ScaleRoutingModule
  ]
})
export class ScaleModule { }
