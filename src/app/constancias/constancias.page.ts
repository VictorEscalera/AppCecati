import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonButtons,
  IonMenuButton
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-constancias',
  templateUrl: './constancias.page.html',
  styleUrls: ['./constancias.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonButton,
    IonList,
    IonItem,
    IonLabel,
    IonButtons,
    IonMenuButton,
    CommonModule,
    FormsModule
  ]
})
export class ConstanciasPage implements OnInit {

  alumno = {
    nombre: 'Arturo Contreras',
    matricula: '222324',
    especialidad: 'Informática',
    correo: 'gym.boy@email.com',
    foto: 'assets/alumno.jpg'
  };

  constancias = [
    { titulo: 'Constancia de Estudios', descripcion: 'Documento oficial de estudios.' },
    { titulo: 'Constancia de Calificaciones', descripcion: 'Historial de calificaciones.' }
  ];

  constructor(private router: Router) { }

  ngOnInit() {}

  async descargarConstancia(constancia: any) {
    const doc = new jsPDF();

    const alumno = this.alumno;
    const fecha = new Date();
    const dia = fecha.getDate();
    const mes = fecha.toLocaleString('es-MX', { month: 'long' });
    const anio = fecha.getFullYear();

    // Cargar imágenes base64
    const logoBase64 = await this.convertirImagenABase64('assets/logorojo.jpeg');
    const fondoBase64 = await this.convertirImagenABase64('assets/fondo_constancia.png');
    const firmaBase64 = await this.convertirImagenABase64('assets/firma.png');


    // Fondo y encabezado
    doc.addImage(fondoBase64, 'PNG', 0, 0, 210, 297);
    doc.addImage(logoBase64, 'JPEG', 10, 10, 40, 20);

    // Título
    doc.setFontSize(16);
    doc.text(constancia.titulo, 70, 40); // Título centrado aprox

    doc.setFontSize(12);
    let y = 60;

    // Texto según el tipo de constancia
    if (constancia.titulo === 'Constancia de Estudios') {
      doc.text(`A quien corresponda:`, 20, y);
      y += 10;
      doc.text(`Se extiende la presente a favor del(la) C. ${alumno.nombre},`, 20, y += 10);
      doc.text(`matrícula ${alumno.matricula}, alumno(a) de la especialidad de ${alumno.especialidad},`, 20, y += 10);
      doc.text(`quien ha cumplido con los requisitos académicos establecidos.`, 20, y += 10);
    }

    if (constancia.titulo === 'Constancia de Calificaciones') {
      doc.text(`A quien corresponda:`, 20, y);
      y += 10;
      doc.text(`Se certifica que el(la) alumno(a) ${alumno.nombre}, con matrícula ${alumno.matricula},`, 20, y += 10);
      doc.text(`cursó la especialidad de ${alumno.especialidad}, obteniendo las siguientes calificaciones:`, 20, y += 10);

      // Encabezado tabla
      y += 10;
      doc.setFont('helvetica', 'bold');
      doc.text('Módulo', 20, y);
      doc.text('Calificación', 150, y);
      doc.setFont('helvetica', 'normal');

      // Lista ficticia de módulos
      const modulos = [
        { nombre: 'Sistemas Operativos', calificacion: 9.5 },
        { nombre: 'Ofimática', calificacion: 9.0 },
        { nombre: 'Redes de Computadoras', calificacion: 8.5 },
        { nombre: 'Programación Web', calificacion: 9.8 }
      ];

      // Imprimir tabla
      modulos.forEach(modulo => {
        y += 10;
        doc.text(modulo.nombre, 20, y);
        doc.text(modulo.calificacion.toString(), 150, y);
      });

      y += 10;
    }

    // Párrafo de cierre
    y += 10;
    doc.text(`La presente constancia se expide para los fines legales que al interesado convengan,`, 20, y += 10);
    doc.text(`en la ciudad de Calvillo, a los ${dia} días del mes de ${mes} de ${anio}.`, 20, y += 10);

    // Firma
    doc.addImage(firmaBase64, 'PNG', 120, y + 10, 60, 30);
    doc.text("_________________________", 120, y + 45);
    doc.text("Firma del responsable", 130, y + 53);

    doc.save(`constancia-${constancia.titulo.replace(/ /g, "_")}.pdf`);
  }

  convertirImagenABase64(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) return reject('No se pudo cargar la imagen');
        ctx.drawImage(img, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      };
      img.onerror = reject;
      img.src = url;
    });
  }

  irAlMenu() {
    this.router.navigate(['/menu']);
  }
}
