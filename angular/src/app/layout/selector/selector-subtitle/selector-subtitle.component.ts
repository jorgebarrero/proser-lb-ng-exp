import { Component, OnInit } from '@angular/core';

import { UserSelection } from '../../../shared/models/filter/Selection'

@Component({
  selector: 'app-selector-subtitle',
  templateUrl: './selector-subtitle.component.html',
  styleUrls: ['./selector-subtitle.component.scss']
})
export class SelectorSubtitleComponent implements OnInit {

  items = [
    {inv_subtitle_id: 1, inv_subtitle_name: 'Subtitular 1'},
    {inv_subtitle_id: 2, inv_subtitle_name: 'Subtitular 2'},
    {inv_subtitle_id: 3, inv_subtitle_name: 'Subtitular 3'}
  ];

selected = [];
userSelection = new UserSelection;

  constructor() {

   }


  ngOnInit() {
    this.userSelection = JSON.parse(localStorage.getItem('userSelection'));
    this.selected = this.userSelection.subtitle
  }

  onChange(){
    this.userSelection.subtitle = this.selected
    console.log('selected subtitle', this.selected);
    console.log('selected object',  this.userSelection);
    localStorage.setItem('userSelection',JSON.stringify(this.userSelection));
  }

}

