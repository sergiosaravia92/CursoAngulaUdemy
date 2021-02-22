import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private location: Location,private activatedRoute: ActivatedRoute) { }

  form: FormGroup

  generos=[
    {id:1,nombre:'Drama'},
    {id:2,nombre:'Comedia'},
    {id:3,nombre:'Accion'}
  ];

  peliculas=[
    {titulo:'spiderman',generos:[3,2],proximosEstrenos:false,enCines:true,poster:'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'},
    {titulo:'batman',generos:[1,3],proximosEstrenos:true,enCines:false,poster:'https://m.media-amazon.com/images/M/MV5BZTE2YTY3YTMtM2FlMS00YmI3LTgyMWUtM2FhMWIyZWRmMDk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY268_CR16,0,182,268_AL_.jpg'},
    {titulo:'joker',generos:[1],proximosEstrenos:false,enCines:false,poster:'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'}
  ];

  copiaPeliculas=this.peliculas;

  formularioOriginal={titulo:'',generoId:0,proximosEstrenos: false,enCines:false};

  ngOnInit(): void {
    this.form=this.formBuilder.group(this.formularioOriginal);
    this.leerValoresQueryString();
    this.buscarPeliculas(this.form.value);

    this.form.valueChanges.subscribe(valores => {
      this.peliculas=this.copiaPeliculas;
      this.buscarPeliculas(valores);
      this.escribirParametrosBusquedaURL();
    })
  }

  leerValoresQueryString(){
    this.activatedRoute.queryParams.subscribe((params) => {
      var objeto: any={};
      if(params.titulo){
        objeto.titulo=params.titulo;
      }
      if(params.generoId){
        objeto.generoId=Number(params.generoId);
      }
      if(params.proximosEstrenos){
        objeto.proximosEstrenos=params.proximosEstrenos;
      }
      if(params.enCines){
        objeto.enCines=params.enCines;
      }
      this.form.patchValue(objeto);
    });
  }

  private escribirParametrosBusquedaURL(){
    var queryStrings =[];
    var valoresFormulario=this.form.value;
    if(valoresFormulario.titulo){
      queryStrings.push(`titulo=${valoresFormulario.titulo}`);
    }
    if(valoresFormulario.generoId !== '0'){
      queryStrings.push(`generoId=${valoresFormulario.generoId}`);
    }
    if(valoresFormulario.proximosEstrenos){
      queryStrings.push(`proximosEstrenos=${valoresFormulario.proximosEstrenos}`);
    }
    if(valoresFormulario.enCines){
      queryStrings.push(`enCines=${valoresFormulario.enCines}`);
    }

    this.location.replaceState('peliculas/buscar',queryStrings.join('&'));
  }

  buscarPeliculas(valores: any){
    if(valores.titulo){
      this.peliculas=this.peliculas.filter(p => p.titulo.indexOf(valores.titulo) !== -1)
    }
    if(valores.generoId != 0){
      this.peliculas=this.peliculas.filter(p => p.generos.indexOf(valores.generoId) !== -1)
    }
    if(valores.proximosEstrenos){
      this.peliculas=this.peliculas.filter(p => p.proximosEstrenos)
    }
    if(valores.enCines){
      this.peliculas=this.peliculas.filter(p => p.enCines)
    }
  }

  limpiar(){
    this.form.patchValue(this.formularioOriginal);
    //this.form.reset(); otra alternativa
  }
}
