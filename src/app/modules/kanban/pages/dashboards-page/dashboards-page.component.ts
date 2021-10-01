import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { Dashboard } from 'src/app/shared/models/dashboard.model';

@Component({
  selector: 'app-dashboards-page',
  templateUrl: './dashboards-page.component.html',
  styleUrls: ['./dashboards-page.component.scss']
})
export class DashboardsPageComponent implements OnInit {

  public dashboardsData:any =[]

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.dashboardService.getUserDashboards()
      .subscribe((res:any) => {
        res.dashboards.forEach((dashboard:any) => {
          dashboard.isTitleEditable = false,
          dashboard.isDescriptionEditable = false,

          this.dashboardsData.push(dashboard);
          console.log(this.dashboardsData)
        });
      })
  }

  public onDashboardSelection(_id: string) {
    this.dashboardService.activeDashboardId = _id;
  }

  changeTitleState(state:boolean,id:string){
    const index = this.dashboardsData.findIndex((dashboard:any) => dashboard._id == id);
    this.dashboardsData[index].isTitleEditable = state
  }

  updateTitle(dashboardId:string,newTitle:string){
    
    let dashboard:Partial<Dashboard>= {
      title:newTitle
    }
    
    this.dashboardService.updateDashboard(dashboardId,dashboard)
    .subscribe(res=>{
      console.log(res);
    },error=>{
      console.log(error);
    });
  }

  updateDescription(dashboardId:string,target:any){

    let dashboard:Partial<Dashboard>= {
      description:target.innerHTML
    }

    this.dashboardService.updateDashboard(dashboardId,dashboard)
    .subscribe(res=>{
      console.log(res);
    },error=>{
      console.log(error);
    });
  }

  
}
