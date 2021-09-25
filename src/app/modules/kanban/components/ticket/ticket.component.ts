import { Component, Input, OnInit } from '@angular/core';
import { TicketModel } from 'src/app/shared/models/ticket.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  @Input() ticketData!: TicketModel;

  
  constructor() { }

  ngOnInit(): void {
  }

}
