import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from 'src/app/shared/models/ticket.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  @Input() ticketData!:Ticket;

  
  constructor() { }

  ngOnInit(): void {
  }

}
