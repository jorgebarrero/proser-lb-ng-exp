import { Component, OnInit } from '@angular/core';

import { UserSelection } from '../../../shared/models/filter/Selection';

@Component({
  selector: 'app-selector-client',
  templateUrl: './selector-client.component.html',
  styleUrls: ['./selector-client.component.scss']
})
export class SelectorClientComponent implements OnInit {

  items = [
    {inv_client_id: 1, inv_client_name: 'Cliente 1'},
    {inv_client_id: 2, inv_client_name: 'Cliente 2'},
    {inv_client_id: 3, inv_client_name: 'Cliente 3'}
  ];

selected = [];
userSelection = new UserSelection;

  constructor() {

   }


  ngOnInit() {
    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.selected = this.userSelection.client;
  }

  onChange() {
    this.userSelection.client = this.selected;
    console.log('selected client', this.selected);
    console.log('selected object',  this.userSelection);
    localStorage.setItem('userSelection', JSON.stringify(this.userSelection));
  }

}
