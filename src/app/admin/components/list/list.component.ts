import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GLOBAL } from '../../../services/global';
import { Animal } from '../../../models/animal';
import { AnimalSrevice } from '../../../services/animal.service';
import { UserService } from '../../../services/user.service';
import { UploadService } from '../../../services/upload.service';
//import { $, error } from 'protractor';

import { fadeLateral } from '../../animation';

declare var jQuery:any;
declare var $:any;
declare var tinymce:any;

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[UserService, AnimalSrevice, UploadService],
  animations:[fadeLateral]
})
export class ListComponent implements OnInit {
  public title :string;
  public numbers = new Array(10);
  public animals = Animal[0];
  public token ;
  public busqueda;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _animalService: AnimalSrevice,
    private _uploadService: UploadService,
  ) {
    this.title = "Listado de Animales";
    this.token = this._userService.getToken();
  }

  ngOnInit(): void {
    this.getAnimals();
  }

  deleteAnimal(id){
    $('#modal'+ id).modal('hide');
    this._animalService.deleteAnimal(this.token, id).subscribe(
      response => {
        if(!response.animal){
          alert('Error en el servidor');
        }else{
          this.getAnimals();
        }
      },
      error => {
        alert('Error en el servidor');
      }
    );
  }

  getAnimals(){
    this._animalService.getAnimals().subscribe(
      response =>{
        if(!response.animals){
            console.log('no trae animales');
        }else{
          this.animals = response.animals
        }
      },
      error =>{
        console.log(<any>error);
      }
    );
  }
}
