//  Angular

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//  import 'rxjs/add/operator/toPromise'
import 'rxjs/operators';
import { Observable } from 'rxjs';

//  Local
import * as proser from '../../database/api';
import { ServicioIntervalo } from '../../models';

// import { ServicioIntervalo } from './../models/';




@Injectable({
  providedIn: 'root'
})
export class ServicioIntervaloService {

  apiRootProser =  proser.apiProser;
  selectedServicioIntervalo: ServicioIntervalo;
  servicioIntervaloRows: ServicioIntervalo[];

    constructor( private http: HttpClient ) {
      this.selectedServicioIntervalo = new ServicioIntervalo();
    }

/************************************************************************
 * LIST
 */

  getList(item): Observable<any> {

    const consultas_SQL = item;
    const apiURL = `${this.apiRootProser}api/rep-servicio-intervalo/list`;
    const res = this.http.post(apiURL, consultas_SQL);
      console.warn('Operativo detallado......' , apiURL);
      console.log(res);
    return res;
    }


}
