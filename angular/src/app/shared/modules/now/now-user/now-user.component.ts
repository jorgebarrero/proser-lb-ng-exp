import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services';




@Component({
  selector: 'app-now-user',
  templateUrl: './now-user.component.html',
  styleUrls: ['./now-user.component.scss']
})
export class NowUserComponent implements OnInit {

  constructor(private authService: AuthService) { }

  currentuserName;

  ngOnInit() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.currentuserName = `${currentUser.user.firstname} ${currentUser.user.lastname}`;
  }

}
