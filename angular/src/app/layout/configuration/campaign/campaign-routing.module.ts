import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignComponent } from './campaign.component';
import { CampaignIntroComponent } from './campaign-intro/campaign-intro.component';
import { CampaignListComponent } from './campaign-list/campaign-list.component';
import { CampaignDetailComponent } from './campaign-detail/campaign-detail.component';
import { CampaignEditComponent } from './campaign-edit/campaign-edit.component';
import { CampaignAddComponent } from './campaign-add/campaign-add.component';


const routes: Routes = [

  {
    path: '', component: CampaignComponent,
    children: [
      { path: '', redirectTo: 'intro' },
      { path: 'intro', component: CampaignIntroComponent },
      { path: 'list', component: CampaignListComponent},
      { path: 'detail', component: CampaignDetailComponent},
      { path: 'edit', component: CampaignEditComponent},
      { path: 'add', component: CampaignAddComponent },
      
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }
