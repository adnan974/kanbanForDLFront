import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { TicketService } from './services/ticket.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotificationService } from './services/notification.service';
import { ColumnService } from './services/column.service';
import { DashboardService } from './services/dashboard.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule
  ],
  providers:[
    AuthService,
    TicketService,
    NotificationService,
    ColumnService,
    DashboardService
  ],
  exports:[NgbModule]
})
export class CoreModule { }
