import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../../environments/environment"
import { UserStoreService } from './userStore.service';

@Injectable({
  providedIn: 'root'
})

export class ColumnService {
  public columnList: string[] = [];
  public dashboardId: string = '6152bcdb074f4027d1f97791';

  constructor(
    private http: HttpClient,
    private userStoreService: UserStoreService
  ) { }

  public getColumnList(): Observable<any>{
    return this.http.get(`${environment.BASE_URL}/users/${this.userStoreService.userInfos.id}/dashboards`)
  }

  public postColumn(columnName: any): Observable<any>{
    return this.http.post(`${environment.BASE_URL}/dashboards/${this.dashboardId}/columns`, columnName)
  }
}
