import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { EnvService } from 'src/app/shared/services';

@Component({
  selector: 'app-dashboard-intro',
  templateUrl: './dashboard-intro.component.html',
  styleUrls: ['./dashboard-intro.component.scss']
})
export class DashboardIntroComponent implements OnInit {
  
  
  constructor(private envService: EnvService) {

  }

env;

  ngOnInit() {
    this.env = this.envService;
  }

}
