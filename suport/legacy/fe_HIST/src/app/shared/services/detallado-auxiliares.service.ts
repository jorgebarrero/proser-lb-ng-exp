//  Angular

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//  import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

//  Local
import * as proser from './../database/api';

import { DetalladoAuxiliares } from './../models/';

@Injectable({
  providedIn: 'root'
})
export class DetalladoAuxiliaresService {

  apiRootProser =  proser.apiProser;
  detalladoAuxiliares_selected: DetalladoAuxiliares;
  detalladoAuxiliares_rows: DetalladoAuxiliares[];

    constructor( private http: HttpClient ) {
      this.detalladoAuxiliares_selected = new DetalladoAuxiliares();
    }

/************************************************************************
 * LIST
 */


  getList(item): Observable<any> {

    let consultas_SQL = item;
    const apiURL = `${this.apiRootProser}api/rep-detallado-auxiliares/list`;
    const res = this.http.post(apiURL, consultas_SQL);
      console.warn('Operativo detallado......' , apiURL);
      console.log(res);
    return res;
    }

}
