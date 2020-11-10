import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiURL: string = 'https://vast-shore-74260.herokuapp.com/banks?city';
  constructor(private httpClient: HttpClient) {}


  getData(cityName){
    return this.httpClient.get(`${this.apiURL}=${cityName}`);
  }
}