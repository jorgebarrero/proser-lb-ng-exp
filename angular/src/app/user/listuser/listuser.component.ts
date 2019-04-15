import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../shared/services/pages/auth.service';
import { UserInterface } from '../../shared/models/pages/user-interface';


@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.scss']
})
export class ListuserComponent implements OnInit {

  constructor(    private authService: AuthService) { }

  rows: UserInterface;
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];

  selected;
  loadingIndicator = 'loading';

  ngOnInit() {
    this. getAllUsers();
  }

  getAllUsers() {

    return this.authService.getAllUsers()
    .subscribe(data => {
      console.log('data', data);

      this.rows = data;
    });
    }


  onActivate($event) {

  }

  onSelect($event) {

  }
}
