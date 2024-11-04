import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Faq } from '../interfaces/faq';

@Injectable({
  providedIn: 'root',
})
export class FaqService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/faq/';
  }

  getFaqs(): Observable<Faq[]> {
    return this.http.get<Faq[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getFaqsByProcessId(processId: number): Observable<Faq[]> {
    return this.http.get<Faq[]>(`${this.myAppUrl}${this.myApiUrl}${processId}`);
  }
}
