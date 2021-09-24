import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanPageComponent } from './pages/kanban-page/kanban-page.component';
import { KanbanRoutingModule } from './kanban-routing.module';
import { PageLayoutComponent } from './pages/page-layout/page-layout.component';
import { ComponentsModule } from './components/components.module';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    KanbanPageComponent,
    PageLayoutComponent
  ],
  imports: [
    CommonModule,
    KanbanRoutingModule,
    ComponentsModule,
    CoreModule
  ]
})

export class KanbanModule { }
