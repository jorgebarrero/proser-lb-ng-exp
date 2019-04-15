import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignRoutingModule } from './campaign-routing.module';
import { CampaignComponent } from './campaign.component';
import { CampaignIntroComponent } from './campaign-intro/campaign-intro.component';

@NgModule({
  declarations: [CampaignComponent, CampaignIntroComponent],
  imports: [
    CommonModule,
    CampaignRoutingModule
  ]
})
export class CampaignModule { }
