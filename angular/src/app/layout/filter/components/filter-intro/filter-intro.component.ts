import { Component, OnInit } from '@angular/core';
import { EnvService } from 'src/app/shared/services';

@Component({
  selector: 'app-filter-intro',
  templateUrl: './filter-intro.component.html',
  styleUrls: ['./filter-intro.component.scss']
})
export class FilterIntroComponent implements OnInit {

  constructor(private envService: EnvService) { }

  env;

  ngOnInit() {
    this.env = this.envService;
  }

}
