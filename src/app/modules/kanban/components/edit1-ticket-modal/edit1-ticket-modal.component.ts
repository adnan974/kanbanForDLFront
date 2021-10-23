import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TicketService } from 'src/app/core/services/ticket.service';
import { TicketModel } from 'src/app/shared/models/ticket.model';

@Component({
  selector: 'app-edit1-ticket-modal',
  templateUrl: './edit1-ticket-modal.component.html',
  styleUrls: ['./edit1-ticket-modal.component.scss']
})
export class Edit1TicketModalComponent implements OnInit {

  @Input() ticketData!: TicketModel;

  public updatedTicket!: any;


  constructor(
    private modalService: NgbModal,
    private ticketService: TicketService
  ) { }

  ngOnInit(): void {
    this.updatedTicket = {
      ...this.ticketData
    }
  }

  openModal(content: any) {
    this.modalService.open(content)
  }

  onSubmit() {
    let ticketId: string = this.updatedTicket._id;
    this.ticketService.updateTicket(ticketId, this.updatedTicket)
    .subscribe(()=>{
      this.ticketData.title = this.updatedTicket.title;
      this.ticketData.description = this.updatedTicket.description;
     
    })
  }
    
  
}
