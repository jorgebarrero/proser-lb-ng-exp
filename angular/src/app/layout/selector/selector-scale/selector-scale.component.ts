import { Component, OnInit } from '@angular/core';

import { UserSelection } from '../../../shared/models/filter/Selection';

@Component({
  selector: 'app-selector-scale',
  templateUrl: './selector-scale.component.html',
  styleUrls: ['./selector-scale.component.scss']
})
export class SelectorScaleComponent implements OnInit {

  items = [
    {inv_scale_id: 1, inv_scale_name: 'Escala 1'},
    {inv_scale_id: 2, inv_scale_name: 'Escala 2'},
    {inv_scale_id: 3, inv_scale_name: 'Escala 3'}
  ];

selected = [];
userSelection = new UserSelection;

  constructor() {

   }


  ngOnInit() {
    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.selected = this.userSelection.scale;
  }

  onChange() {
    this.userSelection.scale = this.selected;
    console.log('selected scale', this.selected);
    console.log('selected object',  this.userSelection);
    localStorage.setItem('userSelection', JSON.stringify(this.userSelection));
  }

}
