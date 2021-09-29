import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/core/services/ticket.service';
import * as _ from 'lodash';
import { TicketModel } from 'src/app/shared/models/ticket.model';
import { ColumnService } from 'src/app/core/services/column.service';
import { DashboardService } from 'src/app/core/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  public isLoading: boolean = true;
  
  constructor(
    public ticketService: TicketService,
    public columnService: ColumnService,
    public dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.dashboardService.getDashboardById().subscribe(_ => {
      this.columnService.getColumn().subscribe(_columnList => {
        this.columnService.columnList = _columnList.result;
      })

      this.isLoading = false;
    })
  }

}
