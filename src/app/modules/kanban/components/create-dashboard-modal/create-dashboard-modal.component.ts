import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { Dashboard } from 'src/app/shared/models/dashboard.model';

@Component({
  selector: 'app-create-dashboard-modal',
  templateUrl: './create-dashboard-modal.component.html',
  styleUrls: ['./create-dashboard-modal.component.scss']
})
export class CreateDashboardModalComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private dashboardService:DashboardService
    ) {}

  public newDashboard:Partial<Dashboard>={
    title:"",
    description:""
  };

  ngOnInit(){

  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
   
  onSubmit(){
    this.dashboardService.createDashboard(this.newDashboard)
    .subscribe(dashboard=>{
      this.modalService.dismissAll();
    })
  }
}
