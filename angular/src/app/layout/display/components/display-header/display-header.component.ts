import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-header',
  templateUrl: './display-header.component.html',
  styleUrls: ['./display-header.component.scss']
})
export class DisplayHeaderComponent implements OnInit {

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
