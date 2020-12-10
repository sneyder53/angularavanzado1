import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service'
import { GLOBAL } from '../../services/global';

@Component({
  selector: 'keeper',
  templateUrl: './keeper.component.html',
  styleUrls: ['./keeper.component.css'],
  providers: [UserService],
  animations:[fadeIn]
})
export class KeeperComponent implements OnInit {
  public title:string;
  public keepers: User[];
  public url : string;
  constructor(
    private _userService: UserService
  ) {
    this.title = 'Cuidadores';
    this.url = GLOBAL.url;
  }

  ngOnInit(): void {
    console.log('keeper.component cargado !!');
    this.getKeepers();
  }

  getKeepers(){
    this._userService.getKeepers().subscribe(
      response =>{
        if(!response.users){
          console.log('no trae animales');
        }else{
          this.keepers = response.users
        }
      },
      error =>{
        console.log(<any>error);
      }
    );
  }
}
