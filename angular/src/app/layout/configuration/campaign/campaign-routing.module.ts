import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignComponent } from './campaign.component';
import { CampaignIntroComponent } from './campaign-intro/campaign-intro.component';

const routes: Routes = [

  {
    path: '', component: CampaignComponent,
    children: [
      { path: '', redirectTo: 'intro' },
      { path: 'intro', component: CampaignIntroComponent },
 ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }
