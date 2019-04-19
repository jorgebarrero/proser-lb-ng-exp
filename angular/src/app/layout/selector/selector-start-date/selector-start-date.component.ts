import { Component, OnInit } from '@angular/core';  
// import {ViewChild, ElementRef} from '@angular/core'

// import {DatePickerComponent} from 'ng2-date-picker';
import { UserSelection } from '../../../shared/models/filter/Selection'

@Component({
  selector: 'app-selector-start-date',
  templateUrl: './selector-start-date.component.html',
  styleUrls: ['./selector-start-date.component.scss']
})
export class SelectorStartDateComponent implements OnInit {

  items = [
    {inv_start_date_id: 1, inv_start_date_name: '04/24/2019'},
    {inv_start_date_id: 2, inv_start_date_name: '02/20/2019'},
    {inv_start_date_id: 3, inv_start_date_name: '01/25/2019'}
  ];

selected = [];
userSelection = new UserSelection;

  constructor() {

   }


  ngOnInit() {
    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.selected = this.userSelection.start_date
  }

  onChange(){
    this.userSelection.start_date = this.selected
    console.log('selected start_date', this.selected);
    console.log('selected object',  this.userSelection);
    localStorage.setItem('userSelection',JSON.stringify(this.userSelection));
  }

}


//   @ViewChild('dayPicker') datePicker: DatePickerComponent;

//   config;
//   placeholder;

//   picker;

// selected;
//   constructor(
//     private elRef: ElementRef
//   ) {
//     this.placeholder = 'Fecha inicial';
//     this.config = {
//       firstDayOfWeek: 'mo',
//       monthFormat: 'MMM, YYYY',
//       disableKeypress: false,
//       allowMultiSelect: false,
//       closeOnSelect: undefined,
//       closeOnSelectDelay: 100,
//       onOpenDelay: 0,
//       weekDayFormat: 'ddd',
//       appendTo: document.body,
//       drops: 'down',
//       opens: 'right',
//       showNearMonthDays: true,
//       showWeekNumbers: false,
//       enableMonthSelector: true,
//       format: 'YYYY-MM-DD',
//       yearFormat: 'YYYY',
//       showGoToCurrent: true,
//       dayBtnFormat: 'DD',
//       monthBtnFormat: 'MMM',
//       hours12Format: 'hh',
//       hours24Format: 'HH',
//       meridiemFormat: 'A',
//       minutesFormat: 'mm',
//       minutesInterval: 1,
//       secondsFormat: 'ss',
//       secondsInterval: 1,
//       showSeconds: false,
//       showTwentyFourHours: true,
//       timeSeparator: ':',
//       multipleYearsNavigateBy: 10,
//       showMultipleYearsNavigation: false,
//       locale: 'es',
//       // min:'2017-08-29 15:50',
//       // minTime:'2017-08-29 15:50'
//     };
//   }


//   ngOnInit() {
//   }

//   onChange() {
//     console.log('date', this.picker);

//   }

//   open() {
//     this.datePicker.api.open();
//   }
//   close() {
//     this.datePicker.api.close();
//   }

//   validatorsChanged() {

//   }

//   toogel(){}


