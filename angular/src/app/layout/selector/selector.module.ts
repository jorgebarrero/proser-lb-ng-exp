import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DpDatePickerModule } from 'ng2-date-picker';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxJsonViewerModule } from 'ngx-json-viewer';



import { NowModule } from 'src/app/shared/modules/now/now.module';
import { ConnectionModule } from 'src/app/shared/modules/connection/connection.module';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { AngularMaterialModule } from 'src/app/shared/modules/angular-material/angular-material.module';

import { SelectorRoutingModule } from './selector-routing.module';
import { SelectorComponent } from './selector.component';

import { SelectorIntroComponent } from './components/selector-intro/selector-intro.component';
import { SelectorHeaderComponent } from './components/selector-header/selector-header.component';

import { SelectorStartDateComponent } from './selector-start-date/selector-start-date.component';

import { SelectorTitleComponent } from './selector-title/selector-title.component';
import { SelectorSubtitleComponent } from './selector-subtitle/selector-subtitle.component';

import { SelectorEndDateComponent } from './selector-end-date/selector-end-date.component';
import { SelectorEndTimeComponent } from './selector-end-time/selector-end-time.component';
import { SelectorStartTimeComponent } from './selector-start-time/selector-start-time.component';
import { SelectorIntervalComponent } from './selector-interval/selector-interval.component';
import { SelectorLinesComponent } from './selector-lines/selector-lines.component';

import { SelectorAgentComponent } from './selector-agent/selector-agent.component';
import { SelectorCampaignComponent } from './selector-campaign/selector-campaign.component';
import { SelectorClientComponent } from './selector-client/selector-client.component';
import { SelectorQueueComponent } from './selector-queue/selector-queue.component';
import { SelectorScaleComponent } from './selector-scale/selector-scale.component';
import { SelectorScheduleComponent } from './selector-schedule/selector-schedule.component';
import { SelectorServiceComponent } from './selector-service/selector-service.component';
import { SelectorSupervisorComponent } from './selector-supervisor/selector-supervisor.component';

import { SelectorGroupComponent } from './selector-group/selector-group.component';
import { SelectorOrderComponent } from './selector-order/selector-order.component';
import { SelectorLimitComponent } from './selector-limit/selector-limit.component';


import { SelectorSubstituteComponent } from './selector-substitute/selector-substitute.component';
import { AlertModule } from 'src/app/shared/modules/alert/alert.module';
import { SelectorAsignationComponent } from './selector-asignation/selector-asignation.component';
import { SelectorLoginComponent } from './selector-login/selector-login.component';
import { SelectorAuxiliarComponent } from './selector-auxiliar/selector-auxiliar.component';
import { LlamadasEntrantesComponent } from './components/llamadas-entrantes/llamadas-entrantes.component';




@NgModule({
  declarations: [
    SelectorComponent,
    SelectorIntroComponent,
    SelectorStartDateComponent,
    SelectorHeaderComponent,
    SelectorAgentComponent,
    SelectorCampaignComponent,
    SelectorClientComponent,
    SelectorQueueComponent,
    SelectorScaleComponent,
    SelectorScheduleComponent,
    SelectorServiceComponent,
    SelectorSupervisorComponent,
    SelectorGroupComponent,
    SelectorOrderComponent,
    SelectorLimitComponent,
    SelectorTitleComponent,
    SelectorSubtitleComponent,
    SelectorEndDateComponent,
    SelectorEndTimeComponent,
    SelectorStartTimeComponent,
    SelectorIntervalComponent,
    SelectorLinesComponent,
    SelectorSubstituteComponent,
    SelectorAsignationComponent,
    SelectorLoginComponent,
    SelectorAuxiliarComponent,
    LlamadasEntrantesComponent,
  ],
  imports: [
    CommonModule,
    DpDatePickerModule,
    FormsModule,
    NowModule,
    ConnectionModule,
    AngularMaterialModule,
    OwlDateTimeModule, OwlNativeDateTimeModule,
    NgSelectModule,
    NgbModule,
    NgxJsonViewerModule,
    AlertModule,
    SelectorRoutingModule
  ]
})
export class SelectorModule { }
