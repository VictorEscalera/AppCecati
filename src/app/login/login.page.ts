import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BDService } from '../bd/bd.service';
import { AlumnosService } from '../services/alumnos.service';
import { AlertController } from '@ionic/angular';
import { 
  IonContent, 
  IonInput, 
  IonButton, 
  IonItem, 
  IonCard, 
  IonCardContent
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonCard, CommonModule, FormsModule, IonContent, IonItem, IonInput, IonButton, IonCardContent]
})
export class LoginPage {
  password = '';
  name = '';
  isSubmitting = false;

  constructor(
    private router: Router,
    private usuarioServicio: AlumnosService,
    private alertController: AlertController
  ) {}

  async showAlert(message: string, header: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['Cerrar'],
      cssClass: 'custom-alert',
      backdropDismiss: false
    });
    await alert.present();
  }
  goToRegister() {
  this.router.navigate(['/registro']);
}

login() {
  if (this.isSubmitting) return;
  this.isSubmitting = true;

  this.usuarioServicio.login(this.name, this.password).subscribe({
    next: (res: any) => {
      this.isSubmitting = false;

      if (res.Respuesta) {
        this.usuarioServicio.guardarAlumno(res.alumno); // Guardamos los datos del alumno
        this.showAlert('Login exitoso', 'Alerta');
        this.router.navigate(['menu']); // o ['asistencias'] si ese es el destino correcto
      } else {
        this.showAlert('Usuario o contraseña incorrectos.', 'Error');
      }
    },
    error: (error) => {
      this.isSubmitting = false;
      this.showAlert('Error al iniciar sesión.', 'Error');
      console.error('Error de login:', error);
    }
  });
}
}