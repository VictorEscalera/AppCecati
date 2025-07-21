// alumno.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
private API_URL3= 'http://localhost:3000/api/alumnos';

  constructor(private http: HttpClient) {}

  getAlumnos() {
    return this.http.get<any[]>(this.API_URL3);
  }
}
