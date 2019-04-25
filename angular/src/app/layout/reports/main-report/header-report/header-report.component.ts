import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header-report',
  templateUrl: './header-report.component.html',
  styleUrls: ['./header-report.component.scss']
})
export class HeaderReportComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
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
