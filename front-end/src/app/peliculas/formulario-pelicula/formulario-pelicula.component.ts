import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MultipleSelectorModel } from 'src/app/utilidades/selector-multiple/multipleSelectormodel';
import { isBuffer } from 'util';
import { peliculaCreacionDTO, peliculaDTO } from '../pelicula';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit {

  constructor(private formbuilder: FormBuilder) { }

  generosNoSeleccionados: MultipleSelectorModel[]=[{llave:1,valor:'Drama'},{llave:2,valor:'Comedia'},{llave:3,valor:'Suspenso'}];
  generosSeleccionados: MultipleSelectorModel[]=[];

  cinesNoSeleccionados: MultipleSelectorModel[]=[{llave:1,valor:'Sunstar'},{llave:2,valor:'cinemacenter'},{llave:3,valor:'renzi'}];
  cinesSeleccionados: MultipleSelectorModel[]=[];

  form: FormGroup

  @Output()
  OnSubmit: EventEmitter<peliculaCreacionDTO>=new EventEmitter<peliculaCreacionDTO>();

  @Input()
  modelo: peliculaDTO;

  ngOnInit(): void {
    this.form=this.formbuilder.group({
      titulo: ['',{validators:[Validators.required]}],
      resumen:'',
      enCines:false,
      trailer:'',
      fechaLanzamiento:'',
      poster:'',
      generosID:'',
      cinesID:''
    });

    //para cargar el modelo en el form si es q viene de editar-pelicula
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }
  guardarCambios(){
    console.log(this.generosSeleccionados);

    const generosIDs=this.generosSeleccionados.map(val => val.llave);
    this.form.get('generosID').setValue(generosIDs);

    const cinesIDs=this.cinesSeleccionados.map(val => val.llave);
    this.form.get('cinesID').setValue(cinesIDs);

    this.OnSubmit.emit(this.form.value);
  }
  archivoSeleccionado(archivo: File){
    this.form.get('poster').setValue(archivo)
  }
  changeMarkdown(texto){
    this.form.get('resumen').setValue(texto);
  }
}
