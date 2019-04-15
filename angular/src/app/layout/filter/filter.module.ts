import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { FilterRoutingModule } from './filter-routing.module';
import { FilterComponent } from './filter.component';
import { FilterHeaderComponent } from './components/filter-header/filter-header.component';
import { FilterIntroComponent } from './components/filter-intro/filter-intro.component';

import { NowModule } from 'src/app/shared/modules/now/now.module';
import { ConnectionModule } from 'src/app/shared/modules/connection/connection.module';

import { FilterSupervisorComponent } from './filter-supervisor/filter-supervisor.component';

@NgModule({
  declarations: [
    FilterComponent,
    FilterHeaderComponent,
    FilterIntroComponent,
    FilterSupervisorComponent
  ],
  imports: [
    CommonModule,
    NowModule,
    ConnectionModule,
    NgSelectModule,
    FormsModule,
    FilterRoutingModule
  ]
})
export class FilterModule { }
