import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignRoutingModule } from './campaign-routing.module';
import { CampaignComponent } from './campaign.component';
import { CampaignIntroComponent } from './campaign-intro/campaign-intro.component';
import { CampaignMenuComponent } from './campaign-menu/campaign-menu.component';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { CampaignDetailComponent } from './campaign-detail/campaign-detail.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CampaignEditComponent } from './campaign-edit/campaign-edit.component';
import { CampaignAddComponent } from './campaign-add/campaign-add.component';
import { AlertModule } from 'src/app/shared/modules/alert/alert.module';

@NgModule({
  declarations: [CampaignComponent, CampaignIntroComponent, CampaignMenuComponent, CampaignListComponent, CampaignDetailComponent, CampaignEditComponent, CampaignAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    AlertModule,
    CampaignRoutingModule
  ]
})
export class CampaignModule { }
