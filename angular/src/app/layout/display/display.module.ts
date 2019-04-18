import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NowModule } from 'src/app/shared/modules/now/now.module';
import { ConnectionModule } from 'src/app/shared/modules/connection/connection.module';

import { DisplayRoutingModule } from './display-routing.module';
import { DisplayComponent } from './display.component';
import { DisplayHeaderComponent } from './components/display-header/display-header.component';
import { DisplayIntroComponent } from './display-intro/display-intro.component';


@NgModule({
  declarations: [DisplayComponent, DisplayHeaderComponent, DisplayIntroComponent],
  imports: [
    CommonModule,
    NowModule,
    ConnectionModule,
    DisplayRoutingModule
  ]
})
export class DisplayModule { }
