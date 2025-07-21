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
  selector: 'app-avisos',
  templateUrl: './avisos.page.html',
  styleUrls: ['./avisos.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonContent,
    IonHeader,
    IonList,
    IonItem,
    IonLabel,
    IonButtons,     // <--- Agrega esto
    IonMenuButton,  // <--- Y esto si usas <ion-menu-button>
    CommonModule,
    FormsModule
  ]
})
export class AvisosPage implements OnInit {

  alumno = {
    nombre: 'Arturo Contreras',
    matricula: '222324',
    especialidad: 'Informática',
    foto: 'assets/alumno.jpg'
  };

  avisos = [
    { titulo: 'Entrega de documentos', descripcion: 'Recuerda entregar tus documentos antes del viernes.', fecha: '2025-06-03' },
    { titulo: 'Suspensión de clases', descripcion: 'El lunes no habrá clases por mantenimiento.', fecha: '2025-06-05' }
  ];

  constructor(private router: Router) { }

  ngOnInit() {}

  irAlMenu() {
    this.router.navigate(['/menu']);
  }
}
