import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { AgentComponent } from './agent.component';
import { AgentIntroComponent } from './agent-intro/agent-intro.component';
import { AgentDetailComponent } from './agent-detail/agent-detail.component';
import { AgentListComponent } from './agent-list/agent-list.component';
import { AgentMenuComponent } from './agent-menu/agent-menu.component';



@NgModule({
  declarations: [AgentComponent, AgentIntroComponent, AgentDetailComponent, AgentListComponent, AgentMenuComponent],
  imports: [
    CommonModule,
    AgentRoutingModule
  ]
})
export class AgentModule { }
