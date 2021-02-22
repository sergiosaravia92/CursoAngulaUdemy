import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent implements OnInit {

  @Input()
  contenidoMarkdown='';

  @Input()
  placeholderTextArea: string='Texto';

  @Output()
  changeMarkDown: EventEmitter<string>=new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  inputTextArea(evento){
    const texto=evento.target.value;
    //este ya no usamos porq usamos el binding de doble via this.contenidoMarkdown=texto;
    this.changeMarkDown.emit(texto);
  }

}
