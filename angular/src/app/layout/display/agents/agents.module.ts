import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentsRoutingModule } from './agents-routing.module';
import { AgentsComponent } from './agents.component';
import { AgentsIntroComponent } from './agents-intro/agents-intro.component';
import { AgentsMenuComponent } from './agents-menu/agents-menu.component';
import { AgentsDetailComponent } from './agents-detail/agents-detail.component';
import { AgentsListComponent } from './agents-list/agents-list.component';
import { AgentsFilterComponent } from './agents-filter/agents-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [AgentsComponent, AgentsIntroComponent, AgentsMenuComponent, AgentsDetailComponent, AgentsListComponent, AgentsFilterComponent],
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
