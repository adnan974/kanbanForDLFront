import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/core/services/ticket.service';
import * as _ from 'lodash';
import { TicketModel } from 'src/app/shared/models/ticket.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  public isLoading: boolean = true
  
  constructor(public ticketService: TicketService) { }

  ngOnInit(): void {
    this.ticketService.getUserTickets()
      .subscribe(tickets => {
        this.isLoading = false
        this.ticketService.initTicketList(tickets);
      })
  }

}
