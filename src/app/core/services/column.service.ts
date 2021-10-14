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

  public updateColumn(columnId: any, updatedColumn: any): Observable<any>{
    return this.http.patch(`${environment.BASE_URL}/columns/${columnId}`, updatedColumn)
  }

  public deleteColumn(columnId: any): Observable<any> {
    return this.http.delete(`${environment.BASE_URL}/columns/${columnId}`)
  }

  public sortTickets(columnList: any[], ticketList: any[]) {
    this.columnList = columnList.map(column => ({ columnProperties: column, ticketList: ticketList.filter(ticket => ticket.associatedColumn === column._id) }));
  }
  
  public addTicket(ticket: any) {
    for (let i = 0; i < this.columnList.length; i++) {
      if (ticket.associatedColumn ===  this.columnList[i].columnProperties._id) {
        this.columnList[i].ticketList.push(ticket);
      } else {
        console.log('no match')
      }
    }
  console.log(this.columnList);
  }
}
