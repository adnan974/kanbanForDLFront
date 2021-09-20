import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KanbanColumnComponent } from './kanban-column/kanban-column.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SettingsComponent } from './settings/settings.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    SettingsComponent,
    SearchBarComponent,
    NavbarComponent,
    KanbanColumnComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    DragDropModule
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
