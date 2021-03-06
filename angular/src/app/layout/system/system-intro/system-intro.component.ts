import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { EnvService } from 'src/app/shared/services';

@Component({
  selector: 'app-system-intro',
  templateUrl: './system-intro.component.html',
  styleUrls: ['./system-intro.component.scss']
})
export class SystemIntroComponent implements OnInit {

  constructor(private envService: EnvService) {

  }

env;

  ngOnInit() {
    this.env = this.envService;
  }

}
