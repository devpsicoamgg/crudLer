import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 
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
    RouterModule, 
    AppRoutingModule 
  ],
  providers: [
    ServicioCrudService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
