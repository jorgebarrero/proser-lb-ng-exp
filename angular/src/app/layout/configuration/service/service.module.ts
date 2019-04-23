import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceComponent } from './service.component';
import { ServiceIntroComponent } from './service-intro/service-intro.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServiceMenuComponent } from './service-menu/service-menu.component';
import { ServiceEditComponent } from './service-edit/service-edit.component';
import { ServiceAddComponent } from './service-add/service-add.component';
import { AlertModule } from 'src/app/shared/modules/alert/alert.module';


@NgModule({
  declarations: [ServiceComponent, ServiceIntroComponent, ServiceDetailComponent, ServiceListComponent, ServiceMenuComponent, ServiceEditComponent, ServiceAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    AlertModule,
    ServiceRoutingModule
  ]
})
export class ServiceModule { }
