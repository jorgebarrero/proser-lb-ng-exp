import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScaleRoutingModule } from './scale-routing.module';
import { ScaleComponent } from './scale.component';
import { ScaleIntroComponent } from './scale-intro/scale-intro.component';
import { ScaleDetailComponent } from './scale-detail/scale-detail.component';
import { ScaleListComponent } from './scale-list/scale-list.component';
import { ScaleMenuComponent } from './scale-menu/scale-menu.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScaleEditComponent } from './scale-edit/scale-edit.component';
import { ScaleAddComponent } from './scale-add/scale-add.component';

@NgModule({
  declarations: [ScaleComponent, ScaleIntroComponent, ScaleDetailComponent, ScaleListComponent, ScaleMenuComponent, ScaleEditComponent, ScaleAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    ScaleRoutingModule
  ]
})
export class ScaleModule { }
