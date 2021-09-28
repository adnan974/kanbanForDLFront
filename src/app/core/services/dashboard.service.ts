import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserStoreService } from './userStore.service';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {
  public activeDashboardId: string | null = null;

  constructor(
    private http:HttpClient,
    private userStoreService:UserStoreService
  ) { }

  public getUserDashboards(): Observable<any>{
    return this.http.get(`${environment.BASE_URL}/users/${this.userStoreService.userInfos.id}/dashboards`)
  }

  public getDashboardById(): Observable<any> {
    return this.http.get(`${environment.BASE_URL}/dashboards/${this.activeDashboardId}`)
  }
}
