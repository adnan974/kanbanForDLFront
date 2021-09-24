import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  public userInfos:User= new User();
  public isLogged:Boolean = false;

  constructor() {
    
  }


  getTokenPayload(): Object {
    let token = localStorage.getItem('jwt') || '';
    return jwt_decode(token);
  }

  storePayloadInfos(){
    const payload: any = this.getTokenPayload();


    this.userInfos = {
      id:payload.userId,
      email:payload.email,

      //TODO: ajouter ces infos dans le payload ? de base ils ne le sont pas
      firstName:payload.firstName,
      lastName:payload.lastName,
      avatar:""
    }
  }

}
