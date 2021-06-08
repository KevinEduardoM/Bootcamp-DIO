import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  Stock  from '../shared/models/stock-models';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

  readonly urlbase="https://botcamp-santander.herokuapp.com/Bootcamp";

  constructor(private http: HttpClient) { }

  async getStocks():Promise<Stock[]>{
    return this.http.get<Stock[]>(`${this.urlbase}/stock`).toPromise();
  }

}

