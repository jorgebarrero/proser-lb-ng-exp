import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { UserInterface } from '../../../shared/models/pages/user-interface';

@Component({
  selector: 'app-register-welcome',
  templateUrl: './register-welcome.component.html',
  styleUrls: ['./register-welcome.component.scss']
})
export class RegisterWelcomeComponent implements OnInit {

  @Input() registerForm: UserInterface;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onGoHome() {
    this.router.navigate(['/login']);
  }
}
