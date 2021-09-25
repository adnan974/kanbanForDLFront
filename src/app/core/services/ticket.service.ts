import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserStoreService } from './userStore.service';
import { TicketModel } from 'src/app/shared/models/ticket.model';

@Injectable({
  providedIn: 'root'
})

export class TicketService {

  constructor(
    private http: HttpClient,
    private userStoreService: UserStoreService
  ) { }

  getUserTickets(): Observable<any>{
    return this.http.get(`${environment.BASE_URL}/users/${this.userStoreService.userInfos.id}/tickets`)
  }

  createTicket(ticket: TicketModel): Observable<any> {
    return this.http.post(`${environment.BASE_URL}/users/${this.userStoreService.userInfos.id}/tickets`, JSON.stringify(ticket))
  }
}
