import { Component, OnInit } from '@angular/core';
import { peliculaCreacionDTO, peliculaDTO } from '../pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  constructor() { }

  modelo: peliculaDTO={titulo:'Batman',trailer:'trailer batman',enCines:true,resumen:'# Resumen Batman **en negrita**',
  fechaLanzamiento:new Date,poster:'https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_UX182_CR0,0,182,268_AL_.jpg'  }

  ngOnInit(): void {
  }
  guardarCambios(pelicula: peliculaCreacionDTO){
    console.log(pelicula);
  }
}
