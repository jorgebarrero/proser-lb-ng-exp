import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsignationRoutingModule } from './asignation-routing.module';
import { AsignationComponent } from './asignation.component';
import { AsignationIntroComponent } from './asignation-intro/asignation-intro.component';
import { AsignationMenuComponent } from './asignation-menu/asignation-menu.component';
import { AsignationListComponent } from './asignation-list/asignation-list.component';
import { AsignationDetailComponent } from './asignation-detail/asignation-detail.component';

@NgModule({
  declarations: [AsignationComponent, AsignationIntroComponent, AsignationMenuComponent, AsignationListComponent, AsignationDetailComponent],
  imports: [
    CommonModule,
    AsignationRoutingModule
  ]
})
export class AsignationModule { }
