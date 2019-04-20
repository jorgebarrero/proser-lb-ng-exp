import { Component, OnInit } from '@angular/core';

import { UserSelection } from '../../../shared/models/filter/Selection';

@Component({
  selector: 'app-selector-order',
  templateUrl: './selector-order.component.html',
  styleUrls: ['./selector-order.component.scss']
})
export class SelectorOrderComponent implements OnInit {

  items = [
    {inv_order_id: 1, inv_order_name: 'Orden 1'},
    {inv_order_id: 2, inv_order_name: 'Orden 2'},
    {inv_order_id: 3, inv_order_name: 'Orden 3'}
  ];

selected = [];
userSelection = new UserSelection;

  constructor() {

   }


  ngOnInit() {
    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.selected = this.userSelection.order;
  }

  onChange() {
    this.userSelection.order = this.selected;
    console.log('selected order', this.selected);
    console.log('selected object',  this.userSelection);
    localStorage.setItem('userSelection', JSON.stringify(this.userSelection));
  }

}
