import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Register } from 'src/app/shared/models/register.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerData:Register = new Register();


  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){

    this.authService.register(this.registerData)
    .subscribe(res=>{
      this.router.navigate(['/auth/login']);
    })
  }

}
