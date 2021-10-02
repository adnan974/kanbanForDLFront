import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserStoreService } from './userStore.service';
import { TicketModel } from 'src/app/shared/models/ticket.model';
import { DashboardService } from './dashboard.service';

@Injectable({
  providedIn: 'root'
})

export class TicketService {
  public dashboard: string[] = ['To Do', 'In progress', 'essai:1', 'essai:2']; // A récupérer depuis le back
  public ticketList: { name: string, tickets: any[] }[] = [];

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

  initTicketList(allTickets: any[]): void {
    this.ticketList = this.dashboard.map(columnName => ({ name: columnName, tickets: [] }))
    for (let i = 0; i < this.ticketList.length; i++) {
      const columnTickets = allTickets.filter(ticket => ticket.ticketStatus === this.ticketList[i])
      this.ticketList[i].tickets = columnTickets;
    }
  }
}
