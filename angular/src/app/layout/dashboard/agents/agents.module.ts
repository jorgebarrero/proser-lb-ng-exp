import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentsRoutingModule } from './agents-routing.module';
import { AgentsComponent } from './agents.component';
import { AgentsListComponent } from './agents-list/agents-list.component';
import { AgentsDetailComponent } from './agents-detail/agents-detail.component';
import { AgentsMenuComponent } from './agents-menu/agents-menu.component';
import { AgentsIntroComponent } from './agents-intro/agents-intro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
import { AgentsFilterComponent } from './agents-filter/agents-filter.component';


@NgModule({
  declarations: [AgentsComponent, AgentsListComponent, AgentsDetailComponent, AgentsMenuComponent, AgentsIntroComponent, AgentsFilterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    AgentsRoutingModule
  ]
})
export class AgentsModule { }
