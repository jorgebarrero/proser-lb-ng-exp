import { Component, OnInit } from '@angular/core';
import { EnvService, AuthService } from 'src/app/shared/services';
import { Router } from '@angular/router';



@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor(
    private envService: EnvService,
    private authService: AuthService,
    private router: Router
  ) { }


  // use envService
  env;

  ngOnInit() {
    this.env = this.envService;
  }

  onLogout() {
    this.authService.logoutUser()
    .subscribe(data => {
      console.log('LOGOUT');
      this.router.navigate(['/login']);
    });
  }


}
