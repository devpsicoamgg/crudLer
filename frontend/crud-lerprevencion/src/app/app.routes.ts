import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormularioCrudComponent } from './formulario-crud/formulario-crud.component';

const routes: Routes = [
  { path: 'home', component: AppComponent }, 
  { path: 'formulario', component: FormularioCrudComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export { routes };
