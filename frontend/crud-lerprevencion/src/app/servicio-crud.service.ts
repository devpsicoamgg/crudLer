import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './persona.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioCrudService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllUsuarios(): Observable<Persona[]> {
    const url = `${this.baseUrl}/api/v1/usuarios`;
    return this.http.get<Persona[]>(url);
  }

  crearUsuario(persona: Persona): Observable<Persona> {
    const url = `${this.baseUrl}/api/v1/crear`;
    return this.http.post<Persona>(url, persona);
  }

  borrarUsuario(id: number): Observable<void> {
    const url = `${this.baseUrl}/api/v1/borrar/${id}`;
    return this.http.delete<void>(url);
  }

  editarUsuario(id: number, persona: Persona): Observable<Persona> {
    const url = `${this.baseUrl}/api/v1/editar/${id}`;
    return this.http.put<Persona>(url, persona);
  }
}
