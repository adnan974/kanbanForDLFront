import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../../environments/environment"
import { DashboardService } from './dashboard.service';

@Injectable({
  providedIn: 'root'
})

export class ColumnService {
  public columnList: any[] = [];

  constructor(
    private http: HttpClient,
    private dashboardService: DashboardService
  ) { }

  public getColumn(): Observable<any>{
    return this.http.get(`${environment.BASE_URL}/dashboards/${this.dashboardService.activeDashboardId}/columns`)
  }

  public postColumn(newColumn: any): Observable<any>{
    return this.http.post(`${environment.BASE_URL}/dashboards/${this.dashboardService.activeDashboardId}/columns`, newColumn)
  }

  public deleteColumn(columnId: any): Observable<any> {
    return this.http.delete(`${environment.BASE_URL}/columns/${columnId}`)
  }

  public sortTickets(columnList: any[], ticketList: any[]) {
    this.columnList = columnList.map(column => ({ columnProperties: column, ticketList: ticketList.filter(ticket => ticket.associatedColumn === column._id) }));
  }
}
