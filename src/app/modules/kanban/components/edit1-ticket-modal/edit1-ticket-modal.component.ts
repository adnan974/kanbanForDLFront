import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit1-ticket-modal',
  templateUrl: './edit1-ticket-modal.component.html',
  styleUrls: ['./edit1-ticket-modal.component.scss']
})
export class Edit1TicketModalComponent implements OnInit {

  constructor(
    private modalService:NgbModal
  ) { }

  ngOnInit(): void {
  }

  openModal(content:any){
    this.modalService.open(content)
  }
}
