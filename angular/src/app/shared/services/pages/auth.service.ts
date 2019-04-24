import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { isNullOrUndefined } from 'util';

import { UserInterface } from '../../models/pages/user-interface';

import { UserSelection } from '../../models/filter/Selection';

import { EnvService } from '../env.service';

import { Router } from '@angular/router';
import { MenuOptions } from '../../models/filter/MenuOptions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private env: EnvService,
    private router: Router
  ) { }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  proser_store = {
    entrante_diario: {
      menuOptions: new MenuOptions,
      userSelection : new UserSelection
    }
  };

  registerUser(
    firstname: string,
    lastname: string,
    username: string,
    email: string,
    password: string) {

    const url_api = `${this.env.loopbackApiUrl}/api/userbases`;

    return this.http.post<UserInterface>(url_api,
      {firstname, lastname, username, email , password},

      {headers: this.headers})
    .pipe(map(data => data));
  }

  loginUser(username: string, password: string) {
    // console.log('DATA IN', username, password );

    const url_api = `${this.env.loopbackApiUrl}/api/userbases/login?include=user`;
    return this.http.post<UserInterface>(url_api, {username, password}, {headers: this.headers})
    .pipe(map(data => data));
  }

  getAllUsers() {
    const accessToken = localStorage.getItem('accessToken');
    const url_api = `${this.env.loopbackApiUrl}/api/userbases?access_token=${accessToken}`;
    console.log('getAllUsers', url_api);

    return this.http.get<UserInterface>(url_api, {headers: this.headers})
    .pipe(map(data => data));
  }


  setUser(user: UserInterface) {
    const userString = JSON.stringify(user);
    const userSelection = JSON.stringify(new UserSelection);
    // tslint:disable-next-line:no-unused-expression
    localStorage.setItem('currentUser', userString);
    localStorage.setItem('userSelection', userSelection);
  }

  setToken(token) {
    localStorage.setItem('accessToken', token);
    localStorage.setItem('proser_store', JSON.stringify(this.proser_store));
  }

  getToken() {
    return localStorage.getItem('accessToken');
  }

  getCurrentUser(): UserInterface {
    const userString = localStorage.getItem('currentUser');
    if (!isNullOrUndefined(userString)) {
      const user: UserInterface = JSON.parse(userString);
      return user;
    } else {
      return null;
    }
  }

  logoutUser() {
    const accessToken = localStorage.getItem('accessToken');
    const url_api = `${this.env.loopbackApiUrl}/api/userbases/logout?access_token=${accessToken}`;
    this.router.navigate(['/login']);
    localStorage.clear();
    return this.http.post<UserInterface>(url_api, {headers: this.headers});
  }
}
