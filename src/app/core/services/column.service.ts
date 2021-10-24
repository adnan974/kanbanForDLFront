import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../../environments/environment"
import { DashboardService } from './dashboard.service';
import { Ticket } from './ticket.service';


export interface Column {
  title: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  associatedDashboard: string;
  ticketList: string[];
  isTitleEditable?: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class ColumnService {
  public columnList: Column[] = [];

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

  public addTicket(ticket: Ticket) {
    for (const column of this.columnList) {
      if (ticket.associatedColumn ===  column._id) {
        console.log(column.ticketList);
        // Update client
        column.ticketList.push(ticket._id);
        console.log(column.ticketList);

        // Update server
        this.updateColumn(column._id, column).subscribe(res => console.log(res));
      }
    }
  }
}
