import { Component, OnInit } from '@angular/core';

import { UserSelection } from '../../../shared/models/filter/Selection';

@Component({
  selector: 'app-selector-end-time',
  templateUrl: './selector-end-time.component.html',
  styleUrls: ['./selector-end-time.component.scss']
})
export class SelectorEndTimeComponent implements OnInit {

  items = [
    {inv_end_time_id: 1, inv_end_time_name: '4:00 pm'},
    {inv_end_time_id: 2, inv_end_time_name: '8:00 pm'},
    {inv_end_time_id: 3, inv_end_time_name: '10:00 pm'}
  ];

selected = [];
userSelection = new UserSelection;

  constructor() {

   }


  ngOnInit() {
    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.selected = this.userSelection.end_time;
  }

  onChange() {
    this.userSelection.end_time = this.selected;
    console.log('selected end_time', this.selected);
    console.log('selected object',  this.userSelection);
    localStorage.setItem('userSelection', JSON.stringify(this.userSelection));
  }

}
