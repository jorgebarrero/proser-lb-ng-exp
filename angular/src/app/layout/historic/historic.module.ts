import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoricRoutingModule } from './historic-routing.module';
import { HistoricComponent } from './historic.component';

@NgModule({
  declarations: [HistoricComponent],
  imports: [
    CommonModule,
    HistoricRoutingModule
  ]
})
export class HistoricModule { }
