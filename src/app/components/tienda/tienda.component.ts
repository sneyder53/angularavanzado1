import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { fadeIn } from '../animation';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css'],
  animations: [
    trigger('marcar',[
      state('inactive', style({
        border: '5px solid #ccc'
      })),
      state('active', style({
        border: '5px solid yellow',
        background: 'red',
        borderRadius: '50px',
        transform: 'scale(1.2)'
      })),
      transition('inactive => active', animate('300ms linear')),
      transition('active => inactive', animate('300ms linear'))
    ]),
    fadeIn
  ]
})
export class TiendaComponent implements OnInit {
  public titulo;
  public mombredelParque:string;
  public miParque;
  public status;
  constructor() {
    this.titulo = 'Esta es la tienda';
    this.status = 'inactive';
   }

  ngOnInit(): void {
    $('#textojq').hide();
    $('#botonjq').click(function(){
      $('#textojq').slideToggle();
    });

    $('#caja').dotdotdot({});

  }

  mostrarNombre(){
    console.log(this.mombredelParque);
  }

  verDatosParque(event){
    console.log(event);
    this.miParque = event;
  }

  cambiarEstado(status){
    if(status == 'inactive'){
      this.status = 'active';
    }else{
      this.status = 'inactive';
    }
  }

}
