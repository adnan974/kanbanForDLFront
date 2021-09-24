import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/core/services/ticket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public isLoading:boolean = false
  public ticketsData: any = {
    todoStatus: {},
    inProgressStatus: {},
  }

  constructor(
    private ticketService: TicketService
  ) { }

  ngOnInit(): void {
    this.ticketService.getUserTickets()
      .subscribe((tickets) => {

        const ticketInTodoStatus = tickets.filter((ticket: any) => {
          return ticket.ticketStatus == 'Todo'
        })

        const ticketInProgressStatus = tickets.filter((ticket: any) => {
          return ticket.ticketStatus == 'In Progress'
        })

        this.ticketsData.todoStatus = ticketInTodoStatus;
        this.ticketsData.inProgressStatus = ticketInProgressStatus;

        this.isLoading = true


      })
  }

}
