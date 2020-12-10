import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { GLOBAL } from '../../services/global';
import { error } from 'protractor';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  public title:String;
  public user:User;
  public indentity;
  public token;
  public status:string;
  constructor( private _userService:UserService,
    private _route: ActivatedRoute,
    private _router: Router) {
    this.title = "Identificate";
    this.user = new User("","","","","","ROLE_USER","");
   }

  ngOnInit(): void {
    console.log('login.componment cargado');
    console.log(this._userService.getIdentity());
    console.log(this._userService.getToken());
  }

  onSubmit(){
    this._userService.singup(this.user).subscribe(
      response => {
        this.indentity = response.issetUser;
        if(!this.indentity || !this.indentity._id){
          alert('El usuario no se ha logueado correctamente');
        }else{
          this.indentity.password = '';
          localStorage.setItem('identity', JSON.stringify(this.indentity));
          this._userService.singup(this.user, "true").subscribe(
            response => {
              this.token = response.token;
              if(this.token.length <= 0){
                alert('El token no se ha generado');
              }else{
                localStorage.setItem('token', this.token);
                this.status='success';
                this._router.navigate(['/']);
              }
            },
            error => {
              console.log(<any>error);
              var errorMessage = <any>error;
              if(errorMessage != null){
                //var body = JSON.parse(error._body);
                this.status = 'error';
              }
            }
          );
        }
      },
      error => {
        console.log(<any>error);
        var errorMessage = <any>error;
        if(errorMessage != null){
          //var body = JSON.parse(error._body);
          this.status = 'error';
        }
      }
    );
  }

}
