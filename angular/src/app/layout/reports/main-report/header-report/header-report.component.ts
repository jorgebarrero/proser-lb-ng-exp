import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-report',
  templateUrl: './header-report.component.html',
  styleUrls: ['./header-report.component.scss']
})
export class HeaderReportComponent implements OnInit {

  constructor() { }

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
