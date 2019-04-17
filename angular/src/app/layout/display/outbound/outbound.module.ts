import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutboundRoutingModule } from './outbound-routing.module';
import { OutboundComponent } from './outbound.component';
import { OutboundIntroComponent } from './outbound-intro/outbound-intro.component';
import { OutboundMenuComponent } from './outbound-menu/outbound-menu.component';
import { OutboundFilterComponent } from './outbound-filter/outbound-filter.component';
import { OutboundListComponent } from './outbound-list/outbound-list.component';
import { OutboundDetailComponent } from './outbound-detail/outbound-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [OutboundComponent, OutboundIntroComponent, OutboundMenuComponent, OutboundFilterComponent, OutboundListComponent, OutboundDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    OutboundRoutingModule
  ]
})
export class OutboundModule { }
