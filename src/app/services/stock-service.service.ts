import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class StockServiceService {
   stockURL = 'http://localhost:4000';
  constructor(private http: HttpClient) { }

  addStock(stock:any){    
    return this.http.post(this.stockURL+'/addStock', stock, httpOptions)
    .pipe(map(response => {
      return response;       
      }));
  }
  allStock(){    
    return this.http.get(this.stockURL+'/viewStocks',httpOptions)
    .pipe(map(response => {
      return response;       
      }));
  }

  handleError(error: Error) {
    console.error('Something went wrong: ', error);
  }
}
