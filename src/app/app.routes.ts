import { Routes } from '@angular/router';
import { Login } from './paginas/login/login';
import { FormularioAdopcion } from './paginas/formulario-adopcion/formulario-adopcion';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'formulario-adopcion', component: FormularioAdopcion }
];