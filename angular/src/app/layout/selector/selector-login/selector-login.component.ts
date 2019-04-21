import { Component, OnInit } from '@angular/core';
import { UserSelection } from '../../../shared/models/filter/Selection';

@Component({
  selector: 'app-selector-login',
  templateUrl: './selector-login.component.html',
  styleUrls: ['./selector-login.component.scss']
})
export class SelectorLoginComponent implements OnInit {

  menuOptions;
  items;

  selected;
  userSelection = new UserSelection;

  constructor() {

  }


 ngOnInit() {
   this.menuOptions = JSON.parse(localStorage.getItem('menuOptions'));
   this.items = this.menuOptions.login;

   // console.log('menuOptions.login', this.menuOptions.login);

   this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
   this.selected = this.userSelection.login;
 }

 onChange() {
   this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
   this.userSelection.login = this.selected;
   console.log('selected login', this.selected);
   console.log('selected object',  this.userSelection);
   localStorage.setItem('userSelection', JSON.stringify(this.userSelection));
 }

}
