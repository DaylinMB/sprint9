import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/country/';
  }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getGentilicio(pais: string): Observable<any> {
    return this.http.get<any>(`${this.myApiUrl}?pais=${pais}`);
  }  
}
