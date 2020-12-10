import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GLOBAL } from '../../../services/global';
import { Animal } from '../../../models/animal';
import { AnimalSrevice } from '../../../services/animal.service';
import { UserService } from '../../../services/user.service';
import { UploadService } from '../../../services/upload.service';

import { fadeLateral } from '../../animation';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers:[UserService, AnimalSrevice, UploadService],
  animations:[fadeLateral]
})
export class AddComponent implements OnInit {
  public title :string;
  public animal: Animal;
  public identity;
  public token;
  public url:string;
  public status;
  public filesToUpload;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _animalService: AnimalSrevice,
    private _uploadService: UploadService,
  ) {
    this.title = "Añadir";
    this.animal = new Animal('','','',2017,'','');
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
  }

  ngOnInit(): void {
    console.log("animal-add component aga sido cargardo");
  }

  onSubmit(){

    this._animalService.addAnimal(this.token,this.animal).subscribe(
      response =>{
        if(!response.animal){
          this.status = 'error';
        }else{
          this.status = 'success';
          this.animal = response.animal;
          if(!this.filesToUpload){
            this._router.navigate(['/admin-panel/listado']);
          }else{
            this._uploadService.makeFileRequest(this.url+'update-image-animal/'+this.animal._id,[],this.filesToUpload, this.token, 'imagen')
                  .then((result:any) => {
            this.animal.image = result.image;

            this._router.navigate(['/admin-panel/listado']);
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
}
