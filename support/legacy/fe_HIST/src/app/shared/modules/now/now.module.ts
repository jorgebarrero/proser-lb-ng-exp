import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NowComponent } from './now.component';
import { NowTimeComponent } from './now-time/now-time.component';
import { NowDateComponent } from './now-date/now-date.component';

@NgModule({
  imports: [ CommonModule, RouterModule ],
  declarations: [ NowComponent, NowTimeComponent, NowDateComponent ],
  exports: [ NowComponent, NowTimeComponent, NowDateComponent ]
})
export class NowModule { }
