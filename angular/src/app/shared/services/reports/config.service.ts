//  Angular

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//  import 'rxjs/add/operator/toPromise'
import 'rxjs/operators';
import { Observable } from 'rxjs';

//  Local
import * as proser from '../../database/api';

import { DateRanges } from '../../models/rango-fechas';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {


  apiRootProser =  proser.apiProser;
  rangoFecha_selected: DateRanges;
  rangoFecha_rows: DateRanges[];

    constructor( private http: HttpClient ) {
      this.rangoFecha_selected = new DateRanges();
    }



    getYears(SQL_query): Observable < any > {

      SQL_query === 1 ||
      typeof SQL_query === 'undefined' ? SQL_query = '' : SQL_query = SQL_query;

      const apiURL = `${this.apiRootProser}config/years/${SQL_query}`;
      const res = this.http.get(apiURL);
      // console.warn('Leyendo data de red.......', apiURL);
      // console.log(res);
      return res;
    }

    getMonths(SQL_query): Observable < any > {

      SQL_query === 1 ||
      typeof SQL_query === 'undefined' ? SQL_query = '' : SQL_query = SQL_query;

      const apiURL = `${this.apiRootProser}config/months/${SQL_query}`;
      const res = this.http.get(apiURL);
      // console.warn('Leyendo data de red.......', apiURL);
      // console.log(res);
      return res;
    }

    getDates(SQL_query): Observable < any > {

      SQL_query === 1 ||
      typeof SQL_query === 'undefined' ? SQL_query = '' : SQL_query = SQL_query;

      const apiURL = `${this.apiRootProser}config/dates/${SQL_query}`;
      const res = this.http.get(apiURL);
      // console.warn('Leyendo data de red.......', apiURL);
      // console.log(res);
      return res;
    }

    getMenu(date, SQL_query): Observable < any > {

      SQL_query === 1 ||
      typeof SQL_query === 'undefined' ? SQL_query = '' : SQL_query = SQL_query;

      const apiURL = `${this.apiRootProser}config/menu/'${date}'/${SQL_query}`;
      const res = this.http.get(apiURL);
      // console.warn('Leyendo data de red.......', apiURL);
      // console.log(res);
      return res;
    }

    getCountData(date, SQL_query): Observable < any > {

      SQL_query === 1 ||
      typeof SQL_query === 'undefined' ? SQL_query = '' : SQL_query = SQL_query;

      const apiURL = `${this.apiRootProser}config/data_check/'${date}'/${SQL_query}`;
      const res = this.http.get(apiURL);
      // console.warn('Leyendo data de red.......', apiURL);
      // console.log(res);
      return res;
    }

    getCountConnected(): Observable < any > {

      const apiURL = `${this.apiRootProser}config/global/`;
      const res = this.http.get(apiURL);
      // console.warn('Leyendo data de red.......', apiURL);
      // console.log(res);
      return res;
    }



}
