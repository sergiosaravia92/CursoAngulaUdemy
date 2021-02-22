import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { tileLayer, latLng, LeafletMouseEvent, Marker, marker } from 'leaflet';
import { Coordenada } from './coordenada';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  @Input()
  coordenadasIniciales: Coordenada[]=[];

  @Output()
  coordenadaSeleccionada: EventEmitter<Coordenada>=new EventEmitter<Coordenada>();

  constructor() { }

  ngOnInit(): void {
    this.capas=this.coordenadasIniciales.map(valor => marker([valor.latitud,valor.longitud]));
  }

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 16,
    center: latLng(-27.79910992289794, -64.24798786640169)
  };

  capas: Marker<any>[]=[]

  manejarClick(event: LeafletMouseEvent){
    const latitud=event.latlng.lat;
    const longitud=event.latlng.lng;
    console.log({latitud,longitud});

    //para evitar q marque muchas veces, vacio el arreglo antes
    this.capas=[];
    this.capas.push(marker([latitud,longitud]));
    this.coordenadaSeleccionada.emit({latitud: latitud,longitud:longitud});
  }
}
