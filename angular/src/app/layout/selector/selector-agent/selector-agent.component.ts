import { Component, OnInit } from '@angular/core';

import { UserSelection } from '../../../shared/models/filter/Selection';

@Component({
  selector: 'app-selector-agent',
  templateUrl: './selector-agent.component.html',
  styleUrls: ['./selector-agent.component.scss']
})
export class SelectorAgentComponent implements OnInit {

  menuOptions;
  items;

  selected;
  userSelection = new UserSelection;

  constructor() {

   }


  ngOnInit() {

    this.menuOptions = JSON.parse(localStorage.getItem('menuOptions'));
    this.items = this.menuOptions.agent;

    // console.log('menuOptions.agent', this.menuOptions.agent);

    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.selected = this.userSelection.agent;
  }

  onChange() {
    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.userSelection.agent = this.selected;
    console.log('selected agent', this.selected);
    console.log('selected object',  this.userSelection);
    localStorage.setItem('userSelection', JSON.stringify(this.userSelection));
  }

}
