import { Component, OnInit } from '@angular/core';

import { UserSelection } from '../../../shared/models/filter/Selection';

@Component({
  selector: 'app-selector-limit',
  templateUrl: './selector-limit.component.html',
  styleUrls: ['./selector-limit.component.scss']
})
export class SelectorLimitComponent implements OnInit {

  items = [
    {inv_limit_id: 1, inv_limit_name: 'límite 1'},
    {inv_limit_id: 2, inv_limit_name: 'límite 2'},
    {inv_limit_id: 3, inv_limit_name: 'límite 3'}
  ];

selected = [];
userSelection = new UserSelection;

  constructor() {

   }


  ngOnInit() {
    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.selected = this.userSelection.limit;
  }

  onChange() {
    this.userSelection.limit = this.selected;
    console.log('selected limit', this.selected);
    console.log('selected object',  this.userSelection);
    localStorage.setItem('userSelection', JSON.stringify(this.userSelection));
  }

}
