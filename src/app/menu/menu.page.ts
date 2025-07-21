import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router'; // <-- Importa Router

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule]
})
export class MenuPage {
  constructor(private router: Router) {}

  logout() {
    localStorage.clear(); // Limpia la sesión (ajusta según tu lógica)
    this.router.navigate(['/login']); // Cambia '/login' si tu ruta de login es diferente
  }
}