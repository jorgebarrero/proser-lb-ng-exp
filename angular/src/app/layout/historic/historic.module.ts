import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NowModule } from 'src/app/shared/modules/now/now.module';
import { ConnectionModule } from 'src/app/shared/modules/connection/connection.module';

import { HistoricRoutingModule } from './historic-routing.module';
import { HistoricComponent } from './historic.component';
import { HistoricIntroComponent } from './historic-intro/historic-intro.component';
import { HistoricHeaderComponent } from './components/historic-header/historic-header.component';

@NgModule({
  declarations: [HistoricComponent, HistoricIntroComponent, HistoricHeaderComponent],
  imports: [
    CommonModule,
    NowModule,
    ConnectionModule,
    HistoricRoutingModule
  ]
})
export class HistoricModule { }
