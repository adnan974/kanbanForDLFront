import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { HelpPageComponent } from './pages/help-page/help-page.component';
import { KanbanPageComponent } from './pages/kanban-page/kanban-page.component';

const routes: Routes = [
  {
    path: '',
    component: KanbanPageComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'help',
        component: HelpPageComponent
      },
      {
        path: 'faq',
        component: FaqPageComponent
      }
      
    ]
  },
  {
    path: 'ch',
    component: DashboardComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})

export class KanbanRoutingModule { }