import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { GLOBAL } from '../../../services/global';
import { Animal } from '../../../models/animal';
import { AnimalSrevice } from '../../../services/animal.service';
import { UserService } from '../../../services/user.service';
import { UploadService } from '../../../services/upload.service';

import { fadeLateral } from '../../animation';

@Component({
  selector: 'admin-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[UserService, AnimalSrevice, UploadService],
  animations:[fadeLateral]
})
export class EditComponent implements OnInit {
  public title :string;
  public animal: Animal;
  public identity;
  public token;
  public url:string;
  public status;
  public filesToUpload;
  public is_edit;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _animalService: AnimalSrevice,
    private _uploadService: UploadService,
  ) {
    this.title = "Editar";
    this.is_edit = true;
    this.animal = new Animal('','','',2017,'','');
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
  }

  ngOnInit(): void {
    this.getAnimal();
  }

  onSubmit(){
    let id = this.animal._id
    this._animalService.editAnimal(this.token, id, this.animal).subscribe(
      response =>{
        if(!response.animal){
          this.status = 'error';
        }else{
          this.status = 'success';
          this.animal = response.animal;
          if(!this.filesToUpload){
            this._router.navigate(['/animal', this.animal._id]);
          }else{
            this._uploadService.makeFileRequest(this.url+'update-image-animal/'+this.animal._id,[],this.filesToUpload, this.token, 'imagen')
                  .then((result:any) => {
            this.animal.image = result.image;

            this._router.navigate(['/animal', this.animal._id]);
          });
          }


        }

      },
      error => {
        var errorMessage= <any>error;
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

  getAnimal(){
    this._route.params.forEach((params: Params) =>{
      let id = params['id'];
      this._animalService.getAnimal(id).subscribe(
        response =>{
          if(!response.animal){
            this._router.navigate(['/']);
          }else{
            this.animal = response.animal;
          }
        },
        error =>{
          console.log(<any>error);
          this._router.navigate(['/']);
        }
      );
    });
  }

}
