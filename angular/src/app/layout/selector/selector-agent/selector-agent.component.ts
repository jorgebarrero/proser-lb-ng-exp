import { Component, OnInit } from '@angular/core';

import { UserSelection } from '../../../shared/models/filter/Selection'

@Component({
  selector: 'app-selector-agent',
  templateUrl: './selector-agent.component.html',
  styleUrls: ['./selector-agent.component.scss']
})
export class SelectorAgentComponent implements OnInit {

items = [
    {inv_agent_id: 1, inv_agent_name: 'Jorge'},
    {inv_agent_id: 2, inv_agent_name: 'Luis'},
    {inv_agent_id: 3, inv_agent_name: 'Sara'}
  ];

selected = [];
userSelection = new UserSelection;

  constructor() {

   }


  ngOnInit() {
    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.selected = this.userSelection.agent
  }

  onChange(){
    this.userSelection.agent = this.selected
    console.log('selected agent', this.selected);
    console.log('selected object',  this.userSelection);
    localStorage.setItem('userSelection',JSON.stringify(this.userSelection));
  }

}
