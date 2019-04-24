//  Angular

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//  import 'rxjs/add/operator/toPromise'
import 'rxjs/operators';
import { Observable } from 'rxjs';

//  Local
import * as proser from '../../database/api';

import { DetalleLlamadas } from '../../models/';

@Injectable({
  providedIn: 'root'
})
export class DetalleLlamadasService {

  apiRootProser =  proser.apiProser;
  detalleLlamadas_selected: DetalleLlamadas;
  detalleLlamadas_rows: DetalleLlamadas[];

    constructor( private http: HttpClient ) {
      this.detalleLlamadas_selected = new DetalleLlamadas();
    }


    /************************************************************************
 * LIST
 */

  getList(item): Observable<any> {

    const consultas_SQL = item;
    const apiURL = `${this.apiRootProser}api/rep-detalle-llamadas/list`;
    const res = this.http.post(apiURL, consultas_SQL);
      console.warn('Operativo detallado......' , apiURL);
      console.log(res);
    return res;
    }

}
