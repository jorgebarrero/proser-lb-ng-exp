
//  Angular

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

//  import 'rxjs/add/operator/toPromise'
import 'rxjs/operators';
import { Observable } from 'rxjs';

//  Local
import * as proser from '../../database/api';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  apiRootProser =  proser.apiProser;


  constructor( private http: HttpClient) {

  }


  /**************************************
   * GET ALL
   *
   */

  getMenu_multiple(post_request_object): Observable < any > {

    const  data =  post_request_object;

        const apiURL = `${this.apiRootProser}api/rep-menus/menu_multiple`;
        const res = this.http.post(apiURL, data);
        // console.log('MENU CLIENTES', apiURL, data);

        return res;
    }

}
