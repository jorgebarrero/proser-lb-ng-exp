import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueueComponent } from './queue.component';
import { QueueIntroComponent } from './queue-intro/queue-intro.component';

const routes: Routes = [

  {
    path: '', component: QueueComponent,
    children: [
      { path: '', redirectTo: 'intro' },
      { path: 'intro', component: QueueIntroComponent },
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueueRoutingModule { }
