import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { EnvService } from 'src/app/shared/services';



@Component({
  selector: 'app-config-intro',
  templateUrl: './config-intro.component.html',
  styleUrls: ['./config-intro.component.scss']
})
export class ConfigIntroComponent implements OnInit {

  constructor(private envService: EnvService) {

   }

env;

ngOnInit() {
  this.env = this.envService;
  }

}
