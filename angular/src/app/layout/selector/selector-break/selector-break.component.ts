import { Component, OnInit } from '@angular/core';

import { UserSelection } from '../../../shared/models/filter/Selection';

@Component({
  selector: 'app-selector-break',
  templateUrl: './selector-break.component.html',
  styleUrls: ['./selector-break.component.scss']
})
export class SelectorBreakComponent implements OnInit {

  items = [
    {inv_break_id: 4, inv_break_name: 'Baño'},
    {inv_break_id: 5, inv_break_name: 'Almuerzo'},
    {inv_break_id: 6, inv_break_name: 'Permiso'}
  ];

selected = [];
userSelection = new UserSelection;

  constructor() {

   }


  ngOnInit() {
    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.selected = this.userSelection.break;
  }

  onChange() {
    this.userSelection.break = this.selected;
    console.log('selected break', this.selected);
    console.log('selected object',  this.userSelection);
    localStorage.setItem('userSelection', JSON.stringify(this.userSelection));
  }

}
