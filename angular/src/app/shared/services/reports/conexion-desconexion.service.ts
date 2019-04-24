//  Angular

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { isNullOrUndefined } from 'util';

import 'rxjs/operators';
import { Observable } from 'rxjs';

import * as proser from '../../database/api';
import { ConexionDesconexion } from '../../models/';

import { EnvService } from '../env.service';


@Injectable({
  providedIn: 'root'
})
export class ConexionDesconexionService {

  apiRootProser =  proser.apiProser;
  conexionDesconexion_selected: ConexionDesconexion;
  conexionDesconexion_rows: ConexionDesconexion[];

    constructor(
      private http: HttpClient,
      private env: EnvService
      ) {
      this.conexionDesconexion_selected = new ConexionDesconexion();
    }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });


  getList(item): Observable<any> {

    const query = {
      name: 'conexion-desconexion'
    };
    const accessToken = localStorage.getItem('accessToken');

    const url_api = `${this.env.loopbackApiUrl}/api/InvReports/mainQuery?access_token=${accessToken}`;
    const res = this.http.post(url_api, query, {headers: this.headers});
      console.warn('Operativo detallado......' , url_api);
      console.log(res);
    return res;
    }

}
