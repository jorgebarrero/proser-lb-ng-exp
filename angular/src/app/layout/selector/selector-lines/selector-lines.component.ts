import { Component, OnInit } from '@angular/core';

import { UserSelection } from '../../../shared/models/filter/Selection'

@Component({
  selector: 'app-selector-lines',
  templateUrl: './selector-lines.component.html',
  styleUrls: ['./selector-lines.component.scss']
})
export class SelectorLinesComponent implements OnInit {

  items = [
    {inv_lines_id: 1, inv_lines_name: 'Linea 1'},
    {inv_lines_id: 2, inv_lines_name: 'Linea 2'},
    {inv_lines_id: 3, inv_lines_name: 'Linea 3'}
  ];

selected = [];
userSelection = new UserSelection;

  constructor() {

   }


  ngOnInit() {
    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.selected = this.userSelection.lines
  }

  onChange(){
    this.userSelection.lines = this.selected
    console.log('selected lines', this.selected);
    console.log('selected object',  this.userSelection);
    localStorage.setItem('userSelection',JSON.stringify(this.userSelection));
  }

}

