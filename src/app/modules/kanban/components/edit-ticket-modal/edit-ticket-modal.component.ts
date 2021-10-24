import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TicketService } from 'src/app/core/services/ticket.service';
import { TicketModel } from 'src/app/shared/models/ticket.model';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { ColumnService } from 'src/app/core/services/column.service';

@Component({
  selector: 'app-edit-ticket-modal',
  templateUrl: './edit-ticket-modal.component.html',
  styleUrls: ['./edit-ticket-modal.component.scss']
})

export class EditTicketModalComponent implements OnInit {
  @Input() columnId: string = '';
  @Input() ticketData: any = 'default';
  
  public editTicketForm = {
    title: "",
    description: "",
  };
  
  constructor(
    private modalService: NgbModal,
    private dashboardService: DashboardService,
    private ticketService: TicketService,
    private columnService: ColumnService
  ) {}

  ngOnInit() {
    if (this.ticketData !== null) {
      this.editTicketForm.title = this.ticketData.title;
      this.editTicketForm.description = this.ticketData.description;
    }
  }

  public openModal(content: any) {
    this.modalService.open(content)
  }

  getTicketNumber(): number {
    return 1;
  }

  public onSubmit(): void {
    const ticketModel: TicketModel = new TicketModel(
      this.editTicketForm.title,
      this.getTicketNumber(),
      "To Do",
      this.dashboardService.activeDashboardId || '',
      this.columnId,
      this.editTicketForm.description,
      []
    )

    this.ticketService.createTicket(ticketModel).subscribe(
      (ticket) => {
        // this.columnService.addTicket(ticket.result);
      }, (err) => console.log('error encore', err)
    );
  }
}
