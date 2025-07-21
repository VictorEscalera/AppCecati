import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonButtons,
  IonMenuButton
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.page.html',
  styleUrls: ['./horarios.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonButton,
    IonLabel,
    IonItem,
    IonList,
    IonContent,
    IonHeader,
    IonButtons,
    IonMenuButton
  ]
})
export class HorariosPage implements OnInit {

  alumno = {
    nombre: 'Arturo Contreras',
    matricula: '222324',
    especialidad: ' Informática',
    foto: 'assets/alumno.jpg'
  };

  horarios = [
    { dia: 'Lunes', hora: ' 08:00 - 10:00', materia: 'Alimentos ' },
    { dia: 'Martes', hora: ' 10:00 - 12:00', materia: 'Informática' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  irAlMenu() {
    this.router.navigate(['/menu']);
  }
}
