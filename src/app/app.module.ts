import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { KanbanPageComponent } from './kanban-page/kanban-page.component';
import { SettingPageComponent } from './setting-page/setting-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    AppLayoutComponent,
    KanbanPageComponent,
    SettingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
