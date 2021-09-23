import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formIsInvalidAfterSubmit = false

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formData: any) {

    if (formData.form.valid) {

      this.formIsInvalidAfterSubmit = false;

      this.authService.login(formData.value)
        .subscribe(res => {

          localStorage.setItem('jwt', res.token);
          this.router.navigate(['']);

        }, error => {
          this.formIsInvalidAfterSubmit = true;
        })
    } else {
      this.formIsInvalidAfterSubmit = true;
    }

  }
}
