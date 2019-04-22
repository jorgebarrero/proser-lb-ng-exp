import { Component, OnInit } from '@angular/core';
import { UserSelection } from '../../../shared/models/filter/Selection';

@Component({
  selector: 'app-selector-schedule',
  templateUrl: './selector-schedule.component.html',
  styleUrls: ['./selector-schedule.component.scss']
})
export class SelectorScheduleComponent implements OnInit {

  menuOptions;
  items;

  selected;
  userSelection = new UserSelection;

  constructor() {

   }


  ngOnInit() {
    this.menuOptions = JSON.parse(localStorage.getItem('menuOptions'));
    this.items = this.menuOptions.schedule;

    // console.log('menuOptions.schedule', this.menuOptions.schedule);

    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.selected = this.userSelection.schedule;
  }

  onChange() {
    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.userSelection.schedule = this.selected;
    console.log('selected schedule', this.selected);
    console.log('selected object',  this.userSelection);
    localStorage.setItem('userSelection', JSON.stringify(this.userSelection));
  }

}
