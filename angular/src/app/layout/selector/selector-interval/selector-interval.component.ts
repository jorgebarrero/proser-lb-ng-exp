import { Component, OnInit } from '@angular/core';
import { UserSelection } from '../../../shared/models/filter/Selection';

@Component({
  selector: 'app-selector-interval',
  templateUrl: './selector-interval.component.html',
  styleUrls: ['./selector-interval.component.scss']
})
export class SelectorIntervalComponent implements OnInit {

  menuOptions;
  items;

  selected;
  userSelection = new UserSelection;

  constructor() {

   }


  ngOnInit() {
    this.menuOptions = JSON.parse(localStorage.getItem('menuOptions'));
    this.items = this.menuOptions.interval;

    // console.log('menuOptions.interval', this.menuOptions.interval);

    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.selected = this.userSelection.interval;
  }

  onChange() {
    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.userSelection.interval = this.selected;
    console.log('selected interval', this.selected);
    console.log('selected object',  this.userSelection);
    localStorage.setItem('userSelection', JSON.stringify(this.userSelection));
  }

}
