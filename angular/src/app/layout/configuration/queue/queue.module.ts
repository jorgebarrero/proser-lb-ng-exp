import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueueRoutingModule } from './queue-routing.module';
import { QueueComponent } from './queue.component';
import { QueueIntroComponent } from './queue-intro/queue-intro.component';
import { QueueMenuComponent } from './queue-menu/queue-menu.component';
import { QueueListComponent } from './queue-list/queue-list.component';
import { QueueDetailComponent } from './queue-detail/queue-detail.component';

@NgModule({
  declarations: [QueueComponent, QueueIntroComponent, QueueMenuComponent, QueueListComponent, QueueDetailComponent],
  imports: [
    CommonModule,
    QueueRoutingModule
  ]
})
export class QueueModule { }
