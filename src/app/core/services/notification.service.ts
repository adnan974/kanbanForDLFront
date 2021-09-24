import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserStoreService } from './userStore.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private http:HttpClient,
    private userStoreService:UserStoreService
  ) { }

  getUserNotifications(){
    return this.http.get(`${environment.BASE_URL}/users/${this.userStoreService.userInfos.id}/notifications`)
    
  }
}
