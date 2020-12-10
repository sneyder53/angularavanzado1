import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';
import { ActivatedRoute, Router } from '@angular/router';
import { GLOBAL } from '../../services/global';
import { Animal } from '../../models/animal';
import { AnimalSrevice } from '../../services/animal.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
  animations:[fadeIn],
  providers: [ AnimalSrevice,]
})
export class AnimalsComponent implements OnInit {
  public title : string;
  public animals = Animal[0];
  public url : string;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _animalService: AnimalSrevice
  ) {
    this.title = "Animales";
    this.url = GLOBAL.url;
  }

  ngOnInit(): void {
    console.log('animals.componet Cargado...!');
    this.getAnimals();
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
