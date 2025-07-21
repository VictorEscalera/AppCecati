import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonLabel,
  IonButton,
  IonButtons,
  IonMenuButton   // <-- Importa IonMenuButton aquí
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { AlumnosService } from '../services/alumnos.service';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.page.html',
  styleUrls: ['./asistencias.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonLabel,
    IonList,
    IonItem,
    IonContent,
    IonHeader,
    IonButtons,
    IonMenuButton,  // <-- Y agrégalo aquí también
    CommonModule,
    FormsModule
  ]
})
export class AsistenciasPage implements OnInit {

  alumno: any;

  asistencias = [
    { fecha: '2024-06-01', estado: 'Presente' },
    { fecha: '2024-06-02', estado: 'Ausente' },
    { fecha: '2024-06-03', estado: 'Presente' }
  ];

  constructor(private router: Router, private usuarioServicio: AlumnosService) {}

  ngOnInit() {
    this.alumno = this.usuarioServicio.obtenerAlumnoGuardado();
  }

  irAlMenu() {
    this.router.navigate(['/menu']);
  }
}
