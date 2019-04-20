import { Component, OnInit, Input } from '@angular/core';

import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

import { UserSelection } from '../../../shared/models/filter/Selection';

@Component({
  selector: 'app-selector-start-date',
  templateUrl: './selector-start-date.component.html',
  styleUrls: ['./selector-start-date.component.scss']
})
export class SelectorStartDateComponent implements OnInit {

  @Input() menuOptions: UserSelection;

  model: NgbDateStruct;
  date: {year: number, month: number};
  calendar;

  show = false;

  items;




selected;
userSelection = new UserSelection;

  constructor(

  ) {

  this.items = [
    {inv_start_date_id: 1, inv_start_date_name: '04/24/2019'},
    {inv_start_date_id: 2, inv_start_date_name: '02/20/2019'},
    {inv_start_date_id: 3, inv_start_date_name: '01/25/2019'}
  ];
  }


  ngOnInit() {
    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.selected = this.userSelection.start_date;
  }

  onChange() {
    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.selected = `${this.model.year}-${this.pad(this.model.month, 2)}-${this.pad(this.model.day, 2)}`;
    this.userSelection.start_date = this.selected ;
    // console.log('selected start_date', this.selected);
    // console.log('selected object',  this.userSelection);
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
