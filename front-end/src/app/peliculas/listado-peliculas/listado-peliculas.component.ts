import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  constructor() { }
  //decorador input, nos permite pasar parametros desde el html a la propiedad peliculas
  @Input()
  peliculas;
  ngOnInit(): void {
    
  }
  quitar(indicepelicula: number): void {
    this.peliculas.splice(indicepelicula, 1);
  }
}
