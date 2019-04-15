import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreakRoutingModule } from './break-routing.module';
import { BreakComponent } from './break.component';
import { BreakIntroComponent } from './break-intro/break-intro.component';
import { BreakDetailComponent } from './break-detail/break-detail.component';
import { BreakListComponent } from './break-list/break-list.component';
import { BreakMenuComponent } from './break-menu/break-menu.component';

@NgModule({
  declarations: [BreakComponent, BreakIntroComponent, BreakDetailComponent, BreakListComponent, BreakMenuComponent],
  imports: [
    CommonModule,
    BreakRoutingModule
  ]
})
export class BreakModule { }
