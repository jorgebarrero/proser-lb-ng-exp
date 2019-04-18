import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { EnvService } from 'src/app/shared/services';

@Component({
  selector: 'app-display-intro',
  templateUrl: './display-intro.component.html',
  styleUrls: ['./display-intro.component.scss']
})
export class DisplayIntroComponent implements OnInit {

  constructor(private envService: EnvService) {}

env;

  ngOnInit() {
    this.env = this.envService;
  }

}
