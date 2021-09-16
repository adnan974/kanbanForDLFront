import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanPageComponent } from './pages/kanban-page/kanban-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { KanbanRoutingModule } from './kanban-routing.module';



@NgModule({
  declarations: [
    KanbanPageComponent,
  ],
  imports: [
    CommonModule,
    KanbanRoutingModule,
    SharedModule,
  ]
})
export class KanbanModule { }
