import { Component, OnInit } from '@angular/core';

import { UserSelection } from '../../../shared/models/filter/Selection';

@Component({
  selector: 'app-selector-asignation',
  templateUrl: './selector-asignation.component.html',
  styleUrls: ['./selector-asignation.component.scss']
})
export class SelectorAsignationComponent implements OnInit {


  menuOptions;
  items;

  selected;
  userSelection = new UserSelection;

  constructor() {

  }


 ngOnInit() {
   this.menuOptions = JSON.parse(localStorage.getItem('menuOptions'));
   this.items = this.menuOptions.asignation;

   // console.log('menuOptions.asignation', this.menuOptions.asignation);

   this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
   this.selected = this.userSelection.asignation;
 }

 onChange() {
   this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
   this.userSelection.asignation = this.selected;
   console.log('selected asignation', this.selected);
   console.log('selected object',  this.userSelection);
   localStorage.setItem('userSelection', JSON.stringify(this.userSelection));
 }

}
