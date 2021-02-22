import { Component, OnInit } from '@angular/core';
import { cineCreacionDTO, cineDTO } from '../cine';


@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit {

  constructor() { }
  modelo: cineDTO={nombre:'sunstar',latitud: -27.776844915057126, longitud: -64.25743997097017};

  ngOnInit(): void {
  }

  guardarCambios(cine: cineCreacionDTO){
    console.log(cine);
  }
}
