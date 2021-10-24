import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { Dashboard } from 'src/app/shared/models/dashboard.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ColumnService } from 'src/app/core/services/column.service';

@Component({
  selector: 'app-create-dashboard-modal',
  templateUrl: './create-dashboard-modal.component.html',
  styleUrls: ['./create-dashboard-modal.component.scss']
})
export class CreateDashboardModalComponent {

  @Output() newDashboardEvent = new EventEmitter<Partial<Dashboard>>();
  
  public isSubmitted:boolean = false;
  private defaultColumns: any[] = [
    "To do", "In progress", "Closed"
  ];

  constructor(
    private modalService: NgbModal,
    private dashboardService: DashboardService,
    private snackbar: MatSnackBar,
    private columnService: ColumnService
  ) {}

  public newDashboard:Partial<Dashboard>={
    title:"",
    description:""
  };

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
      console.log(res.result._id);
      this.newDashboardEvent.emit(res.result);
      this.snackbar.open("Dashboard created !","Ok",{duration:2000});
      this.modalService.dismissAll();

      this.defaultColumns.map(column => this.columnService.postColumn({ title: column }, res.result._id).subscribe());
    })
  }


}
