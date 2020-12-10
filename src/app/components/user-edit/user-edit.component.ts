import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { UploadService } from '../../services/upload.service';
import { GLOBAL } from '../../services/global';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers:[UserService , UploadService]
})
export class UserEditComponent implements OnInit {
  public title:string;
  public user: User;
  public identity;
  public token;
  public status;
  public filesToUpload: Array<File>;
  public url:string;

  constructor( private _userService:UserService,
    private _uploadService:UploadService) {
    this.title = 'Actualizar mis datos';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.user = this.identity;
    this.url = GLOBAL.url;
   }

  ngOnInit(): void {
    console.log('user-edit.component cargado');
  }

  onSubmit(){
    this._userService.updateUser(this.user).subscribe(
      response =>{
        if(!response.user){
          this.status = 'error';
        }else{
          localStorage.setItem('identity', JSON.stringify(this.user));
          this.status = "success";

          this._uploadService.makeFileRequest(this.url+'update-image-user/'+this.user._id,[],this.filesToUpload, this.token, 'imagen')
          .then((result:any) => {
            this.user.image = result.image;
            localStorage.setItem('identity', JSON.stringify(this.user));
            console.log(this.user);
          });
        }
      },
      error => {
        var errorMessage = <any>error;
        if(errorMessage != null){
          this.status = 'error';
        }
      }
    );
  }

  fileChangeEvent(fileinput:any){
    this.filesToUpload = <Array<File>>fileinput.target.files;
    //console.log(this.filesToUpload);
  }

}
