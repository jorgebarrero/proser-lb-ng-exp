import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NowModule } from 'src/app/shared/modules/now/now.module';
import { ConnectionModule } from 'src/app/shared/modules/connection/connection.module';
import { EnvServiceProvider } from '../../shared/services/env.service.provider';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationComponent } from './configuration.component';


import { ConfigHeaderComponent } from './components/config-header/config-header.component';
import { ConfigfooterComponent } from './components/configfooter/configfooter.component';
import { ConfigIntroComponent } from './components/config-intro/config-intro.component';



@NgModule({
  declarations: [ConfigurationComponent, ConfigHeaderComponent, ConfigfooterComponent, ConfigIntroComponent],
  imports: [
    CommonModule,
    NowModule,
    ConnectionModule,
    ConfigurationRoutingModule
  ],
  providers: [EnvServiceProvider]
})
export class ConfigurationModule { }
