import { Injectable } from '@angular/core';
// import 'rxjs/operators';
import { Observable } from 'rxjs';

import * as FileSaver from 'file-saver';


import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(
    private http: HttpClient

  ) { }


  export( url ) {
    console.log('url', url);
    return this.http.get(url, {responseType: 'blob'});
}

  // downloadFile(id): Observable<Blob> {

    // let options = new RequestOptions({responseType: ResponseContentType.Blob });

    // return this.http.get(this._baseUrl + '/' + id, options)
    //     .map(res => res.blob())
    //     .catch(this.handleError)
// }


handleError() {
  console.log('Error downloading file');
}


}
