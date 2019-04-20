import { Component, OnInit } from '@angular/core';
import { UserSelection } from '../../../shared/models/filter/Selection';

@Component({
  selector: 'app-selector-campaign',
  templateUrl: './selector-campaign.component.html',
  styleUrls: ['./selector-campaign.component.scss']
})
export class SelectorCampaignComponent implements OnInit {

  items = [
    {inv_campaign_id: 7, inv_campaign_name: 'Campaña 1'},
    {inv_campaign_id: 8, inv_campaign_name: 'Campaña 2'},
    {inv_campaign_id: 9, inv_campaign_name: 'Campaña 3'}
  ];

selected = [];
userSelection = new UserSelection;

  constructor() {

   }


  ngOnInit() {
    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.selected = this.userSelection.campaign;
  }

  onChange() {
    this.userSelection.campaign = this.selected;
    console.log('selected campaign', this.selected);
    console.log('selected object',  this.userSelection);
    localStorage.setItem('userSelection', JSON.stringify(this.userSelection));
  }

}
