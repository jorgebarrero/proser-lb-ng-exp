import { Component, OnInit } from '@angular/core';

import { UserSelection } from '../../../shared/models/filter/Selection';

@Component({
  selector: 'app-selector-supervisor',
  templateUrl: './selector-supervisor.component.html',
  styleUrls: ['./selector-supervisor.component.scss']
})
export class SelectorSupervisorComponent implements OnInit {

  items = [
    {inv_supervisor_id: 1, inv_supervisor_name: 'Jorge'},
    {inv_supervisor_id: 2, inv_supervisor_name: 'Luis'},
    {inv_supervisor_id: 3, inv_supervisor_name: 'Sara'}
  ];

selected = [];
userSelection = new UserSelection;

  constructor() {

   }


  ngOnInit() {
    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.selected = this.userSelection.supervisor;
  }

  onChange() {
    this.userSelection.supervisor = this.selected;
    console.log('selected supervisor', this.selected);
    console.log('selected object',  this.userSelection);
    localStorage.setItem('userSelection', JSON.stringify(this.userSelection));
  }

}
