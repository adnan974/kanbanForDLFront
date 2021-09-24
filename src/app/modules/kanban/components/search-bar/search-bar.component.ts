import { Component,  OnInit } from '@angular/core';
import { NotificationService } from 'src/app/core/services/notification.service';
import { UserStoreService } from 'src/app/core/services/userStore.service';
import { Notification } from 'src/app/shared/models/notification.model';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  public userInfos!:User;
  public notificationsInfos:Notification[] = [];

  constructor(
    private userStoreService:UserStoreService,
    private notificationService:NotificationService
  ) { }

  ngOnInit(): void {
    this.userInfos = this.userStoreService.userInfos;

    this.notificationService.getUserNotifications()
    .subscribe((notifs:any)=>{

      console.log(notifs)
      this.notificationsInfos = notifs.notifications

      console.log(this.notificationsInfos)
    })
  }

}
