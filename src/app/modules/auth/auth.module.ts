import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
    FormsModule,
    CoreModule
  ],
})
export class AuthModule { }
