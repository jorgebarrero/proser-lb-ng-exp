import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueueRoutingModule } from './queue-routing.module';
import { QueueComponent } from './queue.component';
import { QueueIntroComponent } from './queue-intro/queue-intro.component';
import { QueueMenuComponent } from './queue-menu/queue-menu.component';
import { QueueListComponent } from './queue-list/queue-list.component';
import { QueueDetailComponent } from './queue-detail/queue-detail.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QueueEditComponent } from './queue-edit/queue-edit.component';
import { QueueAddComponent } from './queue-add/queue-add.component';
import { AlertModule } from 'src/app/shared/modules/alert/alert.module';


@NgModule({
  declarations: [QueueComponent, QueueIntroComponent, QueueMenuComponent, QueueListComponent, QueueDetailComponent, QueueEditComponent, QueueAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    AlertModule,
    QueueRoutingModule
  ]
})
export class QueueModule { }
