import { Component, OnInit } from '@angular/core';
import { UserSelection } from '../../../shared/models/filter/Selection'

@Component({
  selector: 'app-selector-substitute',
  templateUrl: './selector-substitute.component.html',
  styleUrls: ['./selector-substitute.component.scss']
})
export class SelectorSubstituteComponent implements OnInit {

  items = [
    {inv_substitute_id: 1, inv_substitute_name: 'Suplentes 1'},
    {inv_substitute_id: 2, inv_substitute_name: 'Suplentes 2'},
    {inv_substitute_id: 3, inv_substitute_name: 'Suplentes 3'}
  ];

selected = [];
userSelection = new UserSelection;

  constructor() {

   }


  ngOnInit() {
    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.selected = this.userSelection.substitute
  }

  onChange(){
    this.userSelection.substitute = this.selected
    console.log('selected substitute', this.selected);
    console.log('selected object',  this.userSelection);
    localStorage.setItem('userSelection',JSON.stringify(this.userSelection));
  }

}

