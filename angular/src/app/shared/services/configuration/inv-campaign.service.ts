import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { isNullOrUndefined } from 'util';

import { EnvService } from '../env.service';
import { InvCampaign } from '../../models/configuration/InvCampaign';



@Injectable({
  providedIn: 'root'
})


export class InvCampaignService {

  constructor(
    private http: HttpClient,
    private env: EnvService
  ) { }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });


  getAllRecords(query?) {
    const accessToken = localStorage.getItem('accessToken');
    const url_api = `${this.env.loopbackApiUrl}/api/InvCampaigns?access_token=${accessToken}`;
    console.log('getAllRecords', url_api);

    return this.http.get<InvCampaign>(url_api, {headers: this.headers})
    .pipe(map(data => data));
  }

  getSelectedRecords(query?) {
    const accessToken = localStorage.getItem('accessToken');
    const url_api = `${this.env.loopbackApiUrl}/api/InvCampaigns?filter=${query}&access_token=${accessToken}`;
    console.log('getAllRecords', url_api);

    return this.http.get<InvCampaign>(url_api, {headers: this.headers})
    .pipe(map(data => data));
  }


  putSelectedRecords(query?) {
    const accessToken = localStorage.getItem('accessToken');
    const url_api = `${this.env.loopbackApiUrl}/api/InvCampaigns`;
    console.log('Put a record', url_api);

    return this.http.put<InvCampaign>(url_api, query, {headers: this.headers})
    .pipe(map(data => data));
  }


  postSelectedRecords(query?) {
    const accessToken = localStorage.getItem('accessToken');
    const url_api = `${this.env.loopbackApiUrl}/api/InvCampaigns`;
    console.log('Post a record', url_api);

    return this.http.post<InvCampaign>(url_api, query, {headers: this.headers})
    .pipe(map(data => data));
  }



}
