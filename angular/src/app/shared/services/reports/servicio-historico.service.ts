//  Angular

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//  import 'rxjs/add/operator/toPromise'
import 'rxjs/operators';
import { Observable } from 'rxjs';

//  Local
import * as proser from '../../database/api';

import { ServicioHistorico } from '../../models/';

@Injectable({
  providedIn: 'root'
})
export class ServicioHistoricoService {

  apiRootProser =  proser.apiProser;
  servicioHistorico_selected: ServicioHistorico;
  servicioHistorico_rows: ServicioHistorico[];

    constructor( private http: HttpClient ) {
      this.servicioHistorico_selected = new ServicioHistorico();
    }

/************************************************************************
 * LIST
 */

  getList(item): Observable<any> {

    const consultas_SQL = item;
    const apiURL = `${this.apiRootProser}api/rep-servicio-historico/list`;
    const res = this.http.post(apiURL, consultas_SQL);
      console.warn('Operativo detallado......' , apiURL);
      console.log(res);
    return res;
    }

}
