import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { GLOBAL } from '../../services/global';
import { Animal } from '../../models/animal';
import { AnimalSrevice } from '../../services/animal.service';
import { UserService } from '../../services/user.service';
import { UploadService } from '../../services/upload.service';
import { error } from 'protractor';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css'],
  providers:[UserService, AnimalSrevice, UploadService]
})
export class AnimalDetailComponent implements OnInit {
  public animal: Animal;
  public url:string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _animalService: AnimalSrevice,
    private _uploadService: UploadService,
  ) {
    this.url = GLOBAL.url;
  }

  ngOnInit(): void {
    console.log('AnimaDetail component cargado');
    this.getAnimal();
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
