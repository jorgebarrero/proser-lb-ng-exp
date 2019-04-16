//  Angular

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//  import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

//  Local
import * as proser from './../database/api';

import { Productividad } from './../models/';

@Injectable({
  providedIn: 'root'
})
export class ProductividadService {

  apiRootProser =  proser.apiProser;
  productividad_selected: Productividad;
  productividad_rows: Productividad[];

    constructor( private http: HttpClient ) {
      this.productividad_selected = new Productividad();
    }


/************************************************************************
 * LIST
 */

  getList(item): Observable<any> {

    let consultas_SQL = item;
    const apiURL = `${this.apiRootProser}api/rep-productividad/list`;
    const res = this.http.post(apiURL, consultas_SQL);
      console.warn('Operativo detallado......' , apiURL);
      console.log(res);
    return res;
    }


}
