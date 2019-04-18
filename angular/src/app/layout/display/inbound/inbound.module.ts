import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboundRoutingModule } from './inbound-routing.module';
import { InboundComponent } from './inbound.component';
import { InboundIntroComponent } from './inbound-intro/inbound-intro.component';
import { InboundMenuComponent } from './inbound-menu/inbound-menu.component';
import { InboundFilterComponent } from './inbound-filter/inbound-filter.component';
import { InboundListComponent } from './inbound-list/inbound-list.component';
import { InboundDetailComponent } from './inbound-detail/inbound-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [InboundComponent, InboundIntroComponent, InboundMenuComponent, InboundFilterComponent, InboundListComponent, InboundDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    InboundRoutingModule
  ]
})
export class InboundModule { }
