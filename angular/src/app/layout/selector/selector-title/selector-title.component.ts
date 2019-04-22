import { Component, OnInit } from '@angular/core';

import { UserSelection } from '../../../shared/models/filter/Selection';

@Component({
  selector: 'app-selector-title',
  templateUrl: './selector-title.component.html',
  styleUrls: ['./selector-title.component.scss']
})
export class SelectorTitleComponent implements OnInit {

  items = [
    {inv_title_id: 1, inv_title_name: 'Titulo 1'},
    {inv_title_id: 2, inv_title_name: 'Titulo 2'},
    {inv_title_id: 3, inv_title_name: 'Titulo 3'}
  ];

selected = [];
userSelection = new UserSelection;

  constructor() {

   }


  ngOnInit() {
    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.selected = this.userSelection.title;
  }

  onChange() {
    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.userSelection.title = this.selected;
    console.log('selected title', this.selected);
    console.log('selected object',  this.userSelection);
    localStorage.setItem('userSelection', JSON.stringify(this.userSelection));
  }

}
