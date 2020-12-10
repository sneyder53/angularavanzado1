import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { GLOBAL } from '../../services/global';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  public title:String;
  public user: User;
  public message:string;
  public status:string;
  constructor( private _userService:UserService) {
    this.title = "Registro";
    this.user = new User("","","","","","ROLE_USER","");
  }

  ngOnInit(): void {
    console.log('register.component cargado');
  }

  onSubmit(registerForm) {
    this._userService.register(this.user).subscribe(
      response => {
        if(response.user && response.user._id){
          this.status = 'success';
          this.user = new User("","","","","","ROLE_USER","");
          registerForm.reset();
        }else{
          this.status = 'error';
        }

      },
      error =>{
        this.status = 'error';
        console.log(<any>error);
      }
    );
  }

}
