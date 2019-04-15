import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { IntroRoutingModule } from './intro-routing.module';
import { IntroComponent } from './intro.component';

import { EnvServiceProvider } from '../../shared/services/env.service.provider';
import { IntroHeaderComponent } from './intro-header/intro-header.component';
import { ButtombarComponent } from './buttombar/buttombar.component';
import { NowModule } from 'src/app/shared/modules/now/now.module';
import { ConnectionModule } from 'src/app/shared/modules/connection/connection.module';



@NgModule({
  declarations: [IntroComponent, IntroHeaderComponent, ButtombarComponent],
  imports: [
    CommonModule,
    NowModule,
    ConnectionModule,
    IntroRoutingModule
  ],
  providers: [EnvServiceProvider]
})
export class IntroModule { }
