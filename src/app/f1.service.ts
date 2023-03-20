import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from './models/response.model';

@Injectable({
  providedIn: 'root'
})
export class F1Service {

  url: string = 'http://ergast.com/api/f1/drivers';

  constructor(private http: HttpClient) { }

  public getDrivers(): Observable<Response> {
    return this.http.get<Response>(`${this.url}.json`);
  }

  // public getDriver(id: string): Observable<any> {

  // }
}
