import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class UserAccessService {

  URL = 'http://localhost:4000';
  constructor(private http: HttpClient) { }

  registerUser(userInfo:any){    
    return this.http.post(this.URL+'/registerUser', userInfo, httpOptions)
    .pipe(map(response => {
      return response;       
      }));
  }

  checkLoggedInUser(userInfo:any){    
    return this.http.post(this.URL+'/checkLoggedInUser', userInfo, httpOptions)
    .pipe(map(response => {
      return response;       
      }));
  }
}
