import { Component, DoCheck, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GLOBAL } from './services/global';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements DoCheck, OnInit {
  public title:string;
  public emailContacto:string;
  public identity;
  public url:string;

  constructor( private _userService:UserService,
    private _route: ActivatedRoute,
    private _router: Router){
    this.title = 'NG ZOO';
    this.url = GLOBAL.url;
  }
  ngDoCheck(){
    this.emailContacto = localStorage.getItem('emailContacto');
    this.identity = this._userService.getIdentity();
  }

  ngOnInit(){

    //console.log(localStorage.getItem('emailContacto'));
  }

  logout(){
    localStorage.clear();
    this.identity = null;
    this._router.navigate(['/']);
  }

}
