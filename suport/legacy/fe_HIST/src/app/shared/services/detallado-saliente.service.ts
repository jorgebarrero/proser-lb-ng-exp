//  Angular

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//  import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

//  Local
import * as proser from './../database/api';

import { DetalladoSaliente } from './../models/';

@Injectable({
  providedIn: 'root'
})
export class DetalladoSalienteService {

  apiRootProser =  proser.apiProser;
  detalladoSaliente_selected: DetalladoSaliente;
  detalladoSaliente_rows: DetalladoSaliente[];

    constructor( private http: HttpClient ) {
      this.detalladoSaliente_selected = new DetalladoSaliente();
    }

/************************************************************************
 * LIST
 */

  getList(item): Observable<any> {

    let consultas_SQL = item;
    const apiURL = `${this.apiRootProser}api/rep-detallado-saliente/list`;
    const res = this.http.post(apiURL, consultas_SQL);
      console.warn('Operativo detallado......' , apiURL);
      console.log(res);
    return res;
    }
  

}
