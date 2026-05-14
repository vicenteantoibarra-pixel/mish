import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campos-formu',
  imports: [],
  templateUrl: './campos-formu.html',
  styleUrl: './campos-formu.css',
})

export class CamposFormu {
    mascotaSeleccionada: any = null;
    
    mascotas = [{
      nombre: 'Luna',
      especie: 'perro',
      edad: '4 años',
      sexo: 'hembra',
      tamaño: 'mediano'
    },
    {
      nombre:'Milo',
      especie:'perro',
      edad:'2 años',
      sexo:'Macho',
      tamaño:'Pequeño'
    },
    {
      nombre:'Rocky',
      especie:'Perro',
      edad:'4 años',
      sexo: 'Macho',
      tamaño: 'Grande'
    },
    {
      nombre:'Nala',
      especie:'Gato',
      edad:'3 años',
      sexo:'Hembra',
      tamaño:'Pequeño'
    },
    {
      nombre: 'Toby',
      especie: 'Perro',
      edad:'6 meses',
      sexo:'Macho',
      tamaño:'mediano'
    },
    {
      nombre:'Kira' ,
      especie:'Perro',
      edad:'5 años',
      sexo:'Hembra',
      tamaño:'Mediano'
    },
    {
      nombre:'Max' ,
      especie:'Perro',
      edad:'1 año',
      sexo:'Macho',
      tamaño:'Grande'
    },
    {
      nombre:'Pelusa' ,
      especie:'Conejo',
      edad:'8 meses',
      sexo:'Hembra',
      tamaño:'Pequeño'
    },
    {
      nombre:'Simba' ,
      especie:'Gato',
      edad:'2 años',
      sexo:'Macho',
      tamaño:'Mediano'
    },
    {
      nombre:'Canela' ,
      especie:'Perro',
      edad:'7 años',
      sexo:'Hembra',
      tamaño:'Mediano'
    },
    {
      nombre:'Tom' ,
      especie:'Gato',
      edad:'4 años',
      sexo:'Macho',
      tamaño:'Mediano'
    },
    {
      nombre:'Maya' ,
      especie:'Perro',
      edad:'3 años',
      sexo:'Hembra',
      tamaño:'Grande'
    },
    {
      nombre:'Bruno',
      especie:'Perro',
      edad:'2 años',
      sexo:'Macho',
      tamaño:'Grande'
    },
    {
      nombre:'Copito' ,
      especie:'Conejo',
      edad:'1 año',
      sexo:'Macho',
      tamaño:'Pequeño'
    },
    {
      nombre:'Princesa' ,
      especie:'Gato',
      edad:'5 años',
      sexo:'Hembra',
      tamaño:'Pequeño'
    }
  ];
  constructor(private router:Router){}

    seleccionarMascota(event: Event) {
    const select = event.target as HTMLSelectElement;
    const nombreMascota = select.value;

    this.mascotaSeleccionada = this.mascotas.find(
      mascota => mascota.nombre === nombreMascota
    );

    console.log('Seleccionaste:', nombreMascota);
    console.log('Datos:', this.mascotaSeleccionada);
  };
  irSolicitudes(){
    alert('Solicitud enviada')
    this.router.navigate(['/solicitudes']);
  };
}