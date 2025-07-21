import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private URL = 'https://appcecati.onrender.com/api';
  alumnoActual: any = null;

  constructor(private http: HttpClient) {}

  login(correo: string, curp: string) {
    return this.http.post<any>(`${this.URL}/login`, { correo, curp });
  }

  guardarAlumno(alumno: any) {
    this.alumnoActual = alumno;
  }

  obtenerAlumnoGuardado() {
    return this.alumnoActual;
  }
}
