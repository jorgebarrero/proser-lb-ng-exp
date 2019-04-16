import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IntroComponent } from './intro.component';
import { IntroRoutingModule } from './intro-routing.module';


@NgModule({
  imports: [
    CommonModule,
    IntroRoutingModule
  ],
  declarations: [IntroComponent]
})
export class IntroModule { }
