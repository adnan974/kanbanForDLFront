import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { Dashboard } from 'src/app/shared/models/dashboard.model';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-dashboard-modal',
  templateUrl: './create-dashboard-modal.component.html',
  styleUrls: ['./create-dashboard-modal.component.scss']
})
export class CreateDashboardModalComponent implements OnInit {

  @Output() newDashboardEvent = new EventEmitter<Partial<Dashboard>>();
  public isSubmitted:boolean = false;

  constructor(
    private modalService: NgbModal,
    private dashboardService:DashboardService,
    private snackbar:MatSnackBar
    ) {}

  public newDashboard:Partial<Dashboard>={
    title:"",
    description:""
  };

  ngOnInit(){

  }

  open(content:any) {
    this.isSubmitted = false;
    this.newDashboard.title = ""
    this.newDashboard.description = ""
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
   
  onSubmit(){
    this.isSubmitted = true;
    this.dashboardService.createDashboard(this.newDashboard)
    .subscribe(res=>{
      this.newDashboardEvent.emit(res.result);
      this.snackbar.open("Dashboard created !","Ok",{duration:2000});
      this.modalService.dismissAll();

    })
  }


}
