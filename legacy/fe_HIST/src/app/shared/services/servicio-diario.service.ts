//  Angular

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//  import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

//  Local
import * as proser from './../database/api';

import { ServicioDiario } from './../models/';

@Injectable({
  providedIn: 'root'
})
export class ServicioDiarioService {

  apiRootProser =  proser.apiProser;
  servicioDiario_selected: ServicioDiario;
  servicioDiario_rows: ServicioDiario[];

    constructor( private http: HttpClient ) {
      this.servicioDiario_selected = new ServicioDiario();
    }

/************************************************************************
 * LIST
 */

  getList(item): Observable<any> {

    let consultas_SQL = item;
    const apiURL = `${this.apiRootProser}api/rep-servicio-diario/list`;
    const res = this.http.post(apiURL, consultas_SQL);
      console.warn('Operativo detallado......' , apiURL);
      console.log(res);
    return res;
    }
}
