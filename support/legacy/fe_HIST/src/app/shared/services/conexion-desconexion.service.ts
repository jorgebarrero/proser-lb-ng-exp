//  Angular

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//  import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

//  Local
import * as proser from './../database/api';

import { ConexionDesconexion } from './../models/';

@Injectable({
  providedIn: 'root'
})
export class ConexionDesconexionService {

  apiRootProser =  proser.apiProser;
  conexionDesconexion_selected: ConexionDesconexion;
  conexionDesconexion_rows: ConexionDesconexion[];

    constructor( private http: HttpClient ) {
      this.conexionDesconexion_selected = new ConexionDesconexion();
    }

/************************************************************************
 * LIST
 */

  getList(item): Observable<any> {

    let consultas_SQL = item;
    const apiURL = `${this.apiRootProser}api/rep-conexion-desconexion/list`;
    const res = this.http.post(apiURL, consultas_SQL);
      console.warn('Operativo detallado......' , apiURL);
      console.log(res);
    return res;
    }
  





}
