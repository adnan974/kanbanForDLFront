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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    SettingsComponent,
    SearchBarComponent,
    NavbarComponent,
    KanbanColumnComponent,
    DashboardComponent,
    TicketComponent,
    EditTicketModalComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    DragDropModule,
    CoreModule
    ],
  exports: [
    SettingsComponent,
    SearchBarComponent,
    NavbarComponent,
    KanbanColumnComponent,
    DashboardComponent,
  ],
})

export class ComponentsModule { }
