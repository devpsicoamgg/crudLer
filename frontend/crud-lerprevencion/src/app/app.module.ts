import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Importa RouterModule aquí
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component'; 
import { FormularioCrudComponent } from './formulario-crud/formulario-crud.component'; 
import { ServicioCrudService } from './servicio-crud.service'; 

@NgModule({
  declarations: [
    AppComponent,
    FormularioCrudComponent, 
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    RouterModule 
  ],
  providers: [
    ServicioCrudService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
