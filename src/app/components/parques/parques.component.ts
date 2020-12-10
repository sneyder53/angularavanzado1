import { Component, OnInit, Input,  Output, EventEmitter, OnChanges, SimpleChanges, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'parques',
  templateUrl: './parques.component.html',
  styleUrls: ['./parques.component.css']
})
export class ParquesComponent implements OnInit, OnChanges, DoCheck, OnDestroy  {
  @Input() nombre: string;
  @Input('metros_cuadrados') metros: number;
  public vegetacion : string;
  public abierto: boolean;
  @Output() pasameLosDatos = new EventEmitter();

  constructor() {
    this.nombre = "PArque natural para caballos";
    this.metros = 450;
    this.vegetacion = 'Alta';
    this.abierto = true;
  }

  ngOnInit(): void {
    console.log('Metodo Oninit lanzado...');
  }

  ngOnChanges(changes: SimpleChanges){
    //console.log(changes);
    console.log('Existen cambios en las propiedades');
  }

  ngDoCheck(){
    console.log('El doCheck se ha eejcutado');
  }

  ngOnDestroy(){
    console.log('Se va a eliminar el componente');
  }

  emitirEvento(){
    this.pasameLosDatos.emit({
      'nombre': this.nombre,
      'metros': this.metros,
      'vegetacion': this.vegetacion,
      'abierto': this.abierto
    });
  }

}
