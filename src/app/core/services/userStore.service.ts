import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserStoreService {
  public userInfos: User = new User();
  public isLogged: boolean = false;

  constructor() { }

  getTokenPayload(): any {
    return jwt_decode(localStorage.getItem('jwt') || '');
  }

  storePayloadInfos(): void {
    const payload: any = this.getTokenPayload();

    this.userInfos = {
      id: payload.userId,
      email :payload.email,

      firstName: payload.firstName,
      lastName: payload.lastName,
      avatar: payload.avater
    }
  }

}
