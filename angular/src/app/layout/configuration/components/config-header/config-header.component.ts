import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/shared/models';
import { AuthService } from 'src/app/shared/services';
import { Router } from '@angular/router';



@Component({
  selector: 'app-config-header',
  templateUrl: './config-header.component.html',
  styleUrls: ['./config-header.component.scss']
})
export class ConfigHeaderComponent implements OnInit {

  constructor( private authService: AuthService,     private router: Router ) { }
  currentUser;
  userName;

  ngOnInit() {
    this.currentUser =  JSON.parse(localStorage.getItem('currentUser'));
    this.userName = `${this.currentUser.user.firstname} ${this.currentUser.user.lastname}`;
  }

  onLogout() {
    this.authService.logoutUser()
    .subscribe(data => {
      console.log('LOGOUT');
      this.router.navigate(['/login']);
    });
  }
}
