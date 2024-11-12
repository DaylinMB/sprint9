import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Lawyer } from '../interfaces/lawyer';

@Injectable({
  providedIn: 'root',
})
export class LawyerService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/lawyers/';
  }

  getLawyers(): Observable<Lawyer[]> {
    return this.http.get<Lawyer[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

}
