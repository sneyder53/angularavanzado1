import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { fadeIn } from '../animation';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[fadeIn]
})
export class HomeComponent implements OnInit {
  title = 'Bienvenido de NGZOO';
  constructor() { }

  ngOnInit(): void {
    console.log('home.component cargado !!');
  }

}
