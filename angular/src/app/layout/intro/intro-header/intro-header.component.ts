import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services';
import { Router } from '@angular/router';





@Component({
  selector: 'app-intro-header',
  templateUrl: './intro-header.component.html',
  styleUrls: ['./intro-header.component.scss']
})
export class IntroHeaderComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

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
