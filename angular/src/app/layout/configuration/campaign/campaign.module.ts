import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignRoutingModule } from './campaign-routing.module';
import { CampaignComponent } from './campaign.component';
import { CampaignIntroComponent } from './campaign-intro/campaign-intro.component';
import { CampaignMenuComponent } from './campaign-menu/campaign-menu.component';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { CampaignDetailComponent } from './campaign-detail/campaign-detail.component';

@NgModule({
  declarations: [CampaignComponent, CampaignIntroComponent, CampaignMenuComponent, CampaignListComponent, CampaignDetailComponent],
  imports: [
    CommonModule,
    CampaignRoutingModule
  ]
})
export class CampaignModule { }
