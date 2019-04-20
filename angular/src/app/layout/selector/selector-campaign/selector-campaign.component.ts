import { Component, OnInit } from '@angular/core';
import { UserSelection } from '../../../shared/models/filter/Selection';

@Component({
  selector: 'app-selector-campaign',
  templateUrl: './selector-campaign.component.html',
  styleUrls: ['./selector-campaign.component.scss']
})
export class SelectorCampaignComponent implements OnInit {

  menuOptions;
  items;

  selected;
  userSelection = new UserSelection;

  constructor() {

   }


  ngOnInit() {
    this.menuOptions = JSON.parse(localStorage.getItem('menuOptions'));
    this.items = this.menuOptions.campaign;

    // console.log('menuOptions.campaign', this.menuOptions.campaign);

    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.selected = this.userSelection.campaign;
  }

  onChange() {
    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.userSelection.campaign = this.selected;
    console.log('selected campaign', this.selected);
    console.log('selected object',  this.userSelection);
    localStorage.setItem('userSelection', JSON.stringify(this.userSelection));
  }

}
