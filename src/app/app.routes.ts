import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  { path: 'splash', loadComponent: () => import('./splash/splash.page').then(m => m.SplashPage) },
  { path: 'loginscreen', loadComponent: () => import('./loginscreen/loginscreen.page').then(m => m.LoginscreenPage) },
  { path: 'login', loadComponent: () => import('./login/login.page').then(m => m.LoginPage) },
  { path: 'registro', loadComponent: () => import('./registro/registro.page').then(m => m.RegistroPage) },
  { path: 'menu', loadComponent: () => import('./menu/menu.page').then(m => m.MenuPage) },
  { path: 'constancias', loadComponent: () => import('./constancias/constancias.page').then(m => m.ConstanciasPage) },
  { path: 'avisos', loadComponent: () => import('./avisos/avisos.page').then(m => m.AvisosPage) },
  { path: 'horarios', loadComponent: () => import('./horarios/horarios.page').then(m => m.HorariosPage) },
  { path: 'asistencias', loadComponent: () => import('./asistencias/asistencias.page').then(m => m.AsistenciasPage) },
  { path: 'clases', loadComponent: () => import('./clases/clases.page').then(m => m.ClasesPage) },
];
