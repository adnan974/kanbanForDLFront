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
    console.log("dashboard on init")
    this.dashboardService.getDashboardById().subscribe(_ => {
      this.columnService.getColumn().subscribe(_columnList => {
        console.log(_columnList)
        this.ticketService.getUserTickets().subscribe(data => {
          this.ticketService.ticketList = data;
          this.columnService.sortTickets(_columnList.result, data.tickets);
          // TODO: A Ranger
          this.columnService.columnList.forEach((element)=>{
            element.columnProperties.isEditable = false;
          })


        });
      })

      this.isLoading = false;
    })
  }

}
