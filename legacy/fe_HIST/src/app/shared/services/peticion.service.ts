
//  Angular

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

//  import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

//  Local
import * as proser from './../database/api';



@Injectable({
  providedIn: 'root'
})
export class PeticionService {

  apiRootProser =  proser.apiProser;
  dbSegment = 'peticiones';
  apRoot = this.apiRootProser + this.dbSegment;


  constructor( private http: HttpClient) {

  }

/**************************************
 * GET ALL
 *
 */
getAll_Records(SQL_query): Observable<any> {

  if (SQL_query === 1 || typeof SQL_query === 'undefined') {
    SQL_query = '';
  }

 const apiURL = `${this.apiRootProser}peticiones/all/${SQL_query}`;
 // console.log(SQL_query)
  // console.warn('getAll_Records - Leyendo data de red.......' , apiURL);
  const res = this.http.get(apiURL);

  return res;

  // return this.http.get(apiURL);

}

/**************************************
 * GET ONE
 *
 */
getById_Record(SQL_query, id): Observable<any> {
  if (SQL_query === 1 || typeof SQL_query === 'undefined') {
    SQL_query = '';
  }
 const apiURL = `${this.apiRootProser}peticiones/one/:${id}/${SQL_query}`;
  // console.warn('getPeticioness - Leyendo data de red.......' , apiURL);
  const res = this.http.get(apiURL);

  return res;

  // return this.http.get(apiURL);

}

/*******************************************************************
 * INSERT
 */
insert_Record(item): Observable<any>  {

  const apiURL = `${this.apiRootProser}peticiones/insert`;
  // console.warn('postInsertarPeticiones .......' , apiURL, item);
  return this.http.post(apiURL, item);

}


/*******************************************************************
 * UPDATE
 */
update_Record(item): Observable<any>  {

  let id = item.id_peticiones;

  const apiURL = `${this.apiRootProser}peticiones/update/${id}`;
  // console.warn('putIntesrtarPeticiones .......' , apiURL, item);
  return this.http.put(apiURL, item);

}

/*******************************************************************
 * DELETE
 */

delete_Record(item): Observable<any>  {

  let id = item.id_inv_peticiones;

  const apiURL = `${this.apiRootProser}peticiones/delete/${id}`;
  // console.warn('deleteEliminarPeticioness .......' , apiURL, item);
  return this.http.delete(apiURL, item);
}

/**************************************
 * GET ALL
 *
 */
getAllMerge_Records(SQL_query): Observable<any> {

  if (SQL_query === 1 || typeof SQL_query === 'undefined') {
    SQL_query = '';
  }

  const apiURL = `${this.apiRootProser}peticiones/all_merge/${SQL_query}`;
  // console.warn('getAllMerge_Records Query.......' , SQL_query);
  // console.warn('getAllMerge_Records URL.......' , apiURL);
  const res = this.http.get(apiURL);

  return res;

  // return this.http.get(apiURL);

}

}
