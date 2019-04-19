import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { EnvService } from 'src/app/shared/services';

@Component({
  selector: 'app-historic-intro',
  templateUrl: './historic-intro.component.html',
  styleUrls: ['./historic-intro.component.scss']
})
export class HistoricIntroComponent implements OnInit {

  constructor(private envService: EnvService) {}

env;

  ngOnInit() {
    this.env = this.envService;
  }

}
