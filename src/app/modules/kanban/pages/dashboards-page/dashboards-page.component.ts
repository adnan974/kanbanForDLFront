import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/core/services/dashboard.service';
import { Dashboard } from 'src/app/shared/models/dashboard.model';

@Component({
  selector: 'app-dashboards-page',
  templateUrl: './dashboards-page.component.html',
  styleUrls: ['./dashboards-page.component.scss']
})
export class DashboardsPageComponent implements OnInit {

  public dashboardsData: Dashboard[] = []

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.dashboardService.getUserDashboards()
      .subscribe((res) => {
        this.dashboardsData = res.dashboards;
      })
  }

  public onDashboardSelection(_id: string) {
    this.dashboardService.activeDashboardId = _id;
  }
}
