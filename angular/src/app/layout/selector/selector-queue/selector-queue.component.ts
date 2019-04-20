import { Component, OnInit } from '@angular/core';

import { UserSelection } from '../../../shared/models/filter/Selection';

@Component({
  selector: 'app-selector-queue',
  templateUrl: './selector-queue.component.html',
  styleUrls: ['./selector-queue.component.scss']
})
export class SelectorQueueComponent implements OnInit {


  menuOptions;
  items;

  selected;
  userSelection = new UserSelection;

  constructor() {

   }


  ngOnInit() {
    this.menuOptions = JSON.parse(localStorage.getItem('menuOptions'));
    this.items = this.menuOptions.queue;

    // console.log('menuOptions.queue', this.menuOptions.queue);

    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.selected = this.userSelection.queue;
  }

  onChange() {
    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.userSelection.queue = this.selected;
    console.log('selected queue', this.selected);
    console.log('selected object',  this.userSelection);
    localStorage.setItem('userSelection', JSON.stringify(this.userSelection));
  }

}
