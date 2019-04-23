import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';

import { SupervisorRoutingModule } from './supervisor-routing.module';
import { SupervisorComponent } from './supervisor.component';
import { SupervisorIntroComponent } from './supervisor-intro/supervisor-intro.component';
import { SupervisorListComponent } from './supervisor-list/supervisor-list.component';
import { SupervisorMenuComponent } from './supervisor-menu/supervisor-menu.component';
import { SupervisorDetailComponent } from './supervisor-detail/supervisor-detail.component';
import { AlertModule } from 'src/app/shared/modules/alert/alert.module';
import { SupervisorEditComponent } from './supervisor-edit/supervisor-edit.component';
import { SupervisorAddComponent } from './supervisor-add/supervisor-add.component';





@NgModule({
  declarations: [
    SupervisorComponent,
    SupervisorIntroComponent,
    SupervisorListComponent,
    SupervisorMenuComponent,
    SupervisorDetailComponent,
    SupervisorEditComponent,
    SupervisorAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    AlertModule,
    SupervisorRoutingModule
  ]
})
export class SupervisorModule {}
