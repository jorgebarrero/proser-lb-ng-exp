import { Component, OnInit } from '@angular/core';

import { UserSelection } from '../../../shared/models/filter/Selection'

@Component({
  selector: 'app-selector-start-time',
  templateUrl: './selector-start-time.component.html',
  styleUrls: ['./selector-start-time.component.scss']
})
export class SelectorStartTimeComponent implements OnInit {

  items = [
    {inv_start_time_id: 1, inv_start_time_name: '07:00 am'},
    {inv_start_time_id: 2, inv_start_time_name: '08:00 am'},
    {inv_start_time_id: 3, inv_start_time_name: '09:00 am'}
  ];

selected = [];
userSelection = new UserSelection;

  constructor() {

   }


  ngOnInit() {
    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.selected = this.userSelection.start_time
  }

  onChange(){
    this.userSelection.start_time = this.selected
    console.log('selected start_time', this.selected);
    console.log('selected object',  this.userSelection);
    localStorage.setItem('userSelection',JSON.stringify(this.userSelection));
  }

}

