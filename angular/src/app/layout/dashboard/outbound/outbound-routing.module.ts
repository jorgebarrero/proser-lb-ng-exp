import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OutboundComponent } from './outbound.component';
import { OutboundIntroComponent } from './outbound-intro/outbound-intro.component';
import { OutboundListComponent } from './outbound-list/outbound-list.component';
import { OutboundDetailComponent } from './outbound-detail/outbound-detail.component';
import { OutboundFilterComponent } from './outbound-filter/outbound-filter.component';


const routes: Routes = [

  {
    path: '', component: OutboundComponent,
    children: [
    { path: '', redirectTo: 'intro' },
    { path: 'intro', component: OutboundIntroComponent},
    { path: 'list', component: OutboundListComponent },
    { path: 'detail', component: OutboundDetailComponent},
    { path: 'filter', component: OutboundFilterComponent},
 ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutboundRoutingModule { }
