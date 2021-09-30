import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanPageComponent } from './pages/kanban-page/kanban-page.component';
import { KanbanRoutingModule } from './kanban-routing.module';
import { PageLayoutComponent } from './pages/page-layout/page-layout.component';
import { ComponentsModule } from './components/components.module';
import { CoreModule } from 'src/app/core/core.module';
import { HelpPageComponent } from './pages/help-page/help-page.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { DashboardsPageComponent } from './pages/dashboards-page/dashboards-page.component';
import {MatCardModule} from '@angular/material/card'; 
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    KanbanPageComponent,
    PageLayoutComponent,
    HelpPageComponent,
    FaqPageComponent,
    DashboardsPageComponent,
  ],
  imports: [
    CommonModule,
    KanbanRoutingModule,
    ComponentsModule,
    CoreModule,
    MatCardModule,
    MatIconModule
    ]
})

export class KanbanModule { }
