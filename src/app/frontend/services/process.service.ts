import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Process } from '../interfaces/process';

@Injectable({
  providedIn: 'root',
})
export class ProcessService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/process/';
  }

  getProcess(): Observable<Process[]> {
    return this.http.get<Process[]>(`${this.myAppUrl}${this.myApiUrl}`);
  } 

  getProcessesByDuration(duration: string): Observable<Process[]> {
    return this.http.get<Process[]>(`${this.myAppUrl}${this.myApiUrl}${duration}`);
  }
}
