//  Angular

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

//  import 'rxjs/add/operator/toPromise'
// import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { isNullOrUndefined } from 'util';

import { EnvService } from '../env.service';

//  Local
// import * as proser from './../database/api';

// import { ServicioHistorico } from './../models/';

@Injectable({
  providedIn: 'root'
})
export class EntranteDiarioService {

  constructor(
    private http: HttpClient,
    private env: EnvService
  ) { }


  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

//   apiRootProser =  proser.apiProser;
//   servicioHistorico_selected: ServicioHistorico;
//   servicioHistorico_rows: ServicioHistorico[];

//     constructor( private http: HttpClient ) {
//       this.servicioHistorico_selected = new ServicioHistorico();
//     }

// /************************************************************************
//  * LIST
//  */

  getList(item): Observable<any> {

    const consultas_SQL = item;
    const apiURL = `${this.env.loopbackApiUrl}/api/rep-entrante-diario/list`;
    const res = this.http.post(apiURL, consultas_SQL);
      console.warn('Entrante diario......' , apiURL, consultas_SQL);
      console.log(res);
    return res;
    }

}
