import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    NavbarComponent,
    PageLayoutComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    PageLayoutComponent,
    CommonModule,
  ]
})
export class SharedModule { }
