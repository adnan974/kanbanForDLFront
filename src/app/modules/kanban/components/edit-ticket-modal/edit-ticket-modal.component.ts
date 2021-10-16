import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
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
  public editTicketForm: FormGroup = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    labels: new FormControl()
  });

  @Input() columnId: string = '';
  @Input() iconType: 'add' | 'edit' = 'add';
  @Input() ticketData: any = 'default';

  constructor(
    private modalService: NgbModal,
    private dashboardService: DashboardService,
    private ticketService: TicketService,
    private columnService: ColumnService
  ) {}

  ngOnInit() {
  }

  public openModal(content: any) {
    this.modalService.open(content)
  }

  getTicketNumber(): number {
    return 1;
  }

  public onSubmit(): void {
    const ticketModel: TicketModel = new TicketModel(
      this.editTicketForm.get('title')?.value,
      this.getTicketNumber(),
      "To Do",
      this.dashboardService.activeDashboardId || '',
      this.columnId,
      this.editTicketForm.get('description')?.value,
      []
    )


    this.ticketService.createTicket(ticketModel).subscribe(
      (ticket) => {
        this.columnService.addTicket(ticket.result);
      }, (err) => console.log('error encore', err)
    );
  }
}
