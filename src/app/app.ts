import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './paginas/login/login';
import { FormularioAdopcion } from './paginas/formulario-adopcion/formulario-adopcion';
import { Solicitudes } from './paginas/solicitudes/solicitudes';
import { CamposFormu } from './paginas/campos-formu/campos-formu';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Login,FormularioAdopcion,Solicitudes,CamposFormu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Veterinaria');
}
