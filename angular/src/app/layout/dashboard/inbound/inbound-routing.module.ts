import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InboundComponent } from './inbound.component';
import { InboundIntroComponent } from './inbound-intro/inbound-intro.component';
import { InboundListComponent } from './inbound-list/inbound-list.component';
import { InboundDetailComponent } from './inbound-detail/inbound-detail.component';
import { InboundFilterComponent } from './inbound-filter/inbound-filter.component';


const routes: Routes = [

  {
    path: '', component: InboundComponent,
    children: [
    { path: '', redirectTo: 'intro' },
    { path: 'intro', component: InboundIntroComponent},
    { path: 'list', component: InboundListComponent},
    { path: 'detail', component: InboundDetailComponent},
    { path: 'filter', component: InboundFilterComponent},
 ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboundRoutingModule { }
