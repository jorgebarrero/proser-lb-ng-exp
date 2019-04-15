import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceComponent } from './service.component';
import { ServiceIntroComponent } from './service-intro/service-intro.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { ServiceMenuComponent } from './service-menu/service-menu.component';

@NgModule({
  declarations: [ServiceComponent, ServiceIntroComponent, ServiceDetailComponent, ServiceListComponent, ServiceMenuComponent],
  imports: [
    CommonModule,
    ServiceRoutingModule
  ]
})
export class ServiceModule { }
