import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlumnoService } from '../services/alumnos.service';
import {
  IonContent,
  IonHeader,
  IonButton,
  IonButtons,
  IonMenuButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.page.html',
  styleUrls: ['./clases.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonButton,
    IonButtons,
    IonMenuButton
  ]
})
export class ClasesPage implements OnInit {

   alumno: any;

  constructor(private router: Router, private alumnoService: AlumnoService) {}

ngOnInit() {
      this.alumnoService.getAlumnos().subscribe({
    next: (data) => {
      this.alumno = data[0]; // o filtrar como necesites
    },
    error: (err) => {
      console.error('Error al obtener los alumnos:', err);
    }
  });
}


  irAlMenu() {
    this.router.navigate(['/menu']);
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
