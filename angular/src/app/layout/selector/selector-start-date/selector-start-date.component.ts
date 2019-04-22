import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-selector-start-date',
  templateUrl: './selector-start-date.component.html',
  styleUrls: ['./selector-start-date.component.scss']
})
export class SelectorStartDateComponent implements OnInit {

  @Input() data;

  @Output() event: EventEmitter<any> = new EventEmitter();

  model: NgbDateStruct;
  date: {year: number, month: number};
  calendar;

  show = false;

  selected;

  constructor(

  ) {

  }


  ngOnInit() {
    this.selected = this.data;
  }

  onChange() {

    this.selected = `${this.model.year}-${this.pad(this.model.month, 2)}-${this.pad(this.model.day, 2)}`;

    let object = {
      field: 'start_date',
      value: this.selected
    }

    this.event.emit(object);
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
