import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { UserSelection } from '../../../shared/models/filter/Selection';

@Component({
  selector: 'app-selector-start-time',
  templateUrl: './selector-start-time.component.html',
  styleUrls: ['./selector-start-time.component.scss']
})
export class SelectorStartTimeComponent implements OnInit {

  menuOptions;
  items;

  selected;
  userSelection = new UserSelection;

  constructor() {



}


  ngOnInit() {

    this.menuOptions = JSON.parse(localStorage.getItem('menuOptions'));
    this.items = this.menuOptions.start_time;

    // console.log('menuOptions.start_time', this.menuOptions.start_time);

    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.selected = this.userSelection.start_time;
  }

  onChange() {
    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.userSelection.start_time = this.selected;
    // console.log('selected start_time', this.selected);
    // console.log('selected object',  this.userSelection);
    localStorage.setItem('userSelection', JSON.stringify(this.userSelection));
  }

}
