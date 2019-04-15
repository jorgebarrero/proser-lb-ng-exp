import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceComponent } from './service.component';
import { ServiceIntroComponent } from './service-intro/service-intro.component';

@NgModule({
  declarations: [ServiceComponent, ServiceIntroComponent],
  imports: [
    CommonModule,
    ServiceRoutingModule
  ]
})
export class ServiceModule { }
