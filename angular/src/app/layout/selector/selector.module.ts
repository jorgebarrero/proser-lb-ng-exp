import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DpDatePickerModule } from 'ng2-date-picker';
import { FormsModule } from '@angular/forms';

import { NowModule } from 'src/app/shared/modules/now/now.module';
import { ConnectionModule } from 'src/app/shared/modules/connection/connection.module';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';



import { SelectorRoutingModule } from './selector-routing.module';
import { SelectorComponent } from './selector.component';

import { SelectorIntroComponent } from './selector-intro/selector-intro.component';
import { SelectorStartDateComponent } from './selector-start-date/selector-start-date.component';
import { SelectorHeaderComponent } from './selector-header/selector-header.component';
import { AngularMaterialModule } from 'src/app/shared/modules/angular-material/angular-material.module';
import { SelectorAgentComponent } from './selector-agent/selector-agent.component';

@NgModule({
  declarations: [SelectorComponent, SelectorIntroComponent, SelectorStartDateComponent, SelectorHeaderComponent, SelectorAgentComponent],
  imports: [
    CommonModule,
    DpDatePickerModule,
    FormsModule,
    NowModule,
    ConnectionModule,
    AngularMaterialModule,
    OwlDateTimeModule, OwlNativeDateTimeModule,
    SelectorRoutingModule
  ]
})
export class SelectorModule { }
