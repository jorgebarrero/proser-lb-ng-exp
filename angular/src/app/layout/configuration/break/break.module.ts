import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreakRoutingModule } from './break-routing.module';
import { BreakComponent } from './break.component';
import { BreakIntroComponent } from './break-intro/break-intro.component';
import { BreakDetailComponent } from './break-detail/break-detail.component';
import { BreakListComponent } from './break-list/break-list.component';
import { BreakMenuComponent } from './break-menu/break-menu.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BreakComponent, BreakIntroComponent, BreakDetailComponent, BreakListComponent, BreakMenuComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    BreakRoutingModule
  ]
})
export class BreakModule { }
