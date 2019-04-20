import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { EnvService } from 'src/app/shared/services';

@Component({
  selector: 'app-audit-intro',
  templateUrl: './audit-intro.component.html',
  styleUrls: ['./audit-intro.component.scss']
})
export class AuditIntroComponent implements OnInit {

  constructor(private envService: EnvService) {

  }

env;

  ngOnInit() {
    this.env = this.envService;
  }

}
