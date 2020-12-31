import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FrontEndAPIService {

  constructor(private http: HttpClient) { 

  }

  obtenerDatadeBD() : Observable<Array<any>>
  {
    const entries = this.http.get<Array<any>>('http://localhost:4000/api/entries');
    console.log('aaa',entries);
    return entries;
  }
}
