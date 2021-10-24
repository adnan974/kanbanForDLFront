import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserStoreService } from './userStore.service';
import { TicketModel } from 'src/app/shared/models/ticket.model';
import { DashboardService } from './dashboard.service';

export interface Ticket {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  associatedColumn: string;
  ticketNumber: number;
}

@Injectable({
  providedIn: 'root'
})

export class TicketService {
  public ticketList: Ticket[] = [];

  constructor(
    private http: HttpClient,
    private dashboardService: DashboardService,
    private userStoreService: UserStoreService
  ) { }

  getUserTickets(): Observable<any>{
    return this.http.get(`${environment.BASE_URL}/dashboards/${this.dashboardService.activeDashboardId}/tickets`)
  }

  getSpecificUserTicket(): Observable<any>{
    return this.http.get(`${environment.BASE_URL}/users/${this.userStoreService.userInfos.id}/tickets`)
  }

  createTicket(ticket: TicketModel): Observable<any> {
    return this.http.post(`${environment.BASE_URL}/users/${this.userStoreService.userInfos.id}/tickets`, ticket)
  }

  // initTicketList(allTickets: any[]): void {
  //   this.ticketList = this.dashboard.map(columnName => ({ name: columnName, tickets: [] }))
  //   for (let i = 0; i < this.ticketList.length; i++) {
  //     const columnTickets = allTickets.filter(ticket => ticket.ticketStatus === this.ticketList[i])
  //     this.ticketList[i].tickets = columnTickets;
  //   }
  // }

  updateTicket(ticketId:string,ticketData:Partial<TicketModel>){
    return this.http.patch(`${environment.BASE_URL}/tickets/${ticketId}`,ticketData)
  }

  deleteTicket(ticketId: string): Observable<any> {
    return this.http.delete(`${environment.BASE_URL}/tickets/${ticketId}`);
  }
}
