import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/core/services/ticket.service';
import { ColumnService } from 'src/app/core/services/column.service';
import { DashboardService } from 'src/app/core/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  public isLoading: boolean = true;
  private defaultColumns: any[] = [
    "To do", "In progress", "Closed"
  ];
  
  constructor(
    public ticketService: TicketService,
    public columnService: ColumnService,
    public dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.dashboardService.getDashboardById().subscribe(_ => {
      
      this.ticketService.getUserTickets().subscribe(data => {
        this.ticketService.ticketList = data.tickets;
        
        this.columnService.getColumn().subscribe(_columnList => {
          this.columnService.columnList = _columnList.result;
          
          // Create default column
          if(_columnList.result.length === 0) {
            this.defaultColumns.map(column => this.columnService.postColumn({ title: column }).subscribe(res => {
              this.columnService.columnList = [...this.columnService.columnList, column];
            }));
          }
        });
      })

      this.isLoading = false;
    })
  }

}
