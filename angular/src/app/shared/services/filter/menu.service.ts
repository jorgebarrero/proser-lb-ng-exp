import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map, catchError } from 'rxjs/operators';

import { isNullOrUndefined } from 'util';

import { EnvService } from '../env.service';

import { MenuOptions } from '../../models/filter/MenuOptions';



@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    private http: HttpClient,
    private env: EnvService
  ) {
    const temp = '/InvMenus/selectionMenu';
  }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });


  getMenuOptionRecords(queryDates) {
    const query = {
        // tslint:disable-next-line:quotemark
        "start_date": "'2019-01-01'",
        // tslint:disable-next-line:quotemark
        "end_date": "'2019-01-28'"
        };

    queryDates = JSON.stringify(query);

    const accessToken = localStorage.getItem('accessToken');

    const url_api = `${this.env.loopbackApiUrl}/api/InvMenus/selectionMenu`;
    console.log('getAllRecords', url_api);

    return this.http.post<MenuOptions>(url_api, queryDates, {headers: this.headers})
    .pipe(map(data => JSON.stringify(data)));
  }




}
