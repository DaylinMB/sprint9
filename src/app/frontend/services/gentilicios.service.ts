import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GentiliciosService {
  private apiUrl = 'http://localhost:3000/gentilicios'; // Cambia esto a tu URL real de la API

  constructor(private http: HttpClient) {}

  getGentilicio(pais: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?pais=${pais}`);
  }
}
