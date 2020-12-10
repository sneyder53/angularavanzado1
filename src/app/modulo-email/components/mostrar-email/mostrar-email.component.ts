import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'mostrar-email',
  templateUrl: './mostrar-email.component.html',
  styleUrls: ['./mostrar-email.component.css']
})
export class MostrarEmailComponent implements OnInit, DoCheck {
  title = "mostrar Email";
  emailContacto : string;
  constructor() { }

  ngOnInit(): void {
    this.emailContacto = "";
  }

  ngDoCheck(){
    this.emailContacto = localStorage.getItem('emailContacto');
  }
  borrarEmail(){
    localStorage.removeItem('emailContacto');
    localStorage.clear();
    this.emailContacto = null;
  }

}
