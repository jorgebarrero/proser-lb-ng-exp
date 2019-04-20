import { Component, OnInit } from '@angular/core';

import { UserSelection } from '../../../shared/models/filter/Selection';

@Component({
  selector: 'app-selector-queue',
  templateUrl: './selector-queue.component.html',
  styleUrls: ['./selector-queue.component.scss']
})
export class SelectorQueueComponent implements OnInit {

  items = [
    {inv_queue_id: 1, inv_queue_name: 'Cola 1'},
    {inv_queue_id: 2, inv_queue_name: 'Cola 2'},
    {inv_queue_id: 3, inv_queue_name: 'Cola 3'}
  ];

selected = [];
userSelection = new UserSelection;

  constructor() {

   }


  ngOnInit() {
    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.selected = this.userSelection.queue;
  }

  onChange() {
    this.userSelection.queue = this.selected;
    console.log('selected queue', this.selected);
    console.log('selected object',  this.userSelection);
    localStorage.setItem('userSelection', JSON.stringify(this.userSelection));
  }

}
