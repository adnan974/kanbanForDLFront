import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { TicketService } from './services/ticket.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotificationService } from './services/notification.service';
import { ColumnService } from './services/column.service';
import { DashboardService } from './services/dashboard.service';
import { AutofocusDirective } from '../shared/directives/autof-focus-directive.directive';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AutofocusDirective],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    
  ],
  providers:[
    AuthService,
    TicketService,
    NotificationService,
    ColumnService,
    DashboardService
  ],
  exports:[NgbModule,AutofocusDirective]
})
export class CoreModule { }
