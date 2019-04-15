import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueueRoutingModule } from './queue-routing.module';
import { QueueComponent } from './queue.component';
import { QueueIntroComponent } from './queue-intro/queue-intro.component';

@NgModule({
  declarations: [QueueComponent, QueueIntroComponent],
  imports: [
    CommonModule,
    QueueRoutingModule
  ]
})
export class QueueModule { }
