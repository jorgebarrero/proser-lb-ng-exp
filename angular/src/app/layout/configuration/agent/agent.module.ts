import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { AgentComponent } from './agent.component';
import { AgentIntroComponent } from './agent-intro/agent-intro.component';



@NgModule({
  declarations: [AgentComponent, AgentIntroComponent],
  imports: [
    CommonModule,
    AgentRoutingModule
  ]
})
export class AgentModule { }
