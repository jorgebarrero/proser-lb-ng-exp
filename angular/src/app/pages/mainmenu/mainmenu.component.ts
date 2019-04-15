import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/pages/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.scss']
})
export class MainmenuComponent implements OnInit {

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
