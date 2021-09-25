import { Component, Input, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Notification } from 'src/app/shared/models/notification.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  @Input() notificationsInfos!:Notification[];

  constructor(
    private notificationService:NotificationService,
  ) { }

  ngOnInit(): void {

    this.notificationService.getUserNotifications()
    .subscribe((notifs:any)=>{

      this.notificationsInfos = notifs.notifications

    })

    console.log(this.notificationsInfos)
  }

  deleteNotification(notificationId:string){
    
    console.log("delete notif: "+notificationId);
    this.notificationService.deleteNotification(notificationId)
    .subscribe(res=>{

    },err=>{
      console.log(err);
    })
    
  }

  unReadNotification(notificationId:string){
    this.notificationService.unReadNotification(notificationId)
    .subscribe(res=>{

    },err=>{
      console.log(err);
    })
  }
}
