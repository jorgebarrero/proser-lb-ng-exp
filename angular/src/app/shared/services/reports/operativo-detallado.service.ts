//  Angular

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//  import 'rxjs/add/operator/toPromise'
import 'rxjs/operators';
import { Observable } from 'rxjs';

//  Local
import * as proser from '../../database/api';

import { OperativoDetallado } from '../../models';


@Injectable({
  providedIn: 'root'
})
export class OperativoDetalladoService {

  apiRootProser =  proser.apiProser;
  operativoDetallado_selected: OperativoDetallado;
  operativoDetallado_rows: OperativoDetallado[];



    constructor( private http: HttpClient ) {
      this.operativoDetallado_selected = new OperativoDetallado();
    }



/************************************************************************
 * LIST
 *       FROM
        ${tabla_cdr}

      WHERE
      id_inv_agentes > 0
      ${filtro_fecha_inicio}
      ${filtro_fecha_final}

      ${filtro_sql}

      ${filtro_otro}
 */
getList(item): Observable<any> {

  const consultas_SQL = item;
  const apiURL = `${this.apiRootProser}api/rep-operativo-detallado/list`;
  const res = this.http.post(apiURL, consultas_SQL);
    // console.warn('Operativo detallado......' , apiURL);
    // console.log(res);
  return res;
  }


}
