import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
@Input()
maximoRating=5;

@Input()
ratingSeleccionado=0;

//mandar mensaje del hijo al padre
@Output()
rated:EventEmitter<number>=new EventEmitter<number>();

maximoRatingArray=[];
votado=false;
ratingAnterior;
  constructor() { }

  ngOnInit(): void {
    this.maximoRatingArray=Array(this.maximoRating).fill(0);
  }

  manejarMouseEnter(index: number): void{
    this.ratingSeleccionado=index + 1;
  }
  manejarMouseLeave():void{
    if(this.ratingAnterior !== 0)
    {
      this.ratingSeleccionado=this.ratingAnterior;
    }else{
      this.ratingSeleccionado=0;
    }
  }
  rate(index: number):void{
    this.ratingSeleccionado=index + 1;
    this.votado=true;
    this.ratingAnterior=this.ratingSeleccionado;
    this.rated.emit(this.ratingSeleccionado);
  }
}
