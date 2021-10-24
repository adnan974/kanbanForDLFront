import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ColumnService } from 'src/app/core/services/column.service';
import { TicketService } from 'src/app/core/services/ticket.service';

@Component({
  selector: 'app-edit1-ticket-modal',
  templateUrl: './edit1-ticket-modal.component.html',
  styleUrls: ['./edit1-ticket-modal.component.scss']
})
export class Edit1TicketModalComponent implements OnInit {

  @Input() ticketData!: any;

  public updatedTicket!: any;
  public isDeletable: boolean;

  constructor(
    private modalService: NgbModal,
    private ticketService: TicketService,
    private columnService: ColumnService
  ) {
    this.isDeletable = false;
  }

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
    
  onDelete() {
    this.ticketService.deleteTicket(this.ticketData._id).subscribe(
      (state) => {
        if (state.success) {
          this.ticketService.ticketList = this.ticketService.ticketList.filter(ticket => ticket._id !== this.ticketData._id);
        }
      }
    )
  }
}
