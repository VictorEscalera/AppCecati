import { Component } from '@angular/core';
import {
  IonApp,
  IonRouterOutlet,
  IonHeader,
  IonToolbar,
  IonContent,
  IonList,
  IonItem,
  IonMenu,
  IonMenuToggle
} from '@ionic/angular/standalone';

import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [
    IonApp,
    IonRouterOutlet,
    IonHeader,
    IonToolbar,
    IonContent,
    IonList,
    IonItem,
    IonMenu,
    IonMenuToggle,
    RouterModule
  ]
})
export class AppComponent {
  constructor(private router: Router) {}

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
