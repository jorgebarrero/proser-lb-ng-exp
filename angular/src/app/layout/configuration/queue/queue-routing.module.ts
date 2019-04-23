import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueueComponent } from './queue.component';
import { QueueIntroComponent } from './queue-intro/queue-intro.component';
import { QueueListComponent } from './queue-list/queue-list.component';
import { QueueDetailComponent } from './queue-detail/queue-detail.component';
import { QueueEditComponent } from './queue-edit/queue-edit.component';
import { QueueAddComponent } from './queue-add/queue-add.component';



const routes: Routes = [

  {
    path: '', component: QueueComponent,
    children: [
      { path: '', redirectTo: 'intro' },
      { path: 'intro', component: QueueIntroComponent },
      { path: 'list', component: QueueListComponent},
      { path: 'detail', component: QueueDetailComponent},
      { path: 'edit', component: QueueEditComponent },
      { path: 'add', component: QueueAddComponent },
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueueRoutingModule { }
