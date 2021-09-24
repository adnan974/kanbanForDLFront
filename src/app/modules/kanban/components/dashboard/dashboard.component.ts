import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/core/services/ticket.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  public isLoading: boolean = false
  public ticketList: { [key: string]: any[] } = {
    'To Do': [],
    'In Progress': [],
    'Closed': []
  }
  
  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.ticketService.getUserTickets()
      .subscribe(tickets => {
        this.isLoading = true
        console.log(tickets)
        
        for (const ticket of tickets) {
          if (_.isEmpty(this.ticketList[ticket.ticketStatus])) {
            this.ticketList[ticket.ticketStatus] = [];
          }
          this.ticketList[ticket.ticketStatus].push(ticket);
        }
      })
  }

}
