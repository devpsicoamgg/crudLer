import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicioCrudService } from '../servicio-crud.service';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario-crud',
  templateUrl: './formulario-crud.component.html',
  styleUrls: ['./formulario-crud.component.css']
})
export class FormularioCrudComponent {
  personaForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    fechaNacimiento: new FormControl('', [Validators.required])
  });

  constructor(private crudService: ServicioCrudService) { }

  submitForm(): void {
    if (this.personaForm.valid) {
      const nombreControl = this.personaForm.get('nombre');
      const fechaNacimientoControl = this.personaForm.get('fechaNacimiento');
      const idControl = this.personaForm.get('id');
  
      if (nombreControl && fechaNacimientoControl && idControl) {
        const nombre = nombreControl.value as string;
        const fechaNacimiento = fechaNacimientoControl.value as string;
        const id = idControl.value as string;
  
        if (nombre !== null && fechaNacimiento !== null && id !== null) {
          // Verificar si el ID es un número
          if (!isNaN(Number(id))) {
            const personaData: Persona = {
              id: Number(id),
              nombre: nombre,
              fechaNacimiento: new Date(fechaNacimiento)
            };
  
            this.crudService.crearUsuario(personaData)
              .subscribe(() => {
                console.log('Persona creada con éxito');
              }, error => {
                console.error('Error al crear persona:', error);
              });
          } else {
            console.error('El ID debe ser un número válido');
          }
        } else {
          console.error('Los valores de nombre y/o fecha de nacimiento y/o ID son nulos');
        }
      }
    } else {
      console.log('Formulario inválido');
    }
  }
  
}  