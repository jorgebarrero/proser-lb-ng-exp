import { Component, OnInit } from '@angular/core';

import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

import { UserSelection } from '../../../shared/models/filter/Selection';

@Component({
  selector: 'app-selector-end-date',
  templateUrl: './selector-end-date.component.html',
  styleUrls: ['./selector-end-date.component.scss']
})
export class SelectorEndDateComponent implements OnInit {

  model: NgbDateStruct;
  date: {year: number, month: number};
  calendar;

  show = false;


  items = [
    {inv_end_date_id: 1, inv_end_date_name: '04/24/2019'},
    {inv_end_date_id: 2, inv_end_date_name: '02/20/2019'},
    {inv_end_date_id: 3, inv_end_date_name: '01/25/2019'}
  ];

selected;
userSelection = new UserSelection;

  constructor(

  ) {

  }


  ngOnInit() {
    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.selected = this.userSelection.end_date;
  }

  onChange() {
    this.selected = `${this.model.year}-${this.pad(this.model.month, 2)}-${this.pad(this.model.day, 2)}`;
    this.userSelection.end_date = this.selected ;
    console.log('selected end_date', this.selected);
    console.log('selected object',  this.userSelection);
    localStorage.setItem('userSelection', JSON.stringify(this.userSelection));
  }


  selectToday() {
    this.model = this.calendar.getToday();
  }


  pad(num: number, size: number): string {
    let s = num + '';
    while (s.length < size) { s = '0' + s; }
    return s;
}

  togleShow () {
    this.show = !this.show;
  }

}
