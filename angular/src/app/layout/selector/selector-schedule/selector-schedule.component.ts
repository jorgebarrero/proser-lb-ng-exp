import { Component, OnInit } from '@angular/core';
import { UserSelection } from '../../../shared/models/filter/Selection'

@Component({
  selector: 'app-selector-schedule',
  templateUrl: './selector-schedule.component.html',
  styleUrls: ['./selector-schedule.component.scss']
})
export class SelectorScheduleComponent implements OnInit {

  items = [
    {inv_schedule_id: 1, inv_schedule_name: 'Diurno'},
    {inv_schedule_id: 2, inv_schedule_name: 'Mediodia'},
    {inv_schedule_id: 3, inv_schedule_name: 'Nocturno'}
  ];

selected = [];
userSelection = new UserSelection;

  constructor() {

   }


  ngOnInit() {
    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.selected = this.userSelection.schedule
  }

  onChange(){
    this.userSelection.schedule = this.selected
    console.log('selected schedule', this.selected);
    console.log('selected object',  this.userSelection);
    localStorage.setItem('userSelection',JSON.stringify(this.userSelection));
  }

}
