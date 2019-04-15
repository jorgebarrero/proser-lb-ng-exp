import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/shared/services';

@Component({
  selector: 'app-filter-header',
  templateUrl: './filter-header.component.html',
  styleUrls: ['./filter-header.component.scss']
})
export class FilterHeaderComponent implements OnInit {

  constructor( private authService: AuthService ) { }
  currentUser;
  userName;

  ngOnInit() {
    this.currentUser =  JSON.parse(localStorage.getItem('currentUser'));
    this.userName = `${this.currentUser.user.firstname} ${this.currentUser.user.lastname}`;
  }


}
