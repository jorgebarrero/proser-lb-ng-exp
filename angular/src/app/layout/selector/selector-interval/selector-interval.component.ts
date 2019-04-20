import { Component, OnInit } from '@angular/core';
import { UserSelection } from '../../../shared/models/filter/Selection';

@Component({
  selector: 'app-selector-interval',
  templateUrl: './selector-interval.component.html',
  styleUrls: ['./selector-interval.component.scss']
})
export class SelectorIntervalComponent implements OnInit {

  items = [
    {inv_interval_id: 1, inv_interval_name: '60 minutos'},
    {inv_interval_id: 2, inv_interval_name: '20 minutos'},
    {inv_interval_id: 3, inv_interval_name: '130 minutos'}
  ];

selected = [];
userSelection = new UserSelection;

  constructor() {

   }


  ngOnInit() {
    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.selected = this.userSelection.interval;
  }

  onChange() {
    this.userSelection.interval = this.selected;
    console.log('selected interval', this.selected);
    console.log('selected object',  this.userSelection);
    localStorage.setItem('userSelection', JSON.stringify(this.userSelection));
  }

}
