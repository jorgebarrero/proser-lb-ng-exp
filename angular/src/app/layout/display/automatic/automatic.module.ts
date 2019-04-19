import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutomaticRoutingModule } from './automatic-routing.module';
import { AutomaticComponent } from './automatic.component';
import { AutomaticIntroComponent } from './automatic-intro/automatic-intro.component';
import { AutomaticMenuComponent } from './automatic-menu/automatic-menu.component';
import { AutomaticFilterComponent } from './automatic-filter/automatic-filter.component';
import { AutomaticListComponent } from './automatic-list/automatic-list.component';
import { AutomaticDetailComponent } from './automatic-detail/automatic-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [AutomaticComponent, AutomaticIntroComponent, AutomaticMenuComponent, AutomaticFilterComponent, AutomaticListComponent, AutomaticDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    AutomaticRoutingModule
  ]
})
export class AutomaticModule { }
