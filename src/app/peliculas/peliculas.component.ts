import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
 
  ListPelisPather = [
            {nombre: 'Alien convenant',genero: 'accion', path:'./assets/img/a.jpg'},
            {nombre: 'Alien el Octavo pasajero',genero: 'accion', path: './assets/img/alien.jpg'},
            {nombre: 'Depredador 2',genero: 'accion',  path: './assets/img/d.jpg'},
            {nombre: 'Doctor Sueño',genero: 'accion',  path: './assets/img/ds.jpg'},
            {nombre: 'Ghost in the Shell',genero: 'accion',  path: './assets/img/gi.jpg'},
            {nombre: 'Sin Aire',genero: 'accion',  path: './assets/img/sin.jpg'}

          ];
   

  ngOnInit(): void {

  }

 

}
