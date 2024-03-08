import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioCrudComponent } from './formulario-crud/formulario-crud.component';

const routes: Routes = [
  { path: 'formulario', component: FormularioCrudComponent },
  { path: '', redirectTo: '/formulario', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

