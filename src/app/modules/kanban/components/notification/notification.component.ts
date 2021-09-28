import { Component, Input, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Notification } from 'src/app/shared/models/notification.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  public notificationsInfos: Notification[] = [];
  public numberOfUnreadNotifications:number = 0;

  constructor(
    private notificationService: NotificationService,
  ) { }

  ngOnInit(): void {

    this.notificationService.getUserNotifications()
      .subscribe((notifs: any) => {

        this.notificationsInfos = notifs.notifications.filter((notif: Notification) => notif.status != "Deleted")

        // On trie les notifs par odre croissant de creation
        this.notificationsInfos = this.notificationsInfos.reverse()

        this.numberOfUnreadNotifications = this.calculNotificationWithUnreadStatus()

      })


  }

  calculNotificationWithUnreadStatus(){
    let count:number = 0

    this.notificationsInfos.forEach(notification=>{
      if (notification.status == "Unread") count ++;
    })

    return count;
  }

  deleteNotification(notification: Notification) {

    const notifIndex = this.notificationsInfos.findIndex(notif => notif._id == notification._id)
    this.notificationsInfos.splice(notifIndex,1)

    this.numberOfUnreadNotifications = this.calculNotificationWithUnreadStatus()

    this.notificationService.deleteNotification(notification._id)
      .subscribe(res => {

      }, err => {
        console.log(err);
      })

  }

  readNotification(notification: Notification) {

    const notifIndex = this.notificationsInfos.findIndex(notif => notif._id == notification._id)
    notification.status = "Read"
    this.notificationsInfos[notifIndex] = notification

    this.numberOfUnreadNotifications = this.calculNotificationWithUnreadStatus()

    this.notificationService.unReadNotification(notification._id)
      .subscribe(res => {


      }, err => {
        console.log(err);
      })
  }
}
