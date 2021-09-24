import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  public email!:string;
  public userId!:string;
  public isLogged:Boolean = false;

  constructor() {
    const payload: any = this.getTokenPayload();

    this.email = payload.email;
    this.userId = payload.userId;

  }


  getTokenPayload(): Object {
    let token = localStorage.getItem('jwt') || '';
    return jwt_decode(token);
  }

}
