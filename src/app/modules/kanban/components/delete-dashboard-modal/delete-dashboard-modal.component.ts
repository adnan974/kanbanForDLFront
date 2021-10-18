import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-delete-dashboard-modal',
  templateUrl: './delete-dashboard-modal.component.html',
  styleUrls: ['./delete-dashboard-modal.component.scss']
})
export class DeleteDashboardModalComponent implements OnInit {

  @Input() dashboardId!:string;
  @Output() deleteDashboardEvent = new EventEmitter<string>();


  constructor(
    private modalService:NgbModal,
    private dashboardService:DashboardService,
    private matSnackBar:MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  deleteDashboard(){

    this.dashboardService.deleteDashboard(this.dashboardId)
    .subscribe((res)=>{
      this.deleteDashboardEvent.emit(this.dashboardId);
      this.modalService.dismissAll();
      this.matSnackBar.open("Dashboard deleted","ok",{duration:1000});
    })
  }

}
