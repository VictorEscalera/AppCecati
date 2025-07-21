import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BDService {

  private apiUrl = 'https://vaiv.onrender.com/loginUser'; // Actualiza la URL al servidor en Render
  private apiUrl1 = 'https://vaiv.onrender.com'; // Actualiza la URL al servidor en Render

  constructor(private http: HttpClient) { }

  public loginUser(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data); // Realiza la solicitud POST al backend
  }
  setLedState(ledId: string, state: boolean): Observable<any> {
    const endpoint = state ? `${this.apiUrl1}/setLedTrue/${ledId}` : `${this.apiUrl1}/setLedFalse/${ledId}`;
    return this.http.post(endpoint, {});
  }
}
