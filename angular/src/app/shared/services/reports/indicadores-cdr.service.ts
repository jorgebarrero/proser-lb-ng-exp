//  Angular

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//  import 'rxjs/add/operator/toPromise'
import 'rxjs/operators';
import { Observable } from 'rxjs';

//  Local
import * as proser from '../../database/api';

import { OperativoDetallado } from '../../models/';


@Injectable({
  providedIn: 'root'
})
export class IndicadoresCdrService {

  apiRootProser =  proser.apiProser;
  operativoDetallado_selected: OperativoDetallado;
  operativoDetallado_rows: OperativoDetallado[];



    constructor( private http: HttpClient ) {
      this.operativoDetallado_selected = new OperativoDetallado();
    }



/************************************************************************
 * LIST
 */
getList(date_start, consultas_SQL): Observable<any> {

  consultas_SQL === 1 ||
  typeof consultas_SQL === 'undefined' ? consultas_SQL = '' : consultas_SQL = consultas_SQL ;

  const apiURL = `${this.apiRootProser}operativo-detallado/list/'${date_start}'`;
  const res = this.http.post(apiURL, consultas_SQL);
    console.warn('Leyendo data de red.......' , apiURL);
    console.log(res);

  return res;
  }


}
