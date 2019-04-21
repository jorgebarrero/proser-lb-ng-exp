import { Component, OnInit } from '@angular/core';
import { UserSelection } from '../../../shared/models/filter/Selection';
@Component({
  selector: 'app-selector-auxiliar',
  templateUrl: './selector-auxiliar.component.html',
  styleUrls: ['./selector-auxiliar.component.scss']
})
export class SelectorAuxiliarComponent implements OnInit {


  menuOptions;
  items;

  selected;
  userSelection = new UserSelection;

  constructor() {

   }


  ngOnInit() {
    this.menuOptions = JSON.parse(localStorage.getItem('menuOptions'));
    this.items = this.menuOptions.auxiliar;

    // console.log('menuOptions.auxiliar', this.menuOptions.auxiliar);

    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.selected = this.userSelection.auxiliar;
  }

  onChange() {
    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.userSelection.auxiliar = this.selected;
    console.log('selected auxiliar', this.selected);
    console.log('selected object',  this.userSelection);
    localStorage.setItem('userSelection', JSON.stringify(this.userSelection));
  }

}
