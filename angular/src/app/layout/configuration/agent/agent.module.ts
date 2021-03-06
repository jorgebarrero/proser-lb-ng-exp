import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { AgentComponent } from './agent.component';
import { AgentIntroComponent } from './agent-intro/agent-intro.component';
import { AgentDetailComponent } from './agent-detail/agent-detail.component';
import { AgentListComponent } from './agent-list/agent-list.component';
import { AgentMenuComponent } from './agent-menu/agent-menu.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgentEditComponent } from './agent-edit/agent-edit.component';
import { AgentAddComponent } from './agent-add/agent-add.component';
import { AlertModule } from 'src/app/shared/modules/alert/alert.module';



@NgModule({
  declarations: [AgentComponent, AgentIntroComponent, AgentDetailComponent, AgentListComponent, AgentMenuComponent, AgentEditComponent, AgentAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    AlertModule,
    AgentRoutingModule
  ]
})
export class AgentModule { }
