import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KanbanColumnComponent } from './kanban-column/kanban-column.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SettingsComponent } from './settings/settings.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TicketComponent } from './ticket/ticket.component';
import { EditTicketModalComponent } from './edit-ticket-modal/edit-ticket-modal.component';
import { CoreModule } from 'src/app/core/core.module';
import { MatDividerModule } from '@angular/material/divider'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationComponent } from './notification/notification.component';
import { ManageColumnModalComponent } from './manage-column-modal/manage-column-modal.component';
import {MatBadgeModule} from '@angular/material/badge'; 
import { RouterModule } from '@angular/router';
import { CreateDashboardModalComponent } from './create-dashboard-modal/create-dashboard-modal.component';
import { DeleteDashboardModalComponent } from './delete-dashboard-modal/delete-dashboard-modal.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Edit1TicketModalComponent } from './edit1-ticket-modal/edit1-ticket-modal.component';


@NgModule({
  declarations: [
    SettingsComponent,
    SearchBarComponent,
    NavbarComponent,
    KanbanColumnComponent,
    DashboardComponent,
    TicketComponent,
    EditTicketModalComponent,
    ManageColumnModalComponent,
    NotificationComponent,
    Edit1TicketModalComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    DragDropModule,
    CoreModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatBadgeModule,
    RouterModule,
    FormsModule,
    MatSnackBarModule
    
    ],
  exports: [
    SettingsComponent,
    SearchBarComponent,
    NavbarComponent,
    KanbanColumnComponent,
    DashboardComponent,
    FormsModule

    
  ],
})

export class ComponentsModule { }
