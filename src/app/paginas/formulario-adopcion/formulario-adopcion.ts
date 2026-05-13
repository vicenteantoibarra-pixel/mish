import { Component, AfterViewInit, Inject, PLATFORM_ID,} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';




@Component({
  selector: 'app-formulario-adopcion',
  imports: [],
  templateUrl: './formulario-adopcion.html',
  styleUrl: './formulario-adopcion.css',
})

export class FormularioAdopcion implements AfterViewInit {
    constructor (
      private router: Router,
      @Inject(PLATFORM_ID) private plataformId: object
    ){}
    
    ngAfterViewInit(){
      if (!isPlatformBrowser(this.plataformId)){
        return;
      }
      const formulario = document.getElementById('datos') as HTMLFormElement | null;
      if (!formulario){
        console.log('No se encontro el formulario');
        return;
      }

      formulario.addEventListener('submit',(e)=>{
        e.preventDefault();
        if(formulario.checkValidity()){
          this.router.navigate(['/campos-formu']);
        } else {
          formulario.reportValidity();
        }

      });
    }

}
