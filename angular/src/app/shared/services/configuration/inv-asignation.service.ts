// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders} from '@angular/common/http';
// import { Observable } from 'rxjs/internal/Observable';
// import { map, catchError } from 'rxjs/operators';

// import { isNullOrUndefined } from 'util';

// import { EnvService } from '../env.service';

// import { InvAsignation } from '../../models/configuration/InvAsignation';


// @Injectable({
//   providedIn: 'root'
// })
// export class InvAsignationService {

//   constructor(
//     private http: HttpClient,
//     private env: EnvService
//   ) { }

//   headers: HttpHeaders = new HttpHeaders({
//     'Content-Type': 'application/json'
//   });


//   getAllRecords(query?) {
//     const accessToken = localStorage.getItem('accessToken');
//     const url_api = `${this.env.loopbackApiUrl}/api/InvAsignations?access_token=${accessToken}`;
//     console.log('getAllRecords', url_api);

//     return this.http.get<InvAsignation>(url_api, {headers: this.headers})
//     .pipe(map(data => data));
//   }

//   getSelectedRecords(query?) {
//     const accessToken = localStorage.getItem('accessToken');
//     const url_api = `${this.env.loopbackApiUrl}/api/InvAsignations?filter=${query}&access_token=${accessToken}`;
//     console.log('getAllRecords', url_api);

//     return this.http.get<InvAsignation>(url_api, {headers: this.headers})
//     .pipe(map(data => data));
//   }


//   putSelectedRecords(query?) {
//     const accessToken = localStorage.getItem('accessToken');
//     const url_api = `${this.env.loopbackApiUrl}/api/InvAsignations`;
//     console.log('Put a record', url_api);

//     return this.http.put<InvAsignation>(url_api, query, {headers: this.headers})
//     .pipe(map(data => data));
//   }


//   postSelectedRecords(query?) {
//     const accessToken = localStorage.getItem('accessToken');
//     const url_api = `${this.env.loopbackApiUrl}/api/InvAsignations`;
//     console.log('Post a record', url_api);

//     return this.http.post<InvAsignation>(url_api, query, {headers: this.headers})
//     .pipe(map(data => data));
//   }



// }
