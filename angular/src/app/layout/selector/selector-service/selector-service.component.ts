import { Component, OnInit } from '@angular/core';

import { UserSelection } from '../../../shared/models/filter/Selection';

@Component({
  selector: 'app-selector-service',
  templateUrl: './selector-service.component.html',
  styleUrls: ['./selector-service.component.scss']
})
export class SelectorServiceComponent implements OnInit {

  items = [
    {inv_service_id: 1, inv_service_name: 'Servicios 1'},
    {inv_service_id: 2, inv_service_name: 'Servicios 2'},
    {inv_service_id: 3, inv_service_name: 'Servicios 3'}
  ];

selected = [];
userSelection = new UserSelection;

  constructor() {

   }


  ngOnInit() {
    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.selected = this.userSelection.service;
  }

  onChange() {
    this.userSelection.service = this.selected;
    console.log('selected service', this.selected);
    console.log('selected object',  this.userSelection);
    localStorage.setItem('userSelection', JSON.stringify(this.userSelection));
  }

}
