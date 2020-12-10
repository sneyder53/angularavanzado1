import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'guardar-email',
  templateUrl: './guardar-email.component.html',
  styleUrls: ['./guardar-email.component.css']
})
export class GuardarEmailComponent implements OnInit {
  title = "Mostrar Email";
  emailContacto: string;
  constructor() { }

  ngOnInit(): void {
  }

  guardarEmail(){
    //console.log(this.emailContacto);
    localStorage.setItem('emailContacto', this.emailContacto);
    console.log(localStorage.getItem('emailContacto'));
  }
}
