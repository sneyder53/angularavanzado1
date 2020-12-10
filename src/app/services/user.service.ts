import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpResponse} from '@angular/common/http';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/observable'
import { GLOBAL } from './global';


@Injectable()
export class UserService{
  public url: string;
  public identity;
  public token;
  constructor(private _http: HttpClient){
    this.url = GLOBAL.url;

  }

  register(user_to_register): Observable<any>{
    let params = JSON.stringify(user_to_register);
    let headers = new HttpHeaders().set("Content-Type","application/json");
      return this._http.post(this.url+"register",params,{ headers : headers});
  }

  singup(user_to_login, gettoken = null): Observable<any>{

    if(gettoken != null){
      user_to_login.gettoken = gettoken;
    }
    let params = JSON.stringify(user_to_login);

    let headers = new HttpHeaders().set("Content-Type","application/json");

    return this._http.post(this.url+'login', params,{ headers : headers} );
  }

  getIdentity(){
    let identity = JSON.parse(localStorage.getItem('identity'));
    if(identity != 'undefined'){
      this.identity = identity;
    }else{
      this.identity = null;
    }
    return this.identity;
  }

  getToken(){
    let token = localStorage.getItem('token');
    if(token != 'undefined'){
      this.token = token;
    }else{
      this.token = null;
    }
    return this.token;
  }

  updateUser(user_tu_update): Observable<any>{
    let params = JSON.stringify(user_tu_update);
    let headers = new HttpHeaders().set("Content-Type","application/json").set('authorization', this.getToken());

    return this._http.put(this.url+'update-user/'+ user_tu_update._id,params,{headers:headers});

  }

  getKeepers(): Observable<any>{
    let headers = new HttpHeaders().set("Content-Type","application/json");
    return this._http.get(this.url+'keepers');
  }
}
