import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/pages/auth.service';
import { UserInterface } from '../../shared/models/pages/user-interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlertModel } from 'src/app/shared/models/Alert';

import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private alertService: AlertService,
    private router: Router
  ) {

    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
  });

}



  loginForm: FormGroup;
  submitted = false;
  alertMessage = new AlertModel;

  // user: UserInterface = {
  //   username: '',
  //   password: '',
  //   firstname: '',
  //   lastname: '',
  //   profile: '',
  // };

  ngOnInit() {



  }


  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

onLogin() {

  this.submitted = true;

  // console.log('data', this.loginForm.value);

  return this.authService.loginUser(this.loginForm.value.username, this.loginForm.value.password)
  .subscribe(
    data => {
    this.authService.setUser(data);
    const token = data.id;
    this.authService.setToken(token);
    this.router.navigate(['/intro']);
  },
  error => {
    console.log('Error', error, error.status);
    this.alertService.error(error.status);
    this.alertMessage.alertTitle = 'Error del servidor';
    this.alertMessage.alertText = error.statusText;
    this.alertMessage.alertShow = true;
    this.alertMessage.alertClass = 'alert alert-danger alert-dismissible fade show';
  });

}
}
