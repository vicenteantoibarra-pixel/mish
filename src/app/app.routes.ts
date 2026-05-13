import { Routes } from '@angular/router';
import { Login } from './paginas/login/login';
import { FormularioAdopcion } from './paginas/formulario-adopcion/formulario-adopcion';
import { CamposFormu } from './paginas/campos-formu/campos-formu';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'formulario-adopcion', component: FormularioAdopcion},
  { path: 'campos-formu', component: CamposFormu},
  { path:'**', redirectTo:''}

];