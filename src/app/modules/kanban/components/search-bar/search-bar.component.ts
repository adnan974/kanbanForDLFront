import { Component,  OnInit } from '@angular/core';
import { UserStoreService } from 'src/app/core/services/userStore.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  public userInfos!:User;

  constructor(
    private userStoreService:UserStoreService
  ) { }

  ngOnInit(): void {
    this.userInfos = this.userStoreService.userInfos;
    console.log(this.userInfos)

  }

}
