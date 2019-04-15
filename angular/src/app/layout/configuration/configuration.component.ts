import { Component, OnInit } from '@angular/core';
import { EnvService } from 'src/app/shared/services';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  constructor(
    private envService: EnvService
  ) { }

  version = this.envService.version;

  ngOnInit() {

  }

}
