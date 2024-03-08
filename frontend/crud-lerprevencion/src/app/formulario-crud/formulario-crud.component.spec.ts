
import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-crud',
  templateUrl: './formulario-crud.component.html',
  styleUrls: ['./formulario-crud.component.css']
})
export class FormularioCrudComponent {
  persona: any = {}; // Definición de la propiedad persona

  submitForm() {
    // Aquí puedes implementar la lógica para guardar los datos del formulario
    console.log('Datos del formulario:', this.persona);
  }
}
