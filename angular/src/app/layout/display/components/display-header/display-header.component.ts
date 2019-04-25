import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-header',
  templateUrl: './display-header.component.html',
  styleUrls: ['./display-header.component.scss']
})
export class DisplayHeaderComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logoutUser()
    .subscribe(data => {
      console.log('LOGOUT');
      this.router.navigate(['/login']);
    });
  }

}
