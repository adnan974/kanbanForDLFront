import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserStoreService } from 'src/app/core/services/userStore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public emailValue: string="test2@test.com";
  public passwordValue: string="test";

  public formIsInvalidAfterSubmit = false

  constructor(
    private authService: AuthService,
    private router: Router,
    private userStoreService: UserStoreService
  ) { }

  onSubmit(formData: any) {
    console.log(formData);
    if (formData.form.valid) {

      this.formIsInvalidAfterSubmit = false;

      this.authService.login(formData.value)
        .subscribe(res => {

          localStorage.setItem('jwt', res.token);

          this.router.navigate(['']);

          this.userStoreService.storePayloadInfos();

          //Todo : a modifier, faudrait-il ajouter des infos dans le payload plutot ?
          this.userStoreService.userInfos.firstName = res.message.firstName;
          this.userStoreService.userInfos.lastName = res.message.lastName;


          this.userStoreService.isLogged = true;

        }, error => {
          this.formIsInvalidAfterSubmit = true;
        })
    } else {
      this.formIsInvalidAfterSubmit = true;
    }

  }
}
