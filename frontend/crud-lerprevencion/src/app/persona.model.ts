

export class Persona {
    id: number;
    nombre: string;
    fechaNacimiento: Date;
  
    constructor(id: number, nombre: string, fechaNacimiento: Date) {
      this.id = id;
      this.nombre = nombre;
      this.fechaNacimiento = fechaNacimiento;
    }
  }
  