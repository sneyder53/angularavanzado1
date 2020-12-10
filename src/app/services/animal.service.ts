import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpRequest} from '@angular/common/http';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/observable'
import { GLOBAL } from './global';
import { JsonPipe } from '@angular/common';


@Injectable()
export class AnimalSrevice{
  public url: string;
  public identity;
  public token;
  constructor(private _http: HttpClient){
    this.url = GLOBAL.url;

  }

  addAnimal(token, animal): Observable<any>{
    let params = JSON.stringify(animal);
    let headers = new HttpHeaders().set("Content-Type","application/json").set('authorization', token);

    return this._http.post(this.url+'animal',params,{headers:headers});
  }

  editAnimal(token,id, animal): Observable<any>{
    let params = JSON.stringify(animal);
    let headers = new HttpHeaders().set("Content-Type","application/json").set('authorization', token);

    return this._http.put(this.url+'animal/'+id,params,{headers:headers});
  }

  getAnimals(): Observable<any>{
    let headers = new HttpHeaders().set("Content-Type","application/json");
    return this._http.get(this.url+'animals');
  }

  getAnimal(id): Observable<any>{
    return this._http.get(this.url+'animal/'+id);
  }

  deleteAnimal(token, id): Observable<any>{
    let headers = new HttpHeaders().set("Content-Type","application/json").set('authorization', token);
    return this._http.delete(this.url+'animal/'+id,{headers:headers});
  }

}
