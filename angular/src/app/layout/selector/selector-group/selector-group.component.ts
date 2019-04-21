import { Component, OnInit } from '@angular/core';

import { UserSelection } from '../../../shared/models/filter/Selection';

@Component({
  selector: 'app-selector-group',
  templateUrl: './selector-group.component.html',
  styleUrls: ['./selector-group.component.scss']
})
export class SelectorGroupComponent implements OnInit {

  items = [
    {inv_groupBy_id: 1, inv_groupBy_name: 'Grupo 1'},
    {inv_groupBy_id: 2, inv_groupBy_name: 'Grupo 2'},
    {inv_groupBy_id: 3, inv_groupBy_name: 'Grupo 3'}
  ];

selected = [];
userSelection = new UserSelection;

  constructor() {

   }


  ngOnInit() {
    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.selected = this.userSelection.groupBy;
  }

  onChange() {
    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.userSelection.groupBy = this.selected;
    console.log('selected groupBy', this.selected);
    console.log('selected object',  this.userSelection);
    localStorage.setItem('userSelection', JSON.stringify(this.userSelection));
  }

}
