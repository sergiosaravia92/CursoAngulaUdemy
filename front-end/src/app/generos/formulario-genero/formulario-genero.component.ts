import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-formulario-genero',
  templateUrl: './formulario-genero.component.html',
  styleUrls: ['./formulario-genero.component.css']
})
export class FormularioGeneroComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  modelo:generoCreacionDTO;

@Output()
OnSubmit: EventEmitter<generoCreacionDTO> = new EventEmitter<generoCreacionDTO>();


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', {validators: [Validators.required,Validators.minLength(3),primeraLetraMayuscula()]}]
    })

    if(this.modelo !== undefined){
      //si el modelo tiene los mismos nombres de campos q el form, se matchean automaticamente
      this.form.patchValue(this.modelo);
    }
  }
  guardarCambios() {
    this.OnSubmit.emit(this.form.value)
  }
  obtenerMensajeError(){
    var inputgenero=this.form.get('nombre');
    if(inputgenero.hasError('required')){
      return 'el campo es requerido';
    }
    //tiene q ser en minuscula sino da error
    if(inputgenero.hasError('minlength')){
      return 'el campo debe tener por lo menos 3 caracteres';
    }
    if(inputgenero.hasError('primeraLetraMayuscula')){
      return inputgenero.getError('primeraLetraMayuscula').mensaje;
    }
    return '';
  }
}
