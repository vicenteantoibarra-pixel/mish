import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements AfterViewInit {

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const formulario = document.getElementById('loginForm') as HTMLFormElement;
    const error = document.getElementById('error') as HTMLElement;

    if (!formulario || !error) {
      alert('No se encontró loginForm o error');
      return;
    }

    formulario.addEventListener('submit', (e) => {
      e.preventDefault();

      const user = (document.getElementById('usuario') as HTMLInputElement).value;
      const pass = (document.getElementById('password') as HTMLInputElement).value;

      if (user === 'admin' && pass === '1234') {
        this.router.navigate(['/formulario-adopcion']);
      } else {
        error.innerText = 'Datos incorrectos';
        alert('datos Incorrectos');
      }
    });
  }
}