import { Component, OnInit } from '@angular/core';

import { UserSelection } from '../../../shared/models/filter/Selection';

@Component({
  selector: 'app-selector-supervisor',
  templateUrl: './selector-supervisor.component.html',
  styleUrls: ['./selector-supervisor.component.scss']
})
export class SelectorSupervisorComponent implements OnInit {

  menuOptions;
  items;

  selected;
  userSelection = new UserSelection;

  constructor() {

}


  ngOnInit() {
    this.menuOptions = JSON.parse(localStorage.getItem('menuOptions'));
    this.items = this.menuOptions.supervisor;

    // console.log('menuOptions.supervisor', this.menuOptions.supervisor);

    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.selected = this.userSelection.supervisor;
  }

  onChange() {
    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.userSelection.supervisor = this.selected;
    console.log('selected supervisor', this.selected);
    console.log('selected object',  this.userSelection);
    localStorage.setItem('userSelection', JSON.stringify(this.userSelection));
  }

}
