import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  ngOnInit(): void {

      this.peliculasEnCine = [{
        titulo: 'Spiderman Far from home',
        fechalanzamiento: new Date(),
        precio: 1400.99,
        poster: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spiderman-lejos-de-casa-poster-berlin-londres-1553528518.jpg'
      },
      {
        titulo: 'avengers',
        fechalanzamiento: new Date('2020-11-19'),
        precio: 1000.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg'
      }],
      this.peliculasProximosEstrenos=[{
        titulo: 'avengers: Endgame',
        fechalanzamiento: new Date(),
        precio: 1400.99
      },
      {
        titulo: 'rocky',
        fechalanzamiento: new Date('2020-11-19'),
        precio: 1000.99
      }]
  }
  peliculasEnCine;
  peliculasProximosEstrenos;

}
